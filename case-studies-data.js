/*
 * CASE STUDY DATA
 * ------------------------------------------------------------
 * Project-specific content consumed by the case-study renderer.
 * No rendering logic belongs in this file.
 */

const CASE_STUDIES = {

  "nexus-ai-butler": {
    signature: {
      label: "PERSONAL AI LOOP",
      title: "UNDERSTAND → REMEMBER → REASON → ACT",
      detail: "NEXUS connects multimodal interaction, persistent context, intelligence and tools into one continuous system loop."
    },


    implementation: {
      boundary:
        "Multimodal interaction enters through an input layer before reaching the orchestration and intelligence components.",

      flow:
        "Input → Orchestrator → AI Engine → Memory / Tools → Output.",

      engineering:
        "Keep orchestration, intelligence, memory, multimodal I/O and tools as separate system responsibilities so each layer can evolve independently.",

      validation:
        "Continue testing the boundaries between orchestration, memory, intelligence and tools as the system grows."
    },


    label: "MULTIMODAL AI · PERSONAL SYSTEM",
    title: "NEXUS",
    titleAccent: "AI BUTLER",

    description:
      "A personalized multimodal AI system built around orchestration, memory, intelligent interaction and tool execution.",

    overview:
      "NEXUS is being built as a personal AI operating layer rather than a single-purpose chatbot. The system brings together multimodal interaction, an AI engine, orchestration, persistent memory and tools behind one modular architecture.",

    story: {
      problem:
        "Most personal AI tools are built around isolated conversations. They can generate useful responses, but they lack a durable system for memory, orchestration and action.",

      approach:
        "NEXUS treats personal AI as a modular operating layer. Multimodal input feeds an orchestration layer that coordinates intelligence, persistent memory and tools before producing an interaction.",

      principle:
        "Separate intelligence from orchestration, memory and execution so the system can evolve without becoming one tightly coupled application."
    },

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

    repo: ""
  },


  "career-os": {
    signature: {
      label: "CAREER INTELLIGENCE LOOP",
      title: "CONTEXT → ORCHESTRATE → SPECIALIZE → DELIVER",
      detail: "Career OS keeps a persistent Career Profile at the center while NOVA coordinates specialized workflows."
    },


    implementation: {
      boundary:
        "Resume files are treated as an untrusted input boundary before they can enter downstream career intelligence workflows.",

      flow:
        "Upload → Quarantine → Bounded Write → Content Detection → Structural Validation → Downstream Processing.",

      engineering:
        "Establish the secure upload foundation before adding extraction, persistence and downstream intelligence so file handling remains separated from later processing.",

      validation:
        "Content detection and structural validation provide the current security gate before downstream resume processing."
    },


    label: "AGENTIC AI · CAREER INTELLIGENCE",
    title: "CAREER",
    titleAccent: "OS",

    description:
      "An AI operating system for careers — combining profile intelligence, job analysis, resume tailoring, networking and interview workflows.",

    overview:
      "Career OS is designed around a persistent Career Profile that becomes the central context for a collection of specialized AI agents. Instead of treating each job application as an isolated prompt, the system is structured as an operating layer for the broader career workflow.",

    story: {
      problem:
        "Job applications are often handled as disconnected tasks: find a role, rewrite a resume, prepare for an interview and repeat. That makes it difficult to maintain consistent career context across the workflow.",

      approach:
        "Career OS establishes a persistent Career Profile and places specialized agents behind a central orchestrator. Each workflow can focus on one responsibility while still operating from shared career context.",

      principle:
        "Context first, specialization second. Give every workflow a consistent source of truth instead of building one monolithic career assistant."
    },

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

    repo: ""
  },

  "glitch-over": {
    signature: {
      label: "CREATOR DATA PIPELINE",
      title: "DISCOVER → NORMALIZE → ENRICH → SCORE → EXPORT",
      detail: "GlitchOver progressively transforms platform-specific creator discovery into structured outreach-ready records."
    },


    implementation: {
      boundary:
        "Creator records enter through platform-specific discovery sources before being converted into a common downstream representation.",

      flow:
        "Discover → Normalize → Intake → Enrich → Score → Export → Outreach.",

      engineering:
        "Separate discovery from downstream processing and use a normalized creator representation so platform-specific logic does not propagate through every stage.",

      validation:
        "Retry, recovery and duplicate-handling patterns help prevent individual external failures or repeated records from disrupting the broader pipeline."
    },


    story: {
      problem:
        "Creator discovery becomes difficult to scale when information is scattered across streaming platforms and each platform exposes data differently.",

      approach:
        "GlitchOver turns discovery into a staged pipeline that moves creator records through discovery, normalization, intake, enrichment, scoring and export before they become outreach-ready leads.",

      principle:
        "Separate discovery from downstream processing so external platform differences, retries and enrichment logic do not become one tightly coupled workflow."
    },


    label: "CREATOR INTELLIGENCE · OUTREACH ENGINE",
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

    repo: ""
  },


  "astro-trading-engine": {
    signature: {
      label: "EXPERIMENTAL SIGNAL LOOP",
      title: "MARKET + PLANETARY DATA → SIGNAL → ML → SENTIMENT",
      detail: "Astro Trading Engine keeps experimental inputs separable while moving them through signal processing and ML experimentation."
    },


    implementation: {
      boundary:
        "Market data and planetary-position data remain separate input sources before entering the signal-processing layer.",

      flow:
        "Market Data + Planetary Data → Signal Engine → ML Layer → Sentiment → Output.",

      engineering:
        "Keep experimental signal generation separate from model experimentation and final sentiment output so individual signal behavior can be examined.",

      validation:
        "Historical comparison is part of the next-stage validation work for understanding whether experimental signals provide useful information."
    },


    story: {
      problem:
        "Experimental market analysis becomes difficult to evaluate when unconventional signals are mixed directly into the final output without a clear processing pipeline.",

      approach:
        "Astro Trading Engine keeps market data and planetary-position data as separate inputs, processes them through a signal engine and ML experimentation layer, then converts the resulting signals into structured market sentiment.",

      principle:
        "Keep experimental inputs observable and separable so signal behavior can be compared before treating the output as meaningful."
    },


    label: "FINANCIAL SIGNALS · AI SYSTEM",
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

    repo: ""
  },


  "credit-card-intelligence": {
    signature: {
      label: "PROFILED RECOMMENDATION LOOP",
      title: "PROFILE + SPENDING + CARD DATA → SCORE → RANK",
      detail: "Credit Card Intelligence turns profile and spending context into an explicit scoring and ranking workflow."
    },


    implementation: {
      boundary:
        "User profile, spending behavior and structured card data enter the recommendation system as separate inputs.",

      flow:
        "Profile + Spending + Card Data → Scoring Engine → Ranking → Recommendation.",

      engineering:
        "Keep recommendation logic behind clear API boundaries and use explicit scoring so candidate cards can be evaluated systematically.",

      validation:
        "Recommendation refinement focuses on improving scoring weights and making the factors contributing to rankings easier to understand."
    },


    story: {
      problem:
        "Credit-card selection can become a generic comparison exercise when recommendations ignore the user's financial profile and actual spending behavior.",

      approach:
        "Credit Card Intelligence treats card selection as a scoring problem, combining profile information, spending signals and structured card data before ranking candidate recommendations.",

      principle:
        "Make recommendation logic explicit and profile-driven so candidate products can be compared systematically rather than selected arbitrarily."
    },


    label: "FINTECH · RECOMMENDATION SYSTEM",
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

    repo: ""
  },


  "tradelead-ai": {
    signature: {
      label: "LEAD PROCESSING PIPELINE",
      title: "DISCOVER → EXTRACT → FILTER → DEDUP → NORMALIZE",
      detail: "TradeLead AI progressively transforms noisy web discovery into structured, reusable lead records."
    },


    implementation: {
      boundary:
        "Potential importer sources enter through web discovery before being passed into worker-oriented extraction and processing stages.",

      flow:
        "Discover → Extract → Filter → Dedup → Normalize → Export.",

      engineering:
        "Separate discovery and extraction into worker-oriented stages and keep filtering, deduplication and normalization explicit in the pipeline.",

      validation:
        "Filtering and deduplication provide processing gates that reduce noisy and repeated records before structured output."
    },


    story: {
      problem:
        "Trade and importer lead generation becomes noisy when web discovery, extraction and filtering are handled as one undifferentiated search process.",

      approach:
        "TradeLead AI separates discovery, extraction, filtering, deduplication, normalization and export into explicit processing stages supported by worker-oriented execution.",

      principle:
        "Treat lead generation as a data pipeline so noisy sources can be progressively transformed into structured, reusable records."
    },


    label: "DATA INTELLIGENCE · LEAD GENERATION",
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

    repo: ""
  },


  "student-support-ai": {
    signature: {
      label: "STUDENT SUPPORT FLOW",
      title: "STUDENT → DIALOGFLOW → BACKEND → DATA / ADMIN / RISK",
      detail: "Student Support AI separates conversational interaction from application, persistence and administrative workflows."
    },


    implementation: {
      boundary:
        "Student interactions enter through the conversational layer while application logic, persistence and administrative workflows remain in the backend.",

      flow:
        "Student → Dialogflow → Backend → MongoDB / Admin / Risk.",

      engineering:
        "Keep conversational intelligence separate from API, persistence and administrative responsibilities so each layer can evolve independently.",

      validation:
        "Chat logging, administrative workflows and student-risk signals provide structured system outputs that can be used to improve the broader support workflow."
    },


    story: {
      problem:
        "Student support often depends on repetitive questions and fragmented interactions, making it difficult to combine conversational assistance with structured administrative and risk workflows.",

      approach:
        "Student Support AI combines a Dialogflow conversational layer with a backend, persistent interaction data, administrative tooling and student-risk workflows.",

      principle:
        "Keep conversational intelligence separate from application and persistence layers so support capabilities can evolve without coupling the entire system."
    },


    label: "EDTECH · CONVERSATIONAL AI",
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

    repo: ""
  }

};
