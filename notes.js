(function () {

  const list = document.getElementById("notesList");
  const count = document.getElementById("noteCount");

  if (!list || !Array.isArray(NOTES)) return;

  if (count) {
    count.textContent = String(NOTES.length).padStart(2, "0");
  }

  list.innerHTML = NOTES.map(note => `
    <a
      class="note-row reveal"
      href="note.html?note=${encodeURIComponent(note.slug)}"
      aria-label="Read ${escapeHTML(note.title)}"
    >

      <span class="note-number">
        ${escapeHTML(note.number)}
      </span>

      <span class="note-category">
        ${escapeHTML(note.category)}
      </span>

      <span class="note-content">

        <h2 class="note-title">
          ${escapeHTML(note.title)}
        </h2>

        <p class="note-subtitle">
          ${escapeHTML(note.subtitle)}
        </p>

      </span>

      <span class="note-project">
        ${escapeHTML(note.project)}
        <span class="note-arrow">↗</span>
      </span>

    </a>
  `).join("");

  /*
   * notes.js runs after the shared reveal observer in script.js
   * on the homepage, so this page needs its own small observer.
   */

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document
    .querySelectorAll(".notes-list .reveal")
    .forEach(element => observer.observe(element));


  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

})();
