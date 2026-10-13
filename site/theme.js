// Runs before styles: no flash, and denied storage never prevents rendering.
(() => {
  const system = matchMedia('(prefers-color-scheme: dark)');
  let preference;
  try { preference = localStorage.getItem('ventorme-theme'); } catch { /* Session only. */ }
  const apply = value => {
    document.documentElement.dataset.theme = value;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', value === 'dark' ? '#18143d' : '#f8f6f1');
    document.dispatchEvent(new Event('site-theme-change'));
  };
  apply(['light','dark'].includes(preference) ? preference : system.matches ? 'dark' : 'light');
  system.addEventListener('change', event => { if (!preference) apply(event.matches ? 'dark' : 'light'); });
  window.toggleVentormeTheme = () => {
    preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('ventorme-theme', preference); } catch { /* Session only. */ }
    apply(preference);
  };
})();
