import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";

const zai = await ZAI.create();
const b64 = fs.readFileSync("/home/z/my-project/upload/pasted_image_1795367162658.png").toString("base64");

const response = await zai.images.generations.edit({
  prompt:
    "Outpaint this exact photo into a wide landscape studio banner. Keep the Akita dog EXACTLY unchanged - same dog, same pose, same fur, same expression, same size and same position in frame (center-right). Extend ONLY the plain warm yellow-orange studio background wall to the left and to the right, and the smooth light yellow floor below. Perfectly seamless studio backdrop, identical lighting, identical colors, photorealistic, no new objects, no shadows other than the dog's own soft shadow.",
  images: [{ url: `data:image/png;base64,${b64}` }],
  size: "1344x768",
});

const out = response.data[0].base64;
fs.writeFileSync("/tmp/hero-desktop-ai.png", Buffer.from(out, "base64"));
console.log(`saved /tmp/hero-desktop-ai.png (${Math.round(fs.statSync("/tmp/hero-desktop-ai.png").size / 1024)}KB)`);
