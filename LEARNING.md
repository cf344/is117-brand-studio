# Conversation evidence

AI-drafted task evidence, not a transcript or grade. This file may be public: review, correct or remove excerpts before commit/push. Use short actual quotes or labeled paraphrases and disclose help. Approval alone is not an explanation; leave missing evidence pending.

- **Feature:** BRAND-001 — Off Hours branded storefront and style guide
- **Date:** November 13, 2026 (keyboard test reported)
- **Conversation context available:** Student-reported keyboard test in ChatGPT; see results below.
- **Review status:** Keyboard and mobile results supplied by learner; learner's own explanation of the automated test recorded below; learner confirmed bag-icon visibility, correct bag size/quantity, and mobile operation on November 17; latest automated check and independent reviewer retry remain pending.

## Student contributions

| Checkpoint                                   | Actual student words or labeled paraphrase                                                  | Assistance supplied                                                                 | Evidence or gap                                                                                                                                                                                                                                           |
| -------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Choice and reason                            | Pending                                                                                     | Pending                                                                             | Pending                                                                                                                                                                                                                                                   |
| Prediction or visitor benefit                | Pending                                                                                     | Pending                                                                             | Pending                                                                                                                                                                                                                                                   |
| Interpretation of one actual test            | Learner's own explanation is quoted below.                                                  | AI asked what the check meant; learner supplied the explanation in their own words. | Passing automated checks plus manual keyboard and phone observations; no claim of full accessibility.                                                                                                                                                     |
| Browser observation and keep/revise decision | Student confirmed Tab navigation worked after changing Safari keyboard navigation settings. | AI explained Safari settings and guided the test.                                   | Learner reported mobile site works and suggested making the top-right bag/cart control more visually recognizable; the learner chose to keep the original bag feature and add an icon; the code change was committed, but visual verification is pending. |

## AI work and evidence links

- **Work performed by AI:** Helped explain keyboard navigation and prepare this evidence record. Earlier AI-assisted brand implementation and peer-review revisions are documented in SPEC.md and PR #11.
- **SPEC, issue/PR, actual checks and artifacts:** [SPEC.md](SPEC.md); [peer-review revision PR #11](https://github.com/cf344/is117-brand-studio/pull/11); [GitHub Actions](https://github.com/cf344/is117-brand-studio/actions); [published storefront](https://cf344.github.io/is117-brand-studio/). The learner reported that a later GitHub Actions run worked; the specific run URL has not been recorded.

**Mobile observation (student report):** "it works. but I think that we need to have a bag/cart icon on the top right, so whenever we add something in the cart it appears." The student reported that the mobile site worked and proposed a clearer visual cart indicator. This is a design suggestion, not a claim that an icon has already been implemented or that every mobile feature was tested.

**Learner's own test explanation (verbatim):**

> The passing GitHub Actions check showed me that I fixed the formatting errors and that my project passed the automated checks. However, I learned that just because the checks pass doesn't mean everything on the website is perfect. I also tested my website using the keyboard and on my phone, and everything worked well. While testing, I noticed that the shopping bag wasn't very noticeable, so I decided to add a shopping-bag icon to make it easier for users to find while keeping the original bag feature.

**Revision decision and implementation:** The learner chose to keep the existing top-right Demo bag text, link, and updating item counter, but make it clearer by adding a shopping-bag icon. The change was committed to `public/index.html` on `main` in [commit dc0fb9a](https://github.com/cf344/is117-brand-studio/commit/dc0fb9aa822be47631529839d2065481ec748da1). On November 17, the learner confirmed the published icon is visible, the bag displays the correct selected size and quantity, and the latest mobile test works. The latest automated check is not yet confirmed.

## November 17, 2026 — Follow-up verification

**Learner-reported observed results (verbatim):** "bag icon visible: yes; bag displays correct size and quantity: yes; latest mobile test: yes."

- **Published bag icon:** Visible — passed (learner report).
- **Selected size and quantity in bag:** Correct values shown — passed (learner report).
- **Latest mobile test:** Worked — passed (learner report).
- **Latest GitHub Actions run:** The November 17 runs failed at Prettier formatting for `SPEC.md` and `LEARNING.md`; a successful rerun is pending.
- **Independent peer retry and remaining issue-specific checks:** Not yet documented — pending.

**AI assistance:** Helped organize the learner's actual observations and update SPEC.md and LEARNING.md without treating planned checks as completed. The learner performed and reported the manual tests; AI did not independently operate their browser.

**Next step:** Inspect the latest automated workflow, then test the remaining peer-review items individually. These manual results do not establish full accessibility or SQLite persistence.

## November 17 — Outfit Ideas follow-up

- **Learner observation:** All three outfit images and their descriptions display correctly on desktop and mobile — passed (learner report).
- **Automated workflow:** Learner reported the latest run and a manually triggered Check and publish run passed; exact run URLs not recorded.
- **Remaining:** Verify sizing note, header links, bag keyboard access, and independent reviewer comprehension. Displaying images does not itself prove that their meaning is clear to a reviewer.

## November 17 — Sizing note follow-up

- **Learner observation:** The note explaining unavailable fit measurements is visible and easy to read on mobile — passed (learner report).
- **Not yet confirmed by this test:** Keyboard access to the sizing note and a new check of all four size options.

## November 17 — Navigation links follow-up

- **Learner observation:** Outfit Ideas, Brand Guide, and Project Studio links all opened their expected destinations when clicked — passed (learner report).
- **Scope:** Click navigation was tested; this is not a new keyboard-navigation or independent reviewer test.
