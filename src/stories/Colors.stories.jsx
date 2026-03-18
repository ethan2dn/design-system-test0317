import React, { useState } from "react";
import tokens from "../../figma-tokens.json";

const mono = "'SF Mono', 'Fira Code', 'Fira Mono', monospace";

/*
 * Figma 페이지 구조:
 * 1. Mode  — Light/Dark 쌍, 카테고리: text → icon → border → overlay → surface → bg → service
 * 2. Auto  — 배경 명도에 따라 자동 전환
 * 3. Always — 모드 무관 고정 컬러 (chipName, service, avatar, palette 등)
 * 4. POP   — POP 서비스 전용
 * 5. Picker — 컬러 피커 UI
 */

const MODE_CATEGORY_ORDER = ["text", "icon", "border", "overlay", "surface", "bg", "service"];

const SECTION_DESCRIPTIONS = {
  Mode: "Light/Dark의 한 쌍을 가진 컬러. 모드 전환 시 대응하는 컬러로 자동 변환됩니다.",
  Auto: "배경(background) 색상 또는 이미지의 명도에 따라 흰 ↔ 검 자동 변환되는 컬러. on-light ↔ on-dark의 쌍을 가집니다.",
  Always:
    "모드, background에 영향받지 않고 항상 정의된 컬러가 고정적으로 나오는 값. 어두운 컬러 위에 오는 것이 고정적이거나, 명시성과 타입이 확보된 컬러값.",
  POP: "POP 서비스 전용 컬러 (bg, bubble, item gradient 등)",
  Picker:
    "Admin에서 Color picker를 통해 설정한 컬러값. Color chip과는 무관한 임의의 값이며, 코드명을 클라와 협의하여 지정.",
};

const MODE_CATEGORY_LABELS = {
  text: "Text",
  icon: "Icon",
  border: "Border",
  overlay: "Overlay",
  surface: "Surface",
  bg: "Background",
  service: "Service",
};

// ── helpers ──

function getColorCSS(token) {
  if (token.type === "gradient") {
    return { background: `linear-gradient(90deg, ${token.stops.join(", ")})` };
  }
  const hex = token.hex;
  if (token.opacity !== undefined && token.opacity < 1) {
    return { background: hex, opacity: token.opacity };
  }
  return { background: hex };
}

function getColorLabel(token) {
  if (token.type === "gradient") return token.stops.join(" → ");
  if (token.opacity !== undefined && token.opacity < 1)
    return `${token.hex} @ ${Math.round(token.opacity * 100)}%`;
  return token.hex;
}

function getModeCategory(name) {
  // "light/text/primary" → "text"
  const parts = name.split("/");
  if (parts.length >= 2) return parts[1];
  return "other";
}

function getTokenSuffix(name) {
  // "light/text/primary" → "text/primary"
  const parts = name.split("/");
  return parts.slice(1).join("/");
}

// ── Build data structures ──

function buildModeData(colors) {
  // Pair light/dark by suffix (e.g. text/primary → { light: ..., dark: ... })
  const pairs = {};
  for (const [name, token] of Object.entries(colors)) {
    const theme = name.split("/")[0];
    if (theme !== "light" && theme !== "dark") continue;
    const suffix = getTokenSuffix(name);
    if (!pairs[suffix]) pairs[suffix] = {};
    pairs[suffix][theme] = { name, ...token };
  }
  // Group by category
  const grouped = {};
  for (const [suffix, pair] of Object.entries(pairs)) {
    const cat = suffix.split("/")[0];
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push({ suffix, ...pair });
  }
  // Sort within each category
  for (const cat of Object.keys(grouped)) {
    grouped[cat].sort((a, b) => a.suffix.localeCompare(b.suffix));
  }
  return grouped;
}

function buildGroupedList(colors, prefix) {
  const items = [];
  for (const [name, token] of Object.entries(colors)) {
    if (name.startsWith(prefix + "/")) {
      items.push({ name, ...token });
    }
  }
  items.sort((a, b) => a.name.localeCompare(b.name));

  // sub-group for always: chipName vs service vs avatar vs palette
  if (prefix === "always") {
    const groups = {};
    for (const item of items) {
      const parts = item.name.split("/");
      const sub = parts.length >= 3 ? parts[1] : "base";
      if (!groups[sub]) groups[sub] = [];
      groups[sub].push(item);
    }
    return groups;
  }
  if (prefix === "pop") {
    const groups = {};
    for (const item of items) {
      const parts = item.name.split("/");
      const sub = parts.length >= 3 ? parts[1] : "other";
      if (!groups[sub]) groups[sub] = [];
      groups[sub].push(item);
    }
    return groups;
  }
  return { all: items };
}

// ── Components ──

function Swatch({ token, size = 32, dark = false }) {
  const style = getColorCSS(token);
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 6,
        border: dark ? "1px solid var(--color-light-border-stronger)" : "1px solid var(--color-light-bg-highlight)",
        flexShrink: 0,
        ...style,
      }}
    />
  );
}

function ModeSection({ colors }) {
  const grouped = buildModeData(colors);
  return (
    <div>
      {MODE_CATEGORY_ORDER.map((cat) => {
        const pairs = grouped[cat];
        if (!pairs || pairs.length === 0) return null;
        return (
          <div key={cat} style={{ marginBottom: 40 }}>
            <h3
              style={{
                fontSize: 13,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: "var(--color-light-text-quaternary)",
                marginBottom: 12,
                paddingBottom: 8,
                borderBottom: "2px solid var(--color-light-border-divider-weaker)",
              }}
            >
              {MODE_CATEGORY_LABELS[cat] || cat}
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={thBase}>Token</th>
                  <th style={{ ...thBase, width: 280 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "var(--color-light-bg-base)",
                          border: "1px solid var(--color-light-border-default-a)",
                        }}
                      />
                      Light
                    </span>
                  </th>
                  <th style={{ ...thBase, width: 280 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "var(--color-dark-bg-base)",
                        }}
                      />
                      Dark
                    </span>
                  </th>
                  <th style={thBase}>Description</th>
                </tr>
              </thead>
              <tbody>
                {pairs.map(({ suffix, light, dark }) => (
                  <tr key={suffix}>
                    <td style={tdBase}>
                      <code style={codeStyle}>{suffix}</code>
                    </td>
                    <td style={tdBase}>
                      {light ? (
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <Swatch token={light} />
                          <div>
                            <div style={{ fontSize: 12, fontFamily: mono, color: "var(--color-light-text-secondary)" }}>
                              {getColorLabel(light)}
                            </div>
                            <div style={{ fontSize: 10, fontFamily: mono, color: "var(--color-light-icon-grey)" }}>
                              {light.name}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <span style={{ color: "var(--color-light-border-grey-weak-a)" }}>—</span>
                      )}
                    </td>
                    <td style={{ ...tdBase, background: "var(--color-dark-bg-base)" }}>
                      {dark ? (
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <Swatch token={dark} dark />
                          <div>
                            <div style={{ fontSize: 12, fontFamily: mono, color: "var(--color-light-border-grey-weak-a)" }}>
                              {getColorLabel(dark)}
                            </div>
                            <div style={{ fontSize: 10, fontFamily: mono, color: "var(--color-light-text-tertiary)" }}>
                              {dark.name}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <span style={{ color: "var(--color-light-text-tertiary)" }}>—</span>
                      )}
                    </td>
                    <td style={{ ...tdBase, fontSize: 12, color: "var(--color-light-text-quaternary)", maxWidth: 240 }}>
                      {light?.description || dark?.description || ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

function SimpleSection({ colors, prefix }) {
  const grouped = buildGroupedList(colors, prefix);
  return (
    <div>
      {Object.entries(grouped).map(([sub, items]) => (
        <div key={sub} style={{ marginBottom: 32 }}>
          {sub !== "all" && (
            <h4
              style={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                color: "var(--color-light-icon-grey)",
                marginBottom: 10,
              }}
            >
              {sub}
            </h4>
          )}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thBase}>Token Name</th>
                <th style={{ ...thBase, width: 300 }}>Color</th>
                <th style={thBase}>Description</th>
              </tr>
            </thead>
            <tbody>
              {items.map((token) => (
                <tr key={token.name}>
                  <td style={tdBase}>
                    <code style={codeStyle}>{token.name}</code>
                  </td>
                  <td style={tdBase}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Swatch token={token} />
                      <span style={{ fontSize: 12, fontFamily: mono, color: "var(--color-light-text-tertiary)" }}>
                        {getColorLabel(token)}
                      </span>
                    </div>
                  </td>
                  <td style={{ ...tdBase, fontSize: 12, color: "var(--color-light-text-quaternary)", maxWidth: 240 }}>
                    {token.description || ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

// ── Styles ──

const thBase = {
  textAlign: "left",
  padding: "8px 12px",
  fontSize: 11,
  fontWeight: 600,
  color: "var(--color-light-text-quaternary)",
  borderBottom: "2px solid var(--color-light-bg-highlight)",
  fontFamily: mono,
  whiteSpace: "nowrap",
};

const tdBase = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--color-light-bg-grouped-strong)",
  verticalAlign: "middle",
};

const codeStyle = {
  fontFamily: mono,
  fontSize: 12,
  color: "var(--color-light-text-tertiary)",
  whiteSpace: "nowrap",
};

// ── Main ──

const SECTIONS = [
  { key: "Mode", label: "Mode" },
  { key: "Auto", label: "Auto" },
  { key: "Always", label: "Always" },
  { key: "POP", label: "POP" },
  { key: "Picker", label: "Picker" },
];

function ColorsPage() {
  const [activeSection, setActiveSection] = useState("Mode");

  // Count per section
  const counts = {
    Mode: Object.keys(tokens.colors).filter(
      (n) => n.startsWith("light/") || n.startsWith("dark/")
    ).length,
    Auto: Object.keys(tokens.colors).filter((n) => n.startsWith("auto/")).length,
    Always: Object.keys(tokens.colors).filter((n) => n.startsWith("always/")).length,
    POP: Object.keys(tokens.colors).filter((n) => n.startsWith("pop/")).length,
    Picker: Object.keys(tokens.colors).filter((n) => n.startsWith("picker/")).length,
  };

  return (
    <div style={{ padding: 24, fontFamily: "var(--font-pretendard)" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: "var(--color-light-text-primary)" }}>
        Color Tokens
      </h1>
      <p style={{ fontSize: 14, color: "var(--color-light-text-tertiary)", marginBottom: 24 }}>
        {Object.keys(tokens.colors).length} color styles from Figma
      </p>

      {/* Section tabs */}
      <div style={{ display: "flex", gap: 0, marginBottom: 8, borderBottom: "2px solid var(--color-light-border-divider-weaker)" }}>
        {SECTIONS.map(({ key, label }) => {
          const isActive = activeSection === key;
          return (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              style={{
                padding: "10px 20px",
                border: "none",
                borderBottom: isActive ? "2px solid var(--color-light-text-primary)" : "2px solid transparent",
                background: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: isActive ? 700 : 400,
                color: isActive ? "var(--color-light-text-primary)" : "var(--color-light-text-quaternary)",
                marginBottom: -2,
                fontFamily: "var(--font-pretendard)",
              }}
            >
              {label}
              <span
                style={{ marginLeft: 6, fontSize: 11, color: isActive ? "var(--color-light-text-tertiary)" : "var(--color-light-border-grey-weak-a)" }}
              >
                {counts[key]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Section description */}
      <p style={{ fontSize: 13, color: "var(--color-light-text-quaternary)", marginBottom: 24, lineHeight: 1.6 }}>
        {SECTION_DESCRIPTIONS[activeSection]}
      </p>

      {/* Content */}
      {activeSection === "Mode" && <ModeSection colors={tokens.colors} />}
      {activeSection === "Auto" && <SimpleSection colors={tokens.colors} prefix="auto" />}
      {activeSection === "Always" && <SimpleSection colors={tokens.colors} prefix="always" />}
      {activeSection === "POP" && <SimpleSection colors={tokens.colors} prefix="pop" />}
      {activeSection === "Picker" && <SimpleSection colors={tokens.colors} prefix="picker" />}
    </div>
  );
}

export default {
  title: "Design Tokens/Colors",
  component: ColorsPage,
};

export const AllColors = {
  render: () => <ColorsPage />,
};
