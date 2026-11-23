import sharp from "sharp";

const SRC = "upload/pasted_image_1795454261200.jpg";
const WORDMARK = "upload/pasted_image_1795454287977.png";
const OUT = "public/assets/akitaclub-logo-v2.webp";

const meta = await sharp(SRC).metadata();

// 1) Find the badge circle: scan a downscaled grayscale copy for dark pixels
//    (the black ring + dark outlines are all inside the circle).
const scale = 0.2;
const w = Math.round(meta.width * scale);
const h = Math.round(meta.height * scale);
const { data, info } = await sharp(SRC)
  .resize(w, h)
  .grayscale()
  .raw()
  .toBuffer({ resolveWithObject: true });

let minX = w, minY = h, maxX = 0, maxY = 0;
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    if (data[y * info.width + x] < 110) {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
}

const bx = minX / scale;
const by = minY / scale;
const bw = (maxX - minX + 1) / scale;
const bh = (maxY - minY + 1) / scale;
const cx = bx + bw / 2;
const cy = by + bh / 2;
const r = Math.max(bw, bh) / 2;
console.log("badge bbox:", { bx: Math.round(bx), by: Math.round(by), bw: Math.round(bw), bh: Math.round(bh) });

// 2) Crop a square around the circle, resize, then punch out transparency
const size = Math.round(2 * r);
let left = Math.round(cx - r);
let top = Math.round(cy - r);
left = Math.max(0, Math.min(left, meta.width - size));
top = Math.max(0, Math.min(top, meta.height - size));
console.log("crop:", { left, top, size });

const SIZE = 320;
const circleMask = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}"><circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2 - 1}" fill="#fff"/></svg>`
);

await sharp(SRC)
  .extract({ left, top, width: size, height: size })
  .resize(SIZE, SIZE)
  .composite([{ input: circleMask, blend: "dest-in" }])
  .webp({ quality: 90, alphaQuality: 95 })
  .toFile(OUT);
console.log("saved", OUT);

// 3) Sample the wordmark colors: ".ir" orange and "AkitaClub" navy
const wm = sharp(WORDMARK);
const wmMeta = await wm.metadata();
const { data: wmData, info: wmInfo } = await wm.raw().toBuffer({ resolveWithObject: true });

function sample(xStart, xEnd, filter) {
  let rS = 0, gS = 0, bS = 0, n = 0;
  for (let y = 0; y < wmInfo.height; y++) {
    for (let x = xStart; x < xEnd; x++) {
      const i = (y * wmInfo.width + x) * wmInfo.channels;
      const R = wmData[i], G = wmData[i + 1], B = wmData[i + 2], A = wmData[i + 3];
      if (A < 200) continue;
      if (!filter(R, G, B)) continue;
      rS += R; gS += G; bS += B; n++;
    }
  }
  if (!n) return null;
  const toHex = (v) => Math.round(v).toString(16).padStart(2, "0");
  return `#${toHex(rS / n)}${toHex(gS / n)}${toHex(bS / n)} (n=${n})`;
}

const orange = sample(
  Math.round(wmInfo.width * 0.62),
  wmInfo.width,
  (R, G, B) => R > 180 && R - B > 60
);
const navy = sample(
  0,
  Math.round(wmInfo.width * 0.6),
  (R, G, B) => R + G + B < 330
);
console.log("wordmark .ir color:", orange);
console.log("wordmark AkitaClub color:", navy);
