#!/usr/bin/env bash
# Transcodes the raw hero footage in media-src/video into a small, web-ready loop.
#
# It writes to public/video:
#   main-video.mp4   H.264 1280x720, no audio, faststart (universal fallback)
#   main-video.webm  VP9 1280x720, no audio (smaller, served first where supported)
#   main-video.jpg   poster frame, so the hero paints before the video arrives
#
# Usage: ./scripts/optimize-videos.sh
set -euo pipefail

cd "$(dirname "$0")/.."

SRC="media-src/video/main-video-repeat.mp4"
OUT_DIR="public/video"
SLUG="main-video"
WIDTH=1280
HEIGHT=720
POSTER_AT=0.5

if [ ! -f "$SRC" ]; then
  echo "missing $SRC" >&2
  exit 1
fi

# The source is already 16:9, so this only downscales. Keeping the source frame
# rate would double the bitrate for footage this slow; 24fps is what it was shot
# at, so pass it through untouched.
FILTER="scale=${WIDTH}:${HEIGHT}:flags=lanczos"

mkdir -p "$OUT_DIR"

echo "-> $SLUG.mp4"
# -an: the hero autoplays muted and loops, so the audio track is dead weight.
ffmpeg -v error -y -i "$SRC" \
  -vf "$FILTER" -an \
  -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -crf 26 -preset slow -g 48 -movflags +faststart \
  "$OUT_DIR/$SLUG.mp4"

echo "-> $SLUG.webm"
ffmpeg -v error -y -i "$SRC" \
  -vf "$FILTER" -an \
  -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -deadline good -cpu-used 3 \
  "$OUT_DIR/$SLUG.webm"

echo "-> $SLUG.jpg"
ffmpeg -v error -y -ss "$POSTER_AT" -i "$SRC" \
  -vf "$FILTER" -frames:v 1 -q:v 5 \
  "$OUT_DIR/$SLUG.jpg"

echo
ls -lh "$OUT_DIR"/"$SLUG".*
