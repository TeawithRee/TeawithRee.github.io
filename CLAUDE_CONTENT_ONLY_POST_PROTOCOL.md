# Tea with Ree: content-only post protocol

Use this protocol for every ordinary new article. **Do not replace the whole repository, whole HTML file or shared stylesheet.** The approved site shell is protected.

## Protected infrastructure

Do not change `style.css`, navigation or dropdown markup, header, footer, body section classes, fonts, colour tokens, responsive rules, horizontal swipe rails, scripts, `robots.txt`, `sitemap.xml`, `CNAME`, `.nojekyll`, structured-data architecture or existing image paths unless Rehana explicitly approves a site-wide change.

## Safe post workflow

1. Make a dated backup ZIP before editing.
2. Copy the closest existing article template into one new article file.
3. Change only the page-specific content: title, slug, meta description, canonical URL, Open Graph and Twitter copy, author and date, section class, image and alt text, kicker, H1, article body, sources, related links and Back to section link.
4. Add the new article link to the correct section page and sitemap only after Rehana approves the draft.
5. List the exact files changed and show a concise diff summary.
6. Validate the title, one H1, metadata, canonical, structured data, image path, alt text, internal links, UK English, punctuation, sources and mobile swipe behaviour.
7. Never upload a full replacement build for one post unless Rehana explicitly requests a full-site rebuild.

## Safe article content pattern

Preserve the existing template’s navigation, header, footer, scripts and CSS links exactly. Replace only the marked content fields.

```html
<body class="SECTION-CLASS">
  <!-- preserve the existing skip link, header, navigation and dropdown markup exactly -->
  <main id="main-content" class="art">
    <span class="kicker">SECTION NAME</span>
    <h1>ARTICLE TITLE</h1>
    <figure>
      <img src="/IMAGE-FILE.jpg" alt="Accurate descriptive image text" loading="lazy">
      <figcaption>Short, accurate caption.</figcaption>
    </figure>
    <div class="body">
      <p>Approved article copy in Rehana’s voice.</p>
    </div>
    <a class="back section-home" href="/SECTION.html">Back to SECTION NAME</a>
  </main>
  <!-- preserve the existing footer and scripts exactly -->
</body>
```

If a request appears to require changing CSS, navigation, fonts, layout, SEO architecture, scripts or deployment files, stop and ask Rehana before editing.
