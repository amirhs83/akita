import sharp from "sharp";

const HERO_SRC = "/home/z/my-project/upload/pasted_image_1795367162658.png";
const AI_DESKTOP = "/tmp/hero-desktop-ai.png";
const OUT = "/home/z/my-project/public/assets";

function featherMask(w, h, f, edges) {
  const m = Buffer.alloc(w * h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let d = Infinity;
      if (edges.left) d = Math.min(d, x);
      if (edges.right) d = Math.min(d, w - 1 - x);
      if (edges.top) d = Math.min(d, y);
      if (edges.bottom) d = Math.min(d, h - 1 - y);
      m[y * w + x] = Math.max(0, Math.min(255, Math.round((d / f) * 255)));
    }
  }
  return m;
}

async function maskedPng(input, w, h, f, edges) {
  const mask = featherMask(w, h, f, edges);
  return sharp(input)
    .resize(w, h, { fit: "fill" })
    .removeAlpha()
    .joinChannel(mask, { raw: { width: w, height: h, channels: 1 } })
    .png()
    .toBuffer();
}

// ---------- MOBILE: 768x1181 (aspect 13/20) ----------
// Complete dog (paws + floor visible) in the lower half; clean yellow background
// above keeps the hero text readable. Side/top fills come from the photo's own
// clean edge strips, aligned to the same vertical gradient scale (no seams).
{
  const W = 768, H = 1181, S = 650, F = 80;
  const L = 59, T = 560; // dog piece position (centered)

  const piece = async (region, outW, outH, f, edges, blur = 0) => {
    let p = sharp(HERO_SRC).extract(region).resize(outW, outH, { fit: "fill" });
    if (blur > 0) p = p.blur(blur);
    const buf = await p.png().toBuffer();
    return maskedPng(buf, outW, outH, f, edges);
  };

  const topFill = await piece({ left: 0, top: 0, width: 1232, height: 22 }, W, T + F, F, { bottom: true }, 8);
  // Side strips keep the SAME vertical scale as the dog piece (650 tall) so the
  // wall/floor gradient lines up perfectly at the seams.
  const leftFill = await piece({ left: 0, top: 0, width: 60, height: 1232 }, L + F, S, F, { right: true });
  const rightFill = await piece({ left: 1172, top: 0, width: 60, height: 1232 }, W - (L + S) + F, S, F, { left: true });
  const dog = await piece({ left: 0, top: 0, width: 1232, height: 1232 }, S, S, F, {
    left: true, right: true, top: true, bottom: false,
  });

  await sharp({ create: { width: W, height: H, channels: 3, background: "#E8A93C" } })
    .composite([
      { input: leftFill, top: T, left: 0 },
      { input: rightFill, top: T, left: L + S - F },
      { input: topFill, top: 0, left: 0 },
      { input: dog, top: T, left: L },
    ])
    .webp({ quality: 84 })
    .toFile(`${OUT}/hero-akita-mobile-v5.webp`);

  console.log("mobile hero written");
}

// ---------- DESKTOP: AI outpaint 1344x768 -> recompose -> 1920x1097 ----------
// Shift the dog left so it stays visible on tablets (object-left-top crop) and
// only the tail edge sits behind the frosted trust card. Right margin re-filled
// from the AI banner's own clean right edge, then lanczos upscale.
{
  const SHIFT = 220, W = 1344, H = 768, F = 70;

  const pieceBuf = await sharp(AI_DESKTOP).extract({ left: SHIFT, top: 0, width: W - SHIFT, height: H }).png().toBuffer();
  const rightFill = await sharp(AI_DESKTOP)
    .extract({ left: W - 24, top: 0, width: 24, height: H })
    .resize(W - (W - SHIFT) + F, H, { fit: "fill" })
    .blur(6)
    .png()
    .toBuffer();
  const rightFillMasked = await maskedPng(rightFill, W - (W - SHIFT) + F, H, F, { left: true });

  const composed = await sharp({ create: { width: W, height: H, channels: 3, background: "#E8A93C" } })
    .composite([
      { input: rightFillMasked, top: 0, left: W - SHIFT - F },
      { input: pieceBuf, top: 0, left: 0 },
    ])
    .png()
    .toBuffer();

  await sharp(composed)
    .resize(1920, 1097, { kernel: "lanczos3" })
    .webp({ quality: 84 })
    .toFile(`${OUT}/hero-akita-v6.webp`);

  console.log("desktop hero written");
}

// ---------- LOGO: overwrite shared header/footer logo ----------
{
  await sharp("/home/z/my-project/upload/pasted_image_1795367262842.png")
    .resize(256, 256, { kernel: "lanczos3" })
    .webp({ quality: 92 })
    .toFile(`${OUT}/akitaclub-logo.webp`);
  console.log("logo written");
}
