#!/bin/bash
# Convert the 24 bundled FitPro mp4s to looping GIFs (fps=10, 480px, lanczos, 2-pass palette)
cd ~/workspace/fitness-app/www/videos || exit 1
LOG=~/workspace/fitness-app/gif-convert.log
: > "$LOG"
for f in *.mp4; do
  base="${f%.mp4}"
  echo "=== $f ===" >> "$LOG"
  ffmpeg -y -v error -i "$f" -vf "fps=10,scale=480:-1:flags=lanczos,palettegen" "/tmp/palette-$base.png" 2>> "$LOG"
  ffmpeg -y -v error -i "$f" -i "/tmp/palette-$base.png" -lavfi "fps=10,scale=480:-1:flags=lanczos[x];[x][1:v]paletteuse" "$base.gif" 2>> "$LOG"
  rm -f "/tmp/palette-$base.png"
  echo "$base.gif: $(stat -c%s "$base.gif" 2>/dev/null) bytes (from $f: $(stat -c%s "$f") bytes)" >> "$LOG"
done
echo "DONE" >> "$LOG"
echo "TOTAL GIF bytes:" >> "$LOG"
du -cb *.gif | tail -1 >> "$LOG"
echo "TOTAL MP4 bytes:" >> "$LOG"
du -cb *.mp4 | tail -1 >> "$LOG"
