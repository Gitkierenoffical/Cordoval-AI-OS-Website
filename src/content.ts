/**
 * Cordoval AI OS page copy.
 * British English. Cordoval is a brand.
 * Coming soon to the Microsoft Store. No price and no date.
 */

export const brandHome = "https://www.cordoval.co.uk";
export const contactEmail = "management@cordoval.co.uk";

export const nav = [
  { href: "#features", label: "Features" },
  { href: "#studio", label: "AI Studio" },
  { href: "#projects", label: "Projects" },
  { href: "#privacy", label: "Privacy" },
  { href: "#who", label: "Who it's for" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  status: "Coming soon to the Microsoft Store",
  titleLead: "Your private AI",
  titleAccent: "workspace.",
  summary:
    "Cordoval AI OS is a private AI workspace that runs entirely on your own computer. It keeps your documents, projects, tasks and conversations in one place, and a local AI model reads them to answer questions, write reports, plan work and run multi-step jobs.",
} as const;

export const homeShot = {
  src: "/home.png",
  alt: "The Cordoval AI OS home screen, with projects and the assistant on one screen.",
  caption: "Home screen",
  width: 1680,
  height: 377,
} as const;

export const features = {
  id: "features",
  eyebrow: "Features",
  title: "One place for the work.",
  items: [
    {
      title: "Home screen",
      body: "The home screen is where a session starts. Projects, recent work and the assistant sit on one screen.",
    },
    {
      title: "Projects",
      body: "Each project holds the documents, assistant, studio and tasks for that piece of work.",
    },
    {
      title: "Knowledge",
      body: "Import PDF, Word, text, web pages, emails and folders. Search across them is fast.",
    },
    {
      title: "Tasks",
      body: "Tasks and automated workflows sit with the project they belong to.",
    },
    {
      title: "Assistant",
      body: "The assistant cites the exact passages it used. When your documents don't hold the answer, it says so plainly.",
    },
    {
      title: "Your approval",
      body: "AI changes are never applied until you approve them.",
    },
  ],
} as const;

export const studio = {
  id: "studio",
  eyebrow: "AI Studio",
  title: "Eight tools, on your documents.",
  body: "AI Studio belongs to a project. It works from the documents already in that project.",
  shot: {
    src: "/ai-studio.png",
    alt: "AI Studio in Cordoval AI OS, showing eight tools for a project.",
    caption: "AI Studio",
    width: 1680,
    height: 587,
  },
  tools: [
    { name: "Summariser", body: "Key points from a document." },
    { name: "Comparison", body: "Two or more documents, side by side." },
    { name: "Research", body: "A question answered from your documents." },
    { name: "Document writer", body: "A memo, letter or article from your documents." },
    { name: "Report builder", body: "A report in the sections you choose." },
    { name: "Brief builder", body: "A short brief from the facts you have." },
    { name: "Email drafter", body: "An email drafted from your documents." },
    { name: "Brainstorming", body: "Ideas grounded in your documents." },
  ],
} as const;

export const projects = {
  id: "projects",
  eyebrow: "Projects",
  title: "A project for each piece of work.",
  body: "Documents, the assistant, the studio and tasks stay together. The assistant cites the exact passages it used, and it says plainly when your documents don't hold the answer.",
  shot: {
    src: "/project-assistant.png",
    alt: "The project assistant in Cordoval AI OS, ready to answer from that project's documents.",
    caption: "Project assistant",
    width: 1680,
    height: 1000,
  },
} as const;

export const privacy = {
  id: "privacy",
  eyebrow: "Privacy",
  title: "It stays on your computer.",
  body: "Your library, search index, AI model and conversations stay on your device. There is no telemetry and no cloud fallback. Cordoval AI OS only goes online when you choose to download a model.",
  line: "No telemetry. No cloud fallback.",
} as const;

export const audience = {
  id: "who",
  eyebrow: "Who it's for",
  title: "For people who keep their documents close.",
  body: "Cordoval AI OS is for individuals and small teams with lots of documents who can't or won't send them to a cloud AI, such as consultants, project managers, office managers, solicitors and finance teams.",
  roles: ["Consultants", "Project managers", "Office managers", "Solicitors", "Finance teams"],
} as const;

export const contact = {
  id: "contact",
  eyebrow: "Contact",
  title: "One email address.",
  body: "The only contact is management@cordoval.co.uk.",
} as const;

export const footer = {
  line: "Cordoval AI OS is a private AI workspace from Cordoval.",
  contactLabel: "Contact",
  links: [
    { href: "https://www.cordoval.co.uk", label: "cordoval.co.uk" },
    { href: "https://cofounder.cordoval.co.uk", label: "Cordoval Co-Founder" },
    { href: "https://code.cordoval.co.uk", label: "Cordoval Code" },
    { href: "https://labs.cordoval.co.uk", label: "Cordoval Labs" },
    { href: "https://media.cordoval.co.uk", label: "Cordoval Media" },
    { href: "https://www.cordoval.co.uk/privacy", label: "Privacy" },
    { href: "https://www.cordoval.co.uk/terms", label: "Terms" },
  ],
} as const;
