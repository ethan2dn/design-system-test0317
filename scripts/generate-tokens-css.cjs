#!/usr/bin/env node
/**
 * figma-tokens.json → src/tokens.css
 *
 * 컬러 토큰:  --color-{name}   (슬래시→하이픈)
 * 타이포 토큰: --typo-{name}-font-size / font-weight / line-height / letter-spacing
 *
 * opacity가 있는 컬러는 rgba() 값으로 변환
 * gradient는 linear-gradient() 로 변환
 */

const fs = require("fs");
const path = require("path");

const tokens = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../figma-tokens.json"), "utf-8")
);

function slugify(name) {
  return name.replace(/\//g, "-");
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

function colorValue(entry) {
  if (entry.type === "gradient" && entry.stops) {
    return `linear-gradient(135deg, ${entry.stops.join(", ")})`;
  }
  if (entry.opacity != null && entry.opacity < 1) {
    const [r, g, b] = hexToRgb(entry.hex);
    return `rgba(${r}, ${g}, ${b}, ${entry.opacity})`;
  }
  return entry.hex;
}

// ── Build CSS ──

const lines = [];
lines.push("/* Auto-generated from figma-tokens.json — do not edit manually */");
lines.push("/* Run: node scripts/generate-tokens-css.js */");
lines.push("");
lines.push(":root {");

// Colors
lines.push("  /* ── Colors ── */");
for (const [name, entry] of Object.entries(tokens.colors)) {
  const varName = `--color-${slugify(name)}`;
  const val = colorValue(entry);
  const comment = entry.description ? `  /* ${entry.description} */` : "";
  lines.push(`  ${varName}: ${val};${comment}`);
}

lines.push("");
lines.push("  /* ── Typography ── */");
for (const [name, entry] of Object.entries(tokens.typography)) {
  const slug = slugify(name);
  lines.push(`  --typo-${slug}-font-size: ${entry.fontSize}px;`);
  lines.push(`  --typo-${slug}-font-weight: ${entry.fontWeight};`);
  lines.push(`  --typo-${slug}-line-height: ${entry.lineHeight}px;`);
  lines.push(`  --typo-${slug}-letter-spacing: ${entry.letterSpacing}px;`);
}

lines.push("}");
lines.push("");

const css = lines.join("\n");
const outPath = path.join(__dirname, "../src/tokens.css");
fs.writeFileSync(outPath, css, "utf-8");

const colorCount = Object.keys(tokens.colors).length;
const typoCount = Object.keys(tokens.typography).length;
console.log(`✅ Generated ${outPath}`);
console.log(`   Colors: ${colorCount} tokens → ${colorCount} CSS vars`);
console.log(`   Typography: ${typoCount} tokens → ${typoCount * 4} CSS vars`);
