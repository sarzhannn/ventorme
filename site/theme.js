// Dark-only brand palette, including when an older session stored light mode.
document.documentElement.dataset.theme = 'dark';
document.querySelector('meta[name="theme-color"]')?.setAttribute('content','#18143d');
try { localStorage.removeItem('ventorme-theme'); } catch { /* Storage is optional. */ }
