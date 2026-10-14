// Original, code-native diagrams. No third-party logos or image dependencies.
export function diagram(key = 'plan', className = '') {
  const drawings = {
    career:'<circle cx="120" cy="100" r="66"/><circle cx="120" cy="100" r="49" opacity=".35"/><g class="diagram-pointer"><path d="m146 60-12 54-40 26 12-54Z" fill="var(--art-accent)"/><path d="m146 60-26 40-26 40"/></g><path d="M120 22v12m0 132v12M42 100h12m132 0h12"/>',
    universities:'<circle cx="120" cy="100" r="64" fill="var(--art-wash)"/><ellipse cx="120" cy="100" rx="27" ry="64"/><path d="M57 100h126M68 66h104M68 134h104"/><g class="diagram-orbit"><ellipse cx="120" cy="100" rx="104" ry="27" transform="rotate(-28 120 100)"/><circle cx="210" cy="52" r="8" fill="var(--art-accent)"/></g>',
    grants:'<circle cx="120" cy="100" r="70" opacity=".3"/><g class="diagram-pointer"><path d="m120 35 17 43 46 3-36 29 12 46-39-25-39 25 12-46-36-29 46-3Z" fill="var(--art-accent)"/></g><path d="M42 159h42m72 0h42M52 174h136"/>',
    exams:'<path d="M38 52h58q24 0 24 18v96q-7-12-24-12H38Zm164 0h-58q-24 0-24 18v96q7-12 24-12h58Z" fill="var(--art-wash)"/><path d="M55 80h42M55 99h32M55 118h36M141 109l13 13 31-38"/><circle class="diagram-pointer" cx="177" cy="43" r="18" fill="var(--art-accent)"/>',
    plan:'<path d="M28 145h48V99h72V53h65" stroke-dasharray="5 6"/><circle cx="28" cy="145" r="12" fill="var(--art-wash)"/><circle cx="112" cy="99" r="17" fill="var(--art-accent)"/><circle cx="212" cy="53" r="23" fill="var(--art-accent)"/><path d="m203 52 7 7 12-13"/>',
    fork:'<path d="M120 178v-62q0-54-70-54m70 54q0-54 70-54M120 116V28"/><path d="m38 62 18-14m-18 14 18 14m134-14-18-14m18 14-18 14M120 28l-13 17m13-17 13 17"/><circle cx="120" cy="116" r="18" fill="var(--art-accent)"/>',
    question:'<circle cx="120" cy="100" r="77" fill="var(--art-wash)"/><path d="M92 73a29 29 0 1 1 43 24q-15 8-15 27" stroke-width="7"/><circle cx="120" cy="146" r="5" fill="currentColor"/>',
  };
  return `<svg class="scene-diagram ${className}" viewBox="0 0 240 200" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${drawings[key] || drawings.plan}</svg>`;
}
export const arrow = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';
// Lightweight outline marks; visible platform names provide the link names.
export function contactIcon(key) {
  const paths={
    telegram:'<path d="m3 11 18-7-4 16-6-5-4 3 1-6 9-5-6 8M3 11l5 1"/>',
    instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>',
    whatsapp:'<path d="M4.3 16.6a9 9 0 1 1 3.1 3.1L3 21Z"/><path d="m8 7 2 3-1.2 1.2a8 8 0 0 0 4 4L14 14l3 2c-1 3-4 2-7-1S6 8 8 7Z"/>'
  };
  return `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[key]||''}</svg>`;
}
export const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
