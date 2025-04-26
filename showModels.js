import { fetchAPI } from "./fetchAPI.js";

const url = "https://api.openai.com/v1/models";
const res = await fetchAPI(url);
const imgs = res.data.filter(i => i.id.indexOf("dall-e") >= 0 || i.id.indexOf("image") >= 0);
console.log(imgs);

