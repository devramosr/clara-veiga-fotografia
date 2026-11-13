import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/playfair-display/wght.css";
import "@fontsource-variable/figtree/wght.css";
import "@fontsource/pinyon-script/400.css";
import "./styles.css";
import App from "./App.jsx";

const lang = window.location.pathname.startsWith("/en") ? "en" : "pt";
const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App lang={lang} />
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  createRoot(root).render(app);
}
