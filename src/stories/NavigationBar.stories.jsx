import React, { useState, useRef } from "react";
import NavigationBar from "../components/NavigationBar";
import Icon from "../icons/Icon";

// Default profile images
import defaultAsterisk from "../assets/default-profile/asterisk.png";
import defaultCastle from "../assets/default-profile/castle.png";
import defaultCup from "../assets/default-profile/cup.png";
import defaultFlower from "../assets/default-profile/flower.png";
import defaultStack from "../assets/default-profile/stack.png";
import defaultStar from "../assets/default-profile/star.png";

// Sample logos
import sampleLogoSymbol from "../assets/sample-logo/logo-symbol.svg";
import sampleLogoCombi from "../assets/sample-logo/logo-combi.svg";

const DEFAULT_PROFILE_IMAGES = [
  { src: defaultAsterisk, label: "asterisk" },
  { src: defaultCastle, label: "castle" },
  { src: defaultCup, label: "cup" },
  { src: defaultFlower, label: "flower" },
  { src: defaultStack, label: "stack" },
  { src: defaultStar, label: "star" },
];

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
};

const mono = "'SF Mono', 'Fira Code', monospace";

// ── Helpers ──

function Chip({ label, active, onClick, small }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: small ? "3px 8px" : "4px 12px",
        borderRadius: 99,
        border: active ? "1.5px solid var(--color-light-border-stronger)" : "1px solid var(--color-light-border-default-a)",
        background: active ? "var(--color-light-surface-form-inverted)" : "var(--color-light-bg-base)",
        color: active ? "var(--color-light-bg-base)" : "var(--color-light-text-tertiary)",
        fontSize: small ? 11 : 12,
        fontWeight: active ? 600 : 400,
        cursor: "pointer",
        fontFamily: "Pretendard, sans-serif",
        transition: "all 0.12s",
      }}
    >
      {label}
    </button>
  );
}

function ControlRow({ label, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
      <span
        style={{
          width: 100,
          fontSize: 11,
          fontWeight: 600,
          color: "var(--color-light-text-quaternary)",
          fontFamily: mono,
          flexShrink: 0,
          textAlign: "right",
        }}
      >
        {label}
      </span>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        {children}
      </div>
    </div>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        color: "var(--color-light-text-tertiary)",
        cursor: "pointer",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ accentColor: "var(--color-light-surface-form-inverted)" }}
      />
      {label}
    </label>
  );
}

function SectionTitle({ children }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 600,
        color: "var(--color-light-icon-grey)",
        fontFamily: mono,
        marginBottom: 8,
        marginTop: 16,
      }}
    >
      {children}
    </div>
  );
}

// ── Preview Frame ──

function PreviewFrame({ dark, device, children, label }) {
  const isPc = device === "pc";
  return (
    <div style={{ marginBottom: 12 }}>
      {label && (
        <div style={{ fontSize: 10, color: "var(--color-light-text-quaternary)", fontFamily: mono, marginBottom: 4 }}>
          {label}
        </div>
      )}
      <div
        style={{
          width: isPc ? "100%" : 375,
          maxWidth: "100%",
          background: dark ? "var(--color-dark-bg-base)" : "var(--color-light-bg-base)",
          border: dark ? "1px solid var(--color-dark-bg-highlight)" : "1px solid var(--color-light-border-divider-weaker)",
          borderRadius: 8,
          overflow: "hidden",
          transition: "background 0.2s",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ── All Types Overview ──

export const AllTypes = {
  render: () => (
    <div style={{ fontFamily: "Pretendard, sans-serif", padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Navigation Top Bar</h2>
      <p style={{ fontSize: 13, color: "var(--color-light-text-quaternary)", marginBottom: 24 }}>
        GNB 타입별 미리보기 (Mobile &amp; PC × Light &amp; Dark)
        <br />
        <span style={{ fontSize: 12, color: "var(--color-light-text-quaternary)", fontFamily: mono }}>
          * PC에서는 view 타입이 없음 — view는 모바일 전용이며, PC에서는 home으로 전환됨
        </span>
      </p>

      {["home", "view", "utility"].map((type) => {
        // PC에서는 view 타입이 없으므로 home으로 전환
        const pcType = type === "view" ? "home" : type;
        return (
        <div key={type} style={{ marginBottom: 40 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "var(--color-light-text-quaternary)",
              marginBottom: 12,
              paddingBottom: 6,
              borderBottom: "1px solid var(--color-light-border-divider-weaker)",
              fontFamily: mono,
            }}
          >
            TYPE: {type}
            {type === "view" && <span style={{ fontWeight: 400, fontSize: 11, letterSpacing: 0, textTransform: "none", marginLeft: 8 }}>(PC → home으로 전환)</span>}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 8 }}>
            {/* Mobile Light */}
            <PreviewFrame dark={false} device="mobile" label="Mobile / Light">
              <NavigationBar type={type} device="mobile" theme="light" logoImage={sampleLogoSymbol} />
            </PreviewFrame>
            {/* Mobile Dark */}
            <PreviewFrame dark={true} device="mobile" label="Mobile / Dark">
              <NavigationBar type={type} device="mobile" theme="dark" logoImage={sampleLogoSymbol} />
            </PreviewFrame>
          </div>

          {/* PC Full Light */}
          <PreviewFrame dark={false} device="pc" label={`PC / Light / layout: full${type === "view" ? " (→ home)" : ""}`}>
            <NavigationBar type={pcType} device="pc" theme="light" layout="full" logoImage={sampleLogoSymbol} />
          </PreviewFrame>
          {/* PC Wide Light */}
          <PreviewFrame dark={false} device="pc" label={`PC / Light / layout: wide (1080px)${type === "view" ? " (→ home)" : ""}`}>
            <NavigationBar type={pcType} device="pc" theme="light" layout="wide" logoImage={sampleLogoSymbol} />
          </PreviewFrame>
          {/* PC Full Dark */}
          <PreviewFrame dark={true} device="pc" label={`PC / Dark / layout: full${type === "view" ? " (→ home)" : ""}`}>
            <NavigationBar type={pcType} device="pc" theme="dark" layout="full" logoImage={sampleLogoSymbol} />
          </PreviewFrame>
          {/* PC Wide Dark */}
          <PreviewFrame dark={true} device="pc" label={`PC / Dark / layout: wide (1080px)${type === "view" ? " (→ home)" : ""}`}>
            <NavigationBar type={pcType} device="pc" theme="dark" layout="wide" logoImage={sampleLogoSymbol} />
          </PreviewFrame>
        </div>
        );
      })}
    </div>
  ),
};

// ── Interactive Playground ──

const BADGE_OPTIONS = [null, "new", "count"];

const ICON_OPTIONS = [
  { icon: "gnb_notification_line", label: "Notification" },
  { icon: "default_calendar_line", label: "Schedule" },
  { icon: "gnb_cart_line", label: "Cart" },
  { icon: "gnb_bookmark_line", label: "Bookmark" },
  { icon: "gnb_search_line", label: "Search" },
  { icon: "gnb_share_line", label: "Share" },
];

const WIDTH_PRESETS = [
  { label: "320", value: 320 },
  { label: "375", value: 375 },
  { label: "430", value: 430 },
  { label: "800", value: 800 },
  { label: "1080", value: 1080 },
  { label: "1280", value: 1280 },
  { label: "1440", value: 1440 },
];
const BREAKPOINT_PC = 801;

function PlaygroundUI() {
  const [type, setType] = useState("home");
  const [previewWidth, setPreviewWidth] = useState(375);
  const device = previewWidth >= BREAKPOINT_PC ? "pc" : "mobile";
  const [theme, setTheme] = useState("light");
  const [layout, setLayout] = useState("full");
  const [logoVariant, setLogoVariant] = useState("logo");
  const [stageName, setStageName] = useState("STAGENAME");
  const [logoImage, setLogoImage] = useState(sampleLogoSymbol);
  const logoFileRef = useRef(null);

  // Right slots state (4 unified slots — each can be icon or avatar)
  const [slots, setSlots] = useState([
    { on: true, slotType: "icon", icon: "gnb_notification_line", badge: "new", badgeCount: 9, loggedIn: false, profileImage: DEFAULT_PROFILE_IMAGES[0].src, useCustom: false, customImage: null },
    { on: true, slotType: "icon", icon: "default_calendar_line", badge: null, badgeCount: 9, loggedIn: false, profileImage: DEFAULT_PROFILE_IMAGES[0].src, useCustom: false, customImage: null },
    { on: true, slotType: "icon", icon: "gnb_cart_line", badge: "count", badgeCount: 9, loggedIn: false, profileImage: DEFAULT_PROFILE_IMAGES[0].src, useCustom: false, customImage: null },
    { on: true, slotType: "avatar", icon: "gnb_my_line", badge: null, badgeCount: 9, loggedIn: false, profileImage: DEFAULT_PROFILE_IMAGES[0].src, useCustom: false, customImage: null },
  ]);
  const fileInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const updateSlot = (index, patch) => {
    setSlots((prev) => prev.map((s, i) => (i === index ? { ...s, ...patch } : s)));
  };

  const [menuItems, setMenuItems] = useState(["Home", "Story", "POP", "Contents", "Shop", "Community"]);
  const [activeMenu, setActiveMenu] = useState("Home");

  const updateMenuItem = (index, value) => {
    setMenuItems((prev) => prev.map((m, i) => (i === index ? value : m)));
    // activeMenu이 변경된 항목이면 같이 갱신
    if (menuItems[index] === activeMenu) setActiveMenu(value);
  };
  const addMenuItem = () => {
    const name = `Menu ${menuItems.length + 1}`;
    setMenuItems((prev) => [...prev, name]);
  };
  const removeMenuItem = (index) => {
    const removed = menuItems[index];
    setMenuItems((prev) => prev.filter((_, i) => i !== index));
    if (activeMenu === removed) setActiveMenu(menuItems[0] === removed ? menuItems[1] || "" : menuItems[0]);
  };

  // Border
  const [showBorder, setShowBorder] = useState(true);

  // Utility buttons
  const [showSubBtn, setShowSubBtn] = useState(true);
  const [showActionBtn, setShowActionBtn] = useState(true);
  const [subLabel, setSubLabel] = useState("Sub");
  const [actionLabel, setActionLabel] = useState("Action");

  const rightIcons = slots
    .filter((s) => s.on)
    .map((s) => {
      if (s.slotType === "avatar") {
        return {
          type: "avatar",
          loggedIn: s.loggedIn,
          profileImage: s.useCustom && s.customImage ? s.customImage : s.profileImage,
        };
      }
      return { icon: s.icon, badge: s.badge, badgeCount: s.badgeCount };
    });

  const dark = theme === "dark";

  // PC에서는 view 타입이 없음 → home으로 전환
  const resolvedType = (device === "pc" && type === "view") ? "home" : type;

  const navProps = {
    type: resolvedType,
    device,
    theme,
    layout: device === "pc" ? layout : "full",
    showBorder,
    logoVariant,
    stageName,
    logoImage,
    menuItems,
    rightIcons,
    activeMenuItem: activeMenu,
    subButtonLabel: subLabel,
    actionButtonLabel: actionLabel,
    showSubButton: showSubBtn,
    showActionButton: showActionBtn,
  };

  return (
    <div style={{ fontFamily: "Pretendard, sans-serif", padding: 24 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4, color: "var(--color-light-text-primary)" }}>
        NavigationBar Playground
      </h2>
      <p style={{ fontSize: 13, color: "var(--color-light-text-quaternary)", marginBottom: 28 }}>
        타입, 디바이스, 테마, 아이콘 구성을 조합하여 실시간으로 확인하세요.
      </p>

      <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
        {/* Left: Controls */}
        <div
          style={{
            flex: "1 1 400px",
            minWidth: 360,
            padding: 20,
            background: "var(--color-light-bg-grouped-strong)",
            borderRadius: 12,
            border: "1px solid var(--color-light-border-divider-weaker)",
          }}
        >
          <ControlRow label="type">
            {["home", "view", "utility"].map((v) => (
              <Chip key={v} label={v} active={type === v} onClick={() => setType(v)} />
            ))}
          </ControlRow>

          <ControlRow label="width">
            <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                  type="range"
                  min={280}
                  max={1440}
                  value={previewWidth}
                  onChange={(e) => setPreviewWidth(Number(e.target.value))}
                  style={{ flex: 1, accentColor: "var(--color-light-surface-form-inverted)" }}
                />
                <input
                  type="number"
                  min={280}
                  max={2560}
                  value={previewWidth}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    if (v >= 280 && v <= 2560) setPreviewWidth(v);
                  }}
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--color-light-text-primary)",
                    width: 52,
                    textAlign: "right",
                    padding: "2px 4px",
                    border: "1px solid var(--color-light-border-default-a)",
                    borderRadius: 4,
                    background: "var(--color-light-bg-base)",
                  }}
                />
                <span style={{
                  fontFamily: mono,
                  fontSize: 10,
                  color: device === "pc" ? "var(--color-light-text-primary)" : "var(--color-light-text-quaternary)",
                  padding: "2px 6px",
                  borderRadius: 4,
                  background: device === "pc" ? "var(--color-light-surface-form-inverted)" : "var(--color-light-bg-grouped-strong)",
                  color: device === "pc" ? "var(--color-light-bg-base)" : "var(--color-light-text-quaternary)",
                  fontWeight: 600,
                }}>
                  {device.toUpperCase()}
                </span>
              </div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {WIDTH_PRESETS.map((p) => (
                  <Chip
                    key={p.value}
                    label={p.label}
                    active={previewWidth === p.value}
                    onClick={() => setPreviewWidth(p.value)}
                    small
                  />
                ))}
              </div>
            </div>
          </ControlRow>

          <ControlRow label="theme">
            <Chip label="light" active={theme === "light"} onClick={() => setTheme("light")} />
            <Chip label="dark" active={theme === "dark"} onClick={() => setTheme("dark")} />
          </ControlRow>

          <ControlRow label="border">
            <Toggle label="하단 보더 표시" checked={showBorder} onChange={setShowBorder} />
          </ControlRow>

          {device === "pc" && (
            <ControlRow label="layout">
              <Chip label="full" active={layout === "full"} onClick={() => setLayout("full")} />
              <Chip label="wide (1080px)" active={layout === "wide"} onClick={() => setLayout("wide")} />
              <span style={{ fontSize: 10, color: "var(--color-light-text-quaternary)", fontFamily: mono }}>
                {layout === "wide" ? "콘텐츠 max-width: 1080px, 가운데 정렬" : "콘텐츠 전체 너비"}
              </span>
            </ControlRow>
          )}

          {/* Home-specific controls */}
          {type === "home" && (
            <>
              <SectionTitle>LOGO</SectionTitle>
              <ControlRow label="logoVariant">
                {["logo", "combi", "text"].map((v) => (
                  <Chip key={v} label={v} active={logoVariant === v} onClick={() => setLogoVariant(v)} />
                ))}
              </ControlRow>
              {logoVariant !== "text" && (
                <ControlRow label="logoImage">
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                      {[
                        { src: sampleLogoSymbol, label: "Symbol" },
                        { src: sampleLogoCombi, label: "Combi" },
                      ].map((opt) => (
                        <button
                          key={opt.label}
                          onClick={() => setLogoImage(opt.src)}
                          title={opt.label}
                          style={{
                            height: 32,
                            padding: "2px 8px",
                            borderRadius: 6,
                            border: logoImage === opt.src
                              ? "1.5px solid var(--color-light-border-stronger)"
                              : "1px solid var(--color-light-border-default-a)",
                            background: logoImage === opt.src ? "var(--color-light-bg-grouped-strong)" : "var(--color-light-bg-base)",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img src={opt.src} alt={opt.label} style={{ height: 24, objectFit: "contain" }} />
                        </button>
                      ))}
                      <Chip
                        label="none"
                        active={!logoImage}
                        onClick={() => setLogoImage(null)}
                        small
                      />
                    </div>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <button
                        onClick={() => logoFileRef.current?.click()}
                        style={{
                          padding: "3px 8px",
                          borderRadius: 6,
                          border: "1px solid var(--color-light-border-default-a)",
                          background: "var(--color-light-bg-base)",
                          fontSize: 11,
                          cursor: "pointer",
                          fontFamily: "Pretendard, sans-serif",
                          color: "var(--color-light-text-tertiary)",
                        }}
                      >
                        Upload custom
                      </button>
                      <input
                        ref={logoFileRef}
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setLogoImage(URL.createObjectURL(file));
                        }}
                      />
                      {logoImage && logoImage !== sampleLogoSymbol && logoImage !== sampleLogoCombi && (
                        <div style={{
                          height: 28, padding: "0 4px", borderRadius: 4,
                          border: "1.5px solid var(--color-light-border-stronger)",
                          overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
                          background: "var(--color-light-bg-base)",
                        }}>
                          <img src={logoImage} alt="custom logo" style={{ maxHeight: 22, objectFit: "contain" }} />
                        </div>
                      )}
                      {!logoImage && (
                        <span style={{ fontSize: 10, color: "var(--color-light-text-quaternary)", fontFamily: mono }}>
                          없으면 텍스트 'LOGO' 표시
                        </span>
                      )}
                    </div>
                  </div>
                </ControlRow>
              )}
              <ControlRow label="stageName">
                <input
                  type="text"
                  value={stageName}
                  onChange={(e) => setStageName(e.target.value)}
                  style={{
                    padding: "4px 10px",
                    border: "1px solid var(--color-light-border-default-a)",
                    borderRadius: 6,
                    fontSize: 12,
                    width: 140,
                    fontFamily: "Pretendard, sans-serif",
                  }}
                />
              </ControlRow>

              {device === "pc" && (
                <>
                  <SectionTitle>MENU</SectionTitle>
                  <ControlRow label="activeMenu">
                    {menuItems.map((m) => (
                      <Chip key={m} label={m} active={activeMenu === m} onClick={() => setActiveMenu(m)} small />
                    ))}
                  </ControlRow>
                  <div style={{ marginLeft: 112 }}>
                    {menuItems.map((m, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}>
                        <span style={{ fontFamily: mono, fontSize: 10, color: "var(--color-light-text-quaternary)", width: 16, textAlign: "right", flexShrink: 0 }}>
                          {i + 1}
                        </span>
                        <input
                          type="text"
                          value={m}
                          onChange={(e) => updateMenuItem(i, e.target.value)}
                          style={{
                            padding: "3px 8px",
                            border: activeMenu === m ? "1.5px solid var(--color-light-border-stronger)" : "1px solid var(--color-light-border-default-a)",
                            borderRadius: 6,
                            fontSize: 12,
                            width: 120,
                            fontFamily: "Pretendard, sans-serif",
                            background: "var(--color-light-bg-base)",
                          }}
                        />
                        <button
                          onClick={() => removeMenuItem(i)}
                          style={{
                            width: 20, height: 20, padding: 0, border: "none",
                            background: "transparent", cursor: "pointer",
                            fontSize: 14, color: "var(--color-light-text-quaternary)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            borderRadius: 4,
                          }}
                          title="Remove"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={addMenuItem}
                      style={{
                        marginTop: 4,
                        padding: "3px 10px",
                        border: "1px dashed var(--color-light-border-default-a)",
                        borderRadius: 6,
                        background: "transparent",
                        fontSize: 11,
                        color: "var(--color-light-text-tertiary)",
                        cursor: "pointer",
                        fontFamily: "Pretendard, sans-serif",
                      }}
                    >
                      + Add menu
                    </button>
                  </div>
                </>
              )}
            </>
          )}

          {/* Slot controls (home & view) — 4 unified slots */}
          {(type === "home" || type === "view") && (
            <>
              <SectionTitle>RIGHT SLOTS</SectionTitle>
              {slots.map((slot, idx) => (
                <div
                  key={idx}
                  style={{
                    marginBottom: 10,
                    padding: "8px 12px",
                    borderRadius: 8,
                    background: slot.on ? "var(--color-light-bg-base)" : "var(--color-light-bg-grouped-strong)",
                    border: "1px solid var(--color-light-border-divider-weaker)",
                    opacity: slot.on ? 1 : 0.5,
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: slot.on ? 6 : 0 }}>
                    <Toggle label={`slot ${idx + 1}`} checked={slot.on} onChange={(v) => updateSlot(idx, { on: v })} />
                    {slot.on && (
                      <div style={{ display: "flex", gap: 4, marginLeft: "auto" }}>
                        <Chip label="icon" active={slot.slotType === "icon"} onClick={() => updateSlot(idx, { slotType: "icon" })} small />
                        <Chip label="avatar" active={slot.slotType === "avatar"} onClick={() => updateSlot(idx, { slotType: "avatar" })} small />
                      </div>
                    )}
                  </div>

                  {/* Icon type controls */}
                  {slot.on && slot.slotType === "icon" && (
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginTop: 4 }}>
                      <div style={{ display: "flex", gap: 4 }}>
                        {ICON_OPTIONS.map((opt) => (
                          <button
                            key={opt.icon}
                            onClick={() => updateSlot(idx, { icon: opt.icon })}
                            title={opt.label}
                            style={{
                              width: 28,
                              height: 28,
                              padding: 0,
                              borderRadius: 4,
                              border: slot.icon === opt.icon ? "1.5px solid var(--color-light-border-stronger)" : "1px solid var(--color-light-border-default-a)",
                              background: slot.icon === opt.icon ? "var(--color-light-bg-grouped-strong)" : "var(--color-light-bg-base)",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon name={opt.icon} size={16} color={slot.icon === opt.icon ? "var(--color-light-text-primary)" : "var(--color-light-text-quaternary)"} />
                          </button>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                        {BADGE_OPTIONS.map((b) => (
                          <Chip
                            key={b || "none"}
                            label={b || "no badge"}
                            active={slot.badge === b}
                            onClick={() => updateSlot(idx, { badge: b })}
                            small
                          />
                        ))}
                        {slot.badge === "count" && (
                          <input
                            type="number"
                            value={slot.badgeCount}
                            onChange={(e) => updateSlot(idx, { badgeCount: Number(e.target.value) || 0 })}
                            style={{
                              width: 48,
                              padding: "3px 6px",
                              border: "1px solid var(--color-light-border-default-a)",
                              borderRadius: 6,
                              fontSize: 11,
                              fontFamily: mono,
                              textAlign: "center",
                            }}
                          />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Avatar type controls */}
                  {slot.on && slot.slotType === "avatar" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                        <Chip label="logged out" active={!slot.loggedIn} onClick={() => updateSlot(idx, { loggedIn: false })} small />
                        <Chip label="logged in" active={slot.loggedIn} onClick={() => updateSlot(idx, { loggedIn: true })} small />
                      </div>
                      {slot.loggedIn && (
                        <>
                          <div style={{ fontSize: 10, color: "var(--color-light-text-quaternary)", fontFamily: mono }}>
                            Default images
                          </div>
                          <div style={{ display: "flex", gap: 4 }}>
                            {DEFAULT_PROFILE_IMAGES.map((img) => (
                              <button
                                key={img.label}
                                onClick={() => updateSlot(idx, { profileImage: img.src, useCustom: false })}
                                title={img.label}
                                style={{
                                  width: 28,
                                  height: 28,
                                  padding: 0,
                                  borderRadius: "50%",
                                  border: !slot.useCustom && slot.profileImage === img.src
                                    ? "2px solid var(--color-light-border-stronger)"
                                    : "1px solid var(--color-light-border-default-a)",
                                  cursor: "pointer",
                                  overflow: "hidden",
                                  background: "var(--color-light-bg-base)",
                                }}
                              >
                                <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              </button>
                            ))}
                          </div>
                          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                            <button
                              onClick={() => fileInputRefs[idx].current?.click()}
                              style={{
                                padding: "3px 8px",
                                borderRadius: 6,
                                border: "1px solid var(--color-light-border-default-a)",
                                background: slot.useCustom && slot.customImage ? "var(--color-light-bg-grouped-strong)" : "var(--color-light-bg-base)",
                                fontSize: 11,
                                cursor: "pointer",
                                fontFamily: "Pretendard, sans-serif",
                                color: "var(--color-light-text-tertiary)",
                              }}
                            >
                              Upload image
                            </button>
                            <input
                              ref={fileInputRefs[idx]}
                              type="file"
                              accept="image/*"
                              style={{ display: "none" }}
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const url = URL.createObjectURL(file);
                                  updateSlot(idx, { customImage: url, useCustom: true });
                                }
                              }}
                            />
                            {slot.customImage && (
                              <button
                                onClick={() => updateSlot(idx, { useCustom: true })}
                                style={{
                                  width: 28,
                                  height: 28,
                                  padding: 0,
                                  borderRadius: "50%",
                                  border: slot.useCustom
                                    ? "2px solid var(--color-light-border-stronger)"
                                    : "1px solid var(--color-light-border-default-a)",
                                  cursor: "pointer",
                                  overflow: "hidden",
                                  background: "var(--color-light-bg-base)",
                                }}
                              >
                                <img src={slot.customImage} alt="custom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              </button>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Utility controls */}
          {type === "utility" && (
            <>
              <SectionTitle>BUTTONS</SectionTitle>
              <ControlRow label="subButton">
                <Toggle label="Show" checked={showSubBtn} onChange={setShowSubBtn} />
                {showSubBtn && (
                  <input
                    type="text"
                    value={subLabel}
                    onChange={(e) => setSubLabel(e.target.value)}
                    style={{
                      padding: "3px 8px",
                      border: "1px solid var(--color-light-border-default-a)",
                      borderRadius: 6,
                      fontSize: 12,
                      width: 80,
                      fontFamily: "Pretendard, sans-serif",
                    }}
                  />
                )}
              </ControlRow>
              <ControlRow label="actionButton">
                <Toggle label="Show" checked={showActionBtn} onChange={setShowActionBtn} />
                {showActionBtn && (
                  <input
                    type="text"
                    value={actionLabel}
                    onChange={(e) => setActionLabel(e.target.value)}
                    style={{
                      padding: "3px 8px",
                      border: "1px solid var(--color-light-border-default-a)",
                      borderRadius: 6,
                      fontSize: 12,
                      width: 80,
                      fontFamily: "Pretendard, sans-serif",
                    }}
                  />
                )}
              </ControlRow>
            </>
          )}
        </div>

        {/* Right: Preview */}
        <div style={{ flex: "1 1 500px", minWidth: 380 }}>
          {/* Main preview — width controlled by slider */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 10, color: "var(--color-light-text-quaternary)", fontFamily: mono, marginBottom: 4 }}>
              {previewWidth}px / {device.toUpperCase()} / {theme}{device === "pc" ? ` / layout: ${layout}` : ""}
            </div>
            <div
              style={{
                width: previewWidth,
                maxWidth: "100%",
                background: dark ? "var(--color-dark-bg-base)" : "var(--color-light-bg-base)",
                border: dark ? "1px solid var(--color-dark-bg-highlight)" : "1px solid var(--color-light-border-divider-weaker)",
                borderRadius: 8,
                overflow: "hidden",
                transition: "width 0.2s ease, background 0.2s",
              }}
            >
              <NavigationBar {...navProps} />
            </div>
          </div>

          {/* Props summary */}
          <div
            style={{
              marginTop: 16,
              padding: 16,
              background: "var(--color-light-bg-grouped-strong)",
              borderRadius: 8,
              border: "1px solid var(--color-light-border-divider-weaker)",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-light-icon-grey)", marginBottom: 8, fontFamily: mono }}>
              PROPS
            </div>
            <pre
              style={{
                fontFamily: mono,
                fontSize: 11,
                color: "var(--color-light-text-tertiary)",
                margin: 0,
                lineHeight: 1.8,
                whiteSpace: "pre-wrap",
              }}
            >
{`<NavigationBar
  type="${resolvedType}"${resolvedType !== type ? ` // "${type}" → PC에서 "${resolvedType}"로 전환` : ""}
  device="${device}"
  theme="${theme}"${device === "pc" ? `\n  layout="${layout}"` : ""}
  showBorder={${showBorder}}${type === "home" ? `
  logoVariant="${logoVariant}"${logoVariant !== "logo" ? `\n  stageName="${stageName}"` : ""}${logoImage && logoVariant !== "text" ? `\n  logoImage="<uploaded>"` : ""}` : ""}${type !== "utility" ? `
  rightIcons={${JSON.stringify(rightIcons, null, 2)}}` : `
  showSubButton={${showSubBtn}}${showSubBtn ? `\n  subButtonLabel="${subLabel}"` : ""}
  showActionButton={${showActionBtn}}${showActionBtn ? `\n  actionButtonLabel="${actionLabel}"` : ""}`}
/>`}
            </pre>
          </div>

          {/* Compare: same width, all types */}
          <SectionTitle>COMPARE TYPES</SectionTitle>
          {["home", "view", "utility"].map((t) => {
            const ct = (device === "pc" && t === "view") ? "home" : t;
            return (
            <div key={t} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: "var(--color-light-text-quaternary)", fontFamily: mono, marginBottom: 4 }}>
                {t.toUpperCase()}{ct !== t ? ` → ${ct.toUpperCase()} (PC)` : ""}
              </div>
              <div
                style={{
                  width: previewWidth,
                  maxWidth: "100%",
                  background: dark ? "var(--color-dark-bg-base)" : "var(--color-light-bg-base)",
                  border: dark ? "1px solid var(--color-dark-bg-highlight)" : "1px solid var(--color-light-border-divider-weaker)",
                  borderRadius: 8,
                  overflow: "hidden",
                  transition: "width 0.2s ease, background 0.2s",
                }}
              >
                <NavigationBar {...navProps} type={ct} />
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const Playground = {
  render: () => <PlaygroundUI />,
};
