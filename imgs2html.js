import { dir2array } from "https://js.sabae.cc/dir2array.js";

if (Deno.args.length == 0) {
  console.log("imgs2html [path]");
  Deno.exit(1);
}
const path = Deno.args[0];
const fns = (await dir2array(path)).filter(fn => fn.endsWith(".png"));
const items = fns.map(fn => `<div class=divimg><img src=${fn}><div class=divimgtxt>${fn.substring(0, fn.length - 4).replace(/_/g, " ")}</div></div>`).join("\n");

const html = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="data:">
<style>
.divimgs {
  display: flex;
  flex-wrap: wrap;
}
.divimgs > div {
  width: 30%;
  margin-right: 1em;
  margin-bottom: 1em;
}
.divimgs img {
  width: 100%;
}
</style>
<title>imgs2html</title>
</head><body>
<div class=divimgs>
${items}
</div>
</body></html>
`;
await Deno.writeTextFile(path + "/index.html", html);
