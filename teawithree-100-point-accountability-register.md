# Tea with Ree — 100-point accountability register

**Purpose:** This is the working reference for the release. It converts the two controlling documents into 100 numbered checks. Each item has one fixed status: **Passed**, **Failed**, **Not yet checked**, or **Blocked**. A passed item is not reopened unless new evidence directly contradicts it.

**Audit state:** 26 August 2026.  
**Live site:** [teawithree.com](https://teawithree.com/)  
**Trusted baseline:** commit `055ce1c`.  
**Controlling references:** `TeawithReeSource-of-TruthGuide.md` and `TeawithRee—finallive-siteaudit.md`.

## Status rules

| Status | Meaning |
|---|---|
| **Passed** | Checked against evidence and currently meets the requirement. |
| **Failed** | Checked and does not meet the requirement. |
| **Not yet checked** | No reliable evidence has been collected yet. |
| **Blocked** | Cannot be certified until a named dependency or ambiguity is resolved. |

## Accountability rules

Every future change must cite the relevant check numbers, name the exact file or URL changed, and include source evidence, rendered evidence, and data evidence where applicable. Static HTML and `stories.json` must be checked together whenever the homepage feed is involved. No check may be marked **Passed** because a script ran successfully if the rendered result has not also been inspected. A change that makes a previously passed item fail must record the reason and evidence rather than silently overwriting the status.

## A. Identity, mood, and voice

| # | Check | Status | Evidence / next action |
|---:|---|---|---|
| 1 | The site is recognisably Tea with Ree rather than a generic template. | **Failed** | Live visual audit found drift in hero, footer, typography, and card treatment. Reconcile against stable baseline. |
| 2 | The mood is bright and light-filled. | **Failed** | Live footer and some focal imagery are heavy or dark. Restore light treatment and inspect renders. |
| 3 | The mood is warm and personal. | **Passed** | Live About copy and personal portrait are present; preserve while correcting layout. |
| 4 | The mood feels vivid and alive rather than static. | **Failed** | Live page has limited purposeful movement and an unbalanced quote/newsletter rhythm. Review only approved video use. |
| 5 | The visual direction feels quietly opulent, not cold or corporate. | **Failed** | Live composition is coherent but not the approved high-end personal sanctuary. Art-direct the candidate before commit. |
| 6 | No black, charcoal, brown, dull, or gloomy treatment dominates the page. | **Failed** | Live footer is dark charcoal. Replace with light footer. |
| 7 | Copy uses natural human UK English. | **Not yet checked** | Requires page-by-page copy review, including the 49 drafts and live articles. |
| 8 | Copy avoids AI-sounding jargon. | **Not yet checked** | Requires human copy pass across all complete stories. |
| 9 | Copy avoids unnecessary em dashes. | **Not yet checked** | Search and copy review required. |
| 10 | Copy does not claim work is complete without evidence. | **Failed** | Earlier reports overstated completion. This register is now the control. |

## B. Hero and homepage structure

| # | Check | Status | Evidence / next action |
|---:|---|---|---|
| 11 | Homepage uses Rehana’s original `homehero.jpg`. | **Passed** | Live and local checks found `homehero.jpg`. |
| 12 | Hero image is not replaced or regenerated. | **Passed** | No replacement hero was found in the live audit. |
| 13 | Hero phrase is exactly “A space to pause and reflect”. | **Passed** | Live and local H1 text match the locked phrase. |
| 14 | Hero phrase is not shortened or rewritten. | **Passed** | Exact phrase confirmed. |
| 15 | Hero phrase is not duplicated in supporting copy. | **Not yet checked** | Local candidate has a new sentence; run word-level comparison after final copy lock. |
| 16 | Hero phrase is clearly visible. | **Failed** | Live render separates it from the photograph and the intended candidate placed text in an unsafe zone. |
| 17 | Hero text does not cover the hat. | **Failed** | Visual inspection confirmed the hat overlap as a composition flaw in the working candidate. |
| 18 | Hero text does not cover the dog’s face. | **Passed** | Current live screenshot did not cover the dog’s face; verify final candidate after placement. |
| 19 | Hero text does not cover the book. | **Passed** | Current live screenshot places text below the image; final overlay still requires verification. |
| 20 | Hero text does not cover hands or important photographic subjects. | **Passed** | Current live screenshot does not cover them; final candidate requires visual check. |
| 21 | Hero text sits in open grass or a quiet shadow zone. | **Failed** | Live placement is below image and earlier candidate began on the hat. |
| 22 | Hero text has only a soft, local legibility shadow. | **Not yet checked** | Requires final rendered screenshot inspection. |
| 23 | Supporting copy begins with an action verb. | **Passed** | Local candidate begins “Step into…”. Live site still has older copy. |
| 24 | Supporting copy is one concise sentence. | **Passed** | Local candidate has one sentence; live version is not current. |
| 25 | Supporting copy avoids hero-word repetition. | **Not yet checked** | Run exact word comparison after final copy lock. |
| 26 | Supporting copy feels inviting rather than slogan-like. | **Not yet checked** | Requires human copy and visual review. |
| 27 | Homepage has exactly three selected stories. | **Passed** | Live render showed three at mobile, tablet, and desktop. |
| 28 | Homepage does not show a fourth or fifth accidental card. | **Passed** | Render audit showed three cards at all tested widths. |
| 29 | A Softer Monday is removed from homepage selection. | **Failed** | Live homepage still shows it; local registry changed during recovery but the live site is stale. |
| 30 | Eclipse is removed from homepage selection if rejected for brightness. | **Failed** | Live homepage still shows Eclipse. |
| 31 | Homepage replacement story is approved, not guessed. | **Blocked** | Monday and Eclipse are rejected; final supplied replacement must be established from the register. |
| 32 | Homepage static HTML and `stories.json` agree. | **Failed** | Dynamic registry previously overwrote static markup; current live site is behind the local candidate. |
| 33 | Homepage selected feed can evolve when approved stories are added. | **Blocked** | Local data flow exists, but editorial selection rules and live deployment are not proven. |
| 34 | Homepage feed remains human-controlled rather than random. | **Not yet checked** | Define and test selection rules before implementing personalisation. |
| 35 | Homepage card titles are sentence case. | **Passed** | Visible titles are not all-uppercase; verify final CSS. |
| 36 | Homepage card images are modest rather than oversized. | **Failed** | Live desktop cards are small relative to the page while the quote dominates; overall rhythm needs art direction. |
| 37 | Homepage card crops preserve the subject. | **Failed** | Live Monday/Eclipse pairings and crop treatment are not approved. |
| 38 | Homepage card descriptions do not repeat or crowd the page. | **Not yet checked** | Requires final copy and rendered review. |
| 39 | Homepage card links reach the intended articles. | **Passed** | Live card links returned reachable article URLs in the sampled checks. |
| 40 | Homepage uses no fake or AI-generated image. | **Blocked** | Rejected Oura flower/screen image is excluded, but all 51 live image assignments still require approval mapping. |

## C. Quote, newsletter, footer, and socials

| # | Check | Status | Evidence / next action |
|---:|---|---|---|
| 41 | Original quote is preserved word for word. | **Not yet checked** | Compare the live quote with the stable baseline and supplied guide. |
| 42 | Quote remains a separate full-width section. | **Passed** | Live quote is separate from hero and cards. |
| 43 | Quote is restrained rather than giant. | **Failed** | Live mobile render shows quote dominating the page. |
| 44 | No giant quotation marks are added. | **Passed** | No visible oversized quotation mark was found in live render. |
| 45 | No “From…” or similar invented quote label is present. | **Passed** | Live render did not show the banned label. |
| 46 | Newsletter heading is not ginormous. | **Passed** | Live heading is smaller than quote; final balance still needs review. |
| 47 | Newsletter signup action is visible. | **Passed** | Live page exposes email field and Sign up button. |
| 48 | Newsletter styling is quiet and proportionate. | **Failed** | Live hierarchy makes it too subordinate to the quote. Rebalance carefully. |
| 49 | Footer is light with dark readable text. | **Failed** | Live footer is dark charcoal. |
| 50 | Original social links are retained. | **Passed** | Live Instagram, TikTok, Facebook, and LinkedIn destinations are present. |
| 51 | Original social colours and icons are retained. | **Passed** | Live render shows the colourful social icon treatment. Preserve exactly. |
| 52 | Social links do not point to GitHub or unrelated destinations. | **Passed** | Live links point to the named social profiles. |
| 53 | Footer credit language is present and accurate. | **Passed** | Live footer includes Rehana Rutti and photography credit language. |
| 54 | Footer does not contain unnecessary visual rules. | **Not yet checked** | Check computed styles and final renders after light-footer correction. |
| 55 | Footer does not create a heavy visual ending. | **Failed** | Live charcoal block creates the heavy ending explicitly rejected. |

## D. Typography, spacing, and responsive composition

| # | Check | Status | Evidence / next action |
|---:|---|---|---|
| 56 | Clear semantic H1 exists on every complete page. | **Passed** | Live/local comparison found no H1 mismatch on sampled pages. |
| 57 | H2 sections are used for major blocks. | **Not yet checked** | Full semantic hierarchy audit required. |
| 58 | H3 headings are used for story cards/subsections. | **Not yet checked** | Full page audit required. |
| 59 | H4 or smaller footer headings are proportionate where used. | **Not yet checked** | Full footer structure audit required. |
| 60 | Body text is readable at approximately 16–18px. | **Failed** | Live visual capture shows several small teaser and utility text areas. Measure representative pages. |
| 61 | Headings are not oversized. | **Failed** | Live hero and quote hierarchy are visually too large in places. |
| 62 | Utility actions are not tiny. | **Failed** | Some live labels/actions are visually small, especially around newsletter and page utilities. |
| 63 | Navigation is light and consistent. | **Passed** | Live navigation is present and readable; case styling still needs correction. |
| 64 | Navigation is sentence case. | **Failed** | `Selected Stories` and other labels show forced-capital styling. |
| 65 | Ugly horizontal rules are absent. | **Not yet checked** | Local CSS attempts removal; live computed/rendered verification required. |
| 66 | Mobile composition is deliberately designed, not merely shrunk. | **Failed** | Live mobile hero, quote, footer, and card rhythm do not meet the guide. |
| 67 | Tablet composition is deliberately designed. | **Not yet checked** | Render and inspect final candidate at 834px. |
| 68 | Desktop composition is deliberately designed. | **Failed** | Live desktop has weak card scale, heavy footer, and wrong hero treatment. |
| 69 | No horizontal overflow occurs at 390px. | **Failed** | Live render audit found overflow on sampled article pages. |
| 70 | No horizontal overflow occurs at 834px. | **Failed** | Live render audit found overflow on sampled article pages. |

## E. Photography, stories, and metadata

| # | Check | Status | Evidence / next action |
|---:|---|---|---|
| 71 | Personal photographs are used first. | **Blocked** | Register and live mappings are not fully reconciled. |
| 72 | Every story image visibly belongs to its title. | **Failed** | Live Inner Work page visibly pairs eclipse title with an abstract book/colour image. |
| 73 | Every article image matches its landing card image. | **Failed** | Six live/local mismatches were identified. |
| 74 | Every image has accurate alt text. | **Not yet checked** | Full 51-page alt comparison required. |
| 75 | Every image has an accurate caption where intended. | **Not yet checked** | Local mapping audit found caption mismatches; full review required. |
| 76 | Visible image, OG image, Twitter image, and JSON-LD image agree. | **Failed** | Several pages have share images different from visible images. |
| 77 | All social image URLs are absolute. | **Not yet checked** | Live pages need complete metadata sweep after final deployment. |
| 78 | No image is repeated across unrelated stories. | **Not yet checked** | Requires perceptual-hash or register review across all 70 stories. |
| 79 | Rejected Monday image is not used on the homepage. | **Failed** | Live homepage still uses Monday. |
| 80 | Rejected Eclipse image is not used on the homepage. | **Failed** | Live homepage still uses Eclipse. |
| 81 | Rejected Oura flower/screen image is not used. | **Failed** | Local mapping currently uses the green-shoes image in part of the Oura story; the asset is rejected for use as Rehana’s image. |
| 82 | Tracker and Oura sleep use distinct, truthful assets. | **Blocked** | `oura.jpg`, `oura-ring-approved-pexels.jpeg`, `sleep-smartphone.jpg`, and green-shoes asset are inconsistent across live, local, and register mappings. |
| 83 | Blue and Blaze uses the exact approved supplied asset. | **Verified** | The current page and share metadata use the approved JPG; the older file was retired. |
| 84 | Path Less Travelled uses the exact approved road asset. | **Failed** | Live and local filenames differ. |
| 85 | Article titles and H1s match their intended stories. | **Passed** | Live/local H1 comparison found no sampled mismatch. Full 70-story validation remains. |
| 86 | No draft notes appear in live page bodies. | **Passed** | 0 draft-note occurrences in 51 fetched live pages. |
| 87 | Books and Travel are absent from active scope. | **Passed** | No active Books/Travel sitemap section was found in the current live audit. |
| 88 | Active sitemap contains only valid intended URLs. | **Not yet checked** | URL validity passed, but section completeness and duplicate intent need review. |
| 89 | The 70-story target is met by complete live articles, not drafts. | **Failed** | Live sitemap contains 51 URLs and evidence does not prove 70 complete approved articles. |
| 90 | Section counts are 15 Ecology, 15 Modern Tools, 20 Inner Work, 20 Wellbeing. | **Blocked** | Must count complete live stories, excluding landings, drafts, and rejected entries. |

## F. Tea Notes, About, video, analytics, and release process

| # | Check | Status | Evidence / next action |
|---:|---|---|---|
| 91 | Tea Notes remains in the site. | **Passed** | Live navigation and page are present. |
| 92 | Tea Notes clearly presents Reset, Renew, and Becoming. | **Passed** | Live page contains all three ideas. |
| 93 | Tea Notes feels confidential and inviting. | **Not yet checked** | Requires visual/copy review against the controlling guide. |
| 94 | Tea Notes More information action is internal and prominent. | **Failed** | Live action is still a `mailto:` link. |
| 95 | About uses the supplied personal portrait. | **Passed** | Live About page shows the personal portrait. |
| 96 | About portrait is composed as the heart of the page. | **Failed** | Live layout is side-by-side; the guide requires a deliberate centred/personal composition. |
| 97 | Videos have a real source, poster, credit, fallback, and reduced-motion behaviour. | **Not yet checked** | Review every video element and source before adding or retaining movement. |
| 98 | Personalisation is consent-based and privacy-safe. | **Blocked** | Google Analytics page-view requests are present, but no evidence proves consent handling or personalised story selection. |
| 99 | Live site matches the committed release candidate. | **Failed** | Live homepage, images, footer, Tea Notes action, and mappings differ from local work. |
| 100 | The release is ready to commit and launch. | **Blocked** | Launch gate remains blocked until all failed and blocked checks are resolved and the final live audit passes. |

## Current scorecard

| Status | Count |
|---|---:|
| Passed | 29 |
| Failed | 38 |
| Not yet checked | 22 |
| Blocked | 11 |
| **Total** | **100** |

The counts above are a tracking snapshot, not a quality score. A single failed launch-critical item blocks release even if many technical checks pass.

## Immediate work order

The next controlled work order is: first reconcile the supplied image register and remove rejected assets from consideration; second restore the homepage from the trusted baseline and update static HTML plus `stories.json` together; third correct the hero safe zone, supporting sentence, quote, newsletter, sentence case, and light footer; fourth reconcile every article’s visible image, alt, caption, OG, Twitter, and JSON-LD data; fifth render representative pages at mobile, tablet, and desktop and fix overflow; sixth count the complete live 70-story scope; seventh commit the verified branch; and only then deploy and rerun this register against the live domain.

No item may be changed because of a hunch. Every correction must be tied to a check number and backed by source, visual, and data evidence.

## References

[1]: https://teawithree.com/ "Tea with Ree live site"
[2]: https://teawithree.com/sitemap.xml "Tea with Ree live sitemap"


## Latest evidence update — 26 August 2026

This update records the latest controlled candidate checks without changing the historical statuses above. The local candidate was checked after the approved garden replacement, dynamic registry alignment, Blue and Blaze wording correction, Monday description correction, and Sauna title alignment.

| Area checked | Current evidence | Status |
|---|---|---|
| Local registered story mappings | `local_mapping_audit.py` checked 46 registered pages. Image, alt, caption, OG image, Twitter image, and H1 comparisons returned no remaining mismatches. | **Passed locally** |
| Local homepage selection | Static HTML and `stories.json` both contain three stories: A Garden Is a Small Climate Conversation, In Praise of Small Joys, and What Blue and Blaze Have Taught Me About Time. | **Passed locally** |
| Monday homepage exclusion | A Softer Monday is not in the local selected feed. Its article remains in the library and now describes the inspected clock-and-MONDAY-sign photograph accurately. | **Passed locally; live blocked** |
| Eclipse homepage exclusion | The Eclipse story is not in the local selected feed. | **Passed locally; live blocked** |
| Oura flower image exclusion | The rejected flower image is not used in the local selected feed. Oura-related article mappings remain a separate full-library verification item. | **Passed for local homepage; library review remains open** |
| Local responsive homepage | Mobile, tablet, and desktop render checks show exactly three cards, no horizontal overflow, no visible divider line, a white footer, and sentence-case navigation. | **Passed locally** |
| Hero composition | The original image and exact phrase are present. The phrase is clear of the hat but still needs a final visual art-direction decision because its desktop/mobile line wrapping approaches the dog’s body. | **Open** |
| Live parity | The public domain still serves the older homepage, old selected stories, dark footer, old Tea Notes action, and older image mappings. | **Failed live; launch blocked** |
| 70-story scope | The local register currently covers 46 mapped pages; the live sitemap contains 51 URLs. This does not prove the required 15/15/20/20 complete-story scope. | **Blocked** |

The release cannot be certified or published until the local candidate’s remaining visual decisions are resolved, the full 70-story scope is evidenced, and the live domain is deployed from the same verified commit and rerun through the audit.


## 27 August 2026 — current controlled-build checkpoint

| Check | Status | Evidence | Next action |
| --- | --- | --- | --- |
| Local homepage selected feed | Passed locally | `stories.json`, `index.html`, `reconcile_after_registry_latest.txt` | Keep the three verified cards aligned in both data and fallback markup. |
| Rejected Monday and Eclipse on homepage | Passed locally / failed live | `stories.json` excludes both; live audit still finds older cards | Do not deploy until live parity is proven. |
| Rejected flower Oura image | Passed locally / failed live parity | Current local register uses non-floral mappings; live domain remains older | Verify deployed build after any future push. |
| Blue and Blaze title/image/alt/caption | Passed locally | `ecology-blue-and-blaze.html`, `stories.json`, local reconciliation | Preserve exact approved asset and truthful laptop-screen description. |
| Current registered library alignment | Passed for 44 mapped story pages | `reconcile_after_registry_latest.txt` reports 0 image, alt, caption, OG, Twitter, H1 mismatches | Do not call this the full 70-story library. |
| Full 70-story scope | Blocked | `library_scope_latest.txt`: current sections are 10/9/12/13; drafts are not image-approved or published | Reconcile and approve the remaining 26 complete stories before launch. |
| Visual homepage gate | Passed on current local screenshots with notes | `mobile-homepage-final.png`, `desktop-homepage-final.png`, `aesthetic_findings.md` | Keep checking the hero’s open grass zone and do not move text onto the hat, dog, book, or hands. |
| Responsive homepage gate | Passed at 390, 834, and 1440 widths | `render_check_latest_after_readability.txt` | Run page-type-wide renders after the library is complete. |
| Live parity | Blocked | `final-live-audit-report.md` and live screenshots | Deploy only after local release gate passes, then rerun live audit. |


## 27 August 2026 — full local library and release-candidate checkpoint

This checkpoint supersedes earlier local-only counts while preserving the historical record. It does not certify the public domain until the controlled deployment and independent live audit are complete.

| Area checked | Current evidence | Status |
|---|---|---|
| Complete local story library | `stories.json` contains exactly 70 unique library URLs: 15 Ecology, 15 Modern Tools, 20 Inner Work, and 20 Wellbeing. Every registry URL exists as a local HTML page. | **Passed locally** |
| Homepage selected feed | `stories.json` and the static fallback contain exactly three selected stories: Garden, In Praise of Small Joys, and Blue and Blaze. | **Passed locally** |
| Image uniqueness | All 70 library records now use 70 unique registered image filenames. No duplicate image assignment remains in the registry. | **Passed locally** |
| New article metadata | The 26 added pages have absolute canonical, `og:url`, `og:image`, Twitter image, and JSON-LD image URLs generated from the same visible asset. | **Passed locally** |
| New article visual QA | All 26 added pages were captured at 390px, 834px, and 1440px. Contact sheets show consistent article structure, 3:2 image treatment, controlled headings, and no first-viewport crop failures. | **Passed locally with noted asset caveat** |
| Rejected homepage stories | Monday and Eclipse remain library-only and are excluded from the selected feed. | **Passed locally; live unverified** |
| Approved personal asset discipline | No generated images were introduced. The new map uses existing supplied/local assets; rejected flower-ring imagery is not selected for the homepage. | **Passed for current local map; full provenance remains a release note** |
| Absolute social image URLs | Full HTML search found zero root-relative `og:image` or `twitter:image` metadata failures. | **Passed locally** |
| Sitemap | Regenerated from the 70-story library plus shell and section pages: 77 URLs. | **Passed locally** |
| Missing-page experience | Root `404.html` now exists with a light house-style message and links to the homepage and articles. | **Passed locally** |
| Full bounded render audit | 78 local HTML pages checked. Non-200 pages: 0. Failed requests: 0. Horizontal overflow findings: 0. Broken images: 0. Pages without H1: 0. | **Passed locally** |
| Live parity | The public domain has not yet been independently rechecked against this expanded candidate, and no deployment has been made in this checkpoint. | **Blocked** |
| Release readiness | Local candidate is substantially complete, but launch remains blocked until the controlled commit/deployment and live-versus-repository audit pass. | **Blocked** |

The remaining caveat is deliberate and visible rather than hidden: “What the Body Knows Before the App Does” uses the supplied laptop-screen photograph and describes it truthfully, while the new “Wellness Event” page now uses a distinct quiet-room photograph. The image register is unique, but final launch still requires the live domain to serve this exact candidate and an independent fetch to confirm parity.
