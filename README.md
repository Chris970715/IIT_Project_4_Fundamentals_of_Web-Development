# IIT_Project_4_Fundamentals_of_Web-Development

Resume page for Gyubum Kim, built with the Foundation for Sites framework for the Fundamentals of Web Development course at Illinois Institute of Technology.

Live site: https://chris970715.github.io/IIT_Project_4_Fundamentals_of_Web-Development/

## Starting point

The repository starts from the Project 4 starter files in the class repository (`dkriegls/coursera`, folder `project4-starting-files`): Foundation for Sites 6.8.0, jQuery 3.7.0, and what-input 5.2.12. The starter's demo content was replaced with my resume.

## Files

- `index.html` - the resume page
- `css/normalize.css` - CSS reset (normalize.css v8.0.1, the same reset as Projects 2 and 3)
- `css/foundation.min.css` - Foundation's CSS, linked by the page (`foundation.css` is the readable copy from the starter)
- `css/app.css` - my own styles, linked after Foundation so they override it
- `js/app.js` - my own JavaScript: starts Foundation's plugins
- `js/vendor/` - jQuery, what-input, and Foundation's JavaScript
- `media/` - photo, screenshots, and the AbleBridge video

## Foundation features used

- **XY Grid** (`grid-container`, `grid-x`, `cell`, `small-`, `medium-`, `large-`, `small-up-2`) for a layout that stacks on phones and splits into columns on tablets and desktops
- **Menu** (`menu align-center`) for the centered horizontal navigation
- **Magellan** (`data-magellan`) to scroll smoothly to each section and highlight the link for the section on screen
- **Orbit** (`data-orbit`) as a slider for the Ordinals Play screenshots, with previous/next buttons, bullets, and arrow keys
- **Responsive Embed** (`responsive-embed`) so the AbleBridge video scales with the page, with a custom ratio class for its 1910 x 850 size
- **Card**, **Callout**, **Label**, **Button**, and **Thumbnail** components, restyled in `app.css`

## Course requirements

- Imported font: Chakra Petch from Google Fonts. Browser-native font: Georgia.
- Relative units (`rem`, `em`, `%`) throughout `app.css`, with two `min-width` media queries (40em and 64em).
- The page is fluid: it fills phone screens and stops growing at Foundation's 75rem container width.
- No inline styles, no `<br>`, and no tables; 2-space indentation in HTML, CSS, and JavaScript.
- Without JavaScript, every section still works: the links jump to their sections and the slider shows all four screenshots in a column.

## Changes to the starter files

- The starter's `foundation.js` and `foundation.min.js` were development builds (about 550 KB each, run through `eval`). They were replaced with the official Foundation 6.8.0 release files, the same version as the starter's CSS.
- The scripts load with `defer` from the `<head>`, in the order Foundation needs: jQuery, what-input, Foundation, then `app.js`.

## Validation

- HTML: the W3C Nu Html Checker reports no errors or warnings for `index.html`.
- CSS: the W3C CSS Validator reports no errors for `css/app.css` (and for `css/normalize.css`).
- Foundation's own `foundation.css` and `foundation.min.css` contain one CSS Validator error, so validating the whole page by its URL shows 1 error. It comes from an old Internet Explorer fix in Foundation's `select` styles (`@media screen and (min-width: 0\0)`), not from my code. Framework files shouldn't be edited, so it is left as it is.
