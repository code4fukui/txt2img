//import { fetchAPI } from "https://code4fukui.github.io/ai_chat/openai.js";
import { fetchAPI } from "./fetchAPI.js";
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

const SIZE_S = "256x256";
const SIZE_M = "512x512";
const SIZE_L = "1024x1024";
export const SIZES = [SIZE_S, SIZE_M, SIZE_L];

// The maximum length is 1000 characters for dall-e-2 and 4000 characters for dall-e-3

export const fetchImage = async (prompt, size = SIZE_L, model) => {
  const url = "https://api.openai.com/v1/images/generations";
  const n = 1;
  model ||= "dall-e-3";
  const response_format = "b64_json";
  const req = { prompt, model, n, size, response_format };
  const res = await fetchAPI(url, req);
  // { created: time, data: [{ "b64_json": data }]}
  const png = Base64.decode(res.data[0].b64_json);
  return png;
};
