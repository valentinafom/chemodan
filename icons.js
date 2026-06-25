// SVG icon helpers — add new icons here
const _svg = (paths, w=20) => `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

// Quick-action and bottom-nav icons
const _ic = {
  pin:      _svg('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>'),
  plane:    _svg('<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'),
  bag:      _svg('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>'),
  list:     _svg('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>'),
  tag:      _svg('<path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>'),
  check:    _svg('<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'),
  calendar: _svg('<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),
};

// Luggage bar icons — maps text key → SVG (falls back to emoji/text for custom icons)
const _bagIcSvg = {
  suitcase: _svg(
    '<rect x="5" y="6" width="14" height="15" rx="3"/>' +
    '<path d="M9 6V5a3 3 0 0 1 6 0v1"/>' +
    '<path d="M9 11v6"/>' +
    '<path d="M15 11v6"/>' +
    '<path d="M9 21v1"/>' +
    '<path d="M15 21v1"/>',
    22
  ),
  backpack: _svg(
    '<path d="M8 8V6a4 4 0 0 1 8 0v2"/>' +
    '<rect x="5" y="8" width="14" height="13" rx="3"/>' +
    '<path d="M8 13h8"/>' +
    '<path d="M9 21v-5h6v5"/>' +
    '<path d="M5 12H3v6h2"/>' +
    '<path d="M19 12h2v6h-2"/>',
    22
  ),
  handbag: _svg(
    '<path d="M8 9V7a4 4 0 0 1 8 0v2"/>' +
    '<path d="M5 9h14l-1 12H6L5 9z"/>' +
    '<path d="M9 13v.01"/>' +
    '<path d="M15 13v.01"/>',
    22
  ),
  box: _svg(
    '<path d="M4 8l8-4 8 4-8 4-8-4z"/>' +
    '<path d="M4 8v8l8 4 8-4V8"/>' +
    '<path d="M12 12v8"/>',
    22
  ),
};

function lugIcon(icon) {
  if (_bagIcSvg[icon]) return _bagIcSvg[icon];
  const safe = String(icon || '📦').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  return `<span>${safe}</span>`;
}
