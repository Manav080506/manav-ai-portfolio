(() => {
  "use strict";

  if (document.querySelector(".resume-launcher")) return;

  const header = document.querySelector(".nav");
  if (!header) return;

  const launcher = document.createElement("a");

  launcher.className = "resume-launcher";
  launcher.href = "resume.pdf";
  launcher.target = "_blank";
  launcher.rel = "noreferrer";
  launcher.setAttribute("aria-label", "View Manav Runthala resume");

  launcher.innerHTML = `
    <span class="resume-launcher-icon">▣</span>
    <span class="resume-launcher-label">VIEW RESUME ↗</span>
  `;

  /*
   * Keep Resume inside the global header.
   * If the page already has a GitHub header CTA,
   * place Resume immediately after it.
   * Otherwise place Resume after the navigation.
   */
  const githubCta = header.querySelector(".nav-cta");

  if (githubCta) {
    githubCta.insertAdjacentElement("afterend", launcher);
  } else {
    header.appendChild(launcher);
  }
})();
