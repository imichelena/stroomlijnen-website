// Content is always visible. Observers enhance decorative accents only.
const story = document.querySelector<HTMLElement>('.home-story');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (story && 'IntersectionObserver' in window) {
  const illustrations = Array.from(story.querySelectorAll<HTMLElement>('.story-flow, .site-illustration'));
  let observer: IntersectionObserver | undefined;
  function configureMotion() {
    observer?.disconnect();
    illustrations.forEach(el => el.classList.remove('is-flowing'));
    if (motion.matches) return;
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('is-flowing', entry.isIntersecting));
    }, { threshold: 0.25 });
    illustrations.forEach(el => observer!.observe(el));
  }
  motion.addEventListener('change', configureMotion);
  configureMotion();
}
