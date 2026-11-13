const languageLink = document.querySelector('[data-language-switch]');
function updateLanguageLink() {
  if (languageLink) languageLink.hash = location.hash;
}
updateLanguageLink();
window.addEventListener('hashchange', updateLanguageLink);
