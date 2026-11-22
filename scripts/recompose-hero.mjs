import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";

const zai = await ZAI.create();
const b64 = fs.readFileSync("public/assets/hero-akita-mobile-v4.webp").toString("base64");

const response = await zai.images.generations.edit({
  prompt:
    "Zoom out and recompose this exact photo into a tall portrait: place the happy smiling man hugging his fluffy Akita dog in the UPPER 60% of the frame, with their faces fully visible in the upper third. The LOWER 40% of the frame must be clean empty background only - soft out-of-focus warm creamy park bokeh, smooth gradient, no people, no body parts, no objects, no text. Keep the man's face and the Akita dog's face EXACTLY identical to the input photo: same facial features, same smile, same head shape, same fur markings, same black t-shirt, same hugging pose. Warm golden natural lighting, photorealistic, professional hero composition with negative space at the bottom.",
  images: [{ url: `data:image/webp;base64,${b64}` }],
  size: "768x1344",
});

fs.writeFileSync("/tmp/hero-mobile-recompose.png", Buffer.from(response.data[0].base64, "base64"));
console.log("saved /tmp/hero-mobile-recompose.png");
