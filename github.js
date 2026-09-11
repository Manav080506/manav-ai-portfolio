/* =========================================================
   GITHUB — LIVE PORTFOLIO SYSTEM
   V1-B / SUMMONABLE GITHUB INTELLIGENCE
   ========================================================= */

(() => {
  "use strict";

  const USER = "Manav080506";
  const API = "https://api.github.com";

  const root = document.createElement("div");

  root.innerHTML = `
    <button
      class="github-launcher"
      id="githubLauncher"
      type="button"
      aria-label="Open GitHub"
      aria-expanded="false"
    >
      <span class="github-launcher-icon" aria-hidden="true">◌</span>
      <span class="github-launcher-label">GITHUB</span>
    </button>

    <div class="github-backdrop" id="githubBackdrop"></div>

    <aside
      class="github-panel"
      id="githubPanel"
      aria-label="GitHub live system"
      aria-hidden="true"
    >

      <header class="github-panel-header">

        <div class="github-panel-title">
          <span class="github-panel-symbol">◌</span>

          <div>
            <strong>GITHUB / LIVE</strong>
            <span>PUBLIC REPOSITORY INTELLIGENCE</span>
          </div>
        </div>

        <div class="github-panel-status" id="githubStatus">
          <span></span>
          CONNECTING
        </div>

        <button
          class="github-close"
          id="githubClose"
          type="button"
          aria-label="Close GitHub"
        >×</button>

      </header>


      <div class="github-panel-body">

        <section class="github-profile">

          <div class="github-profile-top">

            <div>
              <span class="github-kicker">PROFILE</span>
              <h2 id="githubUsername">MANAV080506</h2>
              <p id="githubBio">Loading GitHub profile...</p>
            </div>

            <div class="github-profile-mark">GH</div>

          </div>


          <div class="github-stats">

            <div class="github-stat">
              <span>REPOSITORIES</span>
              <strong data-github="repos">—</strong>
            </div>

            <div class="github-stat">
              <span>FOLLOWERS</span>
              <strong data-github="followers">—</strong>
            </div>

            <div class="github-stat">
              <span>FOLLOWING</span>
              <strong data-github="following">—</strong>
            </div>

            <div class="github-stat">
              <span>STARS</span>
              <strong data-github="stars">—</strong>
            </div>

          </div>

        </section>


        <section class="github-system">

          <div class="github-section-label">
            <span>SYSTEM LOG</span>
            <i></i>
          </div>

          <div class="github-log" id="githubLog">

            <p><b>$</b> github sync</p>
            <p><span>PROFILE</span> <em>WAITING</em></p>
            <p><span>REPOSITORIES</span> <em>WAITING</em></p>
            <p><span>ACTIVITY</span> <em>WAITING</em></p>

          </div>

        </section>


        <section class="github-repositories">

          <div class="github-section-label">
            <span>PUBLIC REPOSITORIES</span>
            <i></i>
            <small id="githubRepoCount">/ —</small>
          </div>

          <div class="github-repo-list" id="githubRepos">
            <div class="github-loading">
              INDEXING REPOSITORIES...
            </div>
          </div>

        </section>


        <section class="github-activity">

          <div class="github-section-label">
            <span>RECENT ACTIVITY</span>
            <i></i>

            <small class="github-live-indicator">
              <span></span>
              LIVE FEED
            </small>
          </div>

          <div id="githubActivity">
            <div class="github-loading">
              SCANNING PUBLIC ACTIVITY...
            </div>
          </div>

        </section>


        <a
          class="github-open-profile"
          href="https://github.com/Manav080506"
          target="_blank"
          rel="noreferrer"
        >
          OPEN GITHUB PROFILE ↗
        </a>

      </div>

      <footer class="github-panel-footer">
        <span>GITHUB / PUBLIC API</span>
        <span>MANAV RUNTHALA</span>
      </footer>

    </aside>
  `;

  document.body.appendChild(root);


  /* =======================================================
     ELEMENTS
     ======================================================= */

  const launcher = document.getElementById("githubLauncher");
  const panel = document.getElementById("githubPanel");
  const backdrop = document.getElementById("githubBackdrop");
  const close = document.getElementById("githubClose");

  const status = document.getElementById("githubStatus");
  const username = document.getElementById("githubUsername");
  const bio = document.getElementById("githubBio");

  const reposEl = document.querySelector('[data-github="repos"]');
  const followersEl = document.querySelector('[data-github="followers"]');
  const followingEl = document.querySelector('[data-github="following"]');
  const starsEl = document.querySelector('[data-github="stars"]');

  const repoCount = document.getElementById("githubRepoCount");
  const repos = document.getElementById("githubRepos");
  const activity = document.getElementById("githubActivity");
  const log = document.getElementById("githubLog");


  /* =======================================================
     PANEL
     ======================================================= */

  const openPanel = () => {
    panel.classList.add("is-open");
    backdrop.classList.add("is-visible");
    launcher.classList.add("is-active");

    launcher.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");

    document.body.classList.add("github-panel-open");

    setTimeout(() => close.focus(), 250);
  };


  const closePanel = () => {
    panel.classList.remove("is-open");
    backdrop.classList.remove("is-visible");
    launcher.classList.remove("is-active");

    launcher.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");

    document.body.classList.remove("github-panel-open");

    launcher.focus();
  };


  launcher?.addEventListener("click", () => {
    if (panel.classList.contains("is-open")) {
      closePanel();
    } else {
      openPanel();
    }
  });

  close.addEventListener("click", closePanel);
  backdrop.addEventListener("click", closePanel);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && panel.classList.contains("is-open")) {
      closePanel();
    }
  });


  /* =======================================================
     HELPERS
     ======================================================= */

  const escapeHTML = value =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");


  const fetchAPI = async endpoint => {
    const response = await fetch(`${API}${endpoint}`, {
      headers: {
        Accept: "application/vnd.github+json"
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API ${response.status}`);
    }

    return response.json();
  };


  const animateNumber = (element, target) => {
    const value = Number(target) || 0;
    const duration = 650;
    const start = performance.now();

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      element.textContent = Math.round(value * eased);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };


  const setLogState = (label, value, ok = true) => {
    const rows = [...log.querySelectorAll("p")];

    const row = rows.find(
      item => item.querySelector("span")?.textContent === label
    );

    if (!row) return;

    const result = row.querySelector("em");

    result.textContent = value;
    result.classList.toggle("is-ok", ok);
  };


  const relativeTime = date => {
    const seconds = Math.floor(
      (Date.now() - new Date(date).getTime()) / 1000
    );

    if (seconds < 60) return "just now";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;

    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;

    return `${Math.floor(days / 30)}mo ago`;
  };


  /* =======================================================
     PROFILE
     ======================================================= */

  const renderProfile = profile => {
    username.textContent = profile.login || USER;
    bio.textContent =
      profile.bio ||
      "AI systems builder · CSE AIML · Building in public.";

    animateNumber(reposEl, profile.public_repos);
    animateNumber(followersEl, profile.followers);
    animateNumber(followingEl, profile.following);
  };


  /* =======================================================
     REPOSITORIES
     ======================================================= */

  const renderRepositories = repositories => {

    const publicRepos = repositories
      .filter(repo => !repo.fork)
      .sort(
        (a, b) =>
          new Date(b.pushed_at || b.updated_at) -
          new Date(a.pushed_at || a.updated_at)
      );

    repoCount.textContent = `/ ${String(publicRepos.length).padStart(2, "0")}`;

    const totalStars = publicRepos.reduce(
      (sum, repo) => sum + (repo.stargazers_count || 0),
      0
    );

    animateNumber(starsEl, totalStars);

    if (!publicRepos.length) {
      repos.innerHTML = `
        <div class="github-empty">
          NO PUBLIC REPOSITORIES FOUND.
        </div>
      `;
      return;
    }

    repos.innerHTML = publicRepos
      .slice(0, 8)
      .map((repo, index) => `
        <article class="github-repo">

          <div class="github-repo-index">
            ${String(index + 1).padStart(2, "0")}
          </div>

          <div class="github-repo-main">

            <div class="github-repo-title">
              <h3>${escapeHTML(repo.name)}</h3>
              <span>PUBLIC</span>
            </div>

            <p>
              ${escapeHTML(
                repo.description ||
                "Public repository by Manav Runthala."
              )}
            </p>

            <div class="github-repo-tags">
              ${repo.language
                ? `<span>${escapeHTML(repo.language)}</span>`
                : ""
              }

              <span>${repo.stargazers_count || 0} stars</span>
              <span>${repo.forks_count || 0} forks</span>
            </div>

          </div>

          <div class="github-repo-side">

            <small>
              UPDATED<br>
              ${escapeHTML(relativeTime(repo.pushed_at || repo.updated_at))}
            </small>

            <a
              href="${escapeHTML(repo.html_url)}"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ↗
            </a>

          </div>

        </article>
      `)
      .join("");
  };


  /* =======================================================
     ACTIVITY
     ======================================================= */

  const renderActivity = events => {

    const useful = events
      .filter(event =>
        [
          "PushEvent",
          "CreateEvent",
          "PullRequestEvent",
          "IssuesEvent"
        ].includes(event.type)
      )
      .slice(0, 5);

    if (!useful.length) {
      activity.innerHTML = `
        <div class="github-empty github-empty-activity">

          <span class="github-empty-symbol">◌</span>

          <strong>NO RECENT PUBLIC ACTIVITY</strong>

          <p>
            Public activity will appear here when GitHub exposes
            pushes, issues, pull requests or other public events.
          </p>

        </div>
      `;

      return;
    }

    activity.innerHTML = useful.map(event => {

      const repo =
        event.repo?.name?.replace(`${USER}/`, "") ||
        "unknown";

      let type = "ACTIVITY";
      let description = "Public repository activity";

      if (event.type === "PushEvent") {
        type = "PUSH";

        const commits = event.payload?.commits || [];
        const latest = commits[commits.length - 1];

        description =
          latest?.message?.split("\n")[0] ||
          "Repository updated";
      }

      if (event.type === "CreateEvent") {
        type = "CREATE";
        description =
          `Created ${event.payload?.ref_type || "resource"}`;
      }

      if (event.type === "PullRequestEvent") {
        type = "PULL REQUEST";
        description =
          `${event.payload?.action || "updated"} pull request`;
      }

      if (event.type === "IssuesEvent") {
        type = "ISSUE";
        description =
          `${event.payload?.action || "updated"} issue`;
      }

      return `
        <article class="github-activity-item">

          <span class="github-activity-type">
            ${escapeHTML(type)}
          </span>

          <div>
            <strong>${escapeHTML(repo)}</strong>
            <p>${escapeHTML(description)}</p>
          </div>

          <small>
            ${escapeHTML(relativeTime(event.created_at))}
          </small>

        </article>
      `;

    }).join("");
  };


  /* =======================================================
     LOAD
     ======================================================= */

  const loadGitHub = async () => {

    try {

      status.innerHTML = `
        <span></span>
        CONNECTING
      `;

      const [profile, repositories, events] =
        await Promise.all([
          fetchAPI(`/users/${USER}`),
          fetchAPI(`/users/${USER}/repos?per_page=100&sort=updated`),
          fetchAPI(`/users/${USER}/events/public?per_page=30`)
        ]);

      setLogState("PROFILE", "OK");
      renderProfile(profile);

      setLogState("REPOSITORIES", "OK");
      renderRepositories(repositories);

      setLogState("ACTIVITY", "SCANNED");

      renderActivity(events);

      status.classList.add("is-connected");

      status.innerHTML = `
        <span></span>
        CONNECTED
      `;

    } catch (error) {

      console.warn("GitHub system unavailable:", error);

      status.classList.add("is-error");

      status.innerHTML = `
        <span></span>
        DEGRADED
      `;

      setLogState("PROFILE", "ERROR", false);
      setLogState("REPOSITORIES", "ERROR", false);
      setLogState("ACTIVITY", "UNAVAILABLE", false);

      repos.innerHTML = `
        <div class="github-empty">
          GITHUB DATA TEMPORARILY UNAVAILABLE.
        </div>
      `;

      activity.innerHTML = `
        <div class="github-empty">
          Unable to retrieve public activity right now.
        </div>
      `;
    }
  };


  loadGitHub();

})();
