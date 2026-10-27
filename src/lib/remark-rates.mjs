// Remark plugin: replaces [[rate:IN]], [[rate:IN:mobile]], [[rate:GB:landline]], [[rate:MX:both]]
// in blog posts (.md and .mdx) with the current price from src/data/rates.json.
// Unknown country codes fail the build, so a post can never show a stale or invented rate.
import { rateText, COUNTRY_COUNT } from "./rates.mjs";

const TOKEN = /\[\[(rate:([A-Za-z]{2})(?::(from|landline|mobile|both))?|countries)\]\]/g;

function replace(value) {
  return value.replace(TOKEN, (_, __, code, type) => (code ? rateText(code, type ?? "from") : String(COUNTRY_COUNT)));
}

function walk(node) {
  if (node.type === "text" && typeof node.value === "string" && node.value.includes("[[")) {
    node.value = replace(node.value);
  }
  if (Array.isArray(node.children)) node.children.forEach(walk);
}

export default function remarkRates() {
  return (tree) => walk(tree);
}
