import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";

async function editImage(inputPath, prompt, size, outputPath) {
  const zai = await ZAI.create();
  const b64 = fs.readFileSync(inputPath).toString("base64");
  const dataUrl = `data:image/webp;base64,${b64}`;

  const response = await zai.images.generations.edit({
    prompt,
    images: [{ url: dataUrl }],
    size,
  });

  const out = response.data[0].base64;
  fs.writeFileSync(outputPath, Buffer.from(out, "base64"));
  console.log(`saved ${outputPath} (${Math.round(fs.statSync(outputPath).size / 1024)}KB)`);
}

const task = process.argv[2];
if (task === "mobile") {
  await editImage(
    "public/assets/hero-akita-mobile-v3.webp",
    "Outpaint and extend this exact photo vertically, making it taller. Keep the happy smiling man hugging his fluffy Akita dog EXACTLY unchanged - same faces, same expressions, same pose, same black t-shirt, same warm creamy blurred park background with soft bokeh. Naturally extend the background above the man's head and extend the dog and man's body below. Photorealistic, seamless extension, same lighting and colors.",
    "768x1344",
    "/tmp/hero-mobile-ext.png"
  );
} else if (task === "desktop") {
  await editImage(
    "public/assets/hero-akita-v4.webp",
    "Outpaint and extend this exact photo vertically, making it slightly taller. Keep the happy smiling man hugging his fluffy Akita dog EXACTLY unchanged - same faces, same expressions, same pose, same black t-shirt, same warm creamy blurred park background with soft bokeh. Naturally extend more background above the man's head and more of the dog and man's chest below. Photorealistic, seamless extension, same lighting and colors.",
    "1344x768",
    "/tmp/hero-desktop-ext.png"
  );
}
