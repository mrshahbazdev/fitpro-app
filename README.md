# FitPro — Android fitness app

210 exercises with real video demos, search + muscle/equipment/difficulty
filters, grouped browsing, and a 12-exercise "Full Body Blast" guided workout.
Built with Capacitor 7 (web app in `www/`, native shell in `android/`).
Package: `com.fitpro.app`.

## How the videos work

Exercise GIFs are **not bundled** in the APK. They are hosted on Google
Drive and downloaded on demand: when the user opens an exercise, the GIF
streams and is saved to the phone (IndexedDB), so the next open plays
offline. `www/js/drive-gifs.js` (generated from the Drive manifest) maps
each exercise id to its Drive file id; `www/js/gif-cache.js` does the
caching. If a GIF is not on Drive yet, the exercise falls back to its
streamed video (Pexels / Mixkit) or a "no video yet" note.

## Build the debug APK

```bash
# 1. Sync the web app into the Android project (after any www/ change)
npx cap copy android

# 2. Start the local Maven relay (Gradle cannot reach Maven Central
#    directly from this VM; the relay runs on 127.0.0.1:8899)
nohup python3 maven-relay.py > maven-relay.log 2>&1 &
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8899/

# 3. Build
cd android && JAVA_HOME=/home/hatch/jdk-21 ANDROID_HOME=/home/hatch/Android/Sdk \
  GRADLE_USER_HOME=/home/hatch/.gradle \
  /home/hatch/gradle-8.11.1/bin/gradle assembleDebug \
  --no-daemon --console=plain --max-workers=1
```

Output: `android/app/build/outputs/apk/debug/app-debug.apk`

Notes:
- JDK 21 is required (JDK 17 also works for some tasks, but use 21).
- Never run `npm install` on the hosting server; build locally.
- `npx cap copy android` must run after every `www/` change.
