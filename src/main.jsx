import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./tokens.css";
import "./layout.css";
import ThankYouPage from "./pages/ThankYouPage";
import { LANGUAGES } from "./i18n";

const mono = "'SF Mono', 'Fira Code', monospace";

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "3px 10px",
        borderRadius: 99,
        border: active ? "1.5px solid #454545" : "1px solid rgba(0,0,0,0.12)",
        background: active ? "#151515" : "#fff",
        color: active ? "#fff" : "#666",
        fontSize: 11,
        fontWeight: active ? 600 : 400,
        cursor: "pointer",
        fontFamily: "Pretendard, sans-serif",
        transition: "all 0.12s",
        lineHeight: "16px",
      }}
    >
      {label}
    </button>
  );
}

function ControlRow({ label, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
      <span
        style={{
          minWidth: 80,
          fontSize: 10,
          fontWeight: 600,
          color: "#999",
          fontFamily: mono,
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }}>
        {children}
      </div>
    </div>
  );
}

const WIDTH_PRESETS = [
  { label: "360", value: 360 },
  { label: "375", value: 375 },
  { label: "402", value: 402 },
  { label: "800", value: 800 },
  { label: "801", value: 801 },
  { label: "1080", value: 1080 },
  { label: "Full", value: null },
];

function App() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ko");
  const [isKonbini, setIsKonbini] = useState(false);
  const [hasPaymentLink, setHasPaymentLink] = useState(false);
  const [singleButton, setSingleButton] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const [showPoints, setShowPoints] = useState(true);
  const [thumbnailType, setThumbnailType] = useState("sample");
  const [panelOpen, setPanelOpen] = useState(true);
  const [constrainedWidth, setConstrainedWidth] = useState(null); // null = full
  const [customWidth, setCustomWidth] = useState("");
  const [dragging, setDragging] = useState(false);
  const [panelPos, setPanelPos] = useState({ x: null, y: null });
  const dragRef = useRef(null);
  const dragStartRef = useRef(null);

  // 현재 iframe/컨테이너 너비 표시용
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(Math.round(entry.contentRect.width));
      }
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // 브라우저 resize 시에도 표시 갱신 (full 모드)
  useEffect(() => {
    if (constrainedWidth !== null) return;
    const handler = () => setContainerWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [constrainedWidth]);

  const breakpoint = containerWidth >= 801 ? "PC" : "Mobile";

  // 패널 드래그
  const onDragStart = (e) => {
    setDragging(true);
    const rect = dragRef.current.getBoundingClientRect();
    dragStartRef.current = {
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      const { offsetX, offsetY } = dragStartRef.current;
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      setPanelPos({ x, y });
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging]);

  // 패널 위치 (기본: 우하단)
  const panelStyle = panelPos.x !== null
    ? { left: panelPos.x, top: panelPos.y, right: "auto", bottom: "auto" }
    : { left: 16, top: 16 };

  return (
    <div style={{ height: "100vh", overflow: "hidden", display: "flex", justifyContent: "center", background: constrainedWidth ? `var(--color-${theme}-bg-base)` : "transparent" }}>
      {/* Page container */}
      <div
        ref={containerRef}
        style={{
          width: constrainedWidth ? constrainedWidth : "100%",
          maxWidth: "100%",
          height: "100vh",
          overflow: "auto",
          transition: "width 0.2s ease",
        }}
      >
        <ThankYouPage
          theme={theme}
          lang={lang}
          isKonbini={isKonbini}
          hasPaymentLink={hasPaymentLink}
          singleButton={singleButton}
          productCount={productCount}
          showPoints={showPoints}
          thumbnailType={thumbnailType}
        />
      </div>

      {/* Debug Panel — floating, bottom-right */}
      <div
        ref={dragRef}
        style={{
          position: "fixed",
          ...panelStyle,
          zIndex: 9999,
          width: panelOpen ? 340 : "auto",
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: 12,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          fontFamily: "Pretendard, sans-serif",
          userSelect: dragging ? "none" : "auto",
        }}
      >
        {/* Header — draggable */}
        <div
          onMouseDown={onDragStart}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: panelOpen ? "10px 14px 8px" : "8px 12px",
            cursor: "grab",
            borderBottom: panelOpen ? "1px solid rgba(0,0,0,0.06)" : "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#151515" }}>
              Debug
            </span>
            <span style={{ fontSize: 10, color: "#999", fontFamily: mono }}>
              [P1] 땡큐
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 10, color: "#999", fontFamily: mono }}>
              {containerWidth}px
            </span>
            <span
              style={{
                padding: "1px 6px",
                borderRadius: 3,
                fontSize: 9,
                fontWeight: 600,
                background: breakpoint === "PC" ? "#654BFF" : "#151515",
                color: "#fff",
              }}
            >
              {breakpoint}
            </span>
            <button
              onClick={() => setPanelOpen(!panelOpen)}
              style={{
                appearance: "none",
                border: "none",
                background: "transparent",
                fontSize: 14,
                cursor: "pointer",
                color: "#999",
                padding: "0 2px",
                lineHeight: 1,
              }}
            >
              {panelOpen ? "\u2013" : "\u002B"}
            </button>
          </div>
        </div>

        {/* Controls */}
        {panelOpen && (
          <div style={{ padding: "10px 14px 14px" }}>
            <ControlRow label="Theme">
              {["light", "dark"].map((t) => (
                <Chip key={t} label={t} active={theme === t} onClick={() => setTheme(t)} />
              ))}
            </ControlRow>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", margin: "8px 0" }} />

            <ControlRow label="Language">
              {LANGUAGES.map((l) => (
                <Chip key={l.code} label={l.code} active={lang === l.code} onClick={() => setLang(l.code)} />
              ))}
            </ControlRow>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", margin: "8px 0" }} />

            <ControlRow label="Konbini">
              <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, cursor: "pointer", fontFamily: "Pretendard, sans-serif", color: "#666" }}>
                <input type="checkbox" checked={isKonbini} onChange={(e) => setIsKonbini(e.target.checked)} style={{ accentColor: "#151515" }} />
                콘비니 결제
              </label>
              {isKonbini && (
                <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, cursor: "pointer", fontFamily: "Pretendard, sans-serif", color: "#666", marginLeft: 8 }}>
                  <input type="checkbox" checked={hasPaymentLink} onChange={(e) => setHasPaymentLink(e.target.checked)} style={{ accentColor: "#151515" }} />
                  결제 링크
                </label>
              )}
            </ControlRow>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", margin: "8px 0" }} />

            <ControlRow label="Products">
              {[1, 2, 3, 5].map((n) => (
                <Chip
                  key={n}
                  label={`${n}건`}
                  active={productCount === n}
                  onClick={() => setProductCount(n)}
                />
              ))}
              <input
                type="number"
                min={1}
                max={20}
                value={productCount}
                onChange={(e) =>
                  setProductCount(Math.max(1, Math.min(20, Number(e.target.value) || 1)))
                }
                style={{
                  width: 40,
                  padding: "2px 4px",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.1)",
                  fontSize: 11,
                  fontFamily: mono,
                  textAlign: "center",
                }}
              />
            </ControlRow>

            <ControlRow label="Thumbnail">
              <Chip label="Sample" active={thumbnailType === "sample"} onClick={() => setThumbnailType("sample")} />
              <Chip label="Default" active={thumbnailType === "default"} onClick={() => setThumbnailType("default")} />
            </ControlRow>

            <ControlRow label="Points">
              <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, cursor: "pointer", fontFamily: "Pretendard, sans-serif", color: "#666" }}>
                <input type="checkbox" checked={showPoints} onChange={(e) => setShowPoints(e.target.checked)} style={{ accentColor: "#151515" }} />
                적립예정 표시
              </label>
            </ControlRow>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", margin: "8px 0" }} />

            <ControlRow label="Buttons">
              <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, cursor: "pointer", fontFamily: "Pretendard, sans-serif", color: "#666" }}>
                <input type="checkbox" checked={singleButton} onChange={(e) => setSingleButton(e.target.checked)} style={{ accentColor: "#151515" }} />
                1개 버튼 (홈으로 가기만)
              </label>
            </ControlRow>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", margin: "8px 0" }} />

            {/* Viewport width */}
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#999", fontFamily: mono, marginBottom: 6 }}>
                Viewport Width
              </div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {WIDTH_PRESETS.map((p) => (
                  <Chip
                    key={p.label}
                    label={p.label}
                    active={constrainedWidth === p.value}
                    onClick={() => {
                      setConstrainedWidth(p.value);
                      if (p.value !== null) setCustomWidth(String(p.value));
                    }}
                  />
                ))}
                <input
                  type="number"
                  min={280}
                  max={2560}
                  placeholder="px"
                  value={customWidth}
                  onChange={(e) => {
                    setCustomWidth(e.target.value);
                    const v = Number(e.target.value);
                    if (v >= 280 && v <= 2560) setConstrainedWidth(v);
                  }}
                  style={{
                    width: 52,
                    padding: "2px 4px",
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.1)",
                    fontSize: 11,
                    fontFamily: mono,
                    textAlign: "center",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
