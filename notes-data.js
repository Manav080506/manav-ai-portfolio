const NOTES = [
  {
    number: "01",
    slug: "building-nexus",
    category: "SYSTEM DESIGN",
    project: "NEXUS AI BUTLER",
    title: "BUILDING NEXUS",
    subtitle: "Designing a Personal AI System",

    problem:
      "NEXUS is being built to move beyond a single-purpose chatbot. The goal is a personal AI system that can coordinate intelligence, memory, multimodal interaction and tools through one modular architecture.",

    architecture: [
      {
        label: "MULTI-MODAL I/O",
        text: "The interaction boundary for multiple forms of input and output."
      },
      {
        label: "ORCHESTRATOR",
        text: "Coordinates execution across the major system components."
      },
      {
        label: "AI ENGINE",
        text: "The reasoning and intelligence layer of the system."
      },
      {
        label: "MEMORY",
        text: "Combines LifeGraph knowledge with vector-based memory."
      },
      {
        label: "TOOLS",
        text: "Provides the execution and capability layer."
      }
    ],

    decisions: [
      {
        title: "MODULAR ARCHITECTURE",
        text: "Keep orchestration, intelligence, memory, I/O and tools separated so individual components can evolve without turning the system into one tightly coupled application."
      },
      {
        title: "PERSISTENT CONTEXT",
        text: "Treat memory as a first-class system instead of relying only on the context window of a single interaction."
      },
      {
        title: "CENTRAL ORCHESTRATION",
        text: "Use an execution layer to coordinate intelligence and tools rather than allowing every subsystem to manage its own flow."
      },
      {
        title: "MULTIMODAL BY DESIGN",
        text: "Treat interaction as an input/output layer so additional modalities can be introduced without rebuilding the core system."
      }
    ],

    implementation: [
      "FastAPI provides the backend foundation.",
      "PyTorch forms part of the AI engine layer.",
      "ChromaDB provides vector-memory infrastructure.",
      "SQLite provides local structured storage.",
      "Next.js 15 provides the frontend layer.",
      "LifeGraph and vector memory form the persistent-context direction."
    ],

    broke: [
      "No specific failure narrative has been documented yet.",
      "The system is still an active build, so this section will evolve as implementation and testing expose real constraints."
    ],

    changed: [
      "The architecture is being kept modular as the system expands.",
      "Memory is treated as a dedicated subsystem rather than an incidental feature.",
      "Orchestration is treated as a central engineering concern."
    ],

    next: [
      "Continue developing the LifeGraph and vector-memory layers.",
      "Expand tool execution capabilities.",
      "Continue developing multimodal interaction.",
      "Harden the boundaries between orchestration, memory, intelligence and tools."
    ],

    philosophy:
      "Think → Prompt → Build → Test → Iterate → Ship.",

    caseStudy: "project.html?project=nexus-ai-butler"
  },

  {
    number: "02",
    slug: "career-os",
    category: "AGENTIC AI",
    project: "CAREER OS",
    title: "CAREER OS",
    subtitle: "From Job Applications to a Career Operating System",

    problem:
      "Career workflows are often treated as isolated tasks: find a job, modify a resume, apply, prepare for an interview and repeat. Career OS is being designed around a persistent Career Profile so these workflows can operate as one connected system.",

    architecture: [
      {
        label: "CAREER PROFILE",
        text: "The central context layer for career information."
      },
      {
        label: "NOVA",
        text: "The primary orchestration layer."
      },
      {
        label: "SPECIALIZED AGENTS",
        text: "Focused workflows for different parts of the career process."
      },
      {
        label: "HUNTER",
        text: "Job discovery workflow."
      },
      {
        label: "TAILOR",
        text: "Resume customization workflow."
      },
      {
        label: "NETWORKER",
        text: "Networking workflow."
      },
      {
        label: "INTERVIEWER",
        text: "Interview preparation workflow."
      }
    ],

    decisions: [
      {
        title: "CENTRAL CONTEXT",
        text: "Use a Career Profile as the source of truth so specialized agents operate from consistent career information."
      },
      {
        title: "SPECIALIZED AGENTS",
        text: "Separate career workflows into focused agents instead of creating one monolithic career assistant."
      },
      {
        title: "ORCHESTRATION",
        text: "Use NOVA as the coordination layer between career context and specialized workflows."
      },
      {
        title: "SECURITY FIRST",
        text: "Treat resume files as an untrusted input boundary and establish validation before downstream processing."
      }
    ],

    implementation: [
      "The Career Profile is the central context model.",
      "NOVA coordinates specialized career workflows.",
      "Job Description Analysis connects opportunity requirements with career context.",
      "Resume Tailoring turns career context into job-specific workflows.",
      "The current resume pipeline establishes quarantine handling, bounded writes, content detection and structural validation."
    ],

    broke: [
      "No specific failure narrative has been documented yet.",
      "The implementation is evolving incrementally, so real failure cases will be documented as they occur."
    ],

    changed: [
      "Resume uploads are being treated as an explicit security boundary.",
      "Validation is being established before downstream resume processing.",
      "Career workflows are being separated into specialized responsibilities."
    ],

    next: [
      "Continue the secure resume pipeline.",
      "Bring Career Profile, job analysis, resume tailoring and fit analysis into the first coherent MVP.",
      "Refine NOVA's coordination with specialized agents.",
      "Expand toward a persistent career operating layer."
    ],

    philosophy:
      "Context first → Orchestrate → Specialize → Validate → Iterate.",

    caseStudy: "project.html?project=career-os"
  },

  {
    number: "03",
    slug: "building-glitchover",
    category: "DATA PIPELINE",
    project: "GLITCHOVER",
    title: "BUILDING GLITCHOVER",
    subtitle: "Turning Creator Discovery into a Structured Pipeline",

    problem:
      "Creator discovery can become repetitive manual research across multiple platforms. GlitchOver is built to turn that process into a structured pipeline that discovers creators, normalizes information, enriches records, scores leads and prepares them for outreach.",

    architecture: [
      {
        label: "DISCOVER",
        text: "Find creators across supported platforms."
      },
      {
        label: "NORMALIZE",
        text: "Convert discovered data into a consistent structure."
      },
      {
        label: "INTAKE",
        text: "Move discovered creators into the processing pipeline."
      },
      {
        label: "ENRICH",
        text: "Add additional information to creator records."
      },
      {
        label: "SCORE",
        text: "Evaluate and prioritize creator leads."
      },
      {
        label: "EXPORT",
        text: "Prepare structured creator data for outreach."
      }
    ],

    decisions: [
      {
        title: "PIPELINE FIRST",
        text: "Treat creator discovery as a sequence of processing stages rather than one large scraping operation."
      },
      {
        title: "NORMALIZATION",
        text: "Normalize platform-specific information before downstream enrichment and scoring."
      },
      {
        title: "CENTRAL INTAKE",
        text: "Use a central queue so discovery and downstream processing can evolve independently."
      },
      {
        title: "DATA QUALITY",
        text: "Duplicate removal, caching, retry logic and processing efficiency are treated as first-class engineering concerns."
      }
    ],

    implementation: [
      "The backend is built around FastAPI.",
      "React and Vite provide the frontend layer.",
      "Creator discovery is organized into category buckets.",
      "The pipeline moves records through discovery, normalization, intake, enrichment, scoring and export.",
      "Docker and GitHub Actions are part of the engineering stack."
    ],

    broke: [
      "A specific failure narrative has not been formally documented for this note yet.",
      "Real pipeline failures and their fixes will be added as they are captured during continued development."
    ],

    changed: [
      "Discovery was separated from downstream processing.",
      "Data quality became an explicit part of the pipeline.",
      "Caching, retry behavior and duplicate handling became part of the V2 direction."
    ],

    next: [
      "Continue improving data quality.",
      "Strengthen caching and retry behavior.",
      "Improve processing performance.",
      "Continue expanding discovery and enrichment capabilities."
    ],

    philosophy:
      "Discover → Normalize → Enrich → Score → Export → Outreach.",

    caseStudy: "project.html?project=glitch-over"
  },

  {
    number: "04",
    slug: "vibe-coding-workflow",
    category: "ENGINEERING WORKFLOW",
    project: "BUILD WORKFLOW",
    title: "VIBE CODING",
    subtitle: "AI-Assisted Engineering as a Workflow",

    problem:
      "AI-assisted development changes how software can be built. The challenge is not simply generating code faster, but turning ideas into working systems while keeping architecture, validation and iteration under control.",

    architecture: [
      {
        label: "THINK",
        text: "Define the problem, system boundary and intended outcome."
      },
      {
        label: "PROMPT",
        text: "Translate the engineering intent into an actionable instruction."
      },
      {
        label: "BUILD",
        text: "Use AI-assisted development to implement the next bounded piece."
      },
      {
        label: "TEST",
        text: "Verify that the implementation actually behaves as intended."
      },
      {
        label: "ITERATE",
        text: "Correct, refine and extend the system based on what testing reveals."
      },
      {
        label: "SHIP",
        text: "Move the validated result into the usable system."
      }
    ],

    decisions: [
      {
        title: "AI AS A TOOL",
        text: "Use AI to accelerate implementation without treating generated code as automatically correct."
      },
      {
        title: "BOUNDED TASKS",
        text: "Break larger systems into smaller implementation checkpoints that can be verified independently."
      },
      {
        title: "VALIDATION",
        text: "Keep testing and inspection inside the development loop rather than treating them as a final step."
      },
      {
        title: "HUMAN DIRECTION",
        text: "Keep architecture, product decisions and engineering direction under deliberate human control."
      }
    ],

    implementation: [
      "Ideas are translated into concrete implementation prompts.",
      "Systems are built incrementally rather than attempting the entire product in one pass.",
      "Changes are inspected and tested after implementation.",
      "Git provides checkpoints as the systems evolve.",
      "The workflow is used across projects including NEXUS, Career OS and the portfolio itself."
    ],

    broke: [
      "No single failure narrative defines the workflow.",
      "The workflow is intentionally iterative because implementation frequently reveals details that were not visible at the idea stage."
    ],

    changed: [
      "AI-assisted coding became part of the engineering workflow rather than a separate experiment.",
      "Implementation is approached through smaller verifiable steps.",
      "Testing and inspection remain part of the loop."
    ],

    next: [
      "Continue refining the AI-assisted development workflow.",
      "Improve how implementation tasks are scoped.",
      "Capture real engineering failures and fixes as documented notes.",
      "Keep the focus on shipping working systems rather than generating code for its own sake."
    ],

    philosophy:
      "Think → Prompt → Build → Test → Iterate → Ship.",

    caseStudy: ""
  },

  {
    number: "05",
    slug: "building-systems-incrementally",
    category: "SYSTEMS ENGINEERING",
    project: "BUILD PHILOSOPHY",
    title: "BUILDING SYSTEMS",
    subtitle: "Why I Build in Small, Verifiable Steps",

    problem:
      "Large software systems become difficult to reason about when many moving parts are changed simultaneously. A more reliable approach is to establish a foundation, implement bounded pieces, verify them and then continue.",

    architecture: [
      {
        label: "DEFINE",
        text: "Establish the current system boundary and objective."
      },
      {
        label: "IMPLEMENT",
        text: "Build one bounded piece of functionality."
      },
      {
        label: "VERIFY",
        text: "Check syntax, behavior, structure and integration."
      },
      {
        label: "CHECKPOINT",
        text: "Preserve a known working state."
      },
      {
        label: "EXTEND",
        text: "Build the next layer on top of the verified foundation."
      }
    ],

    decisions: [
      {
        title: "SMALL CHECKPOINTS",
        text: "Use implementation checkpoints so progress remains understandable and reversible."
      },
      {
        title: "VERIFY BEFORE EXTENDING",
        text: "Avoid stacking new functionality on top of an unverified foundation."
      },
      {
        title: "SEPARATE CONCERNS",
        text: "Keep independent systems and responsibilities separated wherever practical."
      },
      {
        title: "VISIBLE PROGRESS",
        text: "Make system evolution observable through working increments rather than only through a final result."
      }
    ],

    implementation: [
      "Projects are divided into implementation phases.",
      "Individual changes are checked before moving to the next layer.",
      "Git commits provide recoverable checkpoints.",
      "The portfolio itself follows the same incremental approach.",
      "The process is especially useful when AI-assisted coding is part of the workflow."
    ],

    broke: [
      "No specific failure narrative has been documented for this note.",
      "The purpose of the approach is precisely to make future failures smaller, easier to isolate and easier to correct."
    ],

    changed: [
      "Large builds are treated as sequences of smaller engineering checkpoints.",
      "Verification happens throughout implementation.",
      "The development process itself becomes part of the system design discipline."
    ],

    next: [
      "Continue applying incremental implementation to larger systems.",
      "Improve automated checks around each checkpoint.",
      "Document real failures and architectural changes as the projects mature."
    ],

    philosophy:
      "Define → Implement → Verify → Checkpoint → Extend.",

    caseStudy: ""
  }
];
