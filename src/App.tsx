import { useEffect, useId, useRef, useState } from "react";
import {
  audience,
  brandHome,
  contact,
  contactEmail,
  features,
  footer,
  hero,
  homeShot,
  nav,
  privacy,
  projects,
  studio,
} from "./content";

const linkClass =
  "rounded-full px-3 py-2 text-white/90 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const menuLinkClass =
  "block rounded-full px-3 py-2 text-[#0B1B4A] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A5CFF]";

const brandButtonClass =
  "min-h-11 items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0A5CFF] hover:bg-[#E8F0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const footerLinkClass =
  "rounded-md font-semibold text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function Header() {
  const [open, setOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const header = headerRef.current;
    const place = () => {
      if (header) setMenuTop(header.getBoundingClientRect().height);
    };
    place();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", place);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", place);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-white/10 bg-[#0B1B4A]/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <a
          href="#top"
          className="inline-flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <img
            src="/aios-icon.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-[22%] sm:h-10 sm:w-10"
          />
          <span className="whitespace-nowrap text-base font-extrabold tracking-tight text-white sm:text-2xl">Cordoval AI OS</span>
        </a>
        <nav className="hidden items-center gap-1 text-sm font-semibold min-[1100px]:flex" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} className={linkClass} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className={`${brandButtonClass} hidden min-[1100px]:inline-flex`} href={brandHome}>
          cordoval.co.uk
        </a>
        <button
          type="button"
          className="inline-flex min-h-11 shrink-0 items-center rounded-full px-3 text-sm font-semibold text-white ring-1 ring-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[1100px]:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => {
            const header = headerRef.current;
            if (header) setMenuTop(header.getBoundingClientRect().height);
            setOpen((value) => !value);
          }}
        >
          {open ? "Close" : "Menu"}
        </button>
        {open ? (
          <nav
            id={menuId}
            aria-label="Primary"
            className="absolute inset-x-0 z-40 overflow-y-auto bg-[#F4F0FF] px-4 py-4 min-[1100px]:hidden"
            style={{ top: "100%", height: `calc(100dvh - ${menuTop}px)` }}
          >
            <ul className="flex flex-col gap-1 text-base font-semibold">
              {nav.map((item) => (
                <li key={item.href}>
                  <a className={menuLinkClass} href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0A5CFF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#084ED9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A5CFF]"
              href={brandHome}
              onClick={() => setOpen(false)}
            >
              cordoval.co.uk
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

function Shot({
  src,
  alt,
  caption,
  width,
  height,
  priority = false,
  tone = "light",
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  priority?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl bg-[#0B1B4A] shadow-[0_28px_70px_-32px_rgba(11,27,74,0.55)] ring-1 ring-white/15">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-white/40" />
            <span className="size-2.5 rounded-full bg-white/25" />
            <span className="size-2.5 rounded-full bg-white/25" />
          </span>
          <span className="truncate text-xs font-semibold text-white/80">Cordoval AI OS</span>
        </div>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="shot-img bg-[#f4f0ff]"
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
        />
      </div>
      <figcaption className={`px-1 pt-3 text-sm font-semibold ${tone === "dark" ? "text-[#E7EEFF]" : "text-[#1C2E5A]"}`}>
        {caption}
      </figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071433] text-white" aria-labelledby="hero-title">
      <div className="brand-hero-fx pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="brand-hero-wash pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#0B1B4A]">
            <span className="size-2 shrink-0 rounded-full bg-[#0A5CFF]" aria-hidden="true" />
            {hero.status}
          </p>
          <h1
            id="hero-title"
            className="mt-5 max-w-full text-[clamp(2.35rem,9vw,5.4rem)] font-extrabold leading-[0.9] tracking-tight"
          >
            {hero.titleLead}
            <span className="brand-outline mt-1 block">{hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#E7EEFF] sm:text-xl">{hero.summary}</p>
        </div>
        <div className="mt-10 min-w-0 sm:mt-12">
          <Shot {...homeShot} priority tone="dark" />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id={features.id} aria-labelledby="features-title" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A5CFF]">{features.eyebrow}</p>
        <h2 id="features-title" className="mt-3 max-w-4xl text-[clamp(2.2rem,6vw,4.8rem)] font-extrabold leading-[0.92] tracking-tight">
          {features.title}
        </h2>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] bg-[#0B1B4A]/10 sm:grid-cols-2">
          {features.items.map((item) => (
            <li key={item.title} className="bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{item.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-[#1C2E5A]">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section id={studio.id} aria-labelledby="studio-title" className="scroll-mt-24 bg-[#F4F0FF]">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A5CFF]">{studio.eyebrow}</p>
          <h2 id="studio-title" className="mt-3 max-w-xl text-[clamp(2.2rem,6vw,4.6rem)] font-extrabold leading-[0.92] tracking-tight">
            {studio.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#1C2E5A]">{studio.body}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {studio.tools.map((tool) => (
              <li key={tool.name} className="rounded-2xl bg-white p-5 ring-1 ring-[#0B1B4A]/10">
                <h3 className="text-lg font-extrabold tracking-tight">{tool.name}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#1C2E5A]">{tool.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <Shot {...studio.shot} />
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id={projects.id} aria-labelledby="projects-title" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div className="min-w-0 lg:order-2">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A5CFF]">{projects.eyebrow}</p>
          <h2 id="projects-title" className="mt-3 max-w-xl text-[clamp(2.2rem,6vw,4.6rem)] font-extrabold leading-[0.92] tracking-tight">
            {projects.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#1C2E5A]">{projects.body}</p>
        </div>
        <div className="min-w-0 lg:order-1">
          <Shot {...projects.shot} />
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section id={privacy.id} aria-labelledby="privacy-title" className="scroll-mt-24 bg-[#0A5CFF] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E7EEFF]">{privacy.eyebrow}</p>
        <h2 id="privacy-title" className="mt-3 max-w-4xl text-[clamp(2.2rem,6vw,4.8rem)] font-extrabold leading-[0.92] tracking-tight">
          {privacy.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl">{privacy.body}</p>
        <p className="mt-8 text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight">{privacy.line}</p>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section id={audience.id} aria-labelledby="who-title" className="scroll-mt-24 bg-[#E7EEFF]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A5CFF]">{audience.eyebrow}</p>
        <h2 id="who-title" className="mt-3 max-w-4xl text-[clamp(2.2rem,6vw,4.8rem)] font-extrabold leading-[0.92] tracking-tight">
          {audience.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#1C2E5A] sm:text-xl">{audience.body}</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {audience.roles.map((role) => (
            <li key={role} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0B1B4A]">
              {role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id={contact.id} aria-labelledby="contact-title" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A5CFF]">{contact.eyebrow}</p>
        <h2 id="contact-title" className="mt-3 max-w-4xl text-[clamp(2.2rem,6vw,4.8rem)] font-extrabold leading-[0.92] tracking-tight">
          {contact.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#1C2E5A]">{contact.body}</p>
        <p className="mt-8">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0A5CFF] px-6 py-3 text-base font-semibold text-white hover:bg-[#084ED9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A5CFF]"
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B1B4A] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="text-sm leading-relaxed text-white/85">{footer.line}</p>
          <p className="mt-4 text-sm">
            {footer.contactLabel}:{" "}
            <a className={footerLinkClass} href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 text-sm md:items-end">
            {footer.links.map((item) => (
              <li key={item.href}>
                <a className={footerLinkClass} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#F4F0FF] text-[#0B1B4A]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#0B1B4A]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Studio />
        <Projects />
        <Privacy />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
