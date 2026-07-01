"""Offline popup/modal open & close — Elementor, Popup Maker, Bootstrap."""

from __future__ import annotations

import re
from pathlib import Path

from bs4 import BeautifulSoup

POPUP_FIX_CSS = """
/* Offline popup/modal — close buttons, overlays, scroll lock */
.elementor-popup-modal.dialog-type-lightbox,
.elementor-popup-modal {
  align-items: center;
  justify-content: center;
}
.elementor-popup-modal .dialog-close-button,
.elementor-popup-modal .dialog-lightbox-close-button,
.dialog-close-button,
.dialog-lightbox-close-button {
  display: block !important;
  opacity: 1 !important;
  pointer-events: all !important;
  cursor: pointer !important;
  z-index: 100001 !important;
  background: transparent;
  border: 0;
  padding: 8px;
}
.elementor-popup-modal.is-open,
.elementor-popup-modal[style*="display: flex"],
.elementor-popup-modal[style*="display:flex"] {
  display: flex !important;
  pointer-events: all !important;
}
.pum-overlay.pum-active,
.pum-overlay[style*="block"] {
  display: block !important;
  visibility: visible !important;
}
.pum-close, .popmake-close {
  cursor: pointer !important;
  pointer-events: all !important;
  z-index: 100001 !important;
}
.modal.show, .modal.in {
  display: block !important;
}
body.dialog-prevent-scroll,
body.modal-open,
html.dialog-prevent-scroll {
  overflow: hidden !important;
}
"""

OFFLINE_POPUP_JS = r"""
(function () {
  'use strict';

  var CLOSE_SEL = [
    '.dialog-close-button', '.dialog-lightbox-close-button',
    '.pum-close', '.popmake-close', '.pum-close-popmake',
    '.modal .close', '.modal .btn-close',
    '[data-dismiss="modal"]', '[data-bs-dismiss="modal"]',
    '.fancybox-close-small', '.mfp-close', '.uk-modal-close',
    'button[aria-label="Close"]', 'button[aria-label="close"]'
  ].join(',');

  function ensureCloseIcon() {
    if (document.getElementById('eicon-close')) return;
    var wrap = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    wrap.setAttribute('style', 'display:none');
    wrap.setAttribute('class', 'e-font-icon-svg-symbols');
    wrap.innerHTML = '<symbol id="eicon-close" viewBox="0 0 1000 1000"><path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"/></symbol>';
    (document.body || document.documentElement).appendChild(wrap);
  }

  function modalRoot(el) {
    if (!el) return null;
    return el.closest('.elementor-popup-modal, .pum-overlay, .popmake, .modal, .fancybox-container, .mfp-wrap') || el;
  }

  function hideModal(el) {
    var root = modalRoot(el);
    if (!root) return;
    root.style.display = 'none';
    root.style.visibility = 'hidden';
    root.setAttribute('aria-hidden', 'true');
    root.classList.remove('is-open', 'pum-open', 'pum-active', 'show', 'in', 'fancybox-is-open');
    if (root.classList.contains('pum-overlay')) {
      root.classList.remove('pum-active');
    }
    document.body.classList.remove('dialog-prevent-scroll', 'modal-open', 'pum-open-overlay');
    document.documentElement.classList.remove('dialog-prevent-scroll');
    document.querySelectorAll('.modal-backdrop, .pum-overlay-background').forEach(function (n) {
      n.style.display = 'none';
    });
  }

  function showModal(el) {
    var root = modalRoot(el);
    if (!root) return;
    if (root.classList.contains('elementor-popup-modal') || root.classList.contains('dialog-type-lightbox')) {
      root.style.display = 'flex';
    } else if (root.classList.contains('modal')) {
      root.style.display = 'block';
      root.classList.add('show');
    } else {
      root.style.display = 'block';
    }
    root.style.visibility = 'visible';
    root.setAttribute('aria-hidden', 'false');
    root.classList.add('is-open');
    if (root.classList.contains('pum-overlay')) {
      root.classList.add('pum-active');
    }
    document.body.classList.add('dialog-prevent-scroll');
  }

  function findPopupById(id) {
    return document.getElementById('elementor-popup-modal-' + id)
      || document.querySelector('.elementor-popup-modal#elementor-popup-modal-' + id)
      || document.querySelector('[data-elementor-id="' + id + '"][data-elementor-type="popup"]')
      || document.querySelector('.elementor-' + id + '.elementor-location-popup')
      || document.querySelector('#pum-' + id)
      || document.getElementById('popmake-' + id)
      || document.querySelector('[data-popmake-id="' + id + '"]');
  }

  function parseElementorPopupHref(href) {
    try {
      var raw = decodeURIComponent(href || '').replace(/^#/, '');
      if (raw.indexOf('popup') === -1 && raw.indexOf('elementor-action') === -1) return null;
      var m = raw.match(/settings=([^&]+)/);
      if (!m) return null;
      var b64 = m[1].replace(/-/g, '+').replace(/_/g, '/');
      while (b64.length % 4) b64 += '=';
      var data = JSON.parse(atob(b64));
      return data.id ? String(data.id) : null;
    } catch (e) {
      return null;
    }
  }

  function closeAll() {
    document.querySelectorAll('.elementor-popup-modal, .pum-overlay.pum-active, .modal.show, .modal.in').forEach(hideModal);
  }

  function onClick(e) {
    var closeBtn = e.target.closest(CLOSE_SEL);
    if (closeBtn) {
      e.preventDefault();
      e.stopPropagation();
      hideModal(closeBtn);
      return;
    }

    var link = e.target.closest('a[href*="elementor-action"], a[href*="popup%3Aopen"], a[href*="popup:open"]');
    if (link) {
      var pid = parseElementorPopupHref(link.getAttribute('href'));
      if (pid) {
        e.preventDefault();
        var popup = findPopupById(pid);
        if (popup) showModal(popup);
        return;
      }
    }

    var pumLink = e.target.closest('a[href^="#popmake-"], a.popmake-link, [data-popmake-trigger]');
    if (pumLink) {
      var href = pumLink.getAttribute('href') || '';
      var pm = href.match(/#popmake-(\d+)/);
      if (pm) {
        e.preventDefault();
        var p = findPopupById(pm[1]);
        if (p) showModal(p);
        return;
      }
    }

    var overlay = e.target.closest('.elementor-popup-modal, .pum-overlay, .modal');
    if (overlay && e.target === overlay) {
      hideModal(overlay);
    }
  }

  function patchElementor() {
    try {
      var mod = window.elementorProFrontend && elementorProFrontend.modules && elementorProFrontend.modules.popup;
      if (!mod) return;
      if (typeof mod.showPopup === 'function') {
        var origShow = mod.showPopup.bind(mod);
        mod.showPopup = function (opts) {
          try { return origShow(opts); } catch (err) {
            if (opts && opts.id) showModal(findPopupById(String(opts.id)));
          }
        };
      }
      if (typeof mod.closePopup === 'function') {
        var origClose = mod.closePopup.bind(mod);
        mod.closePopup = function () {
          try { return origClose.apply(mod, arguments); } catch (err) { closeAll(); }
        };
      }
    } catch (e) { /* ignore */ }
  }

  function init() {
    ensureCloseIcon();
    patchElementor();
    document.removeEventListener('click', onClick, true);
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAll();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.addEventListener('load', function () {
    init();
    patchElementor();
  });
})();
"""


def write_offline_popups_js(page_dir: Path) -> Path:
    """Write offline-popups.js next to other page assets."""
    from .storage import assets_root

    js_dir = assets_root(page_dir) / "js"
    js_dir.mkdir(parents=True, exist_ok=True)
    out = js_dir / "offline-popups.js"
    out.write_text(OFFLINE_POPUP_JS.strip() + "\n", encoding="utf-8")
    return out


def apply_offline_popup_fixes(html: str, page_dir: Path | None = None) -> str:
    """Inject popup CSS/JS so modals open and close offline."""
    soup = BeautifulSoup(html, "lxml")

    if page_dir:
        write_offline_popups_js(page_dir)
        script_src = "assets/js/offline-popups.js"
    else:
        script_src = None

    if soup.head and not soup.find("style", id="scraper-popup-fix"):
        style = soup.new_tag("style", id="scraper-popup-fix")
        style.string = POPUP_FIX_CSS
        soup.head.append(style)

    if script_src:
        existing = soup.find("script", src=re.compile(r"offline-popups\.js"))
        if not existing:
            tag = soup.new_tag("script", src=script_src, defer=True)
            tag["id"] = "scraper-offline-popups"
            if soup.body:
                soup.body.append(tag)
            else:
                soup.append(tag)
    elif soup.body and not soup.find("script", id="scraper-offline-popups"):
        inline = soup.new_tag("script", id="scraper-offline-popups")
        inline.string = OFFLINE_POPUP_JS.strip()
        soup.body.append(inline)

    if soup.body and not soup.find(id="eicon-close"):
        svg = BeautifulSoup(
            '<svg class="e-font-icon-svg-symbols" style="display:none" aria-hidden="true">'
            '<symbol id="eicon-close" viewBox="0 0 1000 1000">'
            '<path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"/>'
            "</symbol></svg>",
            "lxml",
        )
        soup.body.insert(0, svg)

    return str(soup)
