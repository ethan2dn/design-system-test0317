import React from "react";
import tokens from "../../figma-tokens.json";

const SAMPLE_TEXT = "가나다라마바사 ABCDefg 0123456789";

const WEIGHTS = [
  { key: "reg", label: "Regular (400)" },
  { key: "med", label: "Medium (500)" },
  { key: "semibold", label: "SemiBold (600)" },
];

const mono = "'SF Mono', 'Fira Code', 'Fira Mono', monospace";

// Build rows: "9/caption", "10/caption", ..., "13/body", ..., "15/title", ...
// Each row key = "size/category", columns = weight variants
function buildRows(typography) {
  const rows = {};
  for (const [name, token] of Object.entries(typography)) {
    const parts = name.split("/");
    const rowKey = `${parts[0]}/${parts[1]}`; // e.g. "9/caption"
    const weight = parts[2];
    if (!rows[rowKey]) rows[rowKey] = {};
    rows[rowKey][weight] = { name, ...token };
  }
  // Sort by fontSize then category
  const sorted = Object.entries(rows).sort((a, b) => {
    const sizeA = Number(a[0].split("/")[0]);
    const sizeB = Number(b[0].split("/")[0]);
    if (sizeA !== sizeB) return sizeB - sizeA;
    return a[0].localeCompare(b[0]);
  });
  return sorted;
}

const rows = buildRows(tokens.typography);

function TypographyTable() {
  return (
    <div style={{ padding: "24px", fontFamily: "Pretendard, sans-serif" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: "var(--color-light-text-primary)" }}>
        Typography Tokens
      </h1>
      <p style={{ fontSize: 14, color: "var(--color-light-text-tertiary)", marginBottom: 40 }}>
        Pretendard — {Object.keys(tokens.typography).length} styles from Figma
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th
              style={{
                width: 100,
                padding: "10px 12px",
                textAlign: "left",
                fontSize: 11,
                fontWeight: 600,
                color: "var(--color-light-text-quaternary)",
                borderBottom: "2px solid var(--color-light-bg-highlight)",
                fontFamily: mono,
              }}
            >
              Size
            </th>
            {WEIGHTS.map((w) => (
              <th
                key={w.key}
                style={{
                  padding: "10px 12px",
                  textAlign: "left",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--color-light-text-quaternary)",
                  borderBottom: "2px solid var(--color-light-bg-highlight)",
                  fontFamily: mono,
                }}
              >
                {w.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([rowKey, weights]) => {
            const sample = Object.values(weights)[0];
            return (
              <tr key={rowKey}>
                <td
                  style={{
                    padding: "16px 12px",
                    borderBottom: "1px solid var(--color-light-bg-grouped-strong)",
                    verticalAlign: "top",
                  }}
                >
                  <span style={{ fontSize: 18, fontWeight: 700, color: "var(--color-light-text-secondary)", display: "block" }}>
                    {rowKey}
                  </span>
                  <span style={{ fontSize: 10, color: "var(--color-light-icon-grey)", fontFamily: mono }}>
                    {sample.lineHeight}px LH
                    {sample.letterSpacing !== 0 && ` / ${sample.letterSpacing}px LS`}
                  </span>
                </td>
                {WEIGHTS.map((w) => {
                  const token = weights[w.key];
                  if (!token) {
                    return (
                      <td
                        key={w.key}
                        style={{
                          padding: "16px 12px",
                          borderBottom: "1px solid var(--color-light-bg-grouped-strong)",
                          color: "var(--color-light-border-grey-weak-a)",
                          fontSize: 12,
                        }}
                      >
                        —
                      </td>
                    );
                  }
                  return (
                    <td
                      key={w.key}
                      style={{
                        padding: "16px 12px",
                        borderBottom: "1px solid var(--color-light-bg-grouped-strong)",
                        verticalAlign: "top",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Pretendard, sans-serif",
                          fontSize: token.fontSize,
                          fontWeight: token.fontWeight,
                          lineHeight: `${token.lineHeight}px`,
                          letterSpacing: token.letterSpacing,
                          color: "var(--color-light-text-primary)",
                          marginBottom: 6,
                          wordBreak: "keep-all",
                        }}
                      >
                        {SAMPLE_TEXT}
                      </div>
                      <div style={{ fontFamily: mono, fontSize: 10, color: "var(--color-light-icon-grey)" }}>
                        {token.name}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default {
  title: "Design Tokens/Typography",
  component: TypographyTable,
};

export const AllStyles = {
  render: () => <TypographyTable />,
};
