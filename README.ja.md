# txt2img

OpenAI API（DALL-E 3、DALL-E 2、GPT-Image-1）を使用して、テキストプロンプトから画像を生成するDenoモジュールおよびコマンドラインツールです。

txt2img by [GPT-Image-1, DALL-E-3 or DALL-E-2 - OpenAI](https://platform.openai.com/docs/api-reference/images/create)

## デモ

このリポジトリのスクリプトで生成された例をご覧ください：

- **[GPT-Image-1 デモ](https://code4fukui.github.io/txt2img/test_GPTIMAGE1/index.html)**: 「イチゴの帽子をかぶったコアラ」の17種類のスタイルバリエーション。
- **[DALL-E 3 デモ](https://code4fukui.github.io/txt2img/test_DALLE3/index.html)**: 「イチゴの帽子をかぶった猫」の17種類のスタイルバリエーション（日本語プロンプト）。
- **[DALL-E 2 デモ](https://code4fukui.github.io/txt2img/test_DALLE2/index.html)**: 「イチゴの帽子をかぶった猫」の17種類のスタイルバリエーション。

## 特徴

- **複数モデル対応**: `gpt-image-1`、`dall-e-3`、`dall-e-2`をサポートしています。
- **柔軟な使用方法**: Denoモジュールとしても、コマンドラインツールとしても利用可能です。
- **バッチ生成**: 1つのベースプロンプトに異なるスタイルのプレフィックスを付けて、複数の画像を生成するスクリプトが含まれています。
- **カスタマイズ可能なオプション**: APIを通じて画像の `size`（サイズ）や `quality`（品質）を制御できます。
- **ギャラリー生成ユーティリティ**: 生成した画像からHTMLギャラリーを作成するユーティリティスクリプト（`imgs2html.js`）が含まれています。

## セットアップ

1. このツールを使用するには、[Deno](https://deno.land/) ランタイムが必要です。
2. プロジェクトのルートディレクトリに `.env` ファイルを作成し、OpenAI APIキーを追加します：
    ```
    OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```

## 使い方

### コマンドラインインターフェース (CLI)

#### 単一画像の生成

`txt2img.js` スクリプトは単一の画像を生成し、プロンプト名をファイル名としたPNGファイルとして保存します。

```sh
deno run -A https://code4fukui.github.io/txt2img/txt2img.js "A high-quality photo of a koala wearing a strawberry hat"
```

#### 複数のスタイルバリエーションの生成

`txt2imgs.js` スクリプトはベースプロンプトを受け取り、異なるスタイルのプレフィックス（例: "Digital art of"、"3D render of"、"Ukiyo-e painting of"）を先頭に追加して、17種類のバリエーションを生成します。

```sh
deno run -A https://code4fukui.github.io/txt2img/txt2imgs.js "a koala wearing a strawberry hat"
```

### モジュールAPI

`fetchImage` をインポートすることで、Denoプロジェクト内で画像を生成できます。

#### 基本例

```js
import { fetchImage, SIZE_PORTRAIT } from "https://code4fukui.github.io/txt2img/fetchImage.js";

const prompt = "A cute koala wearing a strawberry hat";
// 画像データをUint8Arrayとして返します
const bin = await fetchImage(prompt, { size: SIZE_PORTRAIT });
await Deno.writeFile("koala.png", bin);
```

#### 応用例（モデルと品質の指定）

オプションオブジェクトを渡すことで、モデル、サイズ、品質を指定できます。

```js
import { fetchImage, SIZE_SQUARE, QUALITY_HIGH } from "https://code4fukui.github.io/txt2img/fetchImage.js";

const prompt = "Ukiyo-e painting of a cat wearing a strawberry hat";
const options = {
  model: "dall-e-3", // または "dall-e-2", "gpt-image-1"
  size: SIZE_SQUARE, // "1024x1024"
  quality: QUALITY_HIGH, // "high" または "low" (DALL-E 3 / gpt-image-1用)
};
const bin = await fetchImage(prompt, options);
await Deno.writeFile("cat-ukiyo-e.png", bin);
```

## ユーティリティ

### HTMLギャラリーの作成

画像を生成した後、`imgs2html.js` を使用して画像を表示するための `index.html` ファイルを作成できます。

```sh
# .pngファイルが含まれるディレクトリで実行します
deno run -A https://code4fukui.github.io/txt2img/imgs2html.js .
```

### 利用可能なモデルの一覧表示

`showModels.js` を使用すると、APIキーで利用可能な画像生成モデルの一覧を表示できます。

```sh
deno run -A https://code4fukui.github.io/txt2img/showModels.js
```

## 参考資料

- [OpenAI API Reference - Images](https://platform.openai.com/docs/api-reference/images/create)
- [OpenAI Guide - Image Generation](https://platform.openai.com/docs/guides/image-generation?image-generation-model=gpt-image-1)
- [OpenAI Models - GPT-Image-1](https://platform.openai.com/docs/models/gpt-image-1)

## ライセンス

MIT License
