# Tea with Ree site audit

**Date:** 13 September 2026

This audit checks existing content and site infrastructure only. No article has been rewritten, expanded or shortened. Articles that are short remain short by design.

## Editorial integrity checks

The existing HTML contains 78 pages with substantial paragraph content. The mechanical scan found no em dashes, en dashes or comma-before-and pattern in the scanned paragraph copy. No article wording was changed during this task. A small number of pages are hub pages rather than individual essays and were not treated as essays for editorial judgement.

The audit did not infer or invent fact sources. Verifying the factual basis of every existing claim requires a source-by-source research pass. That is a review task, not a rewrite, and should be reported per article rather than silently altering the public copy.

## SEO and discoverability changes

The sitemap now includes every published article page. The About page now has an AboutPage, Person and Organization JSON-LD graph. The site already had canonical links, page descriptions, Open Graph metadata and collection or article structured data on the principal pages.

Two machine-readable discovery files were added. `ai.txt` provides attribution and canonical index guidance. `llms-full.txt` provides a title, canonical URL and existing description for each indexed story without changing the article body.

## Performance changes

Inner Work, Ecology and Wellbeing hub images now use every available 480 pixel and 900 pixel responsive derivative in their existing `srcset` markup. The first hub image is marked high priority and the remaining eager-loaded images use low fetch priority. This preserves the requirement that no image uses lazy loading while reducing competition for the first viewport.

## Existing Lighthouse baseline

| Page | Performance | Accessibility | Best practices | SEO |
|---|---:|---:|---:|---:|
| Homepage | 90 | 100 | 96 | 92 |
| About | 85 | 100 | 96 | 100 |
| Tea Notes | 98 | 95 | 100 | 100 |
| Ecology | 79 | 100 | 96 | 100 |
| Inner Work | 62 | 100 | 100 | 100 |
| Modern Tools | 87 | 100 | 96 | 100 |
| Wellbeing | 86 | 100 | 100 | 100 |
| Rescue Stories article | 93 | 100 | 100 | 100 |

These scores are a baseline from Lighthouse 12.8.2 against the live site before the responsive image priority changes. Scores vary with network conditions. The target is to bring the three image-heavy hubs toward 95 without reintroducing lazy loading or changing editorial copy.
