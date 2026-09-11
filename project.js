const params = new URLSearchParams(window.location.search);
const requested = params.get("project");

/*
 * PROJECT REGISTRY
 * ------------------------------------------------------------
 * PROJECTS remains the source of truth.
 * The registry provides a stable interface for lookup and
 * navigation so the case-study renderer does not depend on
 * array operations scattered throughout the page.
 */
const PROJECT_REGISTRY = {
  all() {
    return PROJECTS;
  },

  count() {
    return PROJECTS.length;
  },

  bySlug(slug) {
    return PROJECTS.find(project => project.slug === slug) || null;
  },

  indexOf(project) {
    return PROJECTS.findIndex(item => item.slug === project.slug);
  },

  current(slug) {
    return this.bySlug(slug) || PROJECTS[0];
  },

  next(project) {
    const index = this.indexOf(project);

    if (index === -1 || !PROJECTS.length) {
      return PROJECTS[0] || null;
    }

    return PROJECTS[(index + 1) % PROJECTS.length];
  },

  previous(project) {
    const index = this.indexOf(project);

    if (index === -1 || !PROJECTS.length) {
      return PROJECTS[0] || null;
    }

    return PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  }
};

const project = PROJECT_REGISTRY.current(requested);
const currentIndex = PROJECT_REGISTRY.indexOf(project);

/*
 * CASE STUDIES
 * ------------------------------------------------------------
 * Content is intentionally based on the systems and architecture
 * established for the portfolio projects. No fabricated metrics.
 */




/*
 * ------------------------------------------------------------
 * FALLBACK
 * ------------------------------------------------------------
 */

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


/*
 * ------------------------------------------------------------
 * PAGE RENDERING
 * ------------------------------------------------------------
 */

document.title =
  `${study.title}${study.titleAccent ? " " + study.titleAccent : ""} — Manav Runthala`;

document.getElementById("projectNumber").textContent =
  String(project.number).padStart(2, "0");

const projectTotal =
  document.querySelector(".case-meta-total");

if (projectTotal) {
  projectTotal.textContent =
    ` / ${String(PROJECT_REGISTRY.count()).padStart(2, "0")}`;
}

document.getElementById("projectStatus").textContent =
  "CURRENT";

document.getElementById("projectType").textContent =
  study.label;

document.getElementById("projectTitle").innerHTML =
  `${study.title}${
    study.titleAccent
      ? `<br><span>${study.titleAccent}</span>`
      : ""
  }`;

document.getElementById("projectDescription").textContent =
  study.description;

document.getElementById("overviewText").textContent =
  study.overview;


/*
 * Architecture
 */

const architectureContent =
  document.getElementById("architectureContent");

const visualLabels = {
  SYSTEM: "● SYSTEM FLOW",
  AGENT: "● AGENT FLOW",
  PIPELINE: "● PIPELINE FLOW",
  SIGNAL: "● SIGNAL FLOW",
  SCORING: "● SCORING FLOW",
  CONVERSATIONAL: "● CONVERSATIONAL FLOW"
};

document.getElementById("architectureStatus").textContent =
  visualLabels[project.visualType] || "● SYSTEM FLOW";


function renderArchitecture() {

  architectureContent.innerHTML = `
    <div class="architecture-flow">

      ${study.architecture.map((item, i) => `
        <div class="architecture-step reveal">

          <div class="architecture-node">

            <div class="architecture-node-top">
              <span class="arch-number">
                ${String(i + 1).padStart(2, "0")}
              </span>

              <span class="architecture-node-index">
                SYSTEM / ${String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <strong>
              ${item[0]}
            </strong>

            <small>
              ${item[1]}
            </small>

            <span class="architecture-node-pulse"></span>

          </div>

          ${
            i < study.architecture.length - 1
              ? `
                <div class="architecture-connector">
                  <span></span>
                </div>
              `
              : ""
          }

        </div>
      `).join("")}

    </div>
  `;

}


function renderAgentGraph() {

  const graph = study.agentGraph;

  architectureContent.innerHTML = `
    <div class="agent-graph">

      <div class="agent-graph-grid"></div>

      <div class="agent-context">

        <span class="agent-context-label">
          CONTEXT
        </span>

        <strong>
          ${graph.context[0]}
        </strong>

        <small>
          ${graph.context[1]}
        </small>

      </div>


      <div class="agent-node-center">

        <span class="agent-node-type">
          ORCHESTRATOR
        </span>

        <strong>
          ${graph.center[0]}
        </strong>

        <small>
          ${graph.center[1]}
        </small>

        <span class="agent-node-core"></span>

      </div>


      <div class="agent-connections">

        ${graph.agents.map((_, i) => `
          <div
            class="agent-connection agent-connection-${i + 1}"
            aria-hidden="true"
          >
            <span></span>
          </div>
        `).join("")}

      </div>


      <div class="agent-satellite-layer">

        ${graph.agents.map((item, i) => `
          <div
            class="agent-satellite agent-satellite-${i + 1} reveal"
          >

            <div class="agent-satellite-header">

              <span>
                ${String(i + 1).padStart(2, "0")}
              </span>

              <small>
                AGENT
              </small>

            </div>

            <strong>
              ${item[0]}
            </strong>

            <p>
              ${item[1]}
            </p>

            <span class="agent-satellite-status">
              ACTIVE
            </span>

          </div>
        `).join("")}

      </div>

    </div>
  `;

}


function renderSignal() {

  const stages = study.architecture;

  const market = stages[0];
  const planetary = stages[1];
  const processing = stages.slice(2);

  architectureContent.innerHTML = `
    <div class="signal-system">

      <div class="signal-inputs">

        <div class="signal-input-card reveal">
          <span>INPUT / 01</span>
          <strong>${market[0]}</strong>
          <small>${market[1]}</small>
        </div>

        <div class="signal-input-card reveal">
          <span>INPUT / 02</span>
          <strong>${planetary[0]}</strong>
          <small>${planetary[1]}</small>
        </div>

      </div>


      <div class="signal-merge">
        <span></span>
        <span></span>
        <i></i>
      </div>


      <div class="signal-processing">

        ${processing.map((item, i) => `
          <div class="signal-processing-node reveal">

            <div class="signal-processing-header">
              <span>
                ${String(i + 3).padStart(2, "0")}
              </span>

              <small>
                SIGNAL STAGE
              </small>
            </div>

            <strong>
              ${item[0]}
            </strong>

            <p>
              ${item[1]}
            </p>

            <span class="signal-live">
              LIVE
            </span>

          </div>

          ${
            i < processing.length - 1
              ? `
                <div class="signal-processing-connector">
                  <span></span>
                </div>
              `
              : ""
          }
        `).join("")}

      </div>


      <div class="signal-terminal-output">

        <span></span>

        <div>
          <small>OUTPUT</small>
          <strong>DAILY MARKET SENTIMENT</strong>
        </div>

        <span></span>

      </div>

    </div>
  `;

}


function renderScoring() {

  const stages = study.architecture;

  const inputs = stages.slice(0, 3);
  const scoring = stages[3];
  const ranking = stages[4];
  const output = stages[5];

  architectureContent.innerHTML = `
    <div class="scoring-system">

      <div class="scoring-inputs">

        ${inputs.map((item, i) => `
          <div class="scoring-input-card reveal">

            <span>
              INPUT / ${String(i + 1).padStart(2, "0")}
            </span>

            <strong>
              ${item[0]}
            </strong>

            <small>
              ${item[1]}
            </small>

          </div>
        `).join("")}

      </div>


      <div class="scoring-merge">

        <span></span>
        <span></span>
        <span></span>

        <i></i>

      </div>


      <div class="scoring-core reveal">

        <div class="scoring-core-header">

          <span>
            MODEL / 04
          </span>

          <small>
            SCORING ENGINE
          </small>

        </div>

        <strong>
          ${scoring[0]}
        </strong>

        <p>
          ${scoring[1]}
        </p>

        <div class="scoring-bars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>


      <div class="scoring-connector">
        <span></span>
      </div>


      <div class="scoring-result reveal">

        <span>
          STAGE / 05
        </span>

        <strong>
          ${ranking[0]}
        </strong>

        <small>
          ${ranking[1]}
        </small>

      </div>


      <div class="scoring-connector">
        <span></span>
      </div>


      <div class="scoring-output reveal">

        <span>
          OUTPUT / 06
        </span>

        <strong>
          ${output[0]}
        </strong>

        <small>
          ${output[1]}
        </small>

      </div>

    </div>
  `;

}


function renderConversational() {

  const stages = study.architecture;

  const student = stages[0];
  const dialogflow = stages[1];
  const backend = stages[2];
  const downstream = stages.slice(3);

  architectureContent.innerHTML = `
    <div class="conversation-system">

      <div class="conversation-user reveal">

        <span>
          INPUT / 01
        </span>

        <strong>
          ${student[0]}
        </strong>

        <small>
          ${student[1]}
        </small>

      </div>


      <div class="conversation-connector">
        <span></span>
      </div>


      <div class="conversation-ai reveal">

        <div class="conversation-ai-header">

          <span>
            AI / 02
          </span>

          <small>
            CONVERSATIONAL LAYER
          </small>

        </div>

        <strong>
          ${dialogflow[0]}
        </strong>

        <p>
          ${dialogflow[1]}
        </p>

        <span class="conversation-ai-pulse"></span>

      </div>


      <div class="conversation-connector">
        <span></span>
      </div>


      <div class="conversation-backend reveal">

        <span>
          CORE / 03
        </span>

        <strong>
          ${backend[0]}
        </strong>

        <small>
          ${backend[1]}
        </small>

      </div>


      <div class="conversation-branches">

        ${downstream.map((item, i) => `
          <div class="conversation-branch reveal">

            <div class="conversation-branch-line">
              <span></span>
            </div>

            <div class="conversation-branch-card">

              <div>
                <span>
                  ${String(i + 4).padStart(2, "0")}
                </span>

                <small>
                  SYSTEM
                </small>
              </div>

              <strong>
                ${item[0]}
              </strong>

              <p>
                ${item[1]}
              </p>

            </div>

          </div>
        `).join("")}

      </div>


    </div>
  `;

}


function renderPipeline() {

  architectureContent.innerHTML = `
    <div class="pipeline-flow">

      <div class="pipeline-entry">
        <span class="pipeline-entry-line"></span>
        INPUT
      </div>

      ${study.architecture.map((item, i) => `
        <div class="pipeline-step reveal">

          <div class="pipeline-connector">
            <span></span>
          </div>

          <div class="pipeline-node">

            <div class="pipeline-node-header">

              <span class="pipeline-number">
                ${String(i + 1).padStart(2, "0")}
              </span>

              <span class="pipeline-stage">
                STAGE / ${String(i + 1).padStart(2, "0")}
              </span>

            </div>

            <strong>
              ${item[0]}
            </strong>

            <small>
              ${item[1]}
            </small>

            <span class="pipeline-status">
              READY
            </span>

          </div>

        </div>
      `).join("")}

      <div class="pipeline-output">
        <span class="pipeline-output-line"></span>
        OUTPUT
      </div>

    </div>
  `;

}


if (project.visualType === "PIPELINE") {
  renderPipeline();
} else if (project.visualType === "AGENT") {
  renderAgentGraph();
} else if (project.visualType === "SIGNAL") {
  renderSignal();
} else if (project.visualType === "SCORING") {
  renderScoring();
} else if (project.visualType === "CONVERSATIONAL") {
  renderConversational();
} else {
  renderArchitecture();
}


/*
 * Reveal dynamically-rendered architecture nodes.
 */

const architectureObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          architectureObserver.unobserve(entry.target);
        }

      });

    },
    { threshold: 0.12 }
  );


architectureContent
  .querySelectorAll(".reveal")
  .forEach(node => architectureObserver.observe(node));




/*
 * Project signature
 */

const signatureBlock =
  document.getElementById("signatureBlock");

if (signatureBlock && study.signature) {

  signatureBlock.innerHTML = `
    <div class="signature-header">

      <span class="signature-label">
        ${study.signature.label}
      </span>

      <span class="signature-marker">
        ● SIGNATURE SYSTEM
      </span>

    </div>

    <div class="signature-main">

      <div class="signature-flow">
        ${study.signature.title}
      </div>

      <p class="signature-detail">
        ${study.signature.detail}
      </p>

    </div>
  `;
}

/*
 * Project implementation
 */

const implementationGrid =
  document.getElementById("implementationGrid");

if (implementationGrid && study.implementation) {

  const implementationItems = [
    ["BOUNDARY", study.implementation.boundary],
    ["FLOW", study.implementation.flow],
    ["ENGINEERING", study.implementation.engineering],
    ["VALIDATION", study.implementation.validation]
  ];

  implementationGrid.innerHTML =
    implementationItems.map((item, i) => `
      <article class="implementation-item">

        <span class="implementation-index">
          ${String(i + 1).padStart(2, "0")}
        </span>

        <div class="implementation-content">

          <h3>
            ${item[0]}
          </h3>

          <p>
            ${item[1]}
          </p>

        </div>

      </article>
    `).join("");
}

/*
 * Project story
 */

const storyGrid =
  document.getElementById("storyGrid");

if (storyGrid && study.story) {

  const storyItems = [
    ["WHY IT EXISTS", study.story.problem],
    ["THE APPROACH", study.story.approach],
    ["SYSTEM PRINCIPLE", study.story.principle]
  ];

  storyGrid.innerHTML =
    storyItems.map((item, i) => `
      <article class="story-item">

        <span class="story-index">
          ${String(i + 1).padStart(2, "0")}
        </span>

        <div class="story-content">

          <h3>
            ${item[0]}
          </h3>

          <p>
            ${item[1]}
          </p>

        </div>

      </article>
    `).join("");
}


/*
 * Current state
 */

document.getElementById("stateStatus").textContent =
  "CURRENT";

document.getElementById("stateProject").textContent =
  project.title;


/*
 * Engineering decisions
 */

const decisionGrid =
  document.getElementById("decisionGrid");

if (decisionGrid) {
  decisionGrid.innerHTML =
    (study.decisions || []).map((decision, i) => `
      <article class="decision-item">

        <span>
          ${String(i + 1).padStart(2, "0")}
        </span>

        <div>

          <h3>
            ${decision[0]}
          </h3>

          <p>
            ${decision[1]}
          </p>

        </div>

      </article>
    `).join("");
}


/*
 * What's next
 */

const whatNextGrid =
  document.getElementById("whatNextGrid");

if (whatNextGrid) {
  whatNextGrid.innerHTML =
    (study.next || []).map((item, i) => `
      <article class="next-item">

        <span>
          NEXT / ${String(i + 1).padStart(2, "0")}
        </span>

        <div>

          <h3>
            ${item[0]}
          </h3>

          <p>
            ${item[1]}
          </p>

        </div>

      </article>
    `).join("");
}


/*
 * Technology
 */

const tags = document.getElementById("projectTags");

tags.innerHTML =
  study.stack.map(tag => `<span>${tag}</span>`).join("");


/*
 * Core systems
 */

const systems = document.getElementById("systemGrid");

if (systems) {
  systems.innerHTML =
    study.systems.map((system, i) => `
      <article class="system-item">

        <span>
          ${String(i + 1).padStart(2, "0")}
        </span>

        <div>

          <h3>
            ${system.name}
          </h3>

          <p>
            ${system.description}
          </p>

        </div>

      </article>
    `).join("");
}


/*
 * Philosophy
 */

const philosophy =
  document.getElementById("philosophyText");

if (philosophy) {
  philosophy.textContent =
    study.philosophy;
}


/*
 * Repository
 */

const repo =
  document.getElementById("repoLink");

if (study.repo) {
  repo.href = study.repo;
  repo.style.display = "";
} else {
  repo.style.display = "none";
}


/*
 * Next project navigation
 */

const next = PROJECT_REGISTRY.next(project);

document.getElementById("nextNumber").textContent =
  String(next.number).padStart(2, "0");

document.getElementById("nextTitle").textContent =
  next.title.toUpperCase() + " →";

document.getElementById("nextProject").href =
  `project.html?project=${encodeURIComponent(next.slug)}`;


/*
 * Cursor glow
 */

const glow =
  document.querySelector(".cursor-glow");

if (glow) {
  window.addEventListener("pointermove", e => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}


/* ===== E3 — INTERACTIVE ARCHITECTURE SYSTEMS ===== */

/*
 * Architecture interaction is intentionally layered on top
 * of the D4 visual renderers.
 *
 * The renderer owns structure.
 * E3 owns interaction state.
 */

const architectureRoot =
  document.getElementById('architectureContent');

const interactiveArchitectureSelectors = [
  '.architecture-node',
  '.pipeline-node',
  '.agent-satellite',
  '.agent-node-center',
  '.signal-input-card',
  '.signal-processing-node',
  '.scoring-input-card',
  '.scoring-core',
  '.scoring-result',
  '.conversation-user',
  '.conversation-ai',
  '.conversation-backend',
  '.conversation-branch-card'
];

const interactiveArchitectureNodes =
  architectureRoot
    ? architectureRoot.querySelectorAll(
        interactiveArchitectureSelectors.join(',')
      )
    : [];

const clearArchitectureInteraction = () => {
  if (!architectureRoot) return;

  architectureRoot
    .querySelectorAll(
      '.architecture-interactive-active, .architecture-interactive-dim'
    )
    .forEach(element => {
      element.classList.remove(
        'architecture-interactive-active',
        'architecture-interactive-dim'
      );
    });
};

const getInteractionFamily = node => {
  if (node.closest('.architecture-flow')) return 'architecture';
  if (node.closest('.pipeline-flow')) return 'pipeline';
  if (node.closest('.agent-graph')) return 'agent';
  if (node.closest('.signal-system')) return 'signal';
  if (node.closest('.scoring-system')) return 'scoring';
  if (node.closest('.conversation-system')) return 'conversation';

  return null;
};

const activateArchitectureNode = node => {
  if (!architectureRoot || !node) return;

  clearArchitectureInteraction();

  const family = getInteractionFamily(node);

  if (!family) return;

  node.classList.add(
    'architecture-interactive-active'
  );

  /*
   * Dim only nodes belonging to the same visual system.
   * This keeps unrelated project components untouched.
   */
  const familyRoot = node.closest(
    [
      '.architecture-flow',
      '.pipeline-flow',
      '.agent-graph',
      '.signal-system',
      '.scoring-system',
      '.conversation-system'
    ].join(',')
  );

  if (!familyRoot) return;

  familyRoot
    .querySelectorAll(
      interactiveArchitectureSelectors.join(',')
    )
    .forEach(element => {
      if (element !== node) {
        element.classList.add(
          'architecture-interactive-dim'
        );
      }
    });

  /*
   * Bring the direct structural relationship back
   * to full emphasis where the DOM makes it explicit.
   */

  node.parentElement
    ?.querySelectorAll(
      '.architecture-connector, .pipeline-connector, .conversation-connector, .conversation-branch-line'
    )
    .forEach(element => {
      element.classList.add(
        'architecture-interactive-active'
      );
    });
};

if (architectureRoot) {
  architectureRoot.addEventListener(
    'pointerover',
    event => {
      const node =
        event.target.closest(
          interactiveArchitectureSelectors.join(',')
        );

      if (!node || !architectureRoot.contains(node)) {
        return;
      }

      /*
       * Ignore pointer movement between children
       * of the same interactive node.
       */
      const fromNode =
        event.relatedTarget?.closest?.(
          interactiveArchitectureSelectors.join(',')
        );

      if (fromNode === node) return;

      activateArchitectureNode(node);
    }
  );

  architectureRoot.addEventListener(
    'pointerout',
    event => {
      const node =
        event.target.closest(
          interactiveArchitectureSelectors.join(',')
        );

      if (!node || !architectureRoot.contains(node)) {
        return;
      }

      const toNode =
        event.relatedTarget?.closest?.(
          interactiveArchitectureSelectors.join(',')
        );

      if (toNode === node) return;

      if (
        !toNode ||
        !node.contains(toNode)
      ) {
        clearArchitectureInteraction();
      }
    }
  );

  /*
   * Keyboard support.
   *
   * Architecture components remain primarily visual,
   * but interactive cards can still receive focus if
   * they already expose focusable behavior.
   */
  architectureRoot.addEventListener(
    'focusin',
    event => {
      const node =
        event.target.closest(
          interactiveArchitectureSelectors.join(',')
        );

      if (node) {
        activateArchitectureNode(node);
      }
    }
  );

  architectureRoot.addEventListener(
    'focusout',
    event => {
      const next =
        event.relatedTarget?.closest?.(
          interactiveArchitectureSelectors.join(',')
        );

      if (!next) {
        clearArchitectureInteraction();
      }
    }
  );
}
