# Tea with Ree

**A space to pause and reflect.**
Words wander through ecology, inner work, wellbeing and the tools shaping our time.

*Where reflection meets curiosity.*

Written by Rehana Rutti. Cape Town, South Africa.
Live at **[www.teawithree.com](https://www.teawithree.com)**.

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

**The picture accompanies the story.** It is never described in the article,
and it may have no direct bearing on the words. It carries the feeling.

**Every picture carries its own label.** The `alt` text is one short sentence:
a few words naming what is in the frame, followed by the feeling. For example,
a windswept beach might read "A windswept beach, my thoughts are messy." Never
"image of" or "photo of". No two pages share a label. This is what Google
Images and screen readers read.

**Every picture declares its size.** `width` and `height` on the tag, matching
the file. Without them the page jumps around while it loads, which costs real
marks on mobile.

**Pictures stay light.** Nothing over about 320KB. Card frames crop to three by
two in CSS, so a picture never needs squashing to fit.

**Names tell the truth.** A file called `-900w` is exactly 900 pixels wide. The
numbers in `srcset` match the real widths of the files.

**No visible publication dates.** Do not show dates on article pages or include
them in Open Graph or structured data. The sitemap and RSS feed may still use
dates as technical metadata for search engines and feed readers.

**Lines are not decoration.** Space separates sections, not rules across the
page.

---

## Publishing a new article, step by step

### 1. The pictures

Each picture is saved as WebP in up to three sizes, with each file kept under 320KB where practical:

| File | Width |
|---|---|
| `section-story-name-480w.webp` | 480 pixels |
| `section-story-name-900w.webp` | 900 pixels |
| `section-story-name.webp` | Full-size image (usually up to 1280 pixels wide) |

If the original picture is narrower than 900 pixels, make only the `-480w`
file and the full-size file, and give the full-size file its real width in
`srcset`. For example: `srcset="/name-480w.webp 480w, /name.webp 819w"`.
Never stretch a small picture to fill a bigger name. If an image is larger than
1280 pixels, resize it to a sensible display width before exporting the WebP.

### 2. The article page

Copy an existing article page and replace its words, picture, title, meta
description, canonical link, Open Graph, Twitter and structured data. Every
full address uses `https://www.teawithree.com` (with www). Links between pages
start with `/`, for example `/wellbeing-rest-is-not-a-reward.html`.

### 3. The section page

Add a card for the story to its section page (`ecology.html`,
`inner-work.html`, `wellbeing.html` or `tools.html`), at the top of the right
group. The card uses the same picture and alt text as the article.

### 4. `stories.json`

Add the story to the top of the `library` list. See the full example under
"Publishing a new story on the home page" below. Only add it to `selected` if
it should appear on the home page.

### 5. `sitemap.xml`

Add one entry:

```xml
<url>
    <loc>https://www.teawithree.com/section-story-name.html</loc>
    <lastmod>2026-09-28</lastmod>
  </url>
```

### 6. The RSS feed, `feed.xml`

Add one item at the top, just after the channel details:

```xml
<item>
      <title>Story Title | Tea with Ree</title>
      <link>https://www.teawithree.com/section-story-name.html</link>
      <guid isPermaLink="true">https://www.teawithree.com/section-story-name.html</guid>
      <description>The opening lines of the story.</description>
      <pubDate>Mon, 28 Sep 2026 09:00:00 GMT</pubDate>
      <category>Wellbeing</category>
    </item>
```

The feed should always hold the same stories as the `library` in
`stories.json`.

### 7. Before uploading, check

- [ ] Every picture file exists, is under 320KB, and its name matches its width
- [ ] `srcset`, `width` and `height` match the real files
- [ ] The alt text follows the house rule and is not used on any other page
- [ ] The article is not describing its picture
- [ ] Canonical, Open Graph and structured data use the www address
- [ ] The section page card links to the right article
- [ ] `stories.json` still opens without errors and ends with a new line
- [ ] The story is in `sitemap.xml` and `feed.xml`
- [ ] Add the new files to the repository. Never replace the whole repository

After uploading, request indexing in Google and Bing (see "How the site is
found").

---

## Publishing a new story on the home page

The three cards under **Selected Stories** come from the `selected` list in
`stories.json`, not from `index.html`. Add the new story at the top and remove
the last one. A full entry looks like this:

```json
{
  "url": "/ecology-garden-climate-conversation.html",
  "title": "A Garden Is a Small Climate Conversation",
  "image": "/garden-climate-approved.webp",
  "alt": "A garden in full growth, a climate conversation happening one plant at a time.",
  "caption": "A garden can be a small climate conversation, lived one plant at a time.",
  "desc": "A patch of garden measurably cools the air around it compared to the pavement nearby, cities have measured this for years. Not everyone gets a garden.",
  "section": "Ecology",
  "homepageEligible": true,
  "approved": true,
  "pathway": "renew"
}
```

Commit, and the home page updates itself. If that file ever has a typo the page
quietly falls back to the cards written inside `index.html`, so it cannot break.

---

## How the site is found

| File | What it does |
|---|---|
| `sitemap.xml` | The list of pages, for Google and Bing |
| `feed.xml` | The RSS feed, so readers and apps can follow new stories |
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
