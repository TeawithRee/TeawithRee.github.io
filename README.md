# Tea with Ree

**A space to pause and reflect.**
Words wander through ecology, inner work, wellbeing and the tools shaping our time.

*Where reflection meets curiosity.*

Written by Rehana Rutti. Cape Town, South Africa.
Live at **[teawithree.com](https://teawithree.com)**.

---

## Sections

| | |
|---|---|
| **Ecology** | Rescue, rewilding and the quiet lives around us |
| **Inner Work** | Confidence, stillness and the discipline of noticing |
| **Wellbeing** | The body as a landscape, not a machine |
| **Modern Tools** | Technology that serves thought, not the other way round |
| **Tea Notes** | Private coaching conversations, shaped around Reset, Renewal and Becoming |
| **About** | Rehana Rutti |

Tea Notes is enquiry-led. Enquiries go to teawithree7@gmail.com.

---

## House rules

These are the rules the site is held to. Anything that breaks one is a bug.

**One picture per story.** The picture on a section page is the same file that
appears at the top of the story. Never a different one.

**Every picture carries its own label.** A plain `alt` sentence describing what
is actually in the frame. No two pages share a label. This is what Google
Images and screen readers read, and it is the part of the site's SEO that most
often goes wrong.

**Every picture declares its size.** `width` and `height` on the tag, matching
the file. Without them the page jumps around while it loads, which costs real
marks on mobile.

**Pictures stay light.** Nothing over about 320KB. Card frames crop to three by
two in CSS, so a picture never needs squashing to fit.

**No dates.** Not visible, not in Open Graph, not in structured data.

**Lines are not decoration.** Space separates sections, not rules across the
page.

---

## Publishing a new story on the home page

The three cards under **Selected Stories** come from `stories.json`, not from
`index.html`. Add the new story at the top and remove the last one:

```json
{
  "url":   "/inner-work-your-story.html",
  "title": "Your Story",
  "image": "/your-image.jpg",
  "alt":   "A plain description of the picture."
}
```

Commit, and the home page updates itself. If that file ever has a typo the page
quietly falls back to the cards written inside `index.html`, so it cannot break.

---

## How the site is found

| File | What it does |
|---|---|
| `sitemap.xml` | The list of pages, for Google and Bing |
| `robots.txt` | Welcomes Google, Bing, DuckDuckGo, Apple, and the AI crawlers: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot |
| `llms.txt` | A plain-language summary of the site for AI assistants that read it |
| JSON-LD | Structured data on every page: WebSite, Person, Blog |

**Google Analytics** runs on every page.

**After publishing changes**, ask the search engines to re-read the site or they
keep showing the old text for weeks:

- Google — [Search Console](https://search.google.com/search-console) → URL Inspection → paste the address → Request Indexing
- Bing — [Webmaster Tools](https://www.bing.com/webmasters) → URL Submission

---

## How it is built

A static site on GitHub Pages. No framework, no build step. Every page is plain
HTML sharing one stylesheet, `style.css`. To change something, edit the file and
commit.

---

© 2026 Tea with Ree · Rehana Rutti. All rights reserved.
