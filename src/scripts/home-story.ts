// Progressive enhancement: all content is visible without JavaScript.
const story = document.querySelector<HTMLElement>('.home-story');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (story && 'IntersectionObserver' in window) {
  const reveals = Array.from(story.querySelectorAll<HTMLElement>('[data-reveal]'));
  const flow = story.querySelector<HTMLElement>('.story-flow');
  let revealObserver: IntersectionObserver | undefined;
  let flowObserver: IntersectionObserver | undefined;

  function configureMotion() {
    revealObserver?.disconnect();
    flowObserver?.disconnect();
    story!.classList.remove('motion-ready');
    flow?.classList.remove('is-flowing');
    if (motion.matches) {
      reveals.forEach(el => el.classList.add('is-visible'));
      return;
    }
    // Never hide elements already visible at initialisation (or reached by an anchor).
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-visible');
    });
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver?.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    reveals.forEach(el => revealObserver!.observe(el));
    story!.classList.add('motion-ready');
    if (flow) {
      flowObserver = new IntersectionObserver(entries => {
        flow.classList.toggle('is-flowing', entries[0].isIntersecting);
      }, { threshold: 0.25 });
      flowObserver.observe(flow);
    }
  }
  // Keyboard navigation must never land on an invisible link.
  story.addEventListener('focusin', event => {
    if (!(event.target instanceof HTMLElement)) return;
    let element: HTMLElement | null = event.target;
    while (element && element !== story) {
      if (element.hasAttribute('data-reveal')) element.classList.add('is-visible');
      element = element.parentElement;
    }
  });
  motion.addEventListener('change', configureMotion);
  configureMotion();
}
