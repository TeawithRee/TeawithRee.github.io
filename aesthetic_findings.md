# Aesthetic findings

The locked `homehero.jpg` has clear open grass across the upper-left and upper-right, while the hat occupies the lower-left and the dog and book occupy the centre-right. Hero copy must not begin on the hat; the safest readable area is the lower-right grass/shadow area, kept clear of the book and hands.

The approved `softer-monday-approved.jpg` is a bright blue composition with a white alarm clock and a white MONDAY sign. It is a 3:2 image and is suitable for the modest homepage card crop without inventing or substituting another photograph.

## 26 August 2026 — release-candidate visual checkpoint

The mobile homepage render at 390px shows the original dog-and-book hero intact. The phrase is in the upper-left grass zone and does not begin on the hat, but the large serif text spans three lines and reaches visually toward the dog’s body; this remains an art-direction item to review rather than a source/data failure. The page shows exactly three cards, a restrained quote, a visible signup action, colourful social icons, and a light footer with no horizontal overflow.

The inspected `blue-and-blaze-approved.jpg` is a photograph of two dogs eating from bowls while displayed on a Dell laptop screen, with visible screen framing and taskbar. Therefore the current title “What Blue and Blaze Have Taught Me About Time” can be true, but the existing alt/caption “resting together in the afternoon sun” is not an accurate description of the visible photograph. The asset is supplied/approved for this story, but its wording must be aligned to what viewers actually see before release. No substitute image was introduced.

The inspected `softer-monday-approved.jpg` clearly shows a white alarm clock above a white sign reading MONDAY on a bright blue background. The previous alt/caption text about a notebook and yellow calla lilies was inaccurate. The story is excluded from the homepage, but its library metadata must describe the clock and sign if the article remains live.

The inspected `blue-and-blaze-approved.jpg` clearly shows a white dog and a black dog eating from bowls in a photograph displayed on a laptop screen. The article and dynamic card metadata were corrected to state that visible scene rather than claiming the dogs were resting in afternoon sun.


## Current local homepage art-direction review

The mobile and desktop renders both preserve the original photograph, use exactly three selected cards, show a light footer, and contain no horizontal overflow. The phrase is in the upper-left grass area rather than on the hat, which avoids the previously identified hat overlap. The supporting sentence is beneath the image and does not repeat the hero phrase.

Visible flaws remain. The `Selected Stories` label is still rendered visually in capitals/small capitals despite the sentence-case requirement. The supporting sentence is too small and too lightly weighted to carry the intended welcome on mobile and desktop. The hero phrase breaks into three lines on mobile and begins near the dog’s upper body; it is legible but needs a final composition pass for breathing room. The card row is technically consistent, but Blue and Blaze displays a laptop-screen photograph, which is truthful to the approved asset but less emotionally strong than the other two cards and should not be changed without an approved replacement. The quote is restrained and the newsletter is not oversized, though the sign-up action is visually faint and should remain easy to find.


## Post-readability visual gate

The updated mobile and desktop renders now show the Selected Stories label in sentence case, a more legible supporting sentence, exactly three cards, and a visible sign-up action. The quote remains restrained, the footer remains white, and the original colourful social icons remain intact.

The hero phrase is clear of the hat and book. It sits in the upper-left grass area, although on desktop its lower line approaches the dog’s body; this is visually safer than the earlier hat placement but remains an art-direction consideration, not a data pass. The Blue and Blaze card now has truthful alt text in both static and dynamic paths; the photograph itself visibly includes the laptop screen and should not be described as a direct portrait of the dogs.


## Page-type render inspection — 27 August 2026

### Ecology desktop
The local Ecology page is light and spacious, with a coherent card rhythm at desktop. It contains an ambient-video block and several card rows; those still require the same evidence-based image and crop checks as the homepage. The footer is light and the colourful social links remain present. The section heading is proportionate, while the body and card typography appear small at full-page scale and need viewport-level confirmation before any global type change.

### About desktop
The About page uses a centred personal portrait and a narrow reading column, which is closer to the requested personal sanctuary than a side-by-side layout. It is light and calm, with the colourful social links retained. The newsletter heading is prominent but not oversized relative to the page. The remaining release checks are confirmation of the supplied portrait asset and copy, plus consistency with the homepage.


## Tea Notes and Wellbeing render inspection — 27 August 2026

### Tea Notes desktop
Tea Notes is light, centred, and recognisably a business page rather than a generic article. Reset, Renew, and Becoming are clearly separated, and the internal action is visible. The hero image is prominent and the rose-and-tea image is warm, but the large italic confidentiality statement below the three columns still takes too much vertical and visual weight for the requested quiet luxury. The wording and link treatment should be checked against the supplied guide; no social or footer colour changes are warranted.

### Wellbeing desktop
The Wellbeing landing page has a consistent card grid and a light overall treatment. The tracker card uses a black ring image and the sleep card uses a separate sleep photograph in the local candidate, so the two Oura-related stories are visually distinct locally. Several later cards use generic exercise, flowers, and product imagery; they must remain subject to the supplied-asset register and must not be accepted merely because the layout is consistent. The page has a large ambient feature image near the bottom; its title, image, credit, and crop require the same story-to-image evidence check before release.


## Modern Tools and Inner Work render inspection — 27 August 2026

### Modern Tools desktop
The local Modern Tools page has a consistent light card system and a readable section heading. The first-row imagery is visually varied, but several assets feel like generic technology stock imagery rather than personal evidence; they must remain governed by the supplied asset register and provenance. The ambient writing image is well composed but is a supporting visual, not evidence that every card image is approved. The section is technically coherent, but the copy and imagery require a credibility pass before any 70-story launch.

### Inner Work desktop
The local Inner Work page has a clear card grid and a light background, but it visibly contains the eclipse card and Monday card in the library, which is acceptable only if they remain library stories and are not homepage selections. The selected page has several colourful or generic visual treatments; some may be useful supplied assets, but their provenance and title alignment must be recorded rather than inferred from appearance. The lower ambient forest feature creates movement and depth, though its credit and relationship to the section need a final metadata check.


## Bounded homepage render gate — 27 August 2026

The current local candidate now renders without overflow or broken images across the full local HTML set. The mobile and desktop captures confirm exactly three cards, a light page, the original colourful social links, a separate quote, and a visible signup action.

The visual inspection also identifies a remaining composition issue: the hero phrase is visibly clear of the hat, but it sits near the upper-left image edge and breaks into three lines on mobile. It reads, but it is not yet the calm, carefully placed luxury treatment described in the guide. The supporting sentence is centred beneath the image and does not repeat the hero words. The selected card set is currently Garden, In Praise of Small Joys, and Blue and Blaze; each card image matches its local registered article asset, although the Blue and Blaze photograph includes the visible laptop screen and is less emotionally seamless than the other two. The quote and newsletter are restrained enough to avoid the earlier oversized treatment, while the lower page remains light.

## Revised hero inspection — 27 August 2026

The first reposition attempt is rejected by QA. On both mobile and desktop, only the final word “reflect” is visible at the top edge of the image, so the locked phrase is clipped and the composition is worse. The cause was the homepage cover’s existing flex alignment interacting with the new override. Do not ship that state. The correction now uses explicit absolute positioning for the H1 itself with bottom and left coordinates. The complete phrase is visible on mobile and desktop, sits in the lower-left dark photographic zone, and is clear of the dog and open book. The hat pattern sits behind part of the text area, but the dark shadow and text shadow preserve readability; Tablet now passes the same composition check: the exact phrase is fully visible in the lower-left dark zone, with no overlap into the dog or book. The homepage hero composition is therefore passed at mobile, tablet, and desktop. The remaining homepage art-direction note is intentional: the lower-left hat pattern is part of the original photograph and remains visible behind the white type, rather than being masked or replaced.

## Unused asset visual inspection — 27 August 2026

The supplied unused pool contains usable, distinct photographs for the remaining library work: rainforest and notebook scenes for Ecology, a rescue dog and coastal/table-mountain scenes for conservation writing, bright technology still-lifes for Modern Tools, and personal-looking meditation, gardening, reading, conversation, walking, fitness, food, and tea scenes for Inner Work and Wellbeing. It also contains several clearly unsuitable or already-rejected candidates, including duplicate dog files, unused eclipse variants, generic book/travel assets, and image files whose filenames do not establish approval. The new publication map must use the visibly relevant candidates only and must not reuse current registered images.

## New-article contact-sheet QA — 27 August 2026

The mobile and desktop contact sheets show all 26 new pages rendering with the same calm article structure: small sentence-case section kicker, controlled serif H1, consistent 3:2 image treatment, readable body copy, and a light footer. No clipped headings or broken image boxes are visible in the sampled first viewport. One credibility mismatch is present in the current assignment: “The Wellness Event as a Shared Room” uses the same meditation photograph as “How to Stay Tender Without Becoming Naive”, which violates the no-repeat rule even though both crops render cleanly. That page must be reassigned to a distinct unused supplied asset before the library can be marked fully passed. The “What the Body Knows Before the App Does” asset is a laptop-screen photograph; its caption is truthful, but it is a weak emotional match and should be retained only if no approved replacement exists.
