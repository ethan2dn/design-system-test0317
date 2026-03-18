import React, { useState, useEffect, useRef } from "react";
import ThankYouPage from "../pages/ThankYouPage";
import { LANGUAGES } from "../i18n";

export default {
  title: "Pages/ThankYouPage",
  component: ThankYouPage,
};

// embed URL: 로컬이면 Vite dev 서버, 배포 환경이면 같은 origin의 빌드된 앱
const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const EMBED_URL = isLocal
  ? "http://localhost:3000/design-system-test0317/?embed=true"
  : `${window.location.origin}/design-system-test0317/?embed=true`;

const mono = "'SF Mono', 'Fira Code', monospace";

// ── Shared Controls ──

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
        fontFamily: "var(--font-pretendard)",
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

// ── iframe: 실제 Vite dev 서버 페이지 로드 + postMessage 통신 ──

function PageFrame({ width, props }) {
  const iframeRef = useRef(null);
  const readyRef = useRef(false);
  const pendingRef = useRef(null);

  // iframe 준비 완료 시 대기 중인 props 전송
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "thankyou-ready") {
        readyRef.current = true;
        if (pendingRef.current) {
          iframeRef.current?.contentWindow?.postMessage(
            { type: "thankyou-props", props: pendingRef.current },
            "*"
          );
          pendingRef.current = null;
        }
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  // props 변경 시 iframe에 전송
  useEffect(() => {
    if (readyRef.current) {
      iframeRef.current?.contentWindow?.postMessage(
        { type: "thankyou-props", props },
        "*"
      );
    } else {
      pendingRef.current = props;
    }
  }, [props]);

  return (
    <iframe
      ref={iframeRef}
      src={EMBED_URL}
      style={{
        width: width || "100%",
        height: "100%",
        border: "none",
        display: "block",
        transition: "width 0.2s ease",
      }}
    />
  );
}

// ── Story ──

function PlaygroundUI() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ko");
  const [isKonbini, setIsKonbini] = useState(false);
  const [hasPaymentLink, setHasPaymentLink] = useState(false);
  const [singleButton, setSingleButton] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const [showPoints, setShowPoints] = useState(true);
  const [thumbnailType, setThumbnailType] = useState("sample");
  const [constrainedWidth, setConstrainedWidth] = useState(null);
  const [customWidth, setCustomWidth] = useState("");
  const [panelOpen, setPanelOpen] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [panelPos, setPanelPos] = useState({ x: null, y: null });
  const dragRef = useRef(null);
  const dragStartRef = useRef(null);

  const iframeWidth = constrainedWidth || "100%";
  const displayWidth = constrainedWidth || "Full";
  const breakpoint = constrainedWidth ? (constrainedWidth >= 801 ? "PC" : "Mobile") : "—";

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
      setPanelPos({ x: e.clientX - offsetX, y: e.clientY - offsetY });
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging]);

  const panelStyle = panelPos.x !== null
    ? { left: panelPos.x, top: panelPos.y, right: "auto", bottom: "auto" }
    : { left: 16, top: 16 };

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden", fontFamily: "var(--font-pretendard)" }}>
      {/* Page preview — iframe 기반 */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          background: constrainedWidth ? "#e8e8ec" : "transparent",
        }}
      >
        <PageFrame
          width={iframeWidth}
          props={{
            theme,
            lang,
            isKonbini,
            hasPaymentLink,
            singleButton,
            productCount,
            showPoints,
            thumbnailType,
          }}
        />
      </div>

      {/* Debug Panel — floating */}
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
          fontFamily: "var(--font-pretendard)",
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
            <span style={{ fontSize: 11, fontWeight: 700, color: "#151515" }}>Debug</span>
            <span style={{ fontSize: 10, color: "#999", fontFamily: mono }}>[P1] 땡큐</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 10, color: "#999", fontFamily: mono }}>
              {typeof displayWidth === "number" ? `${displayWidth}px` : displayWidth}
            </span>
            {constrainedWidth && (
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
            )}
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
              <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, cursor: "pointer", color: "#666" }}>
                <input type="checkbox" checked={isKonbini} onChange={(e) => setIsKonbini(e.target.checked)} style={{ accentColor: "#151515" }} />
                콘비니 결제
              </label>
              {isKonbini && (
                <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, cursor: "pointer", color: "#666", marginLeft: 8 }}>
                  <input type="checkbox" checked={hasPaymentLink} onChange={(e) => setHasPaymentLink(e.target.checked)} style={{ accentColor: "#151515" }} />
                  결제 링크
                </label>
              )}
            </ControlRow>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", margin: "8px 0" }} />

            <ControlRow label="Products">
              {[1, 2, 3, 5].map((n) => (
                <Chip key={n} label={`${n}건`} active={productCount === n} onClick={() => setProductCount(n)} />
              ))}
              <input
                type="number"
                min={1}
                max={20}
                value={productCount}
                onChange={(e) => setProductCount(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
                style={{ width: 40, padding: "2px 4px", borderRadius: 4, border: "1px solid rgba(0,0,0,0.1)", fontSize: 11, fontFamily: mono, textAlign: "center" }}
              />
            </ControlRow>

            <ControlRow label="Thumbnail">
              <Chip label="Sample" active={thumbnailType === "sample"} onClick={() => setThumbnailType("sample")} />
              <Chip label="Default" active={thumbnailType === "default"} onClick={() => setThumbnailType("default")} />
            </ControlRow>

            <ControlRow label="Points">
              <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, cursor: "pointer", color: "#666" }}>
                <input type="checkbox" checked={showPoints} onChange={(e) => setShowPoints(e.target.checked)} style={{ accentColor: "#151515" }} />
                적립예정 표시
              </label>
            </ControlRow>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", margin: "8px 0" }} />

            <ControlRow label="Buttons">
              <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, cursor: "pointer", color: "#666" }}>
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
                  style={{ width: 52, padding: "2px 4px", borderRadius: 4, border: "1px solid rgba(0,0,0,0.1)", fontSize: 11, fontFamily: mono, textAlign: "center" }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const Playground = {
  render: () => <PlaygroundUI />,
  parameters: {
    layout: "fullscreen",
  },
};

Playground.storyName = "Playground";

// ── Spec (명세서) ──

const specMono = "'SF Mono', 'Fira Code', monospace";

function SpecSection({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#151515",
          margin: "0 0 12px",
          paddingBottom: 8,
          borderBottom: "2px solid #151515",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function SpecTable({ headers, rows }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: 13,
        fontFamily: "var(--font-pretendard)",
        marginBottom: 16,
      }}
    >
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th
              key={i}
              style={{
                textAlign: "left",
                padding: "8px 12px",
                background: "#f4f4f6",
                fontWeight: 600,
                fontSize: 12,
                color: "#454545",
                borderBottom: "1px solid #ddd",
                whiteSpace: "nowrap",
              }}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => (
              <td
                key={ci}
                style={{
                  padding: "8px 12px",
                  borderBottom: "1px solid #eee",
                  color: "#333",
                  verticalAlign: "top",
                  lineHeight: 1.6,
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function SpecTag({ label }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 4,
        background: "#e8e0ff",
        color: "#654BFF",
        fontSize: 11,
        fontWeight: 600,
        fontFamily: specMono,
        marginRight: 4,
      }}
    >
      {label}
    </span>
  );
}

function SpecNote({ children }) {
  return (
    <div
      style={{
        padding: "10px 14px",
        background: "#fffbe6",
        border: "1px solid #ffe58f",
        borderRadius: 8,
        fontSize: 12,
        color: "#665500",
        lineHeight: 1.7,
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}

function SpecCode({ children }) {
  return (
    <code
      style={{
        padding: "1px 6px",
        background: "#f0f0f3",
        borderRadius: 4,
        fontSize: 11,
        fontFamily: specMono,
        color: "#d63384",
      }}
    >
      {children}
    </code>
  );
}

function SpecUI() {
  return (
    <div style={{ fontFamily: "var(--font-pretendard)", padding: 32, maxWidth: 960, margin: "0 auto" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 4px" }}>
        [P1] 땡큐 페이지 — 컴포넌트 명세서
      </h2>
      <p style={{ fontSize: 13, color: "#999", margin: "0 0 8px", fontFamily: specMono }}>
        Figma node-id: 36627:73452 &middot; File: 🔴Shop
      </p>
      <p style={{ fontSize: 13, color: "#666", margin: "0 0 32px" }}>
        주문 완료 후 보여지는 땡큐 페이지의 컴포넌트 구성 및 상태별 동작 명세.
      </p>

      {/* 페이지 구조 */}
      <SpecSection title="페이지 구조">
        <SpecTable
          headers={["영역", "컴포넌트", "설명"]}
          rows={[
            ["GNB", <SpecCode>NavigationBar type="view"</SpecCode>, "뒤로가기 + 홈 + 우측 아이콘 (알림, 캘린더, 장바구니, 마이). 하단 보더 없음. 로그인 상태 필수."],
            ["Top", "SuccessHeader", "체크 애니메이션(Lottie, 1회 재생) + \"주문을 완료했어요\" 타이틀"],
            ["Konbini", "KonbiniNotice", "콘비니 결제 시에만 노출. 결제 기한 + 안내 텍스트"],
            ["주문상품", "OrderCard", "상품 썸네일 + 상품명 + 가격(+ 적립 포인트). N건이면 배지 표시"],
            ["약관", "AdditionalInfo", "청약철회 불가 안내 등 불릿 리스트"],
            ["하단 버튼", "ActionButtons", "fixed bottom. 1개 또는 2개 버튼 시나리오"],
          ]}
        />
      </SpecSection>

      {/* 레이아웃 */}
      <SpecSection title="레이아웃">
        <SpecTable
          headers={["항목", "값"]}
          rows={[
            ["콘텐츠 max-width", <><SpecCode>narrow</SpecCode> (704px)</>],
            ["수평 패딩", "모바일 16px / PC 32px (Section padded)"],
            ["breakpoint", "801px"],
            ["영역 간 gap", "8px"],
            ["네비바 PC layout", <><SpecCode>wide</SpecCode> (1080px)</>],
          ]}
        />
      </SpecSection>

      {/* Top 영역 */}
      <SpecSection title="Top — 체크 애니메이션">
        <div style={{ marginBottom: 12 }}>
          <SpecTag label="S03000" />
        </div>
        <SpecTable
          headers={["항목", "Light", "Dark"]}
          rows={[
            ["Lottie JSON", <a href="https://drive.google.com/file/d/1urMyUYixJ9sehYBn7P0BnqRiTVvBfP_W/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: "#654BFF", textDecoration: "none", fontFamily: specMono, fontSize: 11 }}>thankyou-check-light.json</a>, <a href="https://drive.google.com/file/d/1y5SBz7XEZMWsCTqwbIUM3HgeXza5WTYO/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: "#654BFF", textDecoration: "none", fontFamily: specMono, fontSize: 11 }}>thankyou-check-dark.json</a>],
            ["재생", "1회 재생 후 정지", "1회 재생 후 정지"],
            ["정지 후 아이콘", <a href="https://www.figma.com/design/1wzbYAnYL9e6uQMzgOWPv9/%F0%9F%9F%A3-Cross_Assets?node-id=4095-224&t=EsgrSDqAHX8HAtvc-4" target="_blank" rel="noopener noreferrer" style={{ color: "#654BFF", textDecoration: "none" }}><SpecCode>thankyou_check</SpecCode> (64px, stroke 기반)</a>, "동일"],
            ["아이콘 색상", <SpecCode>{`{theme}/text/primary`}</SpecCode>, <SpecCode>{`{theme}/text/primary`}</SpecCode>],
          ]}
        />
        <SpecTable
          headers={["항목", "값"]}
          rows={[
            ["바깥 래퍼 패딩", "16px (상하좌우)"],
            ["아이콘 ↔ 타이틀 gap", "4px"],
            ["타이틀 하단 패딩", "24px"],
            ["타이틀 텍스트", "\"주문을 완료했어요\""],
            ["타이틀 타이포", <SpecCode>20-title-semibold</SpecCode>],
            ["타이틀 색상", <SpecCode>{`{theme}/text/primary`}</SpecCode>],
            ["타이틀 정렬", "center"],
          ]}
        />
      </SpecSection>

      {/* Konbini */}
      <SpecSection title="Konbini 결제 안내">
        <div style={{ marginBottom: 12 }}>
          <SpecTag label="S02793" />
        </div>
        <SpecNote>
          콘비니 결제 시에만 노출. Top 영역과 주문상품 카드 사이에 형제 레벨로 배치.
        </SpecNote>
        <SpecTable
          headers={["항목", "값"]}
          rows={[
            ["배경", <SpecCode>{`{theme}/bg/blue-grey`}</SpecCode>],
            ["radius", "8px"],
            ["padding", "20px"],
            ["gap (제목 ↔ 설명)", "8px"],
            ["제목 텍스트", "\"2023.02.18. 오후 11:59 결제를 완료해주세요.\""],
            ["제목 타이포", <SpecCode>15-body-semibold</SpecCode>],
            ["제목 색상", <SpecCode>{`{theme}/text/blue`}</SpecCode>],
            ["설명 타이포", <SpecCode>13-body-reg</SpecCode>],
            ["설명 색상", <SpecCode>always/lightgrey100</SpecCode>],
          ]}
        />
        <h4 style={{ fontSize: 13, fontWeight: 600, margin: "16px 0 8px" }}>하이퍼링크 규칙</h4>
        <SpecTable
          headers={["페이지 타입", "\"결제 지침 및 안내 사항\" 링크", "설명"]}
          rows={[
            ["StandardViewPage", "있음", <>PG사 결제 상태 페이지로 이동. 색상 <SpecCode>{`{theme}/text/blue`}</SpecCode>, 언더라인 없음</>],
            ["ConditionalViewPage", "없음", "외부 링크 제거. 일반 텍스트로 표시"],
          ]}
        />
      </SpecSection>

      {/* 주문상품 카드 */}
      <SpecSection title="주문상품 카드">
        <div style={{ marginBottom: 12 }}>
          <SpecTag label="S01714" />
          <SpecTag label="B00000" />
          <SpecTag label="S00000" />
          <SpecTag label="S01720" />
        </div>
        <SpecTable
          headers={["항목", "값"]}
          rows={[
            ["배경", <SpecCode>{`{theme}/surface/card`}</SpecCode>],
            ["border", <><SpecCode>{`{theme}/border/default-a`}</SpecCode> (1px)</>],
            ["radius", "12px"],
            ["padding", "20px"],
            ["헤더 ↔ 상품정보 gap", "8px"],
          ]}
        />
        <h4 style={{ fontSize: 13, fontWeight: 600, margin: "16px 0 8px" }}>헤더</h4>
        <SpecTable
          headers={["항목", "값"]}
          rows={[
            ["텍스트", "\"주문상품 {N}건\""],
            ["타이포", <SpecCode>14-body-semibold</SpecCode>],
            ["우측 아이콘", <><SpecCode>angleSmallRight</SpecCode> (주문 상세 이동)</>],
          ]}
        />
        <h4 style={{ fontSize: 13, fontWeight: 600, margin: "16px 0 8px" }}>상품 정보 (상태별)</h4>
        <SpecTable
          headers={["항목", "1건", "N건"]}
          rows={[
            ["썸네일 배지", "없음", <>있음 (16×16, bg <SpecCode>always/grey085</SpecCode>, 텍스트 10px/600, radius 999, 썸네일 안쪽 우하단 4px)</>],
            ["상품명", "그대로 (1줄 ellipsis)", "첫 상품명 + \" 외\" (1줄 ellipsis)"],
            ["상품명 타이포", <SpecCode>13-body-reg</SpecCode>, "동일"],
            ["상품명 색상", <SpecCode>{`{theme}/text/secondary`}</SpecCode>, "동일"],
            ["가격 텍스트", "\"{price}원\"", "\"총 {price}원\""],
            ["가격 타이포", <SpecCode>16-title-semibold</SpecCode>, "동일"],
            ["적립 포인트", "\"+{points}P 적립예정\" (같은 행)", "동일"],
            ["적립 타이포", <SpecCode>12-caption-med</SpecCode>, "동일"],
            ["적립 색상", <SpecCode>{`{theme}/text/blue`}</SpecCode>, "동일"],
          ]}
        />
        <SpecNote>
          썸네일: 64×64, radius 6px, border <SpecCode>always/black006-a</SpecCode>.
          썸네일 ↔ 상품정보 gap: 12px.
          적립 포인트는 디버그 패널에서 ON/OFF 전환 가능.
        </SpecNote>
      </SpecSection>

      {/* 약관 안내 */}
      <SpecSection title="청약철회 안내 (additional_info)">
        <SpecTable
          headers={["항목", "값"]}
          rows={[
            ["패딩", "상하 8px"],
            ["타이포", <SpecCode>12-caption-reg</SpecCode>],
            ["색상", <SpecCode>{`{theme}/text/quaternary`}</SpecCode>],
            ["불릿", "• (각 항목 앞)"],
          ]}
        />
        <h4 style={{ fontSize: 13, fontWeight: 600, margin: "16px 0 8px" }}>텍스트 항목</h4>
        <ul style={{ fontSize: 13, color: "#454545", lineHeight: 2, paddingLeft: 20 }}>
          <li>구매확정 이후 청약철회가 불가합니다.</li>
          <li>정기결제 상품의 경우, 최초 결제 이후 결제분부터는 사용 여부 및 결제 시기에 관계 없이 청약철회가 불가합니다.</li>
          <li>구매한 상품에 적립 예정 포인트가 있는 경우, 구매 확정 시 포인트가 적립됩니다.</li>
        </ul>
        <SpecNote>
          정기결제 항목은 정기결제 상품인 경우에만 표시. 포인트 적립 항목은 적립 예정 포인트가 있는 경우에만 표시.
        </SpecNote>
      </SpecSection>

      {/* 하단 액션 버튼 */}
      <SpecSection title="하단 액션 버튼">
        <div style={{ marginBottom: 12 }}>
          <SpecTag label="S01714" />
          <SpecTag label="B00050" />
          <SpecTag label="S00664" />
        </div>
        <SpecTable
          headers={["항목", "값"]}
          rows={[
            ["position", "fixed bottom"],
            ["배경", <SpecCode>{`{theme}/surface/display-bar-bottom`}</SpecCode>],
            ["상단 border", <><SpecCode>always/black006-a</SpecCode> (1px)</>],
            ["수평 패딩", "section-padded (모바일 16px / PC 32px)"],
            ["상단 패딩", "16px"],
            ["하단 패딩", "모바일 16px / PC 40px"],
            ["버튼 높이", "48px"],
            ["버튼 gap", "8px (2개일 때)"],
          ]}
        />
        <h4 style={{ fontSize: 13, fontWeight: 600, margin: "16px 0 8px" }}>버튼 시나리오</h4>
        <SpecTable
          headers={["시나리오", "버튼 구성", "조건"]}
          rows={[
            ["2개 버튼", <>좌: <SpecCode>outline/mono/48</SpecCode> "홈으로 가기" + 우: <SpecCode>fill/picker/48</SpecCode> "돌아가기"</>, "체크아웃 진입이 b.stage 콘텐츠 또는 상품에서 온 경우"],
            ["1개 버튼", <><SpecCode>fill/picker/48</SpecCode> "홈으로 가기" (full width)</>, "직접 체크아웃 진입 (돌아갈 콘텐츠/상품 없음)"],
          ]}
        />
        <SpecNote>
          "돌아가기" 버튼 동작: 콘텐츠 진입 → 해당 콘텐츠로 이동, 상품 진입 → 상품 상세로 이동.
          버튼 시나리오는 Konbini 여부와 무관하게 독립적으로 설정.
        </SpecNote>
      </SpecSection>

      {/* 디버그 패널 */}
      <SpecSection title="디버그 패널 옵션">
        <SpecTable
          headers={["옵션", "타입", "기본값", "설명"]}
          rows={[
            ["Theme", "Chip (light / dark)", "light", "다크/라이트 모드 전환"],
            ["Konbini", "Checkbox", "OFF", "콘비니 결제 영역 표시"],
            ["결제 링크", "Checkbox (Konbini ON 시)", "OFF", "\"결제 지침 및 안내 사항\" 하이퍼링크 유무"],
            ["Products", "Chip (1/2/3/5) + 직접 입력", "1", "주문 상품 건수"],
            ["Thumbnail", "Chip (Sample / Default)", "Sample", "상품 썸네일 이미지 타입"],
            ["Points", "Checkbox", "ON", "적립예정 포인트 표시 여부"],
            ["Buttons", "Checkbox", "OFF", "1개 버튼 (홈으로 가기만) 모드"],
            ["Viewport", "Chip (360~Full) + 직접 입력", "Full", "iframe 기반 반응형 뷰포트 시뮬레이션"],
          ]}
        />
      </SpecSection>

      {/* Figma 참고 */}
      <SpecSection title="Figma 참고">
        <SpecTable
          headers={["항목", "값"]}
          rows={[
            ["디자인 파일", <a href="https://www.figma.com/design/MvyrswCEjSXrECmOx6Af2d/%F0%9F%94%B4Shop?node-id=36627-73452&t=yPy6LCxD0h08slg8-1" target="_blank" rel="noopener noreferrer" style={{ color: "#654BFF", textDecoration: "none" }}>🔴Shop (MvyrswCEjSXrECmOx6Af2d)</a>],
            ["섹션", "[P1] 땡큐 (node-id: 36627:73452)"],
            ["가이드", "가이드1 (node-id: 36701:49810)"],
            ["Lottie (Light)", <a href="https://drive.google.com/file/d/1urMyUYixJ9sehYBn7P0BnqRiTVvBfP_W/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: "#654BFF", textDecoration: "none", fontFamily: specMono, fontSize: 11 }}>thankyou-check-light.json</a>],
            ["Lottie (Dark)", <a href="https://drive.google.com/file/d/1y5SBz7XEZMWsCTqwbIUM3HgeXza5WTYO/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: "#654BFF", textDecoration: "none", fontFamily: specMono, fontSize: 11 }}>thankyou-check-dark.json</a>],
            ["Stop-frame 아이콘", <a href="https://www.figma.com/design/1wzbYAnYL9e6uQMzgOWPv9/%F0%9F%9F%A3-Cross_Assets?node-id=4095-224&t=EsgrSDqAHX8HAtvc-4" target="_blank" rel="noopener noreferrer" style={{ color: "#654BFF", textDecoration: "none" }}><SpecCode>thankyou_check</SpecCode> (Cross_Assets ico/thankyou/check-64)</a>],
          ]}
        />
      </SpecSection>
    </div>
  );
}

export const Spec = {
  render: () => <SpecUI />,
};

Spec.storyName = "Spec (명세서)";
