const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const line=document.querySelector('.type-line');
const phrases=['open the future','ship something real','build the impossible','make AI useful'];let pi=0,ci=0,del=false;
function type(){if(!line)return;const p=phrases[pi];line.textContent=del?p.slice(0,ci--):p.slice(0,ci++);if(!del&&ci>p.length){del=true;setTimeout(type,1100);return}if(del&&ci<0){del=false;pi=(pi+1)%phrases.length;ci=0}setTimeout(type,del?45:75)} type();
document.querySelectorAll('.project-card').forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*2}deg) rotateY(${x*2}deg) translateY(-5px)`});card.addEventListener('mouseleave',()=>card.style.transform='')});


/* ===== E1 — NAVIGATION INTELLIGENCE ===== */

const navLinks = [...document.querySelectorAll('.nav nav a[href^="#"]')];

const navSections = navLinks
  .map(link => {
    const id = link.getAttribute('href').slice(1);
    const section = document.getElementById(id);

    return section ? { link, section } : null;
  })
  .filter(Boolean);

const setActiveNav = id => {
  navSections.forEach(({link, section}) => {
    const isActive = section.id === id;

    link.classList.toggle('active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const navObserver = new IntersectionObserver(
  entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort(
        (a, b) =>
          b.intersectionRatio - a.intersectionRatio
      );

    if (visible.length) {
      setActiveNav(visible[0].target.id);
    }
  },
  {
    rootMargin: '-18% 0px -55% 0px',
    threshold: [0, 0.12, 0.3, 0.5, 0.7]
  }
);

navSections.forEach(({section}) => {
  navObserver.observe(section);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const id = link.getAttribute('href').slice(1);
    setActiveNav(id);
  });
});


/* ===== E2 — PROJECT INTERACTION ===== */

const projectCards = document.querySelectorAll('.project-card');

const supportsFinePointer =
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (supportsFinePointer) {
  projectCards.forEach(card => {

    card.addEventListener('pointerenter', () => {
      card.classList.add('project-active');
    });

    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;

      const normalizedX =
        (x / rect.width - 0.5) * 2;

      const normalizedY =
        (y / rect.height - 0.5) * 2;

      const moveX = normalizedX * 3;
      const moveY = normalizedY * 3;

      card.style.setProperty(
        '--mx',
        `${percentX}%`
      );

      card.style.setProperty(
        '--my',
        `${percentY}%`
      );

      card.style.setProperty(
        '--card-x',
        `${moveX.toFixed(2)}px`
      );

      card.style.setProperty(
        '--card-y',
        `${moveY.toFixed(2)}px`
      );
    });

    card.addEventListener('pointerleave', () => {
      card.classList.remove('project-active');

      card.style.setProperty(
        '--card-x',
        '0px'
      );

      card.style.setProperty(
        '--card-y',
        '0px'
      );

      card.style.setProperty(
        '--mx',
        '50%'
      );

      card.style.setProperty(
        '--my',
        '50%'
      );
    });

  });
}

/* ===== E4 — INTERACTIVE TERMINAL ===== */

const terminalBody = document.getElementById('terminalBody');

if (terminalBody) {
  const terminalCommands = {
    help: () => [
      'AVAILABLE COMMANDS',
      '',
      'whoami      identity',
      'projects    current systems',
      'stack       technology stack',
      'certs       certifications',
      'contact     connect with Manav',
      'clear       clear terminal',
      'help        show commands'
    ],

    whoami: () => [
      'MANAV RUNTHALA',
      'AI systems builder · CSE AIML · India',
      'AI engineering · systems building · vibe coding'
    ],

    projects: () => [
      'CURRENT SYSTEMS',
      '',
      '01  NEXUS AI BUTLER',
      '02  CAREER OS',
      '03  GLITCHOVER',
      '04  ASTRO TRADING ENGINE',
      '05  CREDIT CARD INTELLIGENCE',
      '06  TRADELEAD AI',
      '07  STUDENT SUPPORT AI'
    ],

    stack: () => [
      'STACK',
      '',
      'AI / ML        Python · PyTorch · LLMs · RAG',
      'BACKEND        FastAPI · Node.js · MongoDB · PostgreSQL',
      'FRONTEND       Next.js · React · JavaScript',
      'INFRA          Docker · Git · GitHub',
      'WORKFLOW       AI Coding · Vibe Coding · Rapid Prototyping'
    ],

    certs: () => [
      'CERTIFICATIONS',
      '',
      '01  Anthropic — Claude with the Anthropic API',
      '02  AWS — Cloud Practitioner Essentials',
      '03  AWS — Generative AI & AWS Foundations',
      '04  AWS — Identity & Access Management',
      '05  IBM — Data Science & Analytics',
      '06  IBM — Machine Learning',
      '07  IBM — AI Development',
      '08  Microsoft — AI & Generative AI',
      '09  Microsoft — Microsoft Fabric',
      '10  Microsoft — Power BI'
    ],

    contact: () => [
      'CONTACT',
      '',
      'GITHUB       → github.com/Manav080506',
      'LINKEDIN     → linkedin.com/in/manav-runthala/'
    ],

    philosophy: () => [
      'Build → Break → Learn → Ship → Repeat.'
    ],

    workflow: () => [
      'Think → Prompt → Build → Test → Iterate → Ship.',
      'AI-assisted engineering · rapid prototyping · vibe coding.'
    ]
  };

  const commandHistory = [];
  let historyIndex = -1;

  const escapeHtml = value =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  const addTerminalLine = (content = '', className = '') => {
    const line = document.createElement('p');

    if (className) {
      line.className = className;
    }

    line.innerHTML = escapeHtml(content);
    terminalBody.appendChild(line);

    return line;
  };

  const addCommand = command => {
    const line = document.createElement('p');
    line.innerHTML = `<b>$</b> ${escapeHtml(command)}`;
    terminalBody.appendChild(line);
  };

  const clearTerminal = () => {
    terminalBody.innerHTML = '';
  };

  const runCommand = rawCommand => {
    const command = rawCommand.trim().toLowerCase();

    if (!command) {
      return;
    }

    addCommand(rawCommand);

    if (command === 'clear') {
      clearTerminal();
      return;
    }

    if (terminalCommands[command]) {
      terminalCommands[command]().forEach(line => {
        addTerminalLine(
          line,
          line === '' ? '' : 'muted'
        );
      });
      return;
    }

    addTerminalLine(
      `command not found: ${rawCommand}`,
      'terminal-error'
    );

    addTerminalLine(
      "type 'help' for available commands",
      'muted'
    );
  };

  const createTerminalInput = () => {
    const row = document.createElement('p');
    row.className = 'terminal-input-row';

    const prompt = document.createElement('b');
    prompt.textContent = '$';

    const input = document.createElement('input');
    input.className = 'terminal-input';
    input.type = 'text';
    input.autocomplete = 'off';
    input.autocapitalize = 'off';
    input.spellcheck = false;
    input.setAttribute('aria-label', 'Terminal command input');

    row.append(prompt, document.createTextNode(' '), input);
    terminalBody.appendChild(row);

    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        const command = input.value.trim();

        if (command) {
          commandHistory.push(command);
          historyIndex = commandHistory.length;
          runCommand(command);
        }

        row.remove();
        createTerminalInput();
        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();

        if (!commandHistory.length) {
          return;
        }

        historyIndex = Math.max(0, historyIndex - 1);
        input.value = commandHistory[historyIndex];
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();

        if (!commandHistory.length) {
          return;
        }

        historyIndex = Math.min(
          commandHistory.length,
          historyIndex + 1
        );

        input.value =
          historyIndex === commandHistory.length
            ? ''
            : commandHistory[historyIndex];
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        clearTerminal();
        createTerminalInput();
      }

      if (event.key === 'Tab') {
        event.preventDefault();

        const value = input.value.trim().toLowerCase();

        if (!value) {
          return;
        }

        const matches = Object.keys(terminalCommands)
          .filter(command => command.startsWith(value));

        if (matches.length === 1) {
          input.value = matches[0];
        }
      }
    });

    return input;
  };

  terminalBody.addEventListener('click', () => {
    const input = terminalBody.querySelector('.terminal-input');

    if (input) {
      input.focus();
    }
  });

  const existingTypeLine = terminalBody.querySelector('.type-line');

  if (existingTypeLine) {
    existingTypeLine.closest('p')?.remove();
  }

  const terminalInput = createTerminalInput();

  window.setTimeout(() => {
    terminalInput.focus();
  }, 300);
}

/* ===== E5 — PAGE MOTION ===== */

const createScrollTelemetry = () => {
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');

  const bar = document.createElement('div');
  bar.className = 'scroll-progress-bar';

  const label = document.createElement('div');
  label.className = 'scroll-progress-label';
  label.innerHTML = 'SCROLL <span>0%</span>';

  progress.append(bar, label);
  document.body.appendChild(progress);

  const hero = document.querySelector('.hero');
  const labelValue = label.querySelector('span');

  let ticking = false;

  const updateScrollState = () => {
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const percentage = documentHeight > 0
      ? Math.min(100, Math.max(0, (scrollTop / documentHeight) * 100))
      : 0;

    const rounded = Math.round(percentage);

    bar.style.height = `${percentage}%`;
    labelValue.textContent = `${rounded}%`;

    if (hero && window.innerWidth > 800) {
      const heroHeight = hero.offsetHeight || 1;
      const heroProgress = Math.min(scrollTop / heroHeight, 1);

      const shift = -(heroProgress * 22);
      hero.style.setProperty('--hero-shift', `${shift}px`);
    }

    ticking = false;
  };

  const requestScrollUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestScrollUpdate, {
    passive: true
  });

  window.addEventListener('resize', requestScrollUpdate);

  updateScrollState();
};

createScrollTelemetry();


/*
 * E5 section coordination
 *
 * One scroll position controls:
 * - active navigation
 * - scroll telemetry
 * - hero depth
 *
 * The original reveal observer remains responsible for
 * reveal-once element animation.
 */

const syncPageState = () => {
  const sections = navSections.map(item => item.section);

  if (!sections.length) return;

  const activationLine = window.innerHeight * 0.34;

  let activeSection = sections[0];

  for (const section of sections) {
    const rect = section.getBoundingClientRect();

    if (rect.top <= activationLine) {
      activeSection = section;
    }
  }

  setActiveNav(activeSection.id);
};

let pageStateTicking = false;

const requestPageStateSync = () => {
  if (pageStateTicking) return;

  window.requestAnimationFrame(() => {
    syncPageState();
    pageStateTicking = false;
  });

  pageStateTicking = true;
};

window.addEventListener('scroll', requestPageStateSync, {
  passive: true
});

window.addEventListener('resize', requestPageStateSync);

syncPageState();
