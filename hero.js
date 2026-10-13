const svg = body => `<svg viewBox="0 0 120 100" fill="none" aria-hidden="true" focusable="false">${body}</svg>`;

export function problemArtwork(key) {
  const shapes = {
    career: '<path d="M61 84V53M61 53L29 23M61 53L93 23" stroke="currentColor" stroke-width="15" stroke-linecap="round"/><path d="M22 43V17H48M74 17H100V43" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>',
    universities: '<ellipse cx="61" cy="50" rx="46" ry="29" transform="rotate(-30 61 50)" stroke="currentColor" stroke-width="7"/><ellipse cx="61" cy="50" rx="46" ry="29" transform="rotate(30 61 50)" stroke="currentColor" stroke-width="7"/><circle cx="61" cy="50" r="12" fill="currentColor"/><circle cx="102" cy="29" r="8" fill="#ff754f"/>',
    grants: '<path d="M60 6L73 32L101 37L81 57L85 85L60 72L35 85L39 57L19 37L47 32Z" fill="currentColor"/><path d="M48 46L57 55L74 37" stroke="#eeeaff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>',
    exams: '<rect x="23" y="39" width="25" height="45" rx="6" fill="currentColor" opacity=".45"/><rect x="50" y="25" width="25" height="59" rx="6" fill="currentColor" opacity=".7"/><rect x="77" y="11" width="25" height="73" rx="6" fill="currentColor"/><path d="M84 35L90 41L99 28" stroke="#ffdfd3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  return svg(shapes[key] || '');
}

export function orbitArtwork() {
  return `<div class="hero-universe" aria-hidden="true"><div class="orbit-response"><div class="orbit-rings"><svg class="hero-orbit" viewBox="0 0 640 680" fill="none" focusable="false"><defs>
    <linearGradient id="ribbon-light" x1="120" y1="160" x2="480" y2="530" gradientUnits="userSpaceOnUse"><stop stop-color="#fff1cc"/><stop offset=".22" stop-color="#ff957d"/><stop offset=".52" stop-color="#b886ff"/><stop offset=".76" stop-color="#6032e9"/><stop offset="1" stop-color="#262072"/></linearGradient>
    <linearGradient id="ribbon-dark" x1="460" y1="150" x2="220" y2="510" gradientUnits="userSpaceOnUse"><stop stop-color="#f4ceff"/><stop offset=".32" stop-color="#9166fa"/><stop offset=".7" stop-color="#4326a1"/><stop offset="1" stop-color="#1b194c"/></linearGradient>
    </defs>
    <g><ellipse cx="320" cy="335" rx="222" ry="121" transform="rotate(-43 320 335)" stroke="url(#ribbon-dark)" stroke-width="61"/><ellipse cx="320" cy="335" rx="220" ry="122" transform="rotate(43 320 335)" stroke="url(#ribbon-light)" stroke-width="42"/><ellipse cx="320" cy="335" rx="249" ry="151" transform="rotate(43 320 335)" stroke="#f3ddff" stroke-opacity=".4" stroke-width="1"/></g>
    <circle cx="501" cy="505" r="4" fill="#f8f6f1"/><circle cx="183" cy="129" r="3" fill="#f8f6f1"/>
    </svg></div></div><div class="orbit-satellite"><svg class="hero-orbit" viewBox="0 0 640 680" fill="none" focusable="false"><defs><radialGradient id="satellite-light" cx=".3" cy=".25" r=".8"><stop stop-color="#fff6c4"/><stop offset=".38" stop-color="#ffa183"/><stop offset="1" stop-color="#d63e62"/></radialGradient></defs><circle cx="480" cy="147" r="38" fill="url(#satellite-light)"/><circle cx="470" cy="132" r="9" fill="#fff1d8" fill-opacity=".55"/></svg></div><div class="orbit-star"><svg class="hero-orbit" viewBox="0 0 640 680" fill="#d6fa64" focusable="false"><path d="m130 485 8 24 24 8-24 8-8 24-8-24-24-8 24-8Z"/></svg></div></div>`;
}

let introHasPlayed = false;
let lastHeroLanguage = null;
const revealedCards = new Set();
let motionPaused = false;
let cleanup;
export function stopHeroMotion() { cleanup?.(); cleanup = null; }
export function startHeroMotion(hero, labels) {
  if (!hero) return;
  motionPaused=document.documentElement.dataset.motionPaused==='true';
  const language = document.documentElement.lang;
  if (lastHeroLanguage !== null && lastHeroLanguage !== language) {
    introHasPlayed = false;
    revealedCards.clear();
    hero.classList.add('hero-language-enter');
  }
  lastHeroLanguage = language;
  if (!introHasPlayed) { introHasPlayed = true; hero.classList.add('hero-enter'); }
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const button = hero.querySelector('.motion-toggle');
  const springs = new Set();
  let visible = true;
  const sync = () => {
    const paused = motionPaused || preference.matches || document.hidden || !visible;
    hero.classList.toggle('motion-paused', paused);
    if (paused) {
      springs.forEach(animation => animation.cancel()); springs.clear();
      hero.classList.remove('hero-enter', 'hero-language-enter');
      hero.querySelectorAll('.card-enter').forEach(card => card.classList.remove('card-enter'));
    }
    button.disabled = preference.matches;
    button.setAttribute('aria-pressed', String(motionPaused || preference.matches));
    button.querySelector('.motion-label').textContent = preference.matches ? labels.reduced : motionPaused ? labels.resume : labels.pause;
  };
  const toggle = () => { motionPaused = !motionPaused; document.documentElement.dataset.motionPaused=String(motionPaused);document.dispatchEvent(new Event('site-motion-change'));sync(); };
  const select = ({ detail: card }) => {
    springs.forEach(animation => animation.cancel()); springs.clear();
    if (preference.matches || motionPaused || !card.animate || card.getAttribute('aria-pressed') !== 'true') return;
    const spring = card.animate([
      { transform:'translateY(0) rotate(0deg) scale(.95)', offset:0 },
      { transform:'translateY(-7px) rotate(-1deg) scale(1.055)', offset:.52 },
      { transform:'translateY(-3px) rotate(.3deg) scale(1.01)', offset:.8 },
      { transform:'translateY(-4px) rotate(0deg) scale(1.02)', offset:1 }
    ], { duration:600, easing:'cubic-bezier(.22,.75,.3,1)' });
    springs.add(spring);
    spring.finished.catch(() => {}).finally(() => springs.delete(spring));
  };
  hero.addEventListener('hero-choice', select);
  // Observe the choices, not page load: the phone entrance is actually seen.
  const revealCard = card => {
    if (revealedCards.has(card.dataset.problem)) return;
    revealedCards.add(card.dataset.problem);
    if (!preference.matches && !motionPaused) card.classList.add('card-enter');
  };
  const cardObserver = typeof IntersectionObserver==='function' ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { revealCard(entry.target); cardObserver.unobserve(entry.target); }
    });
  }, { threshold:.15 }) : null;
  hero.querySelectorAll('.problem-card').forEach(card => {
    if (cardObserver) cardObserver.observe(card); else revealCard(card);
  });
  button.addEventListener('click', toggle);
  document.addEventListener('visibilitychange', sync);
  preference.addEventListener?.('change', sync);
  const observer = typeof IntersectionObserver==='function' ? new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }) : null;
  observer?.observe(hero);
  sync();
  cleanup = () => { observer?.disconnect(); cardObserver?.disconnect(); springs.forEach(animation => animation.cancel()); hero.removeEventListener('hero-choice', select); button.removeEventListener('click', toggle); document.removeEventListener('visibilitychange', sync); preference.removeEventListener?.('change', sync); };
}

// View Transitions are an enhancement. Older Instagram/WebKit views get the
// same immediate state update and a lightweight CSS entrance on the new view.
let currentTransition;
export function transitionFromHero(main, update) {
  currentTransition?.skipTransition();
  if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    currentTransition = document.startViewTransition(update);
    currentTransition.finished.catch(() => {}).finally(() => { currentTransition = null; });
    return;
  }
  update();
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    main.animate?.([{ opacity: .65, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 800, easing: 'cubic-bezier(.22,.75,.25,1)' });
  }
}
