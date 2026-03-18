import React, { useState, useMemo } from "react";
import Icon, { ICON_NAMES, getIconCategory } from "../icons/Icon";
import tokens from "../../figma-tokens.json";

const mono = "'SF Mono', 'Fira Code', 'Fira Mono', monospace";

const CATEGORIES = ["gnb", "mymenu", "default", "player"];
const CATEGORY_LABELS = {
  gnb: "GNB (Global Navigation Bar)",
  mymenu: "My Menu",
  default: "Default",
  player: "Player",
};

const SIZES = [16, 20, 24, 32, 40];

// Pick representative icon colors from our tokens
const COLOR_OPTIONS = [
  { label: "currentColor (inherit)", value: "currentColor" },
  { label: "light/icon/primary", value: tokens.colors["light/icon/primary"]?.hex || "#191919" },
  { label: "light/icon/tertiary-a", value: tokens.colors["light/icon/tertiary-a"]?.hex || "#999" },
  { label: "light/icon/red", value: tokens.colors["light/icon/red"]?.hex || "#FF4747" },
  { label: "light/icon/blue", value: tokens.colors["light/icon/blue"]?.hex || "#3B82F6" },
  { label: "light/icon/green", value: tokens.colors["light/icon/green"]?.hex || "#22C55E" },
];

function IconsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("currentColor");
  const [selectedSize, setSelectedSize] = useState(24);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const filtered = useMemo(() => {
    return ICON_NAMES.filter((name) => {
      const matchSearch = !search || name.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === "all" || getIconCategory(name) === activeCategory;
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  const grouped = useMemo(() => {
    const groups = {};
    for (const name of filtered) {
      const cat = getIconCategory(name);
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(name);
    }
    return groups;
  }, [filtered]);

  return (
    <div style={{ padding: 24, fontFamily: "Pretendard, sans-serif" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: "var(--color-light-text-primary)" }}>
        Icon Components
      </h1>
      <p style={{ fontSize: 14, color: "var(--color-light-text-tertiary)", marginBottom: 24 }}>
        {ICON_NAMES.length} icons from Figma — base 24×24, scalable
      </p>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          marginBottom: 24,
          flexWrap: "wrap",
        }}
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px 12px",
            border: "1px solid var(--color-light-border-default-a)",
            borderRadius: 6,
            fontSize: 13,
            width: 220,
            fontFamily: "Pretendard, sans-serif",
          }}
        />

        {/* Size selector */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 12, color: "var(--color-light-text-quaternary)" }}>Size:</span>
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              style={{
                padding: "4px 10px",
                border: selectedSize === s ? "1px solid var(--color-light-border-stronger)" : "1px solid var(--color-light-border-default-a)",
                borderRadius: 4,
                background: selectedSize === s ? "var(--color-light-surface-form-inverted)" : "var(--color-light-bg-base)",
                color: selectedSize === s ? "var(--color-light-bg-base)" : "var(--color-light-text-tertiary)",
                fontSize: 12,
                cursor: "pointer",
                fontFamily: mono,
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Color selector */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 12, color: "var(--color-light-text-quaternary)" }}>Color:</span>
          {COLOR_OPTIONS.map((c) => (
            <button
              key={c.value}
              onClick={() => setSelectedColor(c.value)}
              title={c.label}
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                border:
                  selectedColor === c.value
                    ? "2px solid var(--color-light-border-stronger)"
                    : "1px solid var(--color-light-border-default-a)",
                background:
                  c.value === "currentColor" ? "var(--color-light-text-primary)" : c.value,
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
          <span style={{ fontSize: 11, fontFamily: mono, color: "var(--color-light-text-quaternary)", marginLeft: 4 }}>
            {COLOR_OPTIONS.find((c) => c.value === selectedColor)?.label}
          </span>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "2px solid var(--color-light-border-divider-weaker)" }}>
        <button
          onClick={() => setActiveCategory("all")}
          style={{
            padding: "8px 16px",
            border: "none",
            borderBottom: activeCategory === "all" ? "2px solid var(--color-light-border-stronger)" : "2px solid transparent",
            background: "none",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: activeCategory === "all" ? 700 : 400,
            color: activeCategory === "all" ? "var(--color-light-text-primary)" : "var(--color-light-text-quaternary)",
            marginBottom: -2,
            fontFamily: "Pretendard, sans-serif",
          }}
        >
          All
          <span style={{ marginLeft: 4, fontSize: 11, color: activeCategory === "all" ? "var(--color-light-text-tertiary)" : "var(--color-light-border-grey-weak-a)" }}>
            {filtered.length}
          </span>
        </button>
        {CATEGORIES.map((cat) => {
          const count = ICON_NAMES.filter((n) => getIconCategory(n) === cat).length;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 16px",
                border: "none",
                borderBottom: isActive ? "2px solid var(--color-light-border-stronger)" : "2px solid transparent",
                background: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: isActive ? 700 : 400,
                color: isActive ? "var(--color-light-text-primary)" : "var(--color-light-text-quaternary)",
                marginBottom: -2,
                fontFamily: "Pretendard, sans-serif",
              }}
            >
              {cat}
              <span style={{ marginLeft: 4, fontSize: 11, color: isActive ? "var(--color-light-text-tertiary)" : "var(--color-light-border-grey-weak-a)" }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Icon Grid */}
      {CATEGORIES.map((cat) => {
        const icons = grouped[cat];
        if (!icons || icons.length === 0) return null;
        return (
          <div key={cat} style={{ marginBottom: 36 }}>
            {activeCategory === "all" && (
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  color: "var(--color-light-text-quaternary)",
                  marginBottom: 14,
                  paddingBottom: 6,
                  borderBottom: "1px solid var(--color-light-border-divider-weaker)",
                }}
              >
                {CATEGORY_LABELS[cat]} ({icons.length})
              </h3>
            )}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                gap: 4,
              }}
            >
              {icons.map((name) => {
                const isHovered = hoveredIcon === name;
                // Short display name: remove category prefix
                const displayName = name.replace(/^(gnb|mymenu|default|player)_/, "");
                return (
                  <div
                    key={name}
                    onMouseEnter={() => setHoveredIcon(name)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "12px 6px 8px",
                      borderRadius: 8,
                      background: isHovered ? "var(--color-light-bg-grouped-strong)" : "transparent",
                      cursor: "default",
                      transition: "background 0.15s",
                    }}
                  >
                    <div
                      style={{
                        color: selectedColor === "currentColor" ? "var(--color-light-text-primary)" : selectedColor,
                        marginBottom: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 48,
                        height: 48,
                      }}
                    >
                      <Icon name={name} size={selectedSize} />
                    </div>
                    <span
                      style={{
                        fontSize: 10,
                        color: "var(--color-light-text-quaternary)",
                        fontFamily: mono,
                        textAlign: "center",
                        wordBreak: "break-all",
                        lineHeight: 1.3,
                      }}
                    >
                      {displayName}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {filtered.length === 0 && (
        <p style={{ color: "var(--color-light-text-quaternary)", textAlign: "center", padding: 40 }}>
          No icons found for "{search}"
        </p>
      )}
    </div>
  );
}

export default {
  title: "Design Tokens/Icons",
  component: IconsPage,
};

export const AllIcons = {
  render: () => <IconsPage />,
};
