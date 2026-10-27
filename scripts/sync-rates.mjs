// Sync per-minute rates from the NomaPhone app (cabina) into src/data/rates.json.
//
// Usage (Node 24+, imports .ts directly):
//   node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/sync-rates.mjs [path/to/cabina/lib/rates.ts]
//
// The app's COUNTRY_RATES is the single source of truth: one row per country with the
// base landline and mobile rate in US cents per minute (may have .5). Commit the JSON.

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const source = resolve(
  process.argv[2] ?? process.env.CABINA_RATES ?? "../cabina/lib/rates.ts",
);
const { COUNTRY_RATES } = await import(pathToFileURL(source).href);

if (!Array.isArray(COUNTRY_RATES) || COUNTRY_RATES.length === 0) {
  throw new Error(`No COUNTRY_RATES found in ${source}`);
}

const countries = COUNTRY_RATES.map(({ country, name, landlineCents, mobileCents }) => {
  const row = { country, name };
  if (typeof landlineCents === "number") row.landlineCents = landlineCents;
  if (typeof mobileCents === "number") row.mobileCents = mobileCents;
  return row;
}).sort((a, b) => a.name.localeCompare(b.name, "en"));

const out = {
  generatedAt: new Date().toISOString().slice(0, 10),
  currency: "USD",
  unit: "cents per minute, billed per second",
  countries,
};

const target = resolve("src/data/rates.json");
writeFileSync(target, JSON.stringify(out, null, 2) + "\n");
console.log(`Wrote ${countries.length} countries to ${target}`);
