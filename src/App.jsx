import { useState } from "react";
import { content, site, baseByType, packages, extrasPrice, gallery, photos } from "./data.js";

const PAGES = { pt: "/", en: "/en/" };

function money(n, lang) {
  const v = Math.round(n);
  const sep = lang === "en" ? "," : ".";
  const s = String(v).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  return lang === "en" ? `R$${s}` : `R$ ${s}`;
}

function wa(text) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

function Photo({ id, label = "", priority = false }) {
  const ph = photos[id];
  return (
    <img
      className="scene"
      src={ph.src}
      width={ph.w}
      height={ph.h}
      alt={label}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchpriority={priority ? "high" : undefined}
      style={{ objectPosition: ph.pos }}
    />
  );
}

function Aperture({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="10" fill="var(--terra)" />
      <circle cx="16" cy="16" r="8.5" fill="none" stroke="var(--cream)" strokeWidth="2" />
      <path d="M16 7.5l4.2 7.3M24.2 12.5H15.8M23.2 20.5l-4.2-7.3M16 24.5l-4.2-7.3M7.8 19.5h8.4M8.8 11.5l4.2 7.3" fill="none" stroke="var(--cream)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.3 15l-.3-.2-3.1.9.9-3-.2-.3a8.1 8.1 0 0 1 7-12.4Zm-3 3.6c-.2 0-.5 0-.8.4-.3.4-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4l-.5-.3-1.8-.9c-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4v-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5Z"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path d="M3 9h11M10 4.5L14.5 9 10 13.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const valueIcons = [
  <path key="d" d="M12 3l8 6-8 12L4 9l8-6Zm-8 6h16M9 9l3 12 3-12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />,
  <path key="h" d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.600-7 10-7 10Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  <path key="b" d="M13 3L5 13h6l-1 8 8-10h-6l1-8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
];

function Header({ t, lang }) {
  return (
    <header className="header">
      <div className="header__row wrap">
        <a className="brand" href={`${PAGES[lang]}#topo`} aria-label={site.brand}>
          <Aperture />
          <span className="brand__name">{site.brand}</span>
        </a>
        <nav className="nav" aria-label={t.nav.label}>
          {t.nav.items.map((i) => (
            <a key={i.id} href={`#${i.id}`}>
              {i.label}
            </a>
          ))}
        </nav>
        <div className="header__right">
          <div className="lang" role="group" aria-label={t.langLabel}>
            <a href={PAGES.pt} hrefLang="pt-BR" lang="pt-BR" aria-current={lang === "pt" ? "true" : undefined}>
              PT
            </a>
            <span aria-hidden="true">|</span>
            <a href={PAGES.en} hrefLang="en" lang="en" aria-current={lang === "en" ? "true" : undefined}>
              EN
            </a>
          </div>
          <a className="btn btn--dark btn--sm header__cta" href={wa(t.contact.waMessage)} target="_blank" rel="noopener noreferrer">
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ t }) {
  const h = t.hero;
  return (
    <section className="hero" id="topo">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="eyebrow">{h.eyebrow}</p>
          <h1>
            {h.before}
            <span className="script hero__accent">
              {h.accent}
              <svg viewBox="0 0 220 14" aria-hidden="true" focusable="false">
                <path d="M3 9c40-8 80 4 120-3s60 2 94-1" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="lead">{h.text}</p>
          <div className="hero__actions">
            <a className="btn btn--terra" href="#ensaio">
              {h.primary}
              <Arrow />
            </a>
            <a className="btn btn--outline" href="#portfolio">
              {h.secondary}
            </a>
          </div>
        </div>
        <div className="hero__art">
          <p className="script hero__quote" aria-hidden="true">
            {h.quote}
          </p>
          <div className="hero__blob" aria-hidden="true" />
          <div className="arch">
            <Photo id="retrato1" label={h.heroAlt} priority />
          </div>
          <div className="badge">
            <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 8h3l2-3h6l2 3h3v11H4V8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <circle cx="12" cy="13" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <strong>{h.badge.value}</strong>
            <span>{h.badge.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ t }) {
  const a = t.about;
  return (
    <section className="section section--pad-sm" id={a.id} aria-labelledby="sobre-title">
      <div className="wrap">
        <div className="about">
          <div className="about__img">
            <Photo id="paisagem2" label={a.photoAlt} />
          </div>
          <div className="about__text">
            <p className="eyebrow eyebrow--light">{a.eyebrow}</p>
            <h2 id="sobre-title">{a.title}</h2>
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <dl className="about__stats">
              {a.stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
            <a className="btn btn--cream" href={wa(t.contact.waMessage)} target="_blank" rel="noopener noreferrer">
              {a.cta}
              <Arrow />
            </a>
          </div>
          <ul className="values">
            {a.values.map((v, i) => (
              <li key={v.title}>
                <span className="values__icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" focusable="false">
                    {valueIcons[i]}
                  </svg>
                </span>
                <span>
                  <strong>{v.title}</strong>
                  {v.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services({ t }) {
  const s = t.services;
  return (
    <section className="section" id={s.id} aria-labelledby="servicos-title">
      <div className="wrap">
        <header className="head">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 id="servicos-title">{s.title}</h2>
        </header>
        <ul className="cards">
          {s.items.map((i) => (
            <li key={i.title} className="card">
              <div className="card__img">
                <Photo id={i.photo} label={i.alt} />
              </div>
              <div className="card__body">
                <h3>{i.title}</h3>
                <p>{i.text}</p>
                <a className="card__go" href="#ensaio" aria-label={`${i.title}: ${s.more}`}>
                  <Arrow />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Portfolio({ t }) {
  const p = t.portfolio;
  const [cat, setCat] = useState("all");
  const cats = ["all", "portrait", "couple", "family", "event", "landscape", "detail"];
  const shown = gallery.filter((g) => cat === "all" || g.cat === cat);
  return (
    <section className="section section--sand" id={p.id} aria-labelledby="portfolio-title">
      <div className="wrap">
        <header className="head">
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 id="portfolio-title">{p.title}</h2>
        </header>
        <div className="filters" role="group" aria-label={p.filterLabel}>
          {cats.map((c) => (
            <button key={c} type="button" className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c === "all" ? p.all : p.cats[c]}
            </button>
          ))}
        </div>
        <ul className="gallery">
          {shown.map((g) => (
            <li key={g.id}>
              <figure>
                <Photo id={g.id} label={p.items[g.id].alt} />
                <figcaption>
                  <span>{p.cats[g.cat]}</span>
                  {p.items[g.id].title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="gallery__note">{p.note}</p>
      </div>
    </section>
  );
}

function Choice({ pressed, onClick, title, sub, className = "" }) {
  return (
    <button type="button" className={`choice ${className}`} aria-pressed={pressed} onClick={onClick}>
      <span className="choice__title">{title}</span>
      {sub && <span className="choice__sub">{sub}</span>}
    </button>
  );
}

function Builder({ t, lang }) {
  const b = t.builder;
  const [type, setType] = useState("portrait");
  const [pkg, setPkg] = useState("complete");
  const [light, setLight] = useState("golden");
  const [extras, setExtras] = useState([]);

  const toggle = (id) => setExtras((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  const typeObj = b.types.find((x) => x.id === type);
  const pkgObj = b.pkgs.find((x) => x.id === pkg);
  const lightObj = b.lights.find((x) => x.id === light);
  const pkgData = packages[pkg];
  const pkgPrice = Math.round((baseByType[type] * pkgData.mult) / 10) * 10;
  const chosen = b.extras.filter((e) => extras.includes(e.id));
  const total = pkgPrice + chosen.reduce((sum, e) => sum + extrasPrice[e.id], 0);
  const info = b.pkgInfo(pkgData);

  const message = b.waMessage({
    type: typeObj.label,
    pkg: pkgObj.label,
    light: `${lightObj.label} (${lightObj.text})`,
    extras: chosen.length ? chosen.map((e) => e.label).join(", ") : b.noExtras,
    total: money(total, lang),
    info,
  });

  return (
    <section className="section section--sage" id={b.id} aria-labelledby="ensaio-title">
      <div className="wrap">
        <header className="head head--light">
          <p className="eyebrow eyebrow--light">{b.eyebrow}</p>
          <h2 id="ensaio-title">{b.title}</h2>
          <p className="lead">{b.intro}</p>
        </header>

        <div className="builder">
          <div className="builder__form">
            <div role="group" aria-labelledby="g-type" className="field">
              <p className="field__label" id="g-type">
                {b.typeLabel}
              </p>
              <div className="choices choices--4">
                {b.types.map((x) => (
                  <Choice key={x.id} pressed={type === x.id} onClick={() => setType(x.id)} title={x.label} sub={x.text} />
                ))}
              </div>
            </div>

            <div role="group" aria-labelledby="g-pkg" className="field">
              <p className="field__label" id="g-pkg">
                {b.pkgLabel}
              </p>
              <div className="choices choices--3">
                {b.pkgs.map((x) => (
                  <Choice
                    key={x.id}
                    pressed={pkg === x.id}
                    onClick={() => setPkg(x.id)}
                    title={x.label}
                    sub={x.text}
                  />
                ))}
              </div>
              <p className="field__hint" aria-live="polite">
                {info}
              </p>
            </div>

            <div role="group" aria-labelledby="g-extras" className="field">
              <p className="field__label" id="g-extras">
                {b.extrasLabel}
              </p>
              <div className="choices choices--2">
                {b.extras.map((x) => (
                  <Choice
                    key={x.id}
                    pressed={extras.includes(x.id)}
                    onClick={() => toggle(x.id)}
                    title={x.label}
                    sub={`${x.text} · +${money(extrasPrice[x.id], lang)}`}
                  />
                ))}
              </div>
            </div>

            <div role="group" aria-labelledby="g-light" className="field">
              <p className="field__label" id="g-light">
                {b.lightLabel}
              </p>
              <div className="choices choices--2">
                {b.lights.map((x) => (
                  <Choice key={x.id} pressed={light === x.id} onClick={() => setLight(x.id)} title={x.label} sub={x.text} />
                ))}
              </div>
            </div>
          </div>

          <aside className="summary" aria-labelledby="summary-title">
            <h3 id="summary-title">{b.summaryTitle}</h3>
            <dl className="summary__list">
              <div>
                <dt>{b.typeWord}</dt>
                <dd>{typeObj.label}</dd>
              </div>
              <div>
                <dt>{b.pkgWord}</dt>
                <dd>
                  {pkgObj.label} · {money(pkgPrice, lang)}
                </dd>
              </div>
              <div>
                <dt>{b.lightWord}</dt>
                <dd>{lightObj.label}</dd>
              </div>
              <div>
                <dt>{b.extrasWord}</dt>
                <dd>
                  {chosen.length === 0 ? (
                    b.noExtras
                  ) : (
                    <ul className="summary__extras">
                      {chosen.map((e) => (
                        <li key={e.id}>
                          {e.label} · {money(extrasPrice[e.id], lang)}
                        </li>
                      ))}
                    </ul>
                  )}
                </dd>
              </div>
            </dl>
            <div className="summary__total" aria-live="polite" aria-atomic="true">
              <span className="summary__value">{money(total, lang)}</span>
              <span className="summary__per">{b.total}</span>
            </div>
            <p className="summary__meta">{info}</p>
            <a className="btn btn--terra btn--block" href={wa(message)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {b.cta}
            </a>
            <p className="summary__note">{b.note}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t }) {
  const x = t.testimonials;
  return (
    <section className="section" aria-labelledby="dep-title">
      <div className="wrap">
        <header className="head">
          <p className="eyebrow">{x.eyebrow}</p>
          <h2 id="dep-title">{x.title}</h2>
        </header>
        <ul className="quotes">
          {x.items.map((q) => (
            <li key={q.name}>
              <figure>
                <div className="stars" aria-hidden="true">
                  ★★★★★
                </div>
                <blockquote>{q.text}</blockquote>
                <figcaption>
                  <strong>{q.name}</strong>
                  <span>{q.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq({ t }) {
  const f = t.faq;
  return (
    <section className="section section--sand" id={f.id} aria-labelledby="faq-title">
      <div className="wrap wrap--narrow">
        <header className="head">
          <p className="eyebrow">{f.eyebrow}</p>
          <h2 id="faq-title">{f.title}</h2>
        </header>
        <div className="faq">
          {f.items.map((i) => (
            <details key={i.q}>
              <summary>{i.q}</summary>
              <p>{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  const c = t.contact;
  return (
    <section className="section section--pad-sm" id={c.id} aria-labelledby="contato-title">
      <div className="wrap">
        <div className="cta">
          <div className="cta__art" aria-hidden="true">
            <Photo id="paisagem1" />
          </div>
          <div className="cta__text">
            <h2 id="contato-title">{c.title}</h2>
            <p className="lead">{c.text}</p>
            <a className="btn btn--terra" href={wa(c.waMessage)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {c.cta}
            </a>
          </div>
          <address className="cta__info">
            <p>{c.address}</p>
            <p>{c.hours}</p>
            <p>
              {c.instagramLabel}:{" "}
              <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">
                @{site.instagram}
              </a>
            </p>
          </address>
        </div>
      </div>
    </section>
  );
}

export default function App({ lang = "pt" }) {
  const t = content[lang];
  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <Header t={t} lang={lang} />
      <main id="main">
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Portfolio t={t} />
        <Builder t={t} lang={lang} />
        <Testimonials t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <footer className="footer">
        <div className="wrap">
          <p>{t.footer}</p>
          <p>{t.demoNotice}</p>
        </div>
      </footer>
    </>
  );
}
