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
  disabled={${disabled}}${contentType === "text" ? `
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

