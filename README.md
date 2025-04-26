# txt2img

txt2img by [GPT-Image-1, DALL-E-3 or DALL-E-2 - OpenAI](https://platform.openai.com/docs/api-reference/images/create)

## usage

make .env
```
OPENAI_API_KEY=****
```

### cli

create a single image
```sh
deno run -A https://code4fukui.github.io/txt2img/txt2img.js "koala wearing a strawberry hat"
```

create 17 variations of images
```sh
deno run -A https://code4fukui.github.io/txt2img/txt2imgs.js "koala wearing a strawberry hat"
```

### api

```js
import { fetchImage, SIZE_PORTRAIT } from "https://code4fukui.github.io/txt2img/fetchImage.js";

const prompt = "ランダムな画像";
const bin = await fetchImage(prompt, { size: SIZE_PORTRAIT });
await Deno.writeFile("image.png", bin);
```

## reference

- https://platform.openai.com/docs/api-reference/images/create
- https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1
- https://platform.openai.com/docs/models/gpt-image-1
