# Emerald

Marketing site and conversational layer for **Emerald**, an AI-first automation
agency based in Barranquilla, Colombia.

**Live:** https://emerald-co.vercel.app

One Next.js application holds everything: the public site, an MDX blog, two
conversational assistants and the lead pipeline. They deploy together and share
the same codebase, which is the point — fewer systems to maintain, fewer things
that can break.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| AI | Vercel AI SDK, Llama 3.3 70B via Groq |
| Content | MDX (`next-mdx-remote`, `gray-matter`, `remark-gfm`) |
| Persistence | Notion API for leads, Nodemailer for mail |
| SEO | `@vercel/og`, JSON-LD, generated sitemap |
| Hosting | Vercel, with Analytics and Speed Insights |

## Two assistants, not one

Rather than one chatbot doing everything with a bloated prompt, there are two
endpoints with separate jobs:

**`/api/chat`** — the service assistant. Available from any page through a
floating launcher, it answers questions about what Emerald does. Streams token
by token through the AI SDK.

**`/api/agenda-chat`** — the booking assistant. A conversational flow for
requesting an appointment that doesn't stop at the conversation: once it has
the details, it writes the lead into a Notion database and sends the
notification email through Nodemailer. The booking completes inside the chat.

Both run on **Llama 3.3 70B through Groq**, chosen for latency. A chat widget
that takes three seconds to start answering gets closed before it answers.

## Structured data, properly

Search engines get 22 distinct schema.org types from `lib/seo/schema.ts` —
`LocalBusiness`, `Organization`, `Service`, `OfferCatalog`, `FAQPage`,
`Article`, `BreadcrumbList`, `Review`, `AggregateRating`, `GeoCoordinates`,
`OpeningHoursSpecification`, `PostalAddress`, `ContactPoint` and others.

For a local agency this is the difference between being a website and being an
entity a search engine understands: opening hours, service catalogue, physical
location and reviews are all machine-readable.

Alongside it: dynamic OG images generated with `@vercel/og`, a generated
sitemap, breadcrumbs, and real privacy-policy and terms pages instead of
placeholders.

## A blog that is just files

Posts are MDX under `content/blog`. Frontmatter is parsed with `gray-matter`,
rendered by `next-mdx-remote`, GitHub-flavoured markdown via `remark-gfm`.

No CMS, no database, no admin panel. Writing a post means adding a file and
pushing.

## Everything is drawn, not stocked

`components/visuals/` holds 13 bespoke animated components built with Framer
Motion — `HeroVisual`, `DataFlow`, `SystemDiagram`, `WorkflowVisual`,
`DashboardMockup`, `HumanRobotDashboard`, `ComparisonMockup` and others.

There is no stock photography on the site. An agency selling automation should
be able to draw its own diagrams.

## Structure

```
app/
  api/chat/            service assistant
  api/agenda-chat/     booking assistant → Notion + email
  actions.ts           server actions for the contact form
  soluciones/          one page per service line
  blog/[slug]/         MDX posts
  agenda/  contacto/   lead capture
components/
  visuals/             13 animated illustrations
  solutions/           per-service sections
  seo/  motion/        JSON-LD injection, shared transitions
lib/
  seo/schema.ts        22 schema.org generators
  seo/metadata.ts      metadataBase and per-page metadata
  blog.ts              MDX loading and frontmatter
content/blog/          the posts
```

## Running it locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Four variables, all in `.env.example`: `GROQ_API_KEY` for the assistants,
`NOTION_TOKEN` for the lead database, and `GMAIL_USER` / `GMAIL_APP_PASSWORD`
for outgoing mail. Nothing secret is committed — `.env*` is ignored.
