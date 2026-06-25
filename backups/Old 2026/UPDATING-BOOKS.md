# How to Update the Books Section

This guide covers everything you need to add, edit, or remove books on the home page (`index.html`).

---

## Where the books live

Open `index.html` and find the comment block that starts with:

```
<!-- ═══ BOOK 1 ═══ -->
```

All book cards live inside the `<div id="bookTrack">` element.

---

## Adding a new book

1. Open `index.html` in any text editor.
2. Find the line that says:
   ```html
   <!-- Paste additional book blocks here -->
   ```
3. Paste the following block **before** that comment and fill in your details:

```html
<!-- ═══ BOOK 2 ═══ -->
<article class="book-card">
  <img src="assets/YOUR-COVER-FILENAME.jpg" alt="Your Book Title cover" class="book-cover">
  <div class="book-details">
    <span class="book-series">Series Name &middot; Book 2</span>
    <h3 class="book-title">Your Book Title</h3>
    <p class="book-description">
      Your book description goes here. Keep it to 2–3 sentences.
    </p>
    <div class="book-links">
      <a href="YOUR_AMAZON_EBOOK_URL" class="book-btn book-btn-primary" target="_blank" rel="noopener noreferrer">Amazon eBook</a>
      <a href="YOUR_BOOKS2READ_URL"   class="book-btn book-btn-secondary" target="_blank" rel="noopener noreferrer">Books2Read</a>
      <span class="book-btn book-btn-soon">Paperback &middot; Coming Soon</span>
    </div>
  </div>
</article>
<!-- ═══ END BOOK 2 ═══ -->
```

4. Save `index.html`. The carousel will automatically activate and show navigation arrows + dots when there are 2 or more books.

---

## Adding the cover image

1. Save your cover image as a `.jpg` or `.png` file.
2. Copy it into the `assets/` folder (same folder as `coverv1.jpg`).
3. Update the `src` attribute in the book card:
   ```html
   <img src="assets/YOUR-COVER-FILENAME.jpg" ...>
   ```
   The image will be cropped to a portrait (2:3) ratio automatically.

---

## Changing a buy link

Each buy button is an `<a>` tag. Just replace the `href` value:

```html
<!-- Before -->
<a href="https://a.co/d/0eBLFNEX" class="book-btn book-btn-primary" ...>Amazon eBook</a>

<!-- After — paste your new URL -->
<a href="https://YOUR-NEW-AMAZON-URL" class="book-btn book-btn-primary" ...>Amazon eBook</a>
```

---

## Turning a "Coming Soon" button into a real link

Find the `<span>` for coming-soon:

```html
<span class="book-btn book-btn-soon">Paperback &middot; Coming Soon</span>
```

Replace it with a proper `<a>` tag and change the style class to match whether it's a primary (filled) or secondary (outline) button:

```html
<!-- Filled green button (use for Amazon) -->
<a href="YOUR_URL" class="book-btn book-btn-primary" target="_blank" rel="noopener noreferrer">Amazon Paperback</a>

<!-- Outline button (use for other retailers) -->
<a href="YOUR_URL" class="book-btn book-btn-secondary" target="_blank" rel="noopener noreferrer">Paperback</a>
```

---

## Adding a third (or more) buy button

Just add another `<a>` inside the `.book-links` div:

```html
<div class="book-links">
  <a href="LINK_1" class="book-btn book-btn-primary"   target="_blank" rel="noopener noreferrer">Amazon eBook</a>
  <a href="LINK_2" class="book-btn book-btn-secondary" target="_blank" rel="noopener noreferrer">Books2Read</a>
  <a href="LINK_3" class="book-btn book-btn-secondary" target="_blank" rel="noopener noreferrer">Kobo</a>
</div>
```

Button styles:
| Class | Looks like |
|---|---|
| `book-btn-primary` | Filled green — use for your main/featured store |
| `book-btn-secondary` | Green outline — use for alternate stores |
| `book-btn-soon` | Grey italic — use for links not available yet |

---

## Removing a book

Delete the entire block between `<!-- ═══ BOOK # ═══ -->` and `<!-- ═══ END BOOK # ═══ -->`, including both comment lines.

---

## Carousel behaviour

- **1 book:** Displayed as a normal card — no arrows or dots appear.
- **2+ books:** Arrows and dot indicators appear automatically. A sliver of the next card peeks from the right to signal there is more. Visitors can also swipe left/right on mobile.
- No code changes are needed to enable or disable the carousel — it's automatic.

---

## Quick-reference: book card structure

```
<article class="book-card">
  │
  ├── <img class="book-cover">           ← cover image
  │
  └── <div class="book-details">
        ├── <span class="book-series">   ← "Series · Book #"
        ├── <h3  class="book-title">     ← book title
        ├── <p   class="book-description"> ← short blurb
        └── <div class="book-links">
              ├── <a class="book-btn book-btn-primary">   ← main buy link
              ├── <a class="book-btn book-btn-secondary"> ← alt buy link
              └── <span class="book-btn book-btn-soon">  ← coming soon
```
