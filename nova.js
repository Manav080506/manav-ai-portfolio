/* =========================================================
   NOVA — PORTFOLIO INTELLIGENCE
   V1-A / LOCAL KNOWLEDGE ENGINE
   ========================================================= */

(() => {
  "use strict";

  const root = document.createElement("div");

  root.innerHTML = `
    <button
      class="nova-launcher"
      id="novaLauncher"
      type="button"
      aria-label="Ask NOVA"
      aria-expanded="false"
    >
      <span class="nova-launcher-icon" aria-hidden="true">
        <svg class="nova-orbit-icon" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="4" fill="currentColor"/>
          <ellipse
            cx="32"
            cy="32"
            rx="22"
            ry="10"
            transform="rotate(-28 32 32)"
            stroke="currentColor"
            stroke-width="2.4"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="22"
            ry="10"
            transform="rotate(52 32 32)"
            stroke="currentColor"
            stroke-width="2.4"
          />
        </svg>
      </span>
      <span class="nova-launcher-label">ASK NOVA</span>
    </button>

    <div class="nova-backdrop" id="novaBackdrop"></div>

    <section
      class="nova-panel"
      id="novaPanel"
      aria-label="NOVA portfolio assistant"
      aria-hidden="true"
    >

      <header class="nova-header">

        <div class="nova-header-main">

          <div class="nova-symbol">✦</div>

          <div class="nova-name">
            <strong>NOVA</strong>
            <span>PORTFOLIO INTELLIGENCE</span>
          </div>

          <div class="nova-status">
            <span class="nova-status-dot"></span>
            ONLINE
          </div>

        </div>

        <button
          class="nova-close"
          id="novaClose"
          type="button"
          aria-label="Close NOVA"
        >×</button>

      </header>


      <div class="nova-prompts">

        <button class="nova-prompt" data-nova-question="What does Manav build?">
          What does Manav build?
        </button>

        <button class="nova-prompt" data-nova-question="Tell me about NEXUS">
          Tell me about NEXUS
        </button>

        <button class="nova-prompt" data-nova-question="What's the tech stack?">
          What's the tech stack?
        </button>

        <button class="nova-prompt" data-nova-question="Tell me about Career OS">
          Tell me about Career OS
        </button>

        <button class="nova-prompt" data-nova-question="What's Manav's engineering philosophy?">
          Engineering philosophy?
        </button>

      </div>


      <div class="nova-messages" id="novaMessages">

        <div class="nova-message">

          <span class="nova-message-role">SYS</span>

          <div class="nova-message-body">
            NOVA portfolio intelligence initialized.<br><br>
            Ask about Manav, his systems, stack or engineering workflow.
          </div>

        </div>

      </div>


      <form class="nova-input-area" id="novaForm">

        <div class="nova-input-wrap">

          <span class="nova-input-prefix">&gt;</span>

          <input
            id="novaInput"
            class="nova-input"
            type="text"
            autocomplete="off"
            placeholder="Ask anything..."
            aria-label="Ask NOVA anything"
          />

          <button
            class="nova-send"
            type="submit"
            aria-label="Send question"
          >↑</button>

        </div>

        <div class="nova-footer">
          <span>NOVA / LOCAL KNOWLEDGE</span>
          <span>MANAV RUNTHALA</span>
        </div>

      </form>

    </section>
  `;

  document.body.appendChild(root);


  const launcher = document.getElementById("novaLauncher");
  const panel = document.getElementById("novaPanel");
  const backdrop = document.getElementById("novaBackdrop");
  const close = document.getElementById("novaClose");
  const form = document.getElementById("novaForm");
  const input = document.getElementById("novaInput");
  const messages = document.getElementById("novaMessages");


  /* =======================================================
     PORTFOLIO KNOWLEDGE
     ======================================================= */

  const knowledge = {

    identity:
      "Manav Runthala is a CSE AIML engineer and systems builder focused on AI, automation, backend systems and product engineering.",

    work:
      "Manav currently presents seven systems: NEXUS AI Butler, Career OS, GlitchOver, Astro Trading Engine, Credit Card Intelligence, TradeLead AI and Student Support AI.",

    nexus:
      "NEXUS AI Butler is Manav's flagship multimodal personal AI system. It is designed around orchestration, an AI engine, persistent memory, multimodal interaction and tool execution. Its stack includes FastAPI, PyTorch, ChromaDB, SQLite and Next.js 15.",

    career:
      "Career OS is an AI operating system for careers. Its architecture centers around a persistent Career Profile, NOVA orchestration and specialized career workflows such as job analysis, resume tailoring, networking and interview preparation. Its current engineering foundation includes secure resume upload validation.",

    glitch:
      "GlitchOver is a creator discovery and outreach engine. Its pipeline moves through discovery, normalization, enrichment, scoring, export and outreach. It works with creator data and is designed around structured pipeline processing.",

    astro:
      "Astro Trading Engine explores an AI-integrated financial signal system combining planetary-position data with market signals to generate trading sentiment.",

    credit:
      "Credit Card Intelligence is a fintech recommendation system designed around financial profiles, spending behavior, algorithmic scoring and card ranking.",

    tradelead:
      "TradeLead AI is a data intelligence and lead generation system for importer discovery. Its pipeline includes discovery, extraction, filtering, deduplication, normalization and export.",

    student:
      "Student Support AI is a conversational student-support backend using Dialogflow, Node.js, Express and MongoDB. It combines conversational assistance, FAQ workflows, chat logging, administrative tooling and student-risk workflows.",

    stack:
      "Manav's core stack includes Python, JavaScript, FastAPI, Node.js, Express, Next.js, PyTorch, ChromaDB, SQLite, MongoDB, Docker, GitHub Actions, Dialogflow and AI/LLM tooling.",

    philosophy:
      "Manav's engineering workflow is AI-assisted and iterative: Think → Prompt → Build → Test → Iterate → Ship. Vibe coding is part of the workflow, but the focus is on turning ideas into working systems and validating them.",

    contact:
      "Manav's public links are available through the portfolio's GitHub and LinkedIn controls. GitHub: github.com/Manav080506. LinkedIn: linkedin.com/in/manav-runthala/.",

    resume:
      "Manav's resume is available directly from the portfolio through the View Resume action.",

    certifications:
      "Manav's certification portfolio spans Anthropic, AWS, IBM and Microsoft, covering Claude with the Anthropic API, AWS cloud and AI foundations, IBM data science and machine learning, and Microsoft AI, generative AI, Fabric and Power BI."

  };


  function answer(question){

    const q = question
      .toLowerCase()
      .trim()
      .replace(/[?!.,]/g, " ");

    if(!q){
      return "Ask me something about Manav, his systems, stack, certifications, resume or engineering workflow.";
    }


    /* =====================================================
       IDENTITY
       ===================================================== */

    if(
      q.includes("who is manav") ||
      q.includes("about manav") ||
      q.includes("tell me about manav") ||
      q.includes("background") ||
      q.includes("who are you")
    ){
      return knowledge.identity;
    }


    /* =====================================================
       HIRING / VALUE
       ===================================================== */

    if(
      q.includes("why should i hire") ||
      q.includes("why hire manav") ||
      q.includes("why should we hire") ||
      q.includes("hire manav") ||
      q.includes("what makes manav") ||
      q.includes("manav strengths") ||
      q.includes("strengths") ||
      q.includes("what sets manav apart") ||
      q.includes("why is manav different")
    ){
      return "Manav combines AI/ML engineering with full-stack systems thinking. His portfolio focuses on turning ambiguous ideas into working products, using AI-assisted development, rapid prototyping, structured architecture and iterative validation. The strongest signal is the range of systems he is actively building rather than isolated demos.";
    }


    if(
      q.includes("what can manav do") ||
      q.includes("what does he do") ||
      q.includes("what is manav good at") ||
      q.includes("skills")
    ){
      return "Manav works across AI/ML, backend engineering, AI agents, automation, data systems and product engineering. His projects span multimodal AI, career intelligence, creator discovery, financial signals, fintech recommendations, lead generation and conversational student support.";
    }


    /* =====================================================
       PROJECT OVERVIEW
       ===================================================== */

    if(
      q.includes("what does manav build") ||
      q.includes("what has he built") ||
      q.includes("list projects") ||
      q.includes("all projects") ||
      q === "projects" ||
      q === "systems"
    ){
      return knowledge.work;
    }


    /* =====================================================
       NEXUS
       ===================================================== */

    if(
      q.includes("nexus") ||
      q.includes("personal ai") ||
      q.includes("ai butler") ||
      q.includes("multimodal ai")
    ){
      return knowledge.nexus;
    }


    /* =====================================================
       CAREER OS
       ===================================================== */

    if(
      q.includes("career os") ||
      q.includes("career operating system") ||
      q.includes("career intelligence") ||
      q.includes("resume tailoring") ||
      q.includes("job analysis")
    ){
      return knowledge.career;
    }


    /* =====================================================
       GLITCHOVER
       ===================================================== */

    if(
      q.includes("glitchover") ||
      q.includes("creator discovery") ||
      q.includes("creator outreach") ||
      q.includes("creator intelligence")
    ){
      return knowledge.glitch;
    }


    /* =====================================================
       ASTRO
       ===================================================== */

    if(
      q.includes("astro") ||
      q.includes("trading engine") ||
      q.includes("financial signal")
    ){
      return knowledge.astro;
    }


    /* =====================================================
       CREDIT CARD
       ===================================================== */

    if(
      q.includes("credit card") ||
      q.includes("credit card intelligence") ||
      q.includes("fintech recommendation")
    ){
      return knowledge.credit;
    }


    /* =====================================================
       TRADELEAD
       ===================================================== */

    if(
      q.includes("tradelead") ||
      q.includes("lead generation") ||
      q.includes("importer discovery") ||
      q.includes("importer")
    ){
      return knowledge.tradelead;
    }


    /* =====================================================
       STUDENT SUPPORT
       ===================================================== */

    if(
      q.includes("student support") ||
      q.includes("dialogflow") ||
      q.includes("student risk") ||
      q.includes("student support ai")
    ){
      return knowledge.student;
    }


    /* =====================================================
       STACK
       ===================================================== */

    if(
      q.includes("stack") ||
      q.includes("technologies") ||
      q.includes("technology") ||
      q.includes("tech stack") ||
      q.includes("what does he use") ||
      q.includes("what tools")
    ){
      return knowledge.stack;
    }


    /* =====================================================
       CERTIFICATIONS
       ===================================================== */

    if(
      q.includes("certification") ||
      q.includes("certifications") ||
      q.includes("certs") ||
      q.includes("courses") ||
      q.includes("credentials")
    ){
      return "Manav's certification portfolio spans Anthropic, AWS, IBM and Microsoft. It includes Claude with the Anthropic API, AWS Cloud Practitioner Essentials and cloud/AI foundations, IBM data science and machine learning coursework, and Microsoft AI, generative AI, Fabric and Power BI learning.";
    }


    /* =====================================================
       ENGINEERING PHILOSOPHY
       ===================================================== */

    if(
      q.includes("philosophy") ||
      q.includes("engineering philosophy") ||
      q.includes("workflow") ||
      q.includes("how does he build") ||
      q.includes("how does manav build") ||
      q.includes("vibe coding") ||
      q.includes("ai assisted") ||
      q.includes("ai-assisted") ||
      q.includes("use ai to code") ||
      q.includes("uses ai to code") ||
      q.includes("ai to code") ||
      q.includes("code with ai") ||
      q.includes("ai coding") ||
      q.includes("how does he code")
    ){
      return knowledge.philosophy;
    }


    /* =====================================================
       RESUME
       ===================================================== */

    if(
      q.includes("resume") ||
      q.includes("cv") ||
      q.includes("curriculum vitae") ||
      q.includes("see his resume")
    ){
      return knowledge.resume;
    }


    /* =====================================================
       CONTACT / LINKS
       ===================================================== */

    if(
      q.includes("github") ||
      q.includes("linkedin") ||
      q.includes("contact") ||
      q.includes("connect")
    ){
      return knowledge.contact;
    }


    /* =====================================================
       INTERNSHIP / OPPORTUNITY
       ===================================================== */

    if(
      q.includes("internship") ||
      q.includes("intern") ||
      q.includes("looking for opportunities") ||
      q.includes("open to work") ||
      q.includes("available for work")
    ){
      return "Manav is focused on AI/ML engineering, backend systems, intelligent products and agentic workflows. He is interested in opportunities where he can contribute to real engineering problems, learn quickly and turn ideas into working systems.";
    }


    /* =====================================================
       SIMPLE CAPABILITY QUESTIONS
       ===================================================== */

    if(
      q.includes("what do you know") ||
      q.includes("what can you answer") ||
      q.includes("help me")
    ){
      return "I can answer questions about Manav, his seven current systems, NEXUS, Career OS, GlitchOver, Astro Trading Engine, Credit Card Intelligence, TradeLead AI, Student Support AI, his technology stack, certifications, resume and engineering workflow.";
    }


    /* =====================================================
       FALLBACK
       ===================================================== */

    return "I can help with Manav's projects, NEXUS, Career OS, GlitchOver, Astro, Credit Card Intelligence, TradeLead AI, Student Support AI, his stack, certifications, resume or engineering philosophy. Try asking me one of those.";
  }



  function addMessage(role, text){

    const message = document.createElement("div");

    message.className =
      `nova-message ${role === "YOU" ? "user" : ""}`;

    message.innerHTML = `
      <span class="nova-message-role">
        ${role}
      </span>

      <div class="nova-message-body"></div>
    `;

    message.querySelector(".nova-message-body").textContent = text;

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;
  }


  function openNova(){

    panel.classList.add("is-visible");
    backdrop.classList.add("is-visible");
    launcher.classList.add("is-open");

    launcher.setAttribute("aria-expanded","true");
    panel.setAttribute("aria-hidden","false");

    setTimeout(() => input.focus(), 250);
  }


  function closeNova(){

    panel.classList.remove("is-visible");
    backdrop.classList.remove("is-visible");
    launcher.classList.remove("is-open");

    launcher.setAttribute("aria-expanded","false");
    panel.setAttribute("aria-hidden","true");
  }


  function submitQuestion(question){

    const clean = question.trim();

    if(!clean) return;

    addMessage("YOU", clean);

    input.value = "";

    setTimeout(() => {
      addMessage("NOVA", answer(clean));
    }, 220);
  }


  launcher.addEventListener("click", () => {

    if(panel.classList.contains("is-visible")){
      closeNova();
    }else{
      openNova();
    }

  });


  close.addEventListener("click", closeNova);
  backdrop.addEventListener("click", closeNova);


  form.addEventListener("submit", event => {

    event.preventDefault();

    submitQuestion(input.value);

  });


  root.querySelectorAll("[data-nova-question]").forEach(button => {

    button.addEventListener("click", () => {

      openNova();

      submitQuestion(button.dataset.novaQuestion);

    });

  });


  document.addEventListener("keydown", event => {

    if(event.key === "Escape"){
      closeNova();
    }

  });

})();
