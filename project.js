const params = new URLSearchParams(window.location.search);
const requested = params.get("project");

const project =
  PROJECTS.find(p => p.slug === requested) ||
  PROJECTS[0];

const currentIndex = PROJECTS.findIndex(
  p => p.slug === project.slug
);

/*
 * CASE STUDIES
 * ------------------------------------------------------------
 * Content is intentionally based on the systems and architecture
 * established for the portfolio projects. No fabricated metrics.
 */

const CASE_STUDIES = {

  "nexus-ai-butler": {
    label: "MULTIMODAL AI · PERSONAL SYSTEM",
    visualType: "SYSTEM",
    title: "NEXUS",
    titleAccent: "AI BUTLER",

    description:
      "A personalized multimodal AI system built around orchestration, memory, intelligent interaction and tool execution.",

    overview:
      "NEXUS is being built as a personal AI operating layer rather than a single-purpose chatbot. The system brings together multimodal interaction, an AI engine, orchestration, persistent memory and tools behind one modular architecture.",

    architecture: [
      ["MULTI-MODAL I/O", "Input and interaction layer"],
      ["ORCHESTRATOR", "Coordinates system execution"],
      ["AI ENGINE", "Reasoning and intelligence core"],
      ["MEMORY", "LifeGraph + vector memory"],
      ["TOOLS", "Action and capability layer"],
      ["OUTPUT", "Response and interaction layer"]
    ],

    systems: [
      {
        name: "AI ENGINE",
        description:
          "Core intelligence layer responsible for model-driven reasoning and system decisions."
      },
      {
        name: "ORCHESTRATOR",
        description:
          "Coordinates NEXUS components and controls how requests move through the system."
      },
      {
        name: "MEMORY / LIFEGRAPH",
        description:
          "Persistent context layer combining structured LifeGraph knowledge with vector-based memory."
      },
      {
        name: "MULTI-MODAL I/O",
        description:
          "Interaction layer designed to support multiple forms of input and output."
      },
      {
        name: "TOOLS",
        description:
          "Execution layer that allows NEXUS to move beyond conversation and interact with capabilities."
      }
    ],



    decisions: [["MODULAR ARCHITECTURE", "Keep orchestration, intelligence, memory, I/O and tools separated so the system can evolve without turning into one tightly coupled application."], ["PERSISTENT CONTEXT", "Treat memory as a first-class system rather than relying only on the context window of an individual interaction."], ["ORCHESTRATION", "Use a central execution layer to coordinate intelligence and tools instead of allowing every subsystem to manage its own flow."], ["MULTIMODAL BY DESIGN", "Design interaction as an input/output layer so new modalities can be added without rebuilding the core system."]],

    next: [["MEMORY EVOLUTION", "Continue developing the LifeGraph and vector-memory layers into a more useful persistent context system."], ["TOOL EXECUTION", "Expand the tool layer so NEXUS can perform more useful actions instead of only generating responses."], ["MULTIMODAL INTERACTION", "Continue developing the multimodal interaction layer and connect it more tightly to orchestration."], ["SYSTEM HARDENING", "Continue testing the boundaries between orchestration, memory, intelligence and tools as the system grows."]],

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

    repo: project.repo
  },


  "career-os": {
    label: "AGENTIC AI · CAREER INTELLIGENCE",
    visualType: "AGENT",
    title: "CAREER",
    titleAccent: "OS",

    description:
      "An AI operating system for careers — combining profile intelligence, job analysis, resume tailoring, networking and interview workflows.",

    overview:
      "Career OS is designed around a persistent Career Profile that becomes the central context for a collection of specialized AI agents. Instead of treating each job application as an isolated prompt, the system is structured as an operating layer for the broader career workflow.",

    architecture: [
      ["CAREER PROFILE", "Central career context"],
      ["NOVA", "Primary orchestration layer"],
      ["SPECIALIZED AGENTS", "Focused career workflows"],
      ["HUNTER", "Job discovery workflow"],
      ["TAILOR", "Resume customization workflow"],
      ["NETWORKER", "Networking workflow"],
      ["INTERVIEWER", "Interview preparation workflow"],
      ["CAREER INTELLIGENCE", "Combined career workflow output"]
    ],

    agentGraph: {
      center: [
        "NOVA",
        "Primary orchestration layer"
      ],

      context: [
        "CAREER PROFILE",
        "Persistent career context"
      ],

      agents: [
        [
          "NAVIGATOR",
          "Career direction and opportunity navigation"
        ],
        [
          "HUNTER",
          "Job discovery workflow"
        ],
        [
          "TAILOR",
          "Resume customization workflow"
        ],
        [
          "NETWORKER",
          "Networking workflow"
        ],
        [
          "INFLUENCER",
          "Career presence and positioning"
        ],
        [
          "INTERVIEWER",
          "Interview preparation workflow"
        ],
        [
          "NEGOTIATOR",
          "Offer and negotiation workflow"
        ]
      ]
    },

    systems: [
      {
        name: "CAREER PROFILE",
        description:
          "Centralized context intended to give the system a persistent understanding of the user's career information."
      },
      {
        name: "NOVA",
        description:
          "The orchestrator responsible for coordinating Career OS workflows and specialized agents."
      },
      {
        name: "JOB DESCRIPTION ANALYZER",
        description:
          "Analyzes job descriptions to connect opportunity requirements with the career profile."
      },
      {
        name: "RESUME TAILOR",
        description:
          "Transforms career context into job-specific resume tailoring workflows."
      },
      {
        name: "SPECIALIZED AGENTS",
        description:
          "Navigator, Hunter, Tailor, Networker, Influencer, Interviewer and Negotiator represent specialized career workflows."
      },
      {
        name: "SECURE RESUME PIPELINE",
        description:
          "The current foundation establishes a security boundary around resume uploads using quarantine handling, bounded writes, content detection and structural validation before downstream processing."
      }
    ],

    decisions: [
      [
        "CENTRAL CONTEXT",
        "Use a Career Profile as the source of truth so specialized agents operate from consistent career information."
      ],
      [
        "SPECIALIZED AGENTS",
        "Separate career workflows into focused agents instead of creating one monolithic career assistant."
      ],
      [
        "ORCHESTRATION",
        "Use NOVA as the coordination layer between the user's career context and specialized workflows."
      ],
      [
        "SECURITY FIRST",
        "Treat resume files as an untrusted input boundary and establish validation before downstream processing."
      ]
    ],

    next: [
      [
        "RESUME PIPELINE",
        "Continue the secure upload foundation before adding extraction, persistence and downstream intelligence."
      ],
      [
        "MVP WORKFLOWS",
        "Bring Career Profile, job analysis, resume tailoring and fit analysis together into the first coherent MVP."
      ],
      [
        "AGENT COORDINATION",
        "Continue refining how NOVA delegates work to specialized career agents."
      ],
      [
        "CAREER INTELLIGENCE",
        "Expand the system from individual job tasks toward a persistent career operating layer."
      ]
    ],

    stack: [
      "Python",
      "FastAPI",
      "AI Agents",
      "LLMs",
      "Resume Processing",
      "Secure File Validation",
      "Career Intelligence"
    ],

    state:
      "Career OS is an active engineering project. The architecture and implementation are being developed incrementally, with secure upload validation forming part of the current foundation work.",

    philosophy:
      "Context first → Orchestrate → Specialize → Validate → Iterate.",

    repo: project.repo
  },

  "glitch-over": {
    label: "CREATOR INTELLIGENCE · OUTREACH ENGINE",
    visualType: "PIPELINE",
    title: "GLITCH",
    titleAccent: "OVER",

    description:
      "A creator discovery and outreach engine built to find, normalize, enrich, score and export creators across streaming platforms.",

    overview:
      "GlitchOver turns creator discovery into a structured data pipeline. Instead of manually searching platforms one by one, the system moves creators through discovery, normalization, intake, enrichment, scoring and export so the resulting dataset can be used for targeted outreach.",

    architecture: [
      ["DISCOVER", "Find creators across supported platforms"],
      ["NORMALIZE", "Convert platform data into a common structure"],
      ["INTAKE", "Move discovered creators into the processing pipeline"],
      ["ENRICH", "Collect additional creator intelligence"],
      ["SCORE", "Evaluate creators against targeting criteria"],
      ["EXPORT", "Prepare structured creator data for outreach"],
      ["OUTREACH", "Turn qualified creators into actionable leads"]
    ],

    systems: [
      {
        name: "CREATOR DISCOVERY",
        description:
          "Discovers creators across platform-specific sources using category and creator targeting strategies."
      },
      {
        name: "NORMALIZATION",
        description:
          "Transforms different platform responses into a consistent creator representation for downstream processing."
      },
      {
        name: "ENRICHMENT",
        description:
          "Adds useful creator intelligence to discovered records before they are evaluated for outreach."
      },
      {
        name: "SCORING",
        description:
          "Applies targeting logic to help prioritize creators based on the campaign's discovery criteria."
      },
      {
        name: "QUEUE + WORKERS",
        description:
          "Separates discovery from downstream processing so creator records can move through the pipeline without coupling every stage together."
      },
      {
        name: "EXPORT",
        description:
          "Produces structured creator data that can be used for outreach workflows and external processing."
      }
    ],

    decisions: [
      [
        "PIPELINE SEPARATION",
        "Separate discovery, normalization, enrichment, scoring and export so each stage can evolve independently."
      ],
      [
        "NORMALIZED DATA",
        "Use a common creator representation so downstream systems do not need platform-specific logic at every stage."
      ],
      [
        "FAILURE HANDLING",
        "Use retry and recovery patterns around external platform requests instead of allowing individual failures to stop the broader pipeline."
      ],
      [
        "PERFORMANCE",
        "Use caching and concurrent processing to reduce repeated external requests and improve throughput during creator discovery."
      ]
    ],

    next: [
      [
        "REGION TARGETING",
        "Add stronger geographic targeting so discovery can focus on creators relevant to specific markets."
      ],
      [
        "CATEGORY BIAS",
        "Improve discovery strategies so the pipeline can intentionally favor categories and campaign-specific creator profiles."
      ],
      [
        "LANGUAGE ROTATION",
        "Introduce language-aware discovery strategies to broaden creator coverage across different audiences."
      ],
      [
        "CAMPAIGN SYSTEM",
        "Evolve the pipeline toward campaign-level workflows for organizing discovery, qualification and outreach."
      ]
    ],

    stack: [
      "Python",
      "FastAPI",
      "JavaScript",
      "Docker",
      "Twitch API",
      "YouTube",
      "Data Pipelines"
    ],

    state:
      "GlitchOver is an active creator intelligence and outreach system. The core discovery pipeline is established, with data quality, performance and richer targeting continuing to evolve.",

    philosophy:
      "Discover → Normalize → Enrich → Score → Export → Outreach.",

    repo: project.repo
  },


  "astro-trading-engine": {
    label: "FINANCIAL SIGNALS · AI SYSTEM",
    visualType: "SIGNAL",
    title: "ASTRO",
    titleAccent: "TRADING ENGINE",

    description:
      "An experimental financial signal system combining planetary-position data with market signals to generate daily trading sentiment.",

    overview:
      "Astro Trading Engine explores an unconventional multi-signal approach to financial analysis. The system combines market data with planetary-position inputs, processes them through a signal layer and uses machine-learning experimentation to generate structured market sentiment.",

    architecture: [
      ["MARKET DATA", "Collect financial market inputs"],
      ["PLANETARY DATA", "Generate planetary-position inputs"],
      ["SIGNAL ENGINE", "Combine and transform input signals"],
      ["ML LAYER", "Experiment with learned signal patterns"],
      ["SENTIMENT", "Convert signals into market sentiment"],
      ["OUTPUT", "Produce structured daily analysis"]
    ],

    systems: [
      {
        name: "MARKET DATA",
        description:
          "Provides the conventional financial inputs used as one side of the system's multi-signal analysis."
      },
      {
        name: "PLANETARY DATA",
        description:
          "Generates planetary-position information that becomes an additional experimental signal source."
      },
      {
        name: "SIGNAL ENGINE",
        description:
          "Processes the available inputs into structured signals that can be compared and evaluated."
      },
      {
        name: "ML LAYER",
        description:
          "Provides an experimentation layer for exploring whether machine-learning techniques can identify useful patterns in the generated signals."
      },
      {
        name: "RUNTIME",
        description:
          "Supports scheduled and managed execution of the analysis workflow."
      },
      {
        name: "SENTIMENT OUTPUT",
        description:
          "Transforms processed signals into a structured daily trading sentiment rather than presenting raw inputs alone."
      }
    ],

    decisions: [
      [
        "MULTI-SIGNAL INPUT",
        "Keep market and planetary inputs separate so their contribution can be examined independently before being combined."
      ],
      [
        "SIGNAL LAYER",
        "Introduce an explicit signal-processing layer between raw inputs and the final sentiment output."
      ],
      [
        "MODEL EXPERIMENTATION",
        "Treat the machine-learning layer as an experimental component rather than assuming that a model automatically produces useful financial predictions."
      ],
      [
        "MANAGED RUNTIME",
        "Use a controlled runtime process so recurring analysis can be executed consistently without turning the system into an unmanaged background process."
      ]
    ],

    next: [
      [
        "SIGNAL VALIDATION",
        "Evaluate generated signals against historical observations to better understand whether the experimental inputs provide useful information."
      ],
      [
        "MODEL REFINEMENT",
        "Continue testing model approaches and features while separating experimentation from the core signal pipeline."
      ],
      [
        "RUNTIME HARDENING",
        "Improve scheduling, failure handling and runtime reliability as the analysis workflow evolves."
      ],
      [
        "ANALYSIS",
        "Build clearer ways to compare signal behavior, sentiment output and historical market context."
      ]
    ],

    stack: [
      "Python",
      "Rust",
      "Machine Learning",
      "PM2",
      "Financial APIs"
    ],

    state:
      "Astro Trading Engine is a current experimental project exploring AI-integrated financial signal generation. The system is focused on signal construction, model experimentation and structured sentiment analysis rather than guaranteed market prediction.",

    philosophy:
      "Collect → Model → Compare → Generate Signal → Iterate.",

    repo: project.repo
  },


  "credit-card-intelligence": {
    label: "FINTECH · RECOMMENDATION SYSTEM",
    visualType: "SCORING",
    title: "CREDIT CARD",
    titleAccent: "INTELLIGENCE",

    description:
      "An intelligent credit-card recommendation system built around financial profiles, spending behavior and algorithmic scoring.",

    overview:
      "Credit Card Intelligence approaches card selection as a recommendation problem. Instead of treating every card as equally relevant, the system combines a user's financial profile and spending behavior with card information, scores the available options and ranks them into a more targeted recommendation set.",

    architecture: [
      ["PROFILE", "Build the user's financial context"],
      ["SPENDING", "Analyze relevant spending behavior"],
      ["CARD DATA", "Represent available card options"],
      ["SCORING", "Evaluate card-user compatibility"],
      ["RANKING", "Order candidates by relevance"],
      ["OUTPUT", "Present structured recommendations"]
    ],

    systems: [
      {
        name: "PROFILE ANALYSIS",
        description:
          "Establishes the financial context used to determine which card characteristics are relevant to a particular user."
      },
      {
        name: "SPENDING PATTERNS",
        description:
          "Uses behavioral spending information as an input to the recommendation process rather than relying only on static user attributes."
      },
      {
        name: "CARD DATA",
        description:
          "Provides the structured product information required to compare candidate cards against the user's profile."
      },
      {
        name: "SCORING ENGINE",
        description:
          "Applies algorithmic scoring to estimate how well individual cards align with the available user and spending signals."
      },
      {
        name: "RECOMMENDATION",
        description:
          "Ranks candidate cards so the system can surface a smaller set of potentially relevant options."
      },
      {
        name: "API LAYER",
        description:
          "Keeps recommendation logic separated from the surrounding application interface so the scoring system can evolve independently."
      }
    ],

    decisions: [
      [
        "PROFILE-FIRST",
        "Start with the user's financial context before evaluating products so recommendations are driven by individual requirements."
      ],
      [
        "BEHAVIORAL SIGNALS",
        "Include spending behavior as a meaningful recommendation signal rather than relying only on static profile information."
      ],
      [
        "ALGORITHMIC SCORING",
        "Use an explicit scoring layer so candidate cards can be compared systematically instead of relying on arbitrary selection."
      ],
      [
        "API SEPARATION",
        "Keep recommendation and scoring logic behind clear API boundaries so the system remains easier to extend and maintain."
      ]
    ],

    next: [
      [
        "SCORING REFINEMENT",
        "Improve the scoring model and weighting of profile and behavioral signals as the recommendation system evolves."
      ],
      [
        "PRODUCT DATA",
        "Expand and improve the structured card dataset used by the recommendation pipeline."
      ],
      [
        "EXPLANATIONS",
        "Make recommendations easier to understand by showing the factors that contributed to a card's ranking."
      ],
      [
        "RECOMMENDATION UX",
        "Refine the interface around comparing and exploring recommended cards."
      ]
    ],

    stack: [
      "Python",
      "JavaScript",
      "Docker",
      "REST API",
      "Algorithmic Scoring"
    ],

    state:
      "Credit Card Intelligence is a current recommendation-system project focused on profile analysis, spending signals, algorithmic scoring and structured card ranking.",

    philosophy:
      "Understand → Score → Rank → Recommend.",

    repo: project.repo
  },


  "tradelead-ai": {
    label: "DATA INTELLIGENCE · LEAD GENERATION",
    visualType: "PIPELINE",
    title: "TRADELEAD",
    titleAccent: "AI",

    description:
      "A global importer discovery engine built around web crawling, extraction workers, filtering, deduplication and structured lead generation.",

    overview:
      "TradeLead AI treats lead generation as a data pipeline rather than a single search operation. The system discovers potential importer information, extracts useful fields through worker processes, filters noisy results, removes duplicates and normalizes the remaining records into structured output.",

    architecture: [
      ["DISCOVER", "Find potential importer sources"],
      ["EXTRACT", "Extract structured information"],
      ["FILTER", "Remove irrelevant records"],
      ["DEDUP", "Eliminate duplicate entities"],
      ["NORMALIZE", "Standardize the resulting data"],
      ["EXPORT", "Produce structured lead output"]
    ],

    systems: [
      {
        name: "CRAWLERS",
        description:
          "Discover potential importer and trade-related sources across the web and feed candidate information into the processing pipeline."
      },
      {
        name: "EXTRACTION WORKERS",
        description:
          "Process discovered sources through worker-based extraction so data collection can be separated from the rest of the pipeline."
      },
      {
        name: "FILTERING",
        description:
          "Apply relevance checks to reduce noisy or unsuitable records before they reach the final dataset."
      },
      {
        name: "DEDUPLICATION",
        description:
          "Identify repeated entities and prevent duplicate records from propagating through the lead dataset."
      },
      {
        name: "DATA PIPELINE",
        description:
          "Connect discovery, extraction, filtering and normalization into explicit processing stages rather than one monolithic workflow."
      },
      {
        name: "STRUCTURED OUTPUT",
        description:
          "Produce normalized lead records that can be consumed by downstream systems or exported for outreach workflows."
      }
    ],

    decisions: [
      [
        "DISTRIBUTED WORK",
        "Separate discovery and extraction into worker-oriented processes so individual pipeline stages can evolve independently."
      ],
      [
        "PIPELINE STAGES",
        "Keep discovery, extraction, filtering, deduplication and normalization as explicit stages to make the data flow easier to reason about."
      ],
      [
        "STRUCTURED OUTPUT",
        "Normalize extracted information into predictable records before it reaches downstream consumers."
      ],
      [
        "DEDUPLICATION",
        "Treat duplicate handling as a first-class pipeline concern because repeated sources can otherwise distort the resulting lead dataset."
      ]
    ],

    next: [
      [
        "DISCOVERY COVERAGE",
        "Expand the range and quality of sources that can contribute useful importer and trade-related records."
      ],
      [
        "EXTRACTION QUALITY",
        "Improve field extraction and handling of inconsistent web structures as the crawler coverage grows."
      ],
      [
        "PIPELINE SCALE",
        "Continue improving worker execution and pipeline reliability as discovery volume increases."
      ],
      [
        "LEAD INTELLIGENCE",
        "Build richer intelligence on top of normalized records so raw leads can become more useful outreach candidates."
      ]
    ],

    stack: [
      "Python",
      "Web Crawlers",
      "Workers",
      "REST API",
      "Data Pipelines"
    ],

    state:
      "TradeLead AI is a current data-intelligence project focused on importer discovery, extraction, filtering, deduplication and structured lead generation.",

    philosophy:
      "Discover → Extract → Filter → Dedup → Export.",

    repo: project.repo
  },


  "student-support-ai": {
    label: "EDTECH · CONVERSATIONAL AI",
    visualType: "CONVERSATIONAL",
    title: "STUDENT",
    titleAccent: "SUPPORT AI",

    description:
      "A student-support backend combining conversational assistance, FAQ intelligence, chat logging, admin tooling and student-risk prediction workflows.",

    overview:
      "Student Support AI is designed around the idea of making student support more accessible through conversational assistance while giving the underlying system structured data and administrative capabilities.",

    architecture: [
      ["STUDENT", "Student-facing interaction"],
      ["DIALOGFLOW", "Conversational understanding"],
      ["BACKEND", "Application and API layer"],
      ["MONGODB", "Persistent interaction data"],
      ["ADMIN", "Administrative workflows"],
      ["RISK", "Student-risk signals"]
    ],

    systems: [
      {
        name: "CONVERSATIONAL ASSISTANCE",
        description:
          "Dialogflow provides the conversational intelligence layer for student-facing interactions."
      },
      {
        name: "FAQ INTELLIGENCE",
        description:
          "Frequently asked questions form a structured support workflow for common student needs."
      },
      {
        name: "BACKEND LAYER",
        description:
          "Application and API logic remains separated from the conversational interface so the support system can evolve independently."
      },
      {
        name: "CHAT LOGGING",
        description:
          "The backend supports storing conversational information for system and administrative workflows."
      },
      {
        name: "ADMIN TOOLING",
        description:
          "Administrative capabilities provide a management layer around the student-support system."
      },
      {
        name: "STUDENT-RISK PREDICTION",
        description:
          "The project includes a workflow for identifying student-risk signals as part of its broader support architecture."
      }
    ],

    decisions: [
      [
        "CONVERSATIONAL LAYER",
        "Use Dialogflow as the conversational intelligence layer while keeping application logic in the backend."
      ],
      [
        "BACKEND SEPARATION",
        "Keep API, persistence and conversational responsibilities separated so the system can evolve independently."
      ],
      [
        "PERSISTENT LOGGING",
        "Store conversation-related information so support interactions can feed administrative workflows."
      ],
      [
        "SUPPORT + RISK",
        "Treat conversational support and student-risk workflows as connected parts of a broader support system."
      ]
    ],

    next: [
      [
        "SUPPORT QUALITY",
        "Continue improving the FAQ and conversational support experience."
      ],
      [
        "ADMIN WORKFLOWS",
        "Expand administrative capabilities around student-support data."
      ],
      [
        "RISK SIGNALS",
        "Continue developing the student-risk prediction workflow and its supporting data pipeline."
      ],
      [
        "SYSTEM HARDENING",
        "Improve reliability and maintainability across the backend and deployment workflow."
      ]
    ],

    stack: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Dialogflow",
      "GitHub Actions"
    ],

    state:
      "Student Support AI is a current student-support system combining conversational assistance, backend services and student-risk workflows.",

    philosophy:
      "Listen → Understand → Support → Record → Improve.",

    repo: project.repo
  }

};


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
  visualLabels[study.visualType] || "● SYSTEM FLOW";


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


if (study.visualType === "PIPELINE") {
  renderPipeline();
} else if (study.visualType === "AGENT") {
  renderAgentGraph();
} else if (study.visualType === "SIGNAL") {
  renderSignal();
} else if (study.visualType === "SCORING") {
  renderScoring();
} else if (study.visualType === "CONVERSATIONAL") {
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

const next =
  PROJECTS[
    (currentIndex + 1) % PROJECTS.length
  ];

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
