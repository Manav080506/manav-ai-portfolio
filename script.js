const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const line=document.querySelector('.type-line');
const phrases=['open the future','ship something real','build the impossible','make AI useful'];let pi=0,ci=0,del=false;
function type(){if(!line)return;const p=phrases[pi];line.textContent=del?p.slice(0,ci--):p.slice(0,ci++);if(!del&&ci>p.length){del=true;setTimeout(type,1100);return}if(del&&ci<0){del=false;pi=(pi+1)%phrases.length;ci=0}setTimeout(type,del?45:75)} type();
document.querySelectorAll('.project-card').forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*2}deg) rotateY(${x*2}deg) translateY(-5px)`});card.addEventListener('mouseleave',()=>card.style.transform='')});
