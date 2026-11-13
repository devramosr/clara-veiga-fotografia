// Pré-renderização estática: gera dist/index.html (PT) e dist/en/index.html (EN)
// com o HTML pronto, usando o bundle de servidor gerado por `vite build --ssr`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, head } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const pages = [
  { lang: "pt", htmlLang: "pt-BR", out: "index.html" },
  { lang: "en", htmlLang: "en", out: path.join("en", "index.html") },
];

for (const p of pages) {
  let html = template
    .replace(/<!--head-start-->[\s\S]*?<!--head-end-->/, head(p.lang))
    .replace("<!--app-html-->", render(p.lang))
    .replace(/<html lang="[^"]*"/, `<html lang="${p.htmlLang}"`);
  const file = path.join(dist, p.out);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log("prerender ->", path.relative(root, file));
}

fs.rmSync(ssrDir, { recursive: true, force: true });

// robots.txt e sitemap (o sitemap só é gerado quando site.url estiver preenchido)
const { site } = await import(pathToFileURL(path.join(root, "src", "data.js")).href);
if (site.url) {
  const base = site.url.replace(/\/$/, "");
  fs.writeFileSync(
    path.join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
      [["", "pt-BR"], ["/en/", "en"]]
        .map(([p2]) => `  <url><loc>${base}${p2 || "/"}</loc><xhtml:link rel="alternate" hreflang="pt-BR" href="${base}/"/><xhtml:link rel="alternate" hreflang="en" href="${base}/en/"/></url>`)
        .join("\n") +
      `\n</urlset>\n`
  );
  fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
}
