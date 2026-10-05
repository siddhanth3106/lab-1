// app.js - PageVerse Application Logic

document.addEventListener("DOMContentLoaded", () => {
  const booksGrid = document.getElementById("booksGrid");
  const bookDetailContent = document.getElementById("bookDetailContent");

  // Determine current page based on DOM containers
  if (booksGrid) {
    initHomePage();
  } else if (bookDetailContent) {
    initDetailPage();
  }
});

/* ==========================================================================
   Home Page Controller
   ========================================================================== */
function initHomePage() {
  const booksGrid = document.getElementById("booksGrid");
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const categoryContainer = document.getElementById("categoryContainer");
  const catalogCategoryTitle = document.getElementById("catalogCategoryTitle");
  const bookCountBadge = document.getElementById("bookCountBadge");

  let activeCategory = "All";
  let searchQuery = "";

  // Render book cards into the grid
  function render() {
    const filtered = booksData.filter((book) => {
      const matchesCategory =
        activeCategory === "All" || book.genre.toLowerCase() === activeCategory.toLowerCase();
      
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query) ||
        book.tagline.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    // Update Header Counter & Title
    catalogCategoryTitle.textContent =
      activeCategory === "All" ? "Featured Books" : `${activeCategory} Collection`;
    bookCountBadge.textContent = `${filtered.length} Book${filtered.length === 1 ? "" : "s"}`;

    if (filtered.length === 0) {
      booksGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3 class="empty-state-title">No books found</h3>
          <p class="empty-state-text">
            We couldn't find any books matching "<strong>${escapeHtml(searchQuery)}</strong>" in ${escapeHtml(activeCategory)}.
          </p>
          <button class="btn-reset-filters" id="btnResetFilters">Reset Search & Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById("btnResetFilters");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          activeCategory = "All";
          searchQuery = "";
          searchInput.value = "";
          searchClearBtn.style.display = "none";
          updateCategoryPills("All");
          render();
        });
      }
      return;
    }

    booksGrid.innerHTML = filtered.map(createBookCardHTML).join("");
  }

  // Generate HTML for a single book card
  function createBookCardHTML(book) {
    return `
      <a href="book-detail.html?id=${encodeURIComponent(book.id)}" class="book-card" aria-label="View details for ${escapeHtml(book.title)}">
        <div class="book-card-cover-wrapper" style="background-color: ${book.coverAccent || '#1e293b'}">
          <img 
            src="${book.coverUrl}" 
            alt="Cover of ${escapeHtml(book.title)}" 
            class="book-card-cover" 
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800';"
          />
          <div class="book-card-overlay"></div>
          <span class="card-genre-badge">${escapeHtml(book.genre)}</span>
          <span class="card-rating-badge">
            <span class="star-icon">★</span> ${book.rating.toFixed(1)}
          </span>
        </div>
        <div class="book-card-content">
          <h3 class="book-card-title">${escapeHtml(book.title)}</h3>
          <div class="book-card-author">By ${escapeHtml(book.author)}</div>
          <p class="book-card-tagline">${escapeHtml(book.tagline)}</p>
          <div class="book-card-footer">
            <span class="book-card-meta">${book.year} • ${book.pages} pages</span>
            <span class="view-details-link">
              View Details <span>→</span>
            </span>
          </div>
        </div>
      </a>
    `;
  }

  // Update active category pill UI
  function updateCategoryPills(selected) {
    const pills = categoryContainer.querySelectorAll(".category-pill");
    pills.forEach((pill) => {
      if (pill.dataset.category === selected) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });
  }

  // Search input event
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      searchClearBtn.style.display = "block";
    } else {
      searchClearBtn.style.display = "none";
    }
    render();
  });

  // Clear search button
  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClearBtn.style.display = "none";
    searchInput.focus();
    render();
  });

  // Category filter buttons
  categoryContainer.addEventListener("click", (e) => {
    const target = e.target.closest(".category-pill");
    if (!target) return;
    activeCategory = target.dataset.category;
    updateCategoryPills(activeCategory);
    render();
  });

  // Initial render
  render();
}

/* ==========================================================================
   Detail Page Controller
   ========================================================================== */
function initDetailPage() {
  const container = document.getElementById("bookDetailContent");
  const params = new URLSearchParams(window.location.search);
  const bookId = params.get("id");

  // Fallback if no ID provided or book not found
  const book = booksData.find((b) => b.id === bookId);

  if (!book) {
    container.innerHTML = `
      <div class="empty-state" style="margin-top: 2rem;">
        <div class="empty-state-icon">📖</div>
        <h2 class="empty-state-title">Book Not Found</h2>
        <p class="empty-state-text">
          We couldn't locate the requested book information. It may have been relocated or the link is incomplete.
        </p>
        <a href="index.html" class="btn-reset-filters" style="display: inline-block;">Return to Book Catalog</a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${book.title} — Book Information | PageVerse`;

  // Render the full detail view
  container.innerHTML = `
    <div class="detail-layout">
      <!-- Left Column: Cover & Quick Actions -->
      <aside class="detail-cover-showcase">
        <div class="detail-cover-card" style="background-color: ${book.coverAccent || '#1e293b'}">
          <img 
            src="${book.coverUrl}" 
            alt="Cover of ${escapeHtml(book.title)}" 
            class="detail-cover-img"
            onerror="this.src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800';"
          />
        </div>

        <div class="detail-actions-panel">
          <button class="btn-action-primary" id="btnWantToRead">
            <span>🔖</span>
            <span id="wantToReadText">Want to Read</span>
          </button>
          <button class="btn-action-secondary" id="btnShareBook">
            <span>🔗</span>
            <span>Share Book Link</span>
          </button>
        </div>
      </aside>

      <!-- Right Column: Information & Deep Insights -->
      <article class="detail-content-area">
        <!-- Header Block -->
        <header class="detail-header-block">
          <span class="detail-genre-tag">${escapeHtml(book.genre)}</span>
          <h1 class="detail-book-title">${escapeHtml(book.title)}</h1>
          <div class="detail-book-author">By <strong>${escapeHtml(book.author)}</strong></div>

          <div class="detail-ratings-row">
            <div class="rating-badge-large">
              <span class="star-icon">★</span>
              <span>${book.rating.toFixed(1)}</span>
            </div>
            <div class="rating-stars-group">
              ${renderStars(book.rating)}
            </div>
            <div class="rating-reviews-count">
              Based on ${book.reviewCount.toLocaleString()} reader ratings
            </div>
          </div>
        </header>

        <!-- Specs Matrix -->
        <div class="specs-matrix">
          <div class="spec-item">
            <span class="spec-label">Published</span>
            <span class="spec-value">${book.year}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Length</span>
            <span class="spec-value">${book.pages} Pages</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Language</span>
            <span class="spec-value">${escapeHtml(book.language)}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Publisher</span>
            <span class="spec-value" style="font-size: 0.95rem;">${escapeHtml(book.publisher)}</span>
          </div>
        </div>

        <!-- Synopsis Section -->
        <section class="detail-section">
          <h2 class="section-heading">Overview & Synopsis</h2>
          <p class="synopsis-text">${escapeHtml(book.synopsis)}</p>
        </section>

        <!-- Notable Quote -->
        ${
          book.quotes && book.quotes.length > 0
            ? `
          <section class="detail-section">
            <h2 class="section-heading">Notable Passage</h2>
            <div class="quote-box">
              <div class="quote-icon">“</div>
              <p class="quote-content">"${escapeHtml(book.quotes[0])}"</p>
              <div class="quote-author">— ${escapeHtml(book.author)}, ${escapeHtml(book.title)}</div>
            </div>
          </section>
        `
            : ""
        }

        <!-- Author Bio Section -->
        <section class="detail-section">
          <h2 class="section-heading">About the Author</h2>
          <div class="author-card">
            <div class="author-avatar">${getInitials(book.author)}</div>
            <div class="author-info-wrap">
              <h4>${escapeHtml(book.author)}</h4>
              <p>${escapeHtml(book.authorBio)}</p>
            </div>
          </div>
        </section>

        <!-- Reader Reviews Section -->
        ${
          book.reviews && book.reviews.length > 0
            ? `
          <section class="detail-section">
            <h2 class="section-heading">Community Reviews</h2>
            <div class="reviews-list">
              ${book.reviews
                .map(
                  (rev) => `
                <div class="review-card">
                  <div class="review-header">
                    <div class="reviewer-meta">
                      <div class="reviewer-avatar">${getInitials(rev.user)}</div>
                      <div>
                        <div class="reviewer-name">${escapeHtml(rev.user)}</div>
                        <div class="review-date">${escapeHtml(rev.date)}</div>
                      </div>
                    </div>
                    <div class="rating-stars-group" style="font-size: 0.9rem;">
                      ${renderStars(rev.rating)}
                    </div>
                  </div>
                  <p class="review-text">"${escapeHtml(rev.comment)}"</p>
                </div>
              `
                )
                .join("")}
            </div>
          </section>
        `
            : ""
        }
      </article>
    </div>
  `;

  // Attach button interactions
  setupDetailInteractions(book);
}

// Interactive button helpers on Detail Page
function setupDetailInteractions(book) {
  const btnWantToRead = document.getElementById("btnWantToRead");
  const wantToReadText = document.getElementById("wantToReadText");
  const btnShareBook = document.getElementById("btnShareBook");

  // Check saved state in localStorage
  const savedKey = `saved_book_${book.id}`;
  let isSaved = localStorage.getItem(savedKey) === "true";

  function updateSavedButtonUI() {
    if (isSaved) {
      wantToReadText.textContent = "Saved to Reading List ✓";
      btnWantToRead.style.background = "#047857"; // Emerald Green
    } else {
      wantToReadText.textContent = "Want to Read";
      btnWantToRead.style.background = ""; // Default primary
    }
  }

  updateSavedButtonUI();

  if (btnWantToRead) {
    btnWantToRead.addEventListener("click", () => {
      isSaved = !isSaved;
      localStorage.setItem(savedKey, isSaved.toString());
      updateSavedButtonUI();
      showToast(
        isSaved
          ? `Added "${book.title}" to your reading list!`
          : `Removed "${book.title}" from your reading list`,
        isSaved ? "🔖" : "🗑️"
      );
    });
  }

  if (btnShareBook) {
    btnShareBook.addEventListener("click", () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(
        () => {
          showToast("Book link copied to clipboard!", "🔗");
        },
        () => {
          showToast("Press Ctrl+C to copy current page URL", "📋");
        }
      );
    });
  }
}

/* ==========================================================================
   Helper Utilities
   ========================================================================== */

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.4;
  let starsHtml = "";

  for (let i = 0; i < fullStars; i++) {
    starsHtml += "★";
  }
  if (hasHalfStar && fullStars < 5) {
    starsHtml += "★";
  }
  while (starsHtml.length < 5) {
    starsHtml += "☆";
  }
  return starsHtml;
}

function getInitials(name) {
  if (!name) return "A";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let toastTimer = null;
function showToast(message, icon = "✨") {
  const toast = document.getElementById("toastNotice");
  const toastMessage = document.getElementById("toastMessage");
  const toastIcon = document.getElementById("toastIcon");

  if (!toast) return;

  toastMessage.textContent = message;
  toastIcon.textContent = icon;
  toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
