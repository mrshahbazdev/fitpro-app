/* FitPro — on-demand Drive GIFs.
   First open: the GIF streams straight from Google Drive.
   In the background it is downloaded once and saved in IndexedDB,
   so the next open plays offline from the phone's storage. */
(function () {
  var DB = 'fitpro-gifs', STORE = 'gifs';

  function openDb() {
    return new Promise(function (res, rej) {
      var r = indexedDB.open(DB, 1);
      r.onupgradeneeded = function () { r.result.createObjectStore(STORE); };
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error); };
    });
  }
  function gifGet(id) {
    return openDb().then(function (d) {
      return new Promise(function (res) {
        var q = d.transaction(STORE).objectStore(STORE).get(id);
        q.onsuccess = function () { res(q.result || null); };
        q.onerror = function () { res(null); };
      });
    }).catch(function () { return null; });
  }
  function gifPut(id, blob) {
    return openDb().then(function (d) {
      return new Promise(function (res) {
        var q = d.transaction(STORE, 'readwrite').objectStore(STORE).put(blob, id);
        q.onsuccess = function () { res(true); };
        q.onerror = function () { res(false); };
      });
    }).catch(function () { return false; });
  }

  window.driveGifUrl = function (id) {
    var fid = (window.DRIVE_GIFS || {})[id];
    return fid ? 'https://drive.usercontent.google.com/download?id=' + fid + '&export=download' : null;
  };

  /* Swap in saved GIFs where present; download + save the rest in the background. */
  window.hydrateGifImgs = function () {
    document.querySelectorAll('img[data-gif]').forEach(function (img) {
      var id = img.getAttribute('data-gif');
      gifGet(id).then(function (blob) {
        if (blob) { img.src = URL.createObjectURL(blob); return; }
        var url = window.driveGifUrl(id);
        if (!url) return;
        fetch(url).then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.blob();
        }).then(function (b) { return gifPut(id, b); })
          .catch(function () { /* stays streaming from Drive; retried on next open */ });
      });
    });
  };
})();
