const params = new URLSearchParams(window.location.search);
const requested = params.get("project");

const project =
  PROJECTS.find(p => p.slug === requested) ||
  PROJECTS[0];

const currentIndex = PROJECTS.findIndex(
  p => p.slug === project.slug
);

const CASE_STUDIES = {

  "nexus-ai-butler": {
    label: "PERSONAL AI SYSTEM",
    title: "NEXUS",
    titleAccent: "AI BUTLER",

    description:
      "A personalized multimodal AI system built around orchestration, memory, intelligent interaction and tool execution.",

    overview:
      "NEXUS is being built as a personal AI operating layer — a system designed to connect multimodal interaction, reasoning, persistent memory and tools behind a single orchestrated experience.",

    architecture: [
      ["MULTI-MODAL I/O", "Input / interaction layer"],
      ["ORCHESTRATOR", "Coordinates system execution"],
      ["AI ENGINE", "Reasoning and intelligence core"],
      ["MEMORY", "LifeGraph + vector memory"],
      ["TOOLS", "External actions and capabilities"],
      ["OUTPUT", "Response / interaction layer"]
    ],

    systems: [
      {
        name: "AI ENGINE",
        description: "Core intelligence layer responsible for model-driven reasoning and system decisions."
      },
      {
        name: "ORCHESTRATOR",
        description: "Coordinates the different NEXUS components and controls how requests move through the system."
      },
      {
        name: "MEMORY / LIFEGRAPH",
        description: "Persistent context layer combining structured LifeGraph knowledge with vector-based memory."
      },
      {
        name: "MULTI-MODAL I/O",
        description: "Interaction layer designed to let NEXUS work across different forms of input and output."
      },
      {
        name: "TOOLS",
        description: "Action layer that allows the system to move beyond conversation and interact with capabilities."
      }
    ],

    stack: [
      "FastAPI",
      "PyTorch",
      "ChromaDB",
      "SQLite",
      "Next.js 15",
      "AI Orchestration",
      "Vector Memory",
      "Knowledge Graph"
    ],

    state:
      "NEXUS is an active build. The architecture is being developed as a modular personal AI system rather than a single-purpose chatbot.",

    philosophy:
      "Think → Prompt → Build → Test → Iterate → Ship.",

    repo:
      project.repo
  }

};

const study = CASE_STUDIES[project.slug] || {
  label: project.type || "AI SYSTEM",
  title: project.title,
  titleAccent: "",
  description: project.description,
  overview: project.description,
  architecture: [
    ["SYSTEM", "Core application"],
    ["AI", "Intelligence layer"],
    ["DATA", "Persistence layer"],
    ["TOOLS", "Execution layer"],
    ["OUTPUT", "User interaction"]
  ],
  systems: [],
  stack: project.tags || [],
  state: "CURRENT ACTIVE BUILD",
  philosophy: "Build → Break → Learn → Ship → Repeat.",
  repo: project.repo
};

document.title = `${study.title}${study.titleAccent ? " " + study.titleAccent : ""} — Manav Runthala`;

document.getElementById("projectNumber").textContent =
  String(project.number).padStart(2, "0");

document.getElementById("projectStatus").textContent =
  "CURRENT";

document.getElementById("projectType").textContent =
  study.label;

document.getElementById("projectTitle").innerHTML =
  `${study.title}${study.titleAccent
    ? `<br><span>${study.titleAccent}</span>`
    : ""}`;

document.getElementById("projectDescription").textContent =
  study.description;

document.getElementById("overviewText").textContent =
  study.overview;

document.getElementById("architectureContent").innerHTML =
  study.architecture.map((item, i) => `
    <div class="arch-node">
      <span class="arch-number">${String(i + 1).padStart(2, "0")}</span>
      <strong>${item[0]}</strong>
      <small>${item[1]}</small>
    </div>
    ${i < study.architecture.length - 1
      ? '<div class="arch-arrow">↓</div>'
      : ''}
  `).join("");

document.getElementById("architectureStatus").textContent =
  "● CURRENT";

document.getElementById("stateStatus").textContent =
  "CURRENT";

document.getElementById("stateProject").textContent =
  project.title;

const tags = document.getElementById("projectTags");

tags.innerHTML = study.stack.map(tag =>
  `<span>${tag}</span>`
).join("");

const systems = document.getElementById("systemGrid");

if (systems) {
  systems.innerHTML = study.systems.map((system, i) => `
    <article class="system-item">
      <span>${String(i + 1).padStart(2, "0")}</span>
      <div>
        <h3>${system.name}</h3>
        <p>${system.description}</p>
      </div>
    </article>
  `).join("");
}

const philosophy = document.getElementById("philosophyText");

if (philosophy) {
  philosophy.textContent = study.philosophy;
}

const repo = document.getElementById("repoLink");

if (study.repo) {
  repo.href = study.repo;
} else {
  repo.style.display = "none";
}

const next =
  PROJECTS[(currentIndex + 1) % PROJECTS.length];

document.getElementById("nextNumber").textContent =
  String(next.number).padStart(2, "0");

document.getElementById("nextTitle").textContent =
  next.title.toUpperCase() + " →";

document.getElementById("nextProject").href =
  `project.html?project=${encodeURIComponent(next.slug)}`;

const glow = document.querySelector(".cursor-glow");

if (glow) {
  window.addEventListener("pointermove", e => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}
