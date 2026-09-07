import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(new URL("../public/theme.js", import.meta.url), "utf8");
const storageKey = "alhussein-portfolio-theme";

function createPage({ saved = null, dark = false, blocked = false } = {}) {
  const root = { dataset: {} };
  const documentEvents = new Map();
  const windowEvents = new Map();
  const mediaEvents = new Map();
  const controls = [];
  const media = {
    matches: dark,
    addEventListener: (name, listener) => mediaEvents.set(name, listener),
  };
  let stored = saved;
  class Element {
    attributes = {};
    closest() { return this; }
    setAttribute(name, value) { this.attributes[name] = value; }
  }
  const context = {
    Element,
    document: {
      documentElement: root,
      querySelectorAll: () => controls,
      addEventListener: (name, listener) => documentEvents.set(name, listener),
    },
    window: {
      matchMedia: () => media,
      localStorage: {
        getItem() { if (blocked) throw new Error("Storage unavailable"); return stored; },
        setItem(key, value) { if (blocked) throw new Error("Storage unavailable"); assert.equal(key, storageKey); stored = value; },
      },
      addEventListener: (name, listener) => windowEvents.set(name, listener),
    },
  };
  vm.runInNewContext(source, context);
  const button = new Element();
  controls.push(button);
  documentEvents.get("DOMContentLoaded")();
  return {
    root, button,
    stored: () => stored,
    click: () => documentEvents.get("click")({ target: button }),
    setSystemDark(value) { media.matches = value; mediaEvents.get("change")(); },
    storage(value, key = storageKey) { windowEvents.get("storage")({ key, newValue: value }); },
  };
}

test("applies device dark mode on initial load and labels its control", () => {
  const page = createPage({ dark: true });
  assert.equal(page.root.dataset.theme, "dark");
  assert.equal(page.root.dataset.themeReady, "true");
  assert.equal(page.button.attributes["aria-pressed"], "true");
  assert.equal(page.button.attributes.title, "Switch to light mode");
});

test("follows device changes until the visitor chooses a mode", () => {
  const page = createPage();
  assert.equal(page.root.dataset.theme, "light");
  page.setSystemDark(true);
  assert.equal(page.root.dataset.theme, "dark");
  page.click();
  assert.equal(page.root.dataset.theme, "light");
  assert.equal(page.stored(), "light");
  page.setSystemDark(true);
  assert.equal(page.root.dataset.theme, "light");
});

test("switches both ways and restores the saved choice after a reload", () => {
  const page = createPage({ saved: "dark" });
  page.click();
  assert.equal(page.stored(), "light");
  assert.equal(page.button.attributes["aria-pressed"], "false");
  page.click();
  const reloaded = createPage({ saved: page.stored() });
  assert.equal(reloaded.root.dataset.theme, "dark");
  assert.equal(reloaded.button.attributes["aria-pressed"], "true");
});

test("keeps switching functional when local storage is blocked", () => {
  const page = createPage({ dark: true, blocked: true });
  page.click();
  assert.equal(page.root.dataset.theme, "light");
  page.click();
  assert.equal(page.root.dataset.theme, "dark");
});

test("ignores invalid saved values and syncs preference changes across tabs", () => {
  const page = createPage({ saved: "invalid", dark: true });
  assert.equal(page.root.dataset.theme, "dark");
  page.storage("light", "unrelated-key");
  assert.equal(page.root.dataset.theme, "dark");
  page.storage("light");
  assert.equal(page.root.dataset.theme, "light");
  page.storage(null);
  assert.equal(page.root.dataset.theme, "dark");
});
