# txt2img

txt2img by [DALL-E-3 or DALL-E-2 / OpenAI](https://platform.openai.com/docs/api-reference/images/create)

## usage

make .env
```
OPENAI_API_KEY=****
```

create a single image
```sh
deno run -A https://code4fukui.github.io/txt2img/txt2img.js "koala wearing a strawberry hat"
```

create 17 variations of images
```sh
deno run -A https://code4fukui.github.io/txt2img/txt2img.js "koala wearing a strawberry hat"
```

## reference

- https://platform.openai.com/docs/api-reference/images/create
