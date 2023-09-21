import { getEnv } from "https://code4fukui.github.io/ai_chat/getEnv.js";

const KEY = await getEnv("OPENAI_API_KEY");

// https://platform.openai.com/docs/api-reference/chat/create

export const fetchAPI = async (url, req) => {
  const opt = {
    method: req ? "POST" : "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + KEY,
    },
    body: req ? JSON.stringify(req) : undefined,
  };
  const res = await (await fetch(url, opt)).json();
  return res;
};