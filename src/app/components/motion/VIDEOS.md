# Project videos

Encodes live in `public/videos/` and are served as-is at `/videos/...` (Vite
copies `public/` into `dist/` untouched — which is also why this file sits here
in `src/` rather than next to them, so it isn't published). Reference them from
`motionData.tsx` with a root-relative path — `src: "/videos/appnigma-ai.mp4"`.

Masters are **not** kept in the repo. Only the web-sized encode and its poster
live here, because `dist/` is committed and every megabyte lands in git twice.

## Adding a video

Encode to 1080p H.264 with AAC audio and a fast-start header so it streams
instead of downloading in full before the first frame:

```bash
ffmpeg -i "MASTER.mp4" \
  -vf "scale=1920:-2" -c:v libx264 -profile:v high -crf 23 -preset slow -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart \
  public/videos/NAME.mp4
```

Then a poster frame. `thumbnail=300` picks a representative frame from the clip
rather than whatever happens to sit at t=0, which is often a black fade-in.
ffmpeg on this machine has no webp encoder, so go via PNG and `cwebp`:

```bash
ffmpeg -i "MASTER.mp4" -vf "thumbnail=300,scale=1920:-2" -frames:v 1 /tmp/poster.png
cwebp -q 82 /tmp/poster.png -o public/videos/NAME-poster.webp
```

Set `duration` in `motionData.tsx` by hand — it shows on the card until playback
starts, after which the native controls take over.

## Current files

| File | Source | Size |
| --- | --- | --- |
| `appnigma-ai.mp4` | `Final Video 4k + wav + audio update.mp4` (3840×2160, 33MB) | 3.0MB |
| `appnigma-ai-poster.webp` | frame from the same master | 36KB |
