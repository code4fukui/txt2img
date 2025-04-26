import { fetchImage, SIZE_SQUARE } from "./fetchImage.js";

if (Deno.args.length == 0) {
  console.log("txt2imgs [prompt]");
  Deno.exit(1);
}

const base = Deno.args[0];

// https://lp.ai-copywriter.jp/library/dall-e2-prompt
const ver = [
  "Digital art of",
  "3D render of",
  "Oil painting of",
  "Pencil and watercolor drawing of",
  "One-line drawing of",
  "Crayon drawing of",
  "Ukiyo-e painting of",
  "Stained glass window depicting",
  "Photo of",
  "Cartoon of",
  "Van Gogh style painting of",
  "Pastel drawing of",
  "Comic book cover of",
  "Abstract visual of",
  "Bauhaus style painting of",
  "Hand drawn sketch of",
  "High quality photo of",
];

const size = SIZE_SQUARE;
for (const v of ver) {
  const prompt = v + " " + base;
  const fn = prompt.replace(/ /g, "_") + ".png";
  try {
    await Deno.readFile(fn);
    continue;
  } catch (e) {
  }
  console.log(prompt);
  const bin = await fetchImage(prompt, { size });
  await Deno.writeFile(fn, bin);
}
