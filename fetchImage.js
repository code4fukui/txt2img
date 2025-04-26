//import { fetchAPI } from "https://code4fukui.github.io/ai_chat/openai.js";
import { fetchAPI } from "./fetchAPI.js";
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

export const SIZE_S = "256x256";
export const SIZE_M = "512x512";
export const SIZE_L = "1024x1024";
export const SIZES = [SIZE_S, SIZE_M, SIZE_L];

export const QUALITY_LOW = "low";
export const QUALITY_MEDIUM = "medium";
export const QUALITY_HIGH = "high";
export const QUALITY_AUTO = "auto";
export const QUALITIES = [QUALITY_LOW, QUALITY_MEDIUM, QUALITY_HIGH, QUALITY_AUTO];

export const SIZE_SQUARE = "1024x1024"; // (square)
export const SIZE_LANDSCAPE = "1536x1024"; // (landscape)
export const SIZE_PORTRAIT = "1024x1536"; // (portrait)
export const SIZE_AUTO = "auto";

// The maximum length is 1000 characters for dall-e-2 and 4000 characters for dall-e-3

// https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1

export const fetchImage = async (prompt, opt = {}) => {
  const model = opt.model ?? "gpt-image-1";
  const url = "https://api.openai.com/v1/images/generations";
  if (model == "gpt-image-1") {
    //const format = opt.format ?? "webp"; // 未対応
    const quality = opt.quality ?? QUALITY_AUTO;
    const size = opt.size ?? SIZE_AUTO;
    const background = opt.background ?? undefined; // webp or png if transparent
    const req = {
      prompt,
      model,
      size,
      //format,
      quality,
      background
    };
    //console.log(req);
    const res = await fetchAPI(url, req);
    //console.log(res);
    const bin = Base64.decode(res.data[0].b64_json);
    return bin;
  } else {
    const size = opt.size ?? SIZE_L;
    const n = 1;
    const response_format = "b64_json";
    const req = { prompt, model, n, size, response_format };
    const res = await fetchAPI(url, req);
    //console.log(res);
    // { created: time, data: [{ "b64_json": data }]}
    const png = Base64.decode(res.data[0].b64_json);
    return png;
  }
};
