# Emerald

Marketing site and AI assistants for **Emerald**, an AI-first digital agency
based in Barranquilla, Colombia.

**Live:** https://emerald-co.vercel.app

Built as a single Next.js application: the public site, an MDX blog, two
conversational assistants and the lead-capture pipeline all live in the same
codebase and deploy together.

## What's interesting in here

**Two assistants, not one.** `/api/chat` powers Karl, the site-wide assistant
that answers questions about services. `/api/agenda-chat` is a separate
endpoint focused on booking — different system prompt, different job. Both are
built on the Vercel AI SDK with streaming responses.

**Running on Llama 3.3 70B through Groq**, chosen for latency — a chat widget
that takes three seconds to start answering gets closed. The AI SDK's provider
abstraction keeps the routes independent of that choice.

**A blog that is just files.** Posts are MDX rendered with `next-mdx-remote`,
with frontmatter parsed by `gray-matter` and GitHub-flavoured markdown via
`remark-gfm`. No CMS, no database — writing a post means adding a file.

**Leads go where the work happens.** Contact and booking forms write to Notion
and send mail through Nodemailer, so there is no admin panel to maintain.

**SEO handled properly.** Dynamic OG images with `@vercel/og`, generated
sitemap, breadcrumbs, and real privacy-policy and terms pages rather than
placeholders.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS ·
Framer Motion · Vercel AI SDK · MDX · Nodemailer · Notion API ·
Vercel Analytics & Speed Insights

## Structure

```
app/
  api/chat/            Karl — site-wide assistant
  api/agenda-chat/     booking assistant
  soluciones/          one page per service line
  blog/[slug]/         MDX posts
  agenda/  contacto/   lead capture
components/            UI, chat widget, particle field, navbar/footer
content/               blog posts as MDX
lib/                   shared helpers
```

## Running it locally

```bash
npm install
cp .env.example .env.local   # fill in the provider and Notion keys
npm run dev
```

The app expects API keys for whichever model provider you enable, plus Notion
and SMTP credentials for the lead pipeline. Nothing secret is committed —
`.env*` is ignored.
