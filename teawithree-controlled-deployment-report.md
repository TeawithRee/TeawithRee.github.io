# Tea with Ree — controlled deployment report

**Checkpoint:** 27 August 2026

## Release position

The local candidate is now a complete **70-story library build** with the requested section counts: 15 Ecology, 15 Modern Tools, 20 Inner Work, and 20 Wellbeing. The homepage remains deliberately limited to exactly three selected stories: **A Garden Is a Small Climate Conversation**, **In Praise of Small Joys**, and **What Blue and Blaze Have Taught Me About Time**. Monday and Eclipse remain library-only and are not selected for the homepage.

The design gate is substantially reconciled to the brief. The original `homehero.jpg` is preserved, the exact phrase **“A space to pause and reflect”** is present, and the phrase was checked at mobile, tablet, and desktop after explicit positioning into the lower-left dark photographic zone. The page remains light, uses dark text in the white content areas, retains the original colourful social links, avoids the rejected black footer, and keeps the newsletter action visible without the earlier oversized quotation treatment.

## Evidence table

| Gate | Evidence | Result |
|---|---|---|
| Library scope | `stories.json` contains 70 unique story URLs with the required 15/15/20/20 section counts. | **Passed locally** |
| Image assignments | `image-register.json` contains 70 unique image filenames for the 70 library records. | **Passed locally** |
| Homepage feed | Static fallback and dynamic `stories.json` selection both contain exactly three cards. | **Passed locally** |
| Social metadata | Full local HTML sweep found zero root-relative `og:image` or `twitter:image` values. | **Passed locally** |
| Sitemap | Regenerated sitemap contains 77 URLs: shell pages, section pages, and the 70 stories. | **Passed locally** |
| Missing-page handling | Root `404.html` exists with light styling and links to the homepage and articles. | **Passed locally** |
| Responsive rendering | 78 local HTML pages were checked by the bounded render audit. | **Passed locally** |
| HTTP/status gate | Non-200 local pages: 0. | **Passed locally** |
| Request gate | Failed local requests: 0. | **Passed locally** |
| Overflow gate | Horizontal overflow findings: 0. | **Passed locally** |
| Image gate | Broken images: 0. | **Passed locally** |
| Heading gate | Pages without an H1: 0. | **Passed locally** |
| Three-breakpoint article QA | All 26 new articles were captured at 390px, 834px, and 1440px. | **Passed locally with noted asset caveat** |
| Live parity | The public domain has not yet been independently fetched against this expanded candidate. | **Blocked** |
| Launch readiness | A controlled commit and live-versus-repository audit remain before claiming launch. | **Blocked** |

## Remaining release caveat

The new page **What the Body Knows Before the App Does** uses the supplied laptop-screen photograph and describes that visible screen truthfully. It is not presented as a direct portrait of a person or device. The Wellness Event page was reassigned to a distinct quiet-room photograph so that the no-repeat rule is maintained. The register now reports 70 unique image assignments.

## Controlled next action

The correct next action is to commit the publishable site files on `teawithree-mobile-first-redesign`, push that branch, and then compare the public domain against the exact commit before merging or treating the site as launched. The live audit must check the homepage selection, the expanded sitemap, the new article URLs, canonical and social image metadata, the 404 response, and the absence of draft-only notes. If the public domain still serves the older build, the release remains blocked rather than being described as live.
