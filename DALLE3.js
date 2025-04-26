import { fetchImage } from "./fetchImage.js";

export const createImage = async (prompt, size = SIZE_L) => {
  return await fetchImage(prompt, { size, model: "dall-e-3" });
};
