(function () {

  const params = new URLSearchParams(window.location.search);
  const requested = params.get("note");

  const note =
    NOTES.find(item => item.slug === requested) ||
    NOTES[0];

  if (!note) return;


  /*
   * ----------------------------------------------------------
   * BASIC CONTENT
   * ----------------------------------------------------------
   */

  setText("noteNumber", note.number);
  setText("noteCategory", note.category);
  setText("noteProject", note.project);
  setText("noteTitle", note.title);
  setText("noteSubtitle", note.subtitle);
  setText("noteProblem", note.problem);


  /*
   * ----------------------------------------------------------
   * PAGE TITLE
   * ----------------------------------------------------------
   */

  document.title =
    `${note.title} — Engineering Note — Manav Runthala`;


  /*
   * ----------------------------------------------------------
   * ARCHITECTURE
   * ----------------------------------------------------------
   */

  const architecture =
    document.getElementById("noteArchitecture");

  if (architecture) {

    architecture.innerHTML =
      note.architecture.map((item, index) => `
        <article class="note-architecture-item reveal">

          <span class="note-architecture-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

          <h3>
            ${escapeHTML(item.label)}
          </h3>

          <p>
            ${escapeHTML(item.text)}
          </p>

        </article>
      `).join("");

  }


  /*
   * ----------------------------------------------------------
   * ENGINEERING DECISIONS
   * ----------------------------------------------------------
   */

  const decisions =
    document.getElementById("noteDecisions");

  if (decisions) {

    decisions.innerHTML =
      note.decisions.map((item, index) => `
        <article class="note-decision reveal">

          <span class="note-decision-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

          <h3>
            ${escapeHTML(item.title)}
          </h3>

          <p>
            ${escapeHTML(item.text)}
          </p>

        </article>
      `).join("");

  }


  /*
   * ----------------------------------------------------------
   * SIMPLE LIST SECTIONS
   * ----------------------------------------------------------
   */

  renderList(
    "noteImplementation",
    note.implementation
  );

  renderList(
    "noteBroke",
    note.broke
  );

  renderList(
    "noteChanged",
    note.changed
  );


  /*
   * ----------------------------------------------------------
   * NEXT
   * ----------------------------------------------------------
   */

  const next =
    document.getElementById("noteNext");

  if (next) {

    next.innerHTML =
      note.next.map((item, index) => `
        <article class="note-next-item reveal">

          <span>
            ${escapeHTML(item)}
          </span>

        </article>
      `).join("");

  }


  /*
   * ----------------------------------------------------------
   * CASE STUDY LINK
   * ----------------------------------------------------------
   */

  const caseStudy =
    document.getElementById("caseStudyLink");

  if (caseStudy) {

    if (note.caseStudy) {
      caseStudy.href = note.caseStudy;
    } else {
      caseStudy.style.display = "none";
    }

  }


  /*
   * ----------------------------------------------------------
   * REVEAL OBSERVER
   * ----------------------------------------------------------
   */

  const observer =
    new IntersectionObserver(
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
    .querySelectorAll(".reveal")
    .forEach(element => observer.observe(element));


  /*
   * ----------------------------------------------------------
   * HELPERS
   * ----------------------------------------------------------
   */

  function setText(id, value) {

    const element =
      document.getElementById(id);

    if (element) {
      element.textContent = value ?? "";
    }

  }


  function renderList(id, items) {

    const element =
      document.getElementById(id);

    if (!element) return;

    element.innerHTML =
      items.map(item => `
        <li>
          ${escapeHTML(item)}
        </li>
      `).join("");

  }


  function escapeHTML(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }

})();
