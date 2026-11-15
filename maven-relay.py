#!/usr/bin/env python3
"""Local Maven relay: serves Maven Central artifacts to Gradle over plain
HTTP on localhost, fetching upstream via urllib (which works through the
egress proxy where Java's TLS stalls). Caches to disk."""
import os, sys, urllib.request, urllib.error
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote

UPSTREAM = "https://maven-central.storage-download.googleapis.com/maven2"
FALLBACK = "https://repo1.maven.org/maven2"
FALLBACK_GOOGLE = "https://dl.google.com/dl/android/maven2"
CACHE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "maven-cache")
PORT = 8899

class Relay(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        sys.stderr.write("[relay] " + fmt % args + "\n")

    def _serve(self, head_only=False):
        path = unquote(self.path)
        if not path.startswith("/maven2/"):
            self.send_response(404); self.end_headers(); return
        rel = path[len("/maven2/"):]
        if ".." in rel or rel.startswith("/"):
            self.send_response(400); self.end_headers(); return
        cache_path = os.path.join(CACHE_DIR, rel)
        data = None
        if os.path.isfile(cache_path):
            with open(cache_path, "rb") as f:
                data = f.read()
            self._respond(200, data, head_only)
            return
        url = UPSTREAM + "/" + rel
        req = urllib.request.Request(url, headers={"User-Agent": "Gradle-relay/1.0"}, method="HEAD" if head_only else "GET")
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                data = r.read() if not head_only else b""
                ctype = r.headers.get_content_type()
                if not head_only:
                    os.makedirs(os.path.dirname(cache_path), exist_ok=True)
                    with open(cache_path, "wb") as f:
                        f.write(data)
                self.send_response(200)
                self.send_header("Content-Type", ctype or "application/octet-stream")
                self.send_header("Content-Length", str(r.headers.get("Content-Length", len(data))))
                self.end_headers()
                if not head_only:
                    self.wfile.write(data)
        except urllib.error.HTTPError as e:
            if e.code == 404:
                # Fall back through repo1, then Google's Maven repo
                for base in (FALLBACK, FALLBACK_GOOGLE):
                    furl = base + "/" + rel
                    freq = urllib.request.Request(furl, headers={"User-Agent": "Gradle-relay/1.0"}, method="HEAD" if head_only else "GET")
                    try:
                        with urllib.request.urlopen(freq, timeout=120) as fr:
                            fdata = fr.read() if not head_only else b""
                            if not head_only:
                                os.makedirs(os.path.dirname(cache_path), exist_ok=True)
                                with open(cache_path, "wb") as f:
                                    f.write(fdata)
                            self.send_response(200)
                            self.send_header("Content-Type", fr.headers.get_content_type() or "application/octet-stream")
                            self.send_header("Content-Length", str(fr.headers.get("Content-Length", len(fdata))))
                            self.end_headers()
                            if not head_only:
                                self.wfile.write(fdata)
                            return
                    except urllib.error.HTTPError as fe:
                        if fe.code != 404:
                            sys.stderr.write(f"[relay] fallback {base} error for {rel}: {fe}\n")
                            break
                    except Exception as fe:
                        sys.stderr.write(f"[relay] fallback {base} error for {rel}: {fe}\n")
                        break
            self.send_response(e.code)
            self.send_header("Content-Length", "0")
            self.end_headers()
        except Exception as e:
            sys.stderr.write(f"[relay] upstream error for {rel}: {e}\n")
            self.send_response(502)
            self.send_header("Content-Length", "0")
            self.end_headers()

    def _respond(self, code, data, head_only):
        self.send_response(code)
        self.send_header("Content-Type", "application/octet-stream")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        if not head_only:
            self.wfile.write(data)

    def do_GET(self):
        self._serve(head_only=False)

    def do_HEAD(self):
        self._serve(head_only=True)

if __name__ == "__main__":
    os.makedirs(CACHE_DIR, exist_ok=True)
    srv = ThreadingHTTPServer(("127.0.0.1", PORT), Relay)
    sys.stderr.write(f"[relay] listening on 127.0.0.1:{PORT}, upstream {UPSTREAM}\n")
    srv.serve_forever()
