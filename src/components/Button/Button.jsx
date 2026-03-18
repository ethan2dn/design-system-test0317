import React, { useState } from "react";
import Icon from "../../icons/Icon";

/*
 * Figma Button Variants:
 *   styleType: fill | outline | clear | text
 *   contentType: text | icon
 *   size: 18 | 20 | 24 | 28 | 32 | 36 | 40 | 48
 *   color: picker | mono | red
 *   strength: 0 (strong) | -1 (weak)
 *   disabled: true | false
 *
 * State: Default → Hover → Active → Disabled
 *   Hover/Active: overlay via token
 *   Disabled: opacity 0.4
 *
 * All colors reference CSS custom properties from tokens.css
 * so that token names are visible in browser dev tools.
 */

// ── CSS variable helpers ──

const v = (tokenName) => `var(--color-${tokenName.replace(/\//g, "-")})`;

// ── Color map (CSS variable references) ──

function getOverlays(theme = "light") {
  return {
    hover: v(`${theme}/overlay/hover-grey-a`),
    active: v(`${theme}/overlay/press-grey-a`),
  };
}

// ── Size config (from Figma) ──

const SIZE_CONFIG = {
  18: { height: 18, fontSize: 11, iconSize: 12, px: 4, py: 1, gap: 0, radius: 4 },
  20: { height: 20, fontSize: 11, iconSize: 14, px: 4, py: 1, gap: 0, radius: 4 },
  24: { height: 24, fontSize: 12, iconSize: 16, px: 6, py: 2, gap: 0, radius: 6 },
  28: { height: 28, fontSize: 13, iconSize: 16, px: 8, py: 3, gap: 1, radius: 6 },
  32: { height: 32, fontSize: 13, iconSize: 16, px: 8, py: 3, gap: 1, radius: 6 },
  36: { height: 36, fontSize: 14, iconSize: 20, px: 10, py: 4, gap: 2, radius: 6 },
  40: { height: 40, fontSize: 14, iconSize: 20, px: 10, py: 4, gap: 2, radius: 6 },
  48: { height: 48, fontSize: 16, iconSize: 24, px: 12, py: 6, gap: 2, radius: 6 },
};

// ── Typography token mapping ──

function getTypoVars(fontSize) {
  const weightKey = "med"; // Figma buttons use fontWeight 500 = medium
  const sizeMap = {
    11: "11-caption",
    12: "12-caption",
    13: "13-body",
    14: "14-body",
    16: "16-title",
  };
  const slug = sizeMap[fontSize] || `${fontSize}-body`;
  const prefix = `--typo-${slug}-${weightKey}`;
  return {
    fontSize: `var(${prefix}-font-size)`,
    fontWeight: `var(${prefix}-font-weight)`,
    lineHeight: `var(${prefix}-line-height)`,
    letterSpacing: `var(${prefix}-letter-spacing)`,
  };
}

// ── Style resolver ──

function resolveStyles({ styleType, color, strength, theme = "light" }) {
  const t = theme; // "light" or "dark"
  const isWeak = strength === -1;

  const base = { bg: "transparent", text: "inherit", border: "none", icon: "inherit" };

  if (color === "picker") {
    if (styleType === "fill") {
      if (isWeak) {
        base.bg = v("picker/button-weak-a");
        base.text = v("picker/button");
        base.icon = v("picker/button");
      } else {
        base.bg = v("picker/button");
        base.text = v("picker/on-button");
        base.icon = v("picker/on-button");
      }
    } else if (styleType === "outline") {
      base.border = isWeak
        ? `1px solid ${v("picker/button-weak-a")}`
        : `1px solid ${v("picker/button")}`;
      base.text = v("picker/button");
      base.icon = v("picker/button");
    } else {
      // clear & text
      base.text = v("picker/button");
      base.icon = v("picker/button");
    }
  } else if (color === "mono") {
    if (styleType === "fill") {
      if (isWeak) {
        base.bg = v("always/lightgrey015-a");
        base.text = v(`${t}/text/primary`);
        base.icon = v(`${t}/icon/primary`);
      } else {
        base.bg = v(`${t}/surface/form-inverted`);
        base.text = v(`${t}/text/invert-a`);
        base.icon = v(`${t}/icon/invert`);
      }
    } else if (styleType === "outline") {
      base.border = isWeak
        ? `1px solid ${v(`${t}/border/default-a`)}`
        : `1px solid ${v(`${t}/border/stronger`)}`;
      base.text = v(`${t}/text/primary-a`);
      base.icon = v(`${t}/icon/primary`);
    } else {
      // clear & text
      base.text = v(`${t}/text/primary-a`);
      base.icon = v(`${t}/icon/primary`);
    }
  } else if (color === "red") {
    if (styleType === "fill") {
      if (isWeak) {
        base.bg = v(`${t}/surface/form-red-weak-a`);
        base.text = v(`${t}/text/red`);
        base.icon = v(`${t}/icon/red`);
      } else {
        base.bg = v(`${t}/surface/form-red`);
        base.text = v("always/white100");
        base.icon = v("always/white100");
      }
    } else if (styleType === "outline") {
      base.border = isWeak
        ? `1px solid ${v(`${t}/border/red-weak-a`)}`
        : `1px solid ${v(`${t}/border/red`)}`;
      base.text = v(`${t}/text/red`);
      base.icon = v(`${t}/icon/red`);
    } else {
      // clear & text
      base.text = v(`${t}/text/red`);
      base.icon = v(`${t}/icon/red`);
      if (isWeak) base.opacity = 0.8;
    }
  }

  return base;
}

// ── Component ──

export default function Button({
  styleType = "fill",
  contentType = "text",
  size = 40,
  color = "picker",
  strength = 0,
  disabled = false,
  loading = false,
  multiLine = true,
  radius: radiusOverride,
  label = "Label",
  prefixIcon,
  suffixIcon,
  iconName = "default_plus_line",
  iconSize: iconSizeOverride,
  fullWidth = false,
  theme = "light",
  onClick,
  className,
  style: styleProp,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const isTouchRef = React.useRef(false);

  const sizeNum = typeof size === "string" ? parseInt(size, 10) : size;
  const config = SIZE_CONFIG[sizeNum] || SIZE_CONFIG[40];
  const colors = resolveStyles({ styleType, color, strength: typeof strength === "string" ? parseInt(strength, 10) : strength, theme });
  const typo = getTypoVars(config.fontSize);

  const isIconOnly = contentType === "icon";
  const isDisabled = disabled || loading;
  const finalRadius = radiusOverride !== undefined ? radiusOverride : config.radius;

  // Build style
  const buttonStyle = {
    // Reset
    appearance: "none",
    cursor: isDisabled ? "not-allowed" : "pointer",
    userSelect: "none",
    // Layout
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: config.gap,
    height: multiLine ? undefined : config.height,
    minHeight: multiLine ? config.height : undefined,
    minWidth: isIconOnly ? config.height : undefined,
    width: fullWidth ? "100%" : undefined,
    padding: isIconOnly
      ? `${config.py}px`
      : `${config.py}px ${config.px}px`,
    boxSizing: "border-box",
    // Visual
    background: colors.bg,
    border: colors.border,
    borderRadius: finalRadius,
    opacity: isDisabled ? 0.4 : (colors.opacity || 1),
    // Typography (CSS variable references)
    fontFamily: "var(--font-pretendard)",
    fontSize: typo.fontSize,
    fontWeight: typo.fontWeight,
    lineHeight: typo.lineHeight,
    letterSpacing: typo.letterSpacing,
    color: colors.text,
    whiteSpace: multiLine ? "normal" : "nowrap",
    // Transition
    transition: "all 0.15s ease",
    position: "relative",
    overflow: "hidden",
    ...styleProp,
  };

  // Hover/Active overlay
  const overlays = getOverlays(theme);
  const showOverlay = !isDisabled && (hovered || pressed);
  const overlayColor = pressed ? overlays.active : overlays.hover;

  // Loading spinner size
  const spinnerSize = Math.max(14, Math.round(config.iconSize * 0.85));

  return (
    <button
      className={className}
      style={buttonStyle}
      disabled={isDisabled}
      onClick={onClick}
      onMouseEnter={() => { if (!isTouchRef.current) setHovered(true); }}
      onMouseLeave={() => { setHovered(false); setPressed(false); isTouchRef.current = false; }}
      onMouseDown={() => { if (!isTouchRef.current) setPressed(true); }}
      onMouseUp={() => { if (!isTouchRef.current) setPressed(false); }}
      onTouchStart={() => { isTouchRef.current = true; setPressed(true); }}
      onTouchEnd={() => { setPressed(false); setHovered(false); }}
      onTouchCancel={() => { setPressed(false); setHovered(false); }}
      {...props}
    >
      {/* Hover/Active overlay (matches Figma press&hover rectangle) */}
      {showOverlay && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            background: overlayColor,
            borderRadius: "inherit",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Loading spinner */}
      {loading && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              width: spinnerSize,
              height: spinnerSize,
              border: `2px solid ${colors.text}`,
              borderTopColor: "transparent",
              borderRadius: "50%",
              animation: "btn-spin 0.6s linear infinite",
              opacity: 0.7,
            }}
          />
        </span>
      )}

      {/* Content — loading 시 투명 처리 (레이아웃 유지) */}
      <span style={{ display: "contents", visibility: loading ? "hidden" : "visible" }}>
        {isIconOnly ? (
          <Icon name={iconName} size={(iconSizeOverride || config.iconSize)} color={colors.icon} />
        ) : (
          <>
            {prefixIcon && (
              <Icon name={prefixIcon} size={(iconSizeOverride || config.iconSize)} color={colors.icon} />
            )}
            <span
              style={{
                position: "relative",
                padding: `0 ${config.gap > 0 ? 4 : 2}px`,
                overflow: multiLine ? undefined : "hidden",
                textOverflow: multiLine ? undefined : "ellipsis",
              }}
            >
              {label}
            </span>
            {suffixIcon && (
              <Icon name={suffixIcon} size={(iconSizeOverride || config.iconSize)} color={colors.icon} />
            )}
          </>
        )}
      </span>
    </button>
  );
}

Button.displayName = "Button";
