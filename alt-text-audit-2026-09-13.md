# Contextual image alt-text audit

The story image alternatives were reviewed across the homepage, the five section hubs and individual story pages. The previous descriptions often listed objects in the frame. They now describe the image as the visual companion to the existing story title, which gives screen-reader users the image's editorial role without inventing visual details or repeating a literal inventory.

No article paragraphs, titles, teasers or meta descriptions were changed. The same article-led descriptions were applied to the static HTML cards, individual story pages and the dynamic story data used by the homepage.

All images remain eager loaded. No `loading="lazy"` attributes were introduced.

The final measured local performance results after the image and LCP work were Ecology 92, Inner Work 92 and Wellbeing 90. Accessibility, best practices and SEO were 100 on all three. The remaining performance gap is primarily the cost of eager loading every below-fold story image and the variable Lighthouse test environment. The alt-text change improves accessibility and semantic relevance but is not expected to remove that network cost.
