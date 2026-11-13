import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { content, site } from "./data.js";

export function render(lang) {
  return renderToString(<App lang={lang} />);
}

export function head(lang) {
  const t = content[lang];
  const other = lang === "pt" ? "en" : "pt";
  const path = (l) => (l === "pt" ? "/" : "/en/");
  const url = (l) => (site.url ? site.url.replace(/\/$/, "") + path(l) : "");
  const ogImage = (l) => (site.url ? `${site.url.replace(/\/$/, "")}/${l === "pt" ? "og.png" : "og-en.png"}` : `/${l === "pt" ? "og.png" : "og-en.png"}`);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const lines = [
    `<title>${esc(t.meta.title)}</title>`,
    `<meta name="description" content="${esc(t.meta.description)}" />`,
  ];
  if (site.url) {
    lines.push(`<link rel="canonical" href="${url(lang)}" />`);
    lines.push(`<link rel="alternate" hreflang="pt-BR" href="${url("pt")}" />`);
    lines.push(`<link rel="alternate" hreflang="en" href="${url("en")}" />`);
    lines.push(`<link rel="alternate" hreflang="x-default" href="${url("pt")}" />`);
    lines.push(`<meta property="og:url" content="${url(lang)}" />`);
  }
  lines.push(
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${lang === "pt" ? "pt_BR" : "en_US"}" />`,
    `<meta property="og:locale:alternate" content="${other === "pt" ? "pt_BR" : "en_US"}" />`,
    `<meta property="og:title" content="${esc(t.meta.title)}" />`,
    `<meta property="og:description" content="${esc(t.meta.description)}" />`,
    `<meta property="og:image" content="${ogImage(lang)}" />`,
    `<meta property="og:image:alt" content="${esc(t.meta.ogAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`
  );
  const ld = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: t.jsonLd.name,
    description: t.jsonLd.description,
    telephone: `+${site.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: t.jsonLd.address.street,
      addressLocality: t.jsonLd.address.locality,
      addressRegion: t.jsonLd.address.region,
      addressCountry: t.jsonLd.address.country,
    },
  };
  if (site.url) ld.url = url(lang);
  lines.push(`<script type="application/ld+json">${JSON.stringify(ld)}</script>`);
  return lines.join("\n    ");
}
