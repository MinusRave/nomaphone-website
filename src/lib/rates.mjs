// Shared helpers for NomaPhone per-minute rates (src/data/rates.json, synced from the app
// with scripts/sync-rates.mjs). Plain JS so astro.config.mjs (remark plugin) can import it too.
import data from "../data/rates.json" with { type: "json" };

// US and Canada (NANP) don't distinguish landline and mobile numbers: one rate covers both.
const SAME_RATE_FOR_MOBILE = new Set(["US", "CA"]);

export const RATES_GENERATED_AT = data.generatedAt;

export const COUNTRIES = data.countries.map((c) => ({
  ...c,
  mobileCents: c.mobileCents ?? (SAME_RATE_FOR_MOBILE.has(c.country) ? c.landlineCents : undefined),
}));

export const COUNTRY_COUNT = COUNTRIES.length;

export function getCountry(code) {
  const row = COUNTRIES.find((c) => c.country === String(code).toUpperCase());
  if (!row) throw new Error(`[rates] Unknown country code "${code}" (not in src/data/rates.json)`);
  return row;
}

export function fromCents(row) {
  const values = [row.landlineCents, row.mobileCents].filter((v) => typeof v === "number");
  return values.length ? Math.min(...values) : undefined;
}

// 3 -> "$0.03", 2.5 -> "$0.025", 12 -> "$0.12"
export function formatDollars(cents) {
  const dollars = cents / 100;
  const decimals = Number.isInteger(cents) ? 2 : 3;
  return `$${dollars.toFixed(decimals)}`;
}

export const formatPerMin = (cents) => `${formatDollars(cents)}/min`;

// Text used by <RateFor /> and by the [[rate:XX]] markdown token.
//   type "from" (default) -> "from $0.03/min"
//   type "landline"       -> "$0.03/min"
//   type "mobile"         -> "$0.10/min"
//   type "both"           -> "$0.04/min to landlines and $0.10/min to mobiles"
export function rateText(code, type = "from") {
  const row = getCountry(code);
  const l = row.landlineCents;
  const m = row.mobileCents;
  switch (type) {
    case "landline":
      if (l === undefined) throw new Error(`[rates] No landline rate for ${code}`);
      return formatPerMin(l);
    case "mobile":
      if (m === undefined) throw new Error(`[rates] No mobile rate for ${code}`);
      return formatPerMin(m);
    case "both":
      if (l !== undefined && m !== undefined) {
        if (l === m) return `${formatPerMin(l)} to landlines and mobiles`;
        return `${formatPerMin(l)} to landlines and ${formatPerMin(m)} to mobiles`;
      }
      return `${formatPerMin(l ?? m)} to ${l !== undefined ? "landlines" : "mobiles"}`;
    case "from":
    default:
      return `from ${formatPerMin(fromCents(row))}`;
  }
}
