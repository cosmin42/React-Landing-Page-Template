#!/usr/bin/env bash
# Transcodes the raw stock footage in media-src/video into small, web-ready clips.
#
# For every entry below it writes to public/video/clips:
#   <slug>.mp4   H.264 960x540, no audio, faststart (universal fallback)
#   <slug>.webm  VP9 960x540, no audio (smaller, served first where supported)
#   <slug>.jpg   poster frame, so nothing downloads until the user asks for it
#
# Usage: ./scripts/optimize-videos.sh [slug ...]   (no slugs = rebuild everything)
set -euo pipefail

cd "$(dirname "$0")/.."

SRC_DIR="media-src/video"
OUT_DIR="public/video/clips"
WIDTH=960
HEIGHT=540

# slug|source file|poster timestamp (seconds)
CLIPS=(
  "vintage-photos|5674557-uhd_4096_2160_30fps.mp4|1"
  "generations|7118244-uhd_4096_2160_25fps.mp4|3"
  "family-walk|4267809-uhd_3840_2160_30fps.mp4|2"
  "photographer|15840023_3840_2160_50fps.mp4|2"
  "everyday-moments|15634348_1920_1080_30fps.mp4|2"
  "holiday-tree|5895288-uhd_3840_2160_30fps.mp4|5"
  "birthday|6666640-uhd_4096_2160_25fps.mp4|5"
  "pets|7802455-uhd_4096_2160_25fps.mp4|5"
  "kitchen|7818021-hd_1920_1080_24fps.mp4|5"
  "painting|13251449_1920_1080_50fps.mp4|4"
)

# Re-encoding all of the above takes minutes, so allow rebuilding just the
# slugs named on the command line.
wanted() {
  [ "$#" -eq 0 ] && return 0
  local slug="$1"
  shift
  for arg in "$@"; do
    [ "$arg" = "$slug" ] && return 0
  done
  return 1
}

# Centre-crop to 16:9 so every card in the grid has the same shape, then downscale.
FILTER="crop=ih*16/9:ih,scale=${WIDTH}:${HEIGHT}:flags=lanczos,fps=30"

mkdir -p "$OUT_DIR"

for entry in "${CLIPS[@]}"; do
  IFS='|' read -r slug src poster_at <<<"$entry"
  in="$SRC_DIR/$src"

  wanted "$slug" "$@" || continue

  if [ ! -f "$in" ]; then
    echo "skip $slug (missing $in)"
    continue
  fi

  echo "-> $slug"

  ffmpeg -v error -y -i "$in" \
    -vf "$FILTER" -an \
    -c:v libx264 -profile:v high -pix_fmt yuv420p \
    -crf 27 -preset slow -g 60 -movflags +faststart \
    "$OUT_DIR/$slug.mp4"

  ffmpeg -v error -y -i "$in" \
    -vf "$FILTER" -an \
    -c:v libvpx-vp9 -crf 36 -b:v 0 -row-mt 1 -deadline good -cpu-used 2 \
    "$OUT_DIR/$slug.webm"

  ffmpeg -v error -y -ss "$poster_at" -i "$in" \
    -vf "$FILTER" -frames:v 1 -q:v 6 \
    "$OUT_DIR/$slug.jpg"
done

echo
ls -lh "$OUT_DIR"
