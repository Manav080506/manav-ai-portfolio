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
