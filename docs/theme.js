(function () {
  "use strict";

  const storageKey = "alhussein-portfolio-theme";
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let preference = null;

  function validTheme(value) {
    return value === "light" || value === "dark" ? value : null;
  }

  try {
    preference = validTheme(window.localStorage.getItem(storageKey));
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  function syncControls() {
    const dark = root.dataset.theme === "dark";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(dark));
      button.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  function applyTheme() {
    root.dataset.theme = preference || (systemTheme.matches ? "dark" : "light");
    syncControls();
  }

  // Apply before the page is painted to avoid a flash of the wrong theme.
  applyTheme();
  root.dataset.themeReady = "true";

  document.addEventListener("click", function (event) {
    const button = event.target instanceof Element
      ? event.target.closest("[data-theme-toggle]")
      : null;
    if (!button) return;

    preference = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      window.localStorage.setItem(storageKey, preference);
    } catch {
      // Keep the selected theme for this visit even if it cannot be saved.
    }
    applyTheme();
  });

  document.addEventListener("DOMContentLoaded", syncControls);
  systemTheme.addEventListener("change", function () {
    if (!preference) applyTheme();
  });
  window.addEventListener("storage", function (event) {
    if (event.key === storageKey || event.key === null) {
      preference = validTheme(event.newValue);
      applyTheme();
    }
  });
}());
