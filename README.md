# txt2img

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A Deno module and command-line tool to generate images from text prompts using the OpenAI API (DALL-E 3, DALL-E 2, GPT-Image-1).

txt2img by [GPT-Image-1, DALL-E-3 or DALL-E-2 - OpenAI](https://platform.openai.com/docs/api-reference/images/create)

## Demo

See generated examples from the scripts in this repository:

- **[GPT-Image-1 Demo](https://code4fukui.github.io/txt2img/test_GPTIMAGE1/index.html)**: 17 style variations of "a koala wearing a strawberry hat".
- **[DALL-E 3 Demo](https://code4fukui.github.io/txt2img/test_DALLE3/index.html)**: 17 style variations of "a cat wearing a strawberry hat" (prompted in Japanese).
- **[DALL-E 2 Demo](https://code4fukui.github.io/txt2img/test_DALLE2/index.html)**: 17 style variations of "a cat wearing a strawberry hat".

## Features

- **Multiple Models**: Supports `gpt-image-1`, `dall-e-3`, and `dall-e-2`.
- **Flexible Usage**: Can be used as a Deno module or via the command line.
- **Batch Generation**: Includes a script to generate multiple images with different style prefixes from a single base prompt.
- **Customizable Options**: Control image `size` and `quality` through the API.
- **Gallery Generator**: A utility script (`imgs2html.js`) is included to create an HTML gallery from your generated images.

## Setup

1.  This tool requires the [Deno](https://deno.land/) runtime.
2.  Create a `.env` file in your project root and add your OpenAI API key:
    ```
    OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```

## Usage

### Command-Line Interface (CLI)

#### Generate a single image

The `txt2img.js` script creates a single image and saves it as a PNG file named after the prompt.

```sh
deno run -A https://code4fukui.github.io/txt2img/txt2img.js "A high-quality photo of a koala wearing a strawberry hat"
```

#### Generate multiple style variations

The `txt2imgs.js` script takes a base prompt and generates 17 variations by prepending different style prefixes (e.g., "Digital art of", "3D render of", "Ukiyo-e painting of").

```sh
deno run -A https://code4fukui.github.io/txt2img/txt2imgs.js "a koala wearing a strawberry hat"
```

### Module API

Import `fetchImage` to generate images within your Deno project.

#### Basic Example

```js
import { fetchImage, SIZE_PORTRAIT } from "https://code4fukui.github.io/txt2img/fetchImage.js";

const prompt = "A cute koala wearing a strawberry hat";
// Returns image data as a Uint8Array
const bin = await fetchImage(prompt, { size: SIZE_PORTRAIT });
await Deno.writeFile("koala.png", bin);
```

#### Advanced Example (Specifying Model and Quality)

You can pass an options object to specify the model, size, and quality.

```js
import { fetchImage, SIZE_SQUARE, QUALITY_HIGH } from "https://code4fukui.github.io/txt2img/fetchImage.js";

const prompt = "Ukiyo-e painting of a cat wearing a strawberry hat";
const options = {
  model: "dall-e-3", // or "dall-e-2", "gpt-image-1"
  size: SIZE_SQUARE, // "1024x1024"
  quality: QUALITY_HIGH, // "high" or "low" (for DALL-E 3 / gpt-image-1)
};
const bin = await fetchImage(prompt, options);
await Deno.writeFile("cat-ukiyo-e.png", bin);
```

## Utilities

### Create an HTML Gallery

After generating images, use `imgs2html.js` to create an `index.html` file to display them.

```sh
# Run in a directory containing .png files
deno run -A https://code4fukui.github.io/txt2img/imgs2html.js .
```

### List Available Models

Use `showModels.js` to list the image generation models available via your API key.

```sh
deno run -A https://code4fukui.github.io/txt2img/showModels.js
```

## Reference

- [OpenAI API Reference - Images](https://platform.openai.com/docs/api-reference/images/create)
- [OpenAI Guide - Image Generation](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1)
- [OpenAI Models - GPT-Image-1](https://platform.openai.com/docs/models/gpt-image-1)

## License

MIT License