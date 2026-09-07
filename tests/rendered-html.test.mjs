import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";
import test from "node:test";

const output = resolve("docs");
const html = await readFile(resolve(output, "index.html"), "utf8");

test("exports a complete, script-independent recruiter portfolio", () => {
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  assert.match(html, /<title>Alhussein Anwar/);
  assert.doesNotMatch(html, /<script\b|codex-preview|Your site is taking shape/i);
  assert.equal([...html.matchAll(/<details\b/g)].length, 6);
  assert.equal([...html.matchAll(/<summary\b/g)].length, 6);
  for (const section of ["work", "experience", "stack", "about", "contact"]) {
    assert.match(html, new RegExp(`id="${section}"`));
  }
});

test("every in-page link resolves to a unique destination", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, "IDs must be unique");
  for (const [, target] of html.matchAll(/\bhref="#([^"]+)"/g)) {
    assert.ok(ids.includes(target), `Missing anchor: ${target}`);
  }
  assert.doesNotMatch(html, /\bhref="(?:#|)"/);
});

test("the exported CV, images, fonts, and stylesheets are present", async () => {
  const paths = [...html.matchAll(/\b(?:href|src)="(\/[^"?#]*)/g)].map(match => match[1]);
  assert.ok(paths.includes("/Alhussein-Anwar-CV.pdf"), "CV link is required");
  for (const path of new Set(paths)) {
    await access(resolve(output, `.${decodeURIComponent(path)}`));
  }
  const pdf = await readFile(resolve(output, "Alhussein-Anwar-CV.pdf"));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  for (const image of ["pplus-screen.png", "prayer-now-screen.png"]) {
    const bytes = await readFile(resolve(output, "images", image));
    assert.equal(bytes.subarray(1, 4).toString(), "PNG");
  }
});

test("career evidence retains contribution and concurrent-role context", () => {
  assert.match(html, /Part-time · Concurrent role/);
  assert.match(html, /product downloads/);
  assert.match(html, /enterprise clients across the suite/);
  assert.match(html, /Contributed to native iOS background notification delivery/);
  assert.match(html, /Built the native iOS app in Swift/);
});
