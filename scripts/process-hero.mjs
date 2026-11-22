import sharp from "sharp";

(async () => {
  // Mobile: 768x1344 -> crop to 768x1181 (aspect 0.65 matches hero container aspect 13/20), keep top
  await sharp("/tmp/hero-mobile-ext.png")
    .extract({ left: 0, top: 0, width: 768, height: 1181 })
    .webp({ quality: 84 })
    .toFile("public/assets/hero-akita-mobile-v4.webp");
  const m = await sharp("public/assets/hero-akita-mobile-v4.webp").metadata();
  console.log("mobile:", m.width + "x" + m.height);

  // Desktop: 1344x768 -> upscale to 1920x1097 for retina-ish sharpness
  await sharp("/tmp/hero-desktop-ext.png")
    .resize(1920, 1097, { kernel: "lanczos3" })
    .webp({ quality: 82 })
    .toFile("public/assets/hero-akita-v5.webp");
  const d = await sharp("public/assets/hero-akita-v5.webp").metadata();
  console.log("desktop:", d.width + "x" + d.height);
})();
