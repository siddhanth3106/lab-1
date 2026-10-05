# PageVerse — Book Information Website

A clean, modern, and responsive website for discovering and exploring books across multiple genres with detailed information pages.

## 🚀 Features

- **Curated Home Catalog**: Browse a collection of books spanning Classic Fiction, Sci-Fi, Self-Improvement, Philosophy, Mystery, Non-Fiction, and Fantasy.
- **Instant Search & Filters**: Live search by book title, author, or genre, alongside quick category pill filters.
- **Dedicated Book Detail Pages**: Clicking any book opens a comprehensive information page featuring:
  - High-resolution book cover with aesthetic 3D elevation
  - Quick action buttons ("Want to Read", "Share Book Link")
  - Star ratings, score badge, and review counters
  - Technical specs (Publication year, Page count, Language, ISBN, Publisher)
  - Full multi-paragraph synopsis
  - Notable passage quote showcase
  - Author biography card
  - Verified community reader reviews
- **Modern & Clean UI**:
  - Polished editorial typography with Google Fonts (*Plus Jakarta Sans* and *Playfair Display*)
  - Responsive layout optimized for desktop, tablet, and mobile
  - Smooth micro-interactions, hover animations, and toast notifications

## 📁 Project Structure

```
Lab 1/
├── index.html           # Home page: Catalog, Search, and Category Filters
├── book-detail.html     # Dedicated Book Details Page
├── style.css            # Modern design system and responsive CSS
├── data.js              # Curated book dataset with full metadata and reviews
├── app.js               # Application logic for search, filters, and dynamic routing
└── README.md            # Project documentation
```

## 🛠️ Getting Started

Open `index.html` directly in any modern web browser, or serve it locally:

```bash
# Using Python
python -m http.server 8080

# Or using Node / npx
npx serve .
```

Then visit [http://localhost:8080](http://localhost:8080) in your browser.
