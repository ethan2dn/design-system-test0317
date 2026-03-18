import React, { useState } from "react";
import Button from "../components/Button";
import Icon, { ICON_NAMES } from "../icons/Icon";

const ICON_OPTIONS = ["", ...ICON_NAMES.filter((n) => !n.includes("null"))];

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    styleType: {
      control: "select",
      options: ["fill", "outline", "clear", "text"],
      description: "버튼 스타일 유형",
    },
    contentType: {
      control: "select",
      options: ["text", "icon"],
      description: "콘텐츠 유형 (텍스트 or 아이콘)",
    },
    size: {
      control: "select",
      options: [18, 20, 24, 28, 32, 36, 40, 48],
      description: "버튼 크기 (px)",
    },
    color: {
      control: "select",
      options: ["picker", "mono", "red"],
      description: "컬러 테마",
    },
    strength: {
      control: "select",
      options: [0, -1],
      description: "강도 (0: 강함, -1: 약함)",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 여부",
    },
    label: {
      control: "text",
      description: "버튼 텍스트",
    },
    prefixIcon: {
      control: "select",
      options: ICON_OPTIONS,
      description: "접두 아이콘",
    },
    suffixIcon: {
      control: "select",
      options: ICON_OPTIONS,
      description: "접미 아이콘",
    },
    iconName: {
      control: "select",
      options: ICON_NAMES,
      description: "아이콘 전용 모드에서 사용할 아이콘",
      if: { arg: "contentType", eq: "icon" },
    },
    fullWidth: {
      control: "boolean",
      description: "전체 너비 사용",
    },
  },
  args: {
    styleType: "fill",
    contentType: "text",
    size: 40,
    color: "picker",
    strength: 0,
    disabled: false,
    label: "Button",
    prefixIcon: "",
    suffixIcon: "",
    iconName: "default_plus_line",
    fullWidth: false,
  },
};

// ── Playground ──

export const Playground = {
  render: () => <PlaygroundUI />,
};

// ── Style Types ──

export const StyleTypes = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <Section title="Style Types × Colors (strength=0)">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>styleType</th>
              <th style={thStyle}>picker</th>
              <th style={thStyle}>mono</th>
              <th style={thStyle}>red</th>
            </tr>
          </thead>
          <tbody>
            {["fill", "outline", "clear", "text"].map((st) => (
              <tr key={st}>
                <td style={tdLabelStyle}>{st}</td>
                {["picker", "mono", "red"].map((c) => (
                  <td key={c} style={tdStyle}>
                    <Button styleType={st} color={c} size={40} label="Label" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="Style Types × Colors (strength=-1, weak)">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>styleType</th>
              <th style={thStyle}>picker</th>
              <th style={{ ...thStyle, background: "var(--color-dark-bg-elevated)", color: "var(--color-light-border-grey-weak-a)" }}>mono (dark bg)</th>
              <th style={thStyle}>red</th>
            </tr>
          </thead>
          <tbody>
            {["fill", "outline", "clear", "text"].map((st) => (
              <tr key={st}>
                <td style={tdLabelStyle}>{st}</td>
                <td style={tdStyle}>
                  <Button styleType={st} color="picker" strength={-1} size={40} label="Label" />
                </td>
                <td style={{ ...tdStyle, background: "var(--color-dark-bg-elevated)" }}>
                  <Button styleType={st} color="mono" strength={-1} size={40} label="Label" />
                </td>
                <td style={tdStyle}>
                  <Button styleType={st} color="red" strength={-1} size={40} label="Label" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </div>
  ),
};

// ── Sizes ──

export const Sizes = {
  render: () => (
    <div style={{ padding: 24 }}>
      <Section title="All Sizes (fill / picker)">
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          {[18, 20, 24, 28, 32, 36, 40, 48].map((s) => (
            <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <Button size={s} label="Label" />
              <span style={metaStyle}>{s}px</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Icon-only × Sizes">
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          {[18, 20, 24, 28, 32, 36, 40, 48].map((s) => (
            <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <Button size={s} contentType="icon" iconName="default_plus_line" />
              <span style={metaStyle}>{s}px</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),
};

// ── States ──

export const States = {
  render: () => (
    <div style={{ padding: 24 }}>
      <Section title="States (hover & click to test)">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>State</th>
              <th style={thStyle}>fill</th>
              <th style={thStyle}>outline</th>
              <th style={thStyle}>clear</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdLabelStyle}>Default</td>
              <td style={tdStyle}><Button styleType="fill" label="Hover me" /></td>
              <td style={tdStyle}><Button styleType="outline" label="Hover me" /></td>
              <td style={tdStyle}><Button styleType="clear" label="Hover me" /></td>
            </tr>
            <tr>
              <td style={tdLabelStyle}>Disabled</td>
              <td style={tdStyle}><Button styleType="fill" label="Disabled" disabled /></td>
              <td style={tdStyle}><Button styleType="outline" label="Disabled" disabled /></td>
              <td style={tdStyle}><Button styleType="clear" label="Disabled" disabled /></td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section title="Hover/Active는 마우스를 올려서 확인하세요">
        <p style={{ fontSize: 13, color: "var(--color-light-text-quaternary)", margin: 0 }}>
          Default → Hover (10% overlay) → Active/Press (15% overlay) → Disabled (40% opacity)
        </p>
      </Section>
    </div>
  ),
};

// ── With Icons ──

export const WithIcons = {
  render: () => (
    <div style={{ padding: 24 }}>
      <Section title="Prefix / Suffix Icons">
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button label="Search" prefixIcon="gnb_search_line" />
          <Button label="Next" suffixIcon="default_angleRight_line" />
          <Button label="Download" prefixIcon="default_download_line" suffixIcon="default_angleDown_line" />
          <Button label="Delete" prefixIcon="default_trash_line" color="red" />
          <Button label="Settings" prefixIcon="default_settingHexa_line" styleType="outline" />
          <Button label="Share" prefixIcon="gnb_share_line" styleType="clear" />
        </div>
      </Section>

      <Section title="Icon-only">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["fill", "outline", "clear"].map((st) => (
            <Button key={st} contentType="icon" styleType={st} iconName="default_plus_line" size={40} />
          ))}
          {["picker", "mono", "red"].map((c) => (
            <Button key={c} contentType="icon" color={c} iconName="gnb_search_line" size={40} />
          ))}
        </div>
      </Section>
    </div>
  ),
};

// ── Full Matrix ──

export const FullMatrix = {
  render: () => (
    <div style={{ padding: 24 }}>
      <Section title="Complete Variant Matrix (size=40)">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}></th>
              {["fill", "outline", "clear", "text"].map((st) => (
                <th key={st} style={thStyle} colSpan={2}>{st}</th>
              ))}
            </tr>
            <tr>
              <th style={thStyle}>color / str</th>
              {["fill", "outline", "clear", "text"].map((st) => (
                <React.Fragment key={st}>
                  <th style={{ ...thStyle, fontSize: 10 }}>0</th>
                  <th style={{ ...thStyle, fontSize: 10 }}>-1</th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {["picker", "mono", "red"].map((color) => (
              <tr key={color}>
                <td style={tdLabelStyle}>{color}</td>
                {["fill", "outline", "clear", "text"].map((st) => (
                  <React.Fragment key={st}>
                    <td style={{ ...tdStyle, background: color === "mono" && st !== "fill" ? undefined : undefined }}>
                      <Button styleType={st} color={color} strength={0} size={40} label="Aa" />
                    </td>
                    <td style={{ ...tdStyle, background: color === "mono" ? "var(--color-dark-bg-elevated)" : undefined }}>
                      <Button styleType={st} color={color} strength={-1} size={40} label="Aa" />
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </div>
  ),
};

// ── Helpers ──

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
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
          fontFamily: "Pretendard, sans-serif",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

const mono = "'SF Mono', 'Fira Code', monospace";
const tableStyle = { borderCollapse: "collapse", fontFamily: "Pretendard, sans-serif" };
const thStyle = {
  padding: "8px 14px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: "var(--color-light-text-quaternary)",
  borderBottom: "2px solid var(--color-light-border-divider-weaker)",
  fontFamily: mono,
  whiteSpace: "nowrap",
};
const tdStyle = { padding: "12px 14px", borderBottom: "1px solid var(--color-light-bg-grouped-strong)", verticalAlign: "middle" };
const tdLabelStyle = { ...tdStyle, fontFamily: mono, fontSize: 12, color: "var(--color-light-text-tertiary)", whiteSpace: "nowrap" };
const metaStyle = { fontFamily: mono, fontSize: 10, color: "var(--color-light-icon-grey)" };

// ── Playground ──

const POPULAR_ICONS = [
  "", "gnb_search_line", "gnb_share_line", "gnb_cancel_line", "gnb_backAngle_line",
  "default_plus_line", "default_checkBig_line", "default_trash_line", "default_download_line",
  "default_settingHexa_line", "default_arrowRight_line", "default_angleRight_line",
  "default_angleDown_line", "default_camera_line", "default_link_line",
  "default_send_solid", "default_lock_line", "default_copy_line",
];

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "4px 12px",
        borderRadius: 99,
        border: active ? "1.5px solid var(--color-light-border-stronger)" : "1px solid var(--color-light-border-default-a)",
        background: active ? "var(--color-light-surface-form-inverted)" : "var(--color-light-bg-base)",
        color: active ? "var(--color-light-bg-base)" : "var(--color-light-text-tertiary)",
        fontSize: 12,
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
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
      <span
        style={{
          width: 90,
          fontSize: 12,
          fontWeight: 600,
          color: "var(--color-light-text-quaternary)",
          fontFamily: mono,
          flexShrink: 0,
          textAlign: "right",
        }}
      >
        {label}
      </span>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>{children}</div>
    </div>
  );
}

function IconChip({ name, active, onClick }) {
  return (
    <button
      onClick={onClick}
      title={name || "none"}
      style={{
        width: 32,
        height: 32,
        borderRadius: 6,
        border: active ? "1.5px solid var(--color-light-border-stronger)" : "1px solid var(--color-light-border-default-a)",
        background: active ? "var(--color-light-bg-grouped-strong)" : "var(--color-light-bg-base)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      {name ? (
        <Icon name={name} size={18} color={active ? "var(--color-light-text-primary)" : "var(--color-light-text-quaternary)"} />
      ) : (
        <span style={{ fontSize: 14, color: "var(--color-light-border-grey-weak-a)" }}>∅</span>
      )}
    </button>
  );
}

function PlaygroundUI() {
  const [styleType, setStyleType] = useState("fill");
  const [contentType, setContentType] = useState("text");
  const [size, setSize] = useState(40);
  const [color, setColor] = useState("picker");
  const [strength, setStrength] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [multiLine, setMultiLine] = useState(true);
  const [radius, setRadius] = useState(undefined);
  const [label, setLabel] = useState("Button");
  const [prefixIcon, setPrefixIcon] = useState("");
  const [suffixIcon, setSuffixIcon] = useState("");
  const [iconName, setIconName] = useState("default_plus_line");
  const [darkPreview, setDarkPreview] = useState(false);

  const buttonProps = {
    styleType,
    contentType,
    size,
    color,
    strength,
    disabled,
    loading,
    multiLine,
    radius,
    label,
    prefixIcon: prefixIcon || undefined,
    suffixIcon: suffixIcon || undefined,
    iconName,
    theme: darkPreview ? "dark" : "light",
  };

  return (
    <div style={{ fontFamily: "Pretendard, sans-serif", padding: 24 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4, color: "var(--color-light-text-primary)" }}>
        Button Playground
      </h2>
      <p style={{ fontSize: 13, color: "var(--color-light-text-quaternary)", marginBottom: 28 }}>
        속성을 조합하고 결과를 실시간으로 확인하세요. Hover / Click 인터랙션도 테스트 가능합니다.
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
          <ControlRow label="styleType">
            {["fill", "outline", "clear", "text"].map((v) => (
              <Chip key={v} label={v} active={styleType === v} onClick={() => setStyleType(v)} />
            ))}
          </ControlRow>

          <ControlRow label="contentType">
            {["text", "icon"].map((v) => (
              <Chip key={v} label={v} active={contentType === v} onClick={() => setContentType(v)} />
            ))}
          </ControlRow>

          <ControlRow label="size">
            {[18, 20, 24, 28, 32, 36, 40, 48].map((v) => (
              <Chip key={v} label={`${v}`} active={size === v} onClick={() => setSize(v)} />
            ))}
          </ControlRow>

          <ControlRow label="color">
            {["picker", "mono", "red"].map((v) => (
              <Chip key={v} label={v} active={color === v} onClick={() => setColor(v)} />
            ))}
          </ControlRow>

          <ControlRow label="strength">
            {[0, -1].map((v) => (
              <Chip
                key={v}
                label={v === 0 ? "0 (strong)" : "-1 (weak)"}
                active={strength === v}
                onClick={() => setStrength(v)}
              />
            ))}
          </ControlRow>

          <ControlRow label="disabled">
            <Chip label="false" active={!disabled} onClick={() => setDisabled(false)} />
            <Chip label="true" active={disabled} onClick={() => setDisabled(true)} />
          </ControlRow>

          <ControlRow label="loading">
            <Chip label="false" active={!loading} onClick={() => setLoading(false)} />
            <Chip label="true" active={loading} onClick={() => setLoading(true)} />
          </ControlRow>

          <ControlRow label="multiLine">
            <Chip label="true (줄바꿈)" active={multiLine} onClick={() => setMultiLine(true)} />
            <Chip label="false (말줄임)" active={!multiLine} onClick={() => setMultiLine(false)} />
          </ControlRow>

          <ControlRow label="radius">
            {[
              { label: "default", value: undefined },
              { label: "0", value: 0 },
              { label: "6", value: 6 },
              { label: "999", value: 999 },
            ].map((r) => (
              <Chip key={String(r.value)} label={r.label} active={radius === r.value} onClick={() => setRadius(r.value)} />
            ))}
          </ControlRow>

          {contentType === "text" && (
            <>
              <ControlRow label="label">
                <input
                  type="text"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  style={{
                    padding: "5px 10px",
                    border: "1px solid var(--color-light-border-default-a)",
                    borderRadius: 6,
                    fontSize: 13,
                    width: 160,
                    fontFamily: "Pretendard, sans-serif",
                  }}
                />
              </ControlRow>

              <ControlRow label="prefixIcon">
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {POPULAR_ICONS.map((n) => (
                    <IconChip key={n || "none"} name={n} active={prefixIcon === n} onClick={() => setPrefixIcon(n)} />
                  ))}
                </div>
              </ControlRow>

              <ControlRow label="suffixIcon">
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {POPULAR_ICONS.map((n) => (
                    <IconChip key={n || "none"} name={n} active={suffixIcon === n} onClick={() => setSuffixIcon(n)} />
                  ))}
                </div>
              </ControlRow>
            </>
          )}

          {contentType === "icon" && (
            <ControlRow label="icon">
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {POPULAR_ICONS.filter(Boolean).map((n) => (
                  <IconChip key={n} name={n} active={iconName === n} onClick={() => setIconName(n)} />
                ))}
              </div>
            </ControlRow>
          )}
        </div>

        {/* Right: Preview */}
        <div style={{ flex: "1 1 320px", minWidth: 300 }}>
          {/* Background toggle */}
          <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
            <Chip label="Light BG" active={!darkPreview} onClick={() => setDarkPreview(false)} />
            <Chip label="Dark BG" active={darkPreview} onClick={() => setDarkPreview(true)} />
          </div>

          {/* Preview area */}
          <div
            style={{
              background: darkPreview ? "var(--color-dark-bg-base)" : "var(--color-light-bg-base)",
              border: darkPreview ? "1px solid var(--color-dark-bg-highlight)" : "1px solid var(--color-light-border-divider-weaker)",
              borderRadius: 12,
              padding: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 160,
              transition: "background 0.2s",
            }}
          >
            <Button {...buttonProps} />
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
{`<Button
  styleType="${styleType}"
  contentType="${contentType}"
  size={${size}}
  color="${color}"
  strength={${strength}}
  disabled={${disabled}}
  loading={${loading}}
  multiLine={${multiLine}}${radius !== undefined ? `\n  radius={${radius}}` : ""}${contentType === "text" ? `
  label="${label}"${prefixIcon ? `\n  prefixIcon="${prefixIcon}"` : ""}${suffixIcon ? `\n  suffixIcon="${suffixIcon}"` : ""}` : `
  iconName="${iconName}"`}
/>`}
            </pre>
          </div>

          {/* Quick compare: all styleTypes with current settings */}
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-light-icon-grey)", marginBottom: 10, fontFamily: mono }}>
              COMPARE STYLES
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
              }}
            >
              {["fill", "outline", "clear", "text"].map((st) => (
                <div
                  key={st}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    padding: 12,
                    borderRadius: 8,
                    background: darkPreview ? "var(--color-dark-bg-base)" : "var(--color-light-bg-grouped-strong)",
                    border: st === styleType ? "1.5px solid var(--color-light-border-stronger)" : "1px solid var(--color-light-border-divider-weaker)",
                    cursor: "pointer",
                    transition: "all 0.12s",
                  }}
                  onClick={() => setStyleType(st)}
                >
                  <Button
                    {...buttonProps}
                    styleType={st}
                    size={Math.min(size, 36)}
                    label={contentType === "text" ? label : undefined}
                  />
                  <span style={{ fontFamily: mono, fontSize: 10, color: st === styleType ? "var(--color-light-text-primary)" : "var(--color-light-icon-grey)" }}>
                    {st}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick compare: all sizes */}
          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-light-icon-grey)", marginBottom: 10, fontFamily: mono }}>
              COMPARE SIZES
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 8,
                padding: 16,
                background: darkPreview ? "var(--color-dark-bg-base)" : "var(--color-light-bg-grouped-strong)",
                borderRadius: 8,
                border: "1px solid var(--color-light-border-divider-weaker)",
                flexWrap: "wrap",
              }}
            >
              {[18, 20, 24, 28, 32, 36, 40, 48].map((s) => (
                <div
                  key={s}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    cursor: "pointer",
                  }}
                  onClick={() => setSize(s)}
                >
                  <Button
                    {...buttonProps}
                    size={s}
                    label={contentType === "text" ? (s <= 24 ? "Aa" : label) : undefined}
                  />
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 9,
                      color: size === s ? "var(--color-light-text-primary)" : "var(--color-light-border-grey-weak-a)",
                      fontWeight: size === s ? 700 : 400,
                    }}
                  >
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Spec (명세서) ──

const specMono = "'SF Mono', 'Fira Code', monospace";

function SpecSection2({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#151515", margin: "0 0 12px", paddingBottom: 8, borderBottom: "2px solid #151515" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function SpecTable2({ headers, rows }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: "Pretendard, sans-serif", marginBottom: 16 }}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} style={{ textAlign: "left", padding: "8px 12px", background: "#f4f4f6", fontWeight: 600, fontSize: 12, color: "#454545", borderBottom: "1px solid #ddd", whiteSpace: "nowrap" }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => (
              <td key={ci} style={{ padding: "8px 12px", borderBottom: "1px solid #eee", color: "#333", verticalAlign: "top", lineHeight: 1.6 }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function SC({ children }) {
  return <code style={{ padding: "1px 6px", background: "#f0f0f3", borderRadius: 4, fontSize: 11, fontFamily: specMono, color: "#d63384" }}>{children}</code>;
}

function SpecNote2({ children }) {
  return <div style={{ padding: "10px 14px", background: "#fffbe6", border: "1px solid #ffe58f", borderRadius: 8, fontSize: 12, color: "#665500", lineHeight: 1.7, marginBottom: 12 }}>{children}</div>;
}

function SpecUI() {
  return (
    <div style={{ fontFamily: "Pretendard, sans-serif", padding: 32, maxWidth: 960, margin: "0 auto" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 4px" }}>Button — 컴포넌트 명세서</h2>
      <p style={{ fontSize: 13, color: "#999", margin: "0 0 8px", fontFamily: specMono }}>Figma: Buttons component set &middot; 480 variants</p>
      <p style={{ fontSize: 13, color: "#666", margin: "0 0 32px" }}>피그마 Buttons 컴포넌트셋 기반. CSS Custom Properties(디자인 토큰)로 모든 색상/타이포를 제어하며, light/dark 테마를 지원합니다.</p>

      <SpecSection2 title="Props">
        <SpecTable2
          headers={["Prop", "타입", "기본값", "설명"]}
          rows={[
            [<SC>styleType</SC>, <SC>fill | outline | clear | text</SC>, <SC>fill</SC>, "버튼 스타일 유형"],
            [<SC>contentType</SC>, <SC>text | icon</SC>, <SC>text</SC>, "콘텐츠 유형 (텍스트 or 아이콘 전용)"],
            [<SC>size</SC>, <SC>18 | 20 | 24 | 28 | 32 | 36 | 40 | 48</SC>, <SC>40</SC>, "버튼 높이 (px)"],
            [<SC>color</SC>, <SC>picker | mono | red</SC>, <SC>picker</SC>, "컬러 테마"],
            [<SC>strength</SC>, <SC>0 | -1</SC>, <SC>0</SC>, "0: 강함(strong), -1: 약함(weak)"],
            [<SC>disabled</SC>, <SC>boolean</SC>, <SC>false</SC>, "비활성화 여부 (opacity 0.4)"],
            [<SC>loading</SC>, <SC>boolean</SC>, <SC>false</SC>, "true 시 중앙에 로딩 스피너 표시 + disabled 상태"],
            [<SC>multiLine</SC>, <SC>boolean</SC>, <SC>true</SC>, "true: 패딩 내 줄바꿈, false: 한줄 말줄임(ellipsis)"],
            [<SC>radius</SC>, <SC>number</SC>, "—", "border-radius 오버라이드 (0 / 6 / 999). 미지정 시 size별 기본값"],
            [<SC>label</SC>, <SC>string</SC>, <SC>"Label"</SC>, "버튼 텍스트 (contentType=text)"],
            [<SC>prefixIcon</SC>, <SC>string</SC>, "—", "텍스트 앞 아이콘 이름"],
            [<SC>suffixIcon</SC>, <SC>string</SC>, "—", "텍스트 뒤 아이콘 이름"],
            [<SC>iconName</SC>, <SC>string</SC>, <SC>"default_plus_line"</SC>, "아이콘 전용 모드에서 사용할 아이콘"],
            [<SC>iconSize</SC>, <SC>number</SC>, "—", "아이콘 크기 오버라이드 (미지정 시 size별 기본값)"],
            [<SC>fullWidth</SC>, <SC>boolean</SC>, <SC>false</SC>, "width: 100%"],
            [<SC>theme</SC>, <SC>light | dark</SC>, <SC>light</SC>, "라이트/다크 테마"],
            [<SC>onClick</SC>, <SC>function</SC>, "—", "클릭 핸들러"],
          ]}
        />
      </SpecSection2>

      <SpecSection2 title="Variant 조합">
        <SpecNote2>총 variant 수: styleType(4) × contentType(2) × size(8) × color(3) × strength(2) × disabled(2) = 768 조합. 피그마 기준 480개 variant (일부 조합 제외).</SpecNote2>
        <h4 style={{ fontSize: 13, fontWeight: 600, margin: "16px 0 8px" }}>styleType</h4>
        <SpecTable2
          headers={["styleType", "배경", "보더", "용도"]}
          rows={[
            [<SC>fill</SC>, "컬러 배경", "없음", "Primary CTA, 강조 액션"],
            [<SC>outline</SC>, "투명", "1px solid 컬러", "Secondary 액션, 취소"],
            [<SC>clear</SC>, "투명", "없음", "Tertiary 액션, 인라인 버튼"],
            [<SC>text</SC>, "투명", "없음", "텍스트 링크 스타일 버튼"],
          ]}
        />
        <h4 style={{ fontSize: 13, fontWeight: 600, margin: "16px 0 8px" }}>color × strength (fill 기준)</h4>
        <SpecTable2
          headers={["color", "strength=0 (strong)", "strength=-1 (weak)"]}
          rows={[
            [<SC>picker</SC>, <>배경 <SC>picker/button</SC>, 텍스트 <SC>picker/on-button</SC></>, <>배경 <SC>picker/button-weak-a</SC>, 텍스트 <SC>picker/button</SC></>],
            [<SC>mono</SC>, <>배경 <SC>{`{theme}/surface/form-inverted`}</SC>, 텍스트 <SC>{`{theme}/text/invert-a`}</SC></>, <>배경 <SC>always/lightgrey015-a</SC>, 텍스트 <SC>{`{theme}/text/primary`}</SC></>],
            [<SC>red</SC>, <>배경 <SC>{`{theme}/surface/form-red`}</SC>, 텍스트 <SC>always/white100</SC></>, <>배경 <SC>{`{theme}/surface/form-red-weak-a`}</SC>, 텍스트 <SC>{`{theme}/text/red`}</SC></>],
          ]}
        />
        <SpecNote2>outline/clear/text는 배경 투명, 텍스트/아이콘 컬러만 적용. outline의 보더: strong은 진한 보더, weak(-1)은 연한 보더. mono + weak 조합은 다크 배경에서 사용하도록 설계됨.</SpecNote2>
      </SpecSection2>

      <SpecSection2 title="사이즈 스펙">
        <SpecTable2
          headers={["size", "height", "fontSize", "iconSize", "padding (H×V)", "gap", "radius"]}
          rows={[
            ["18", "18px", "11px", "12px", "4×1", "0", "4px"],
            ["20", "20px", "11px", "14px", "4×1", "0", "4px"],
            ["24", "24px", "12px", "16px", "6×2", "0", "6px"],
            ["28", "28px", "13px", "16px", "8×3", "1px", "6px"],
            ["32", "32px", "13px", "16px", "8×3", "1px", "6px"],
            ["36", "36px", "14px", "20px", "10×4", "2px", "6px"],
            ["40", "40px", "14px", "20px", "10×4", "2px", "6px"],
            ["48", "48px", "16px", "24px", "12×6", "2px", "6px"],
          ]}
        />
        <SpecNote2>
          <SC>contentType=icon</SC>일 때: padding은 py만 적용 (정사각형에 가까운 형태), minWidth = height.
          <br /><SC>radius</SC> prop으로 border-radius를 오버라이드 가능: 0(직각), 6(기본), 999(pill). 미지정 시 size별 기본값(size 18~20: 4px, 나머지: 6px).
          <br /><SC>multiLine=true</SC>일 때: height 대신 minHeight 적용, whiteSpace: normal로 줄바꿈 허용.
        </SpecNote2>
      </SpecSection2>

      <SpecSection2 title="타이포그래피 토큰 매핑">
        <SpecTable2
          headers={["fontSize (px)", "토큰", "fontWeight", "적용 size"]}
          rows={[
            ["11", <SC>11-caption-med</SC>, "500 (medium)", "18, 20"],
            ["12", <SC>12-caption-med</SC>, "500 (medium)", "24"],
            ["13", <SC>13-body-med</SC>, "500 (medium)", "28, 32"],
            ["14", <SC>14-body-med</SC>, "500 (medium)", "36, 40"],
            ["16", <SC>16-title-med</SC>, "500 (medium)", "48"],
          ]}
        />
      </SpecSection2>

      <SpecSection2 title="상태 (States)">
        <SpecTable2
          headers={["상태", "처리 방식", "토큰"]}
          rows={[
            ["Default", "기본 스타일 적용", "—"],
            ["Hover", "오버레이 (absolute, inset:0)", <SC>{`{theme}/overlay/hover-grey-a`}</SC>],
            ["Active / Press", "오버레이 (absolute, inset:0)", <SC>{`{theme}/overlay/press-grey-a`}</SC>],
            ["Loading", "중앙 스피너 + 콘텐츠 hidden + disabled", "스피너: 버튼 텍스트 색상, 2px border, opacity 0.7"],
            ["Disabled", "opacity: 0.4, cursor: not-allowed", "—"],
          ]}
        />
        <SpecNote2>오버레이는 <SC>position: absolute; inset: 0; pointerEvents: none</SC>으로 버튼 내부에 렌더. 터치 디바이스: touchStart→press, touchEnd→release. 터치 후 마우스 이벤트 무시 (ghost click 방지).</SpecNote2>
      </SpecSection2>

      <SpecSection2 title="Outline 보더 토큰 상세">
        <SpecTable2
          headers={["color", "strength=0", "strength=-1"]}
          rows={[
            [<SC>picker</SC>, <SC>picker/button</SC>, <SC>picker/button-weak-a</SC>],
            [<SC>mono</SC>, <SC>{`{theme}/border/stronger`}</SC>, <SC>{`{theme}/border/default-a`}</SC>],
            [<SC>red</SC>, <SC>{`{theme}/border/red`}</SC>, <SC>{`{theme}/border/red-weak-a`}</SC>],
          ]}
        />
      </SpecSection2>

      <SpecSection2 title="아이콘">
        <SpecTable2
          headers={["항목", "값"]}
          rows={[
            ["Icon 컴포넌트", <SC>{`<Icon name={...} size={iconSize} color={iconColor} />`}</SC>],
            ["아이콘 크기", "size별 기본값 (12~24px), iconSize prop으로 오버라이드 가능"],
            ["아이콘 색상", "버튼 텍스트 색상과 동일 토큰 사용"],
          ]}
        />
        <h4 style={{ fontSize: 13, fontWeight: 600, margin: "16px 0 8px" }}>contentType별 구조</h4>
        <SpecTable2
          headers={["contentType", "구조"]}
          rows={[
            [<SC>text</SC>, "[prefixIcon] + label(텍스트) + [suffixIcon] — gap으로 간격"],
            [<SC>icon</SC>, "iconName 단독 렌더 — 정사각형 패딩, minWidth=height"],
          ]}
        />
      </SpecSection2>

      <SpecSection2 title="사용 예시">
        <pre style={{ fontFamily: specMono, fontSize: 12, background: "#f4f4f6", padding: 16, borderRadius: 8, color: "#333", lineHeight: 1.8, overflow: "auto" }}>
{`// Primary CTA
<Button styleType="fill" color="picker" size={48} label="구매하기" fullWidth />

// Secondary (outline)
<Button styleType="outline" color="mono" size={48} label="홈으로 가기" fullWidth />

// Icon + Text
<Button label="검색" prefixIcon="gnb_search_line" size={36} />

// Icon only
<Button contentType="icon" iconName="default_plus_line" size={40} />

// Weak (약한 강조)
<Button styleType="fill" color="picker" strength={-1} size={32} label="태그" />

// Red (위험/삭제)
<Button styleType="fill" color="red" size={40} label="삭제" />

// Dark theme
<Button theme="dark" styleType="fill" color="mono" size={40} label="다크 버튼" />`}
        </pre>
      </SpecSection2>

      <SpecSection2 title="Figma 참고">
        <SpecTable2
          headers={["항목", "값"]}
          rows={[
            ["디자인 파일", <>b.spoke User (<SC>OCTjdP5XAKan0Sr31pQlKV</SC>)</>],
            ["컴포넌트셋", "Buttons (480 variants)"],
            ["토큰 파일", <SC>figma-tokens.json</SC>],
            ["CSS 변수", <SC>src/tokens.css</SC>],
          ]}
        />
      </SpecSection2>
    </div>
  );
}

export const Spec = {
  render: () => <SpecUI />,
};

Spec.storyName = "Spec (명세서)";
