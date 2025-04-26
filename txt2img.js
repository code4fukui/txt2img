import { fetchImage, SIZE_PORTRAIT } from "./fetchImage.js";

if (Deno.args.length == 0) {
  console.log("txt2img [prompt]");
  Deno.exit(1);
}
const prompt = Deno.args[0];
const bin = await fetchImage(prompt, { size: SIZE_PORTRAIT });
await Deno.writeFile(prompt.replace(/ /g, "_") + ".png", bin);
