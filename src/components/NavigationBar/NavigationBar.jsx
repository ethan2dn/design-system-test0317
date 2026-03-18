import React, { useRef, useEffect, useState } from "react";
import Icon from "../../icons/Icon";
import Button from "../Button";

/*
 * Navigation Top Bar
 *
 * GNB Types:
 *   home     — Main page: logo + (PC: nav menu) + right icons
 *   view     — Detail page with icon actions: back + home + right icons
 *   utility  — Detail page with button actions: back + (sub btn + action btn)
 *
 * Responsive:
 *   mobile (default) — compact layout
 *   pc               — wider layout with navigation menu
 *
 * Theme: light | dark (passed to Button children)
 *
 * All colors reference CSS custom properties from tokens.css.
 */

const v = (tokenName) => `var(--color-${tokenName.replace(/\//g, "-")})`;

// ── Logo sizing specs (from Figma guide) ──
const LOGO_SPECS = {
  mobile: { maxWidth: 72, height: 28, padding: "6px 8px" },
  pc:     { maxWidth: 96, height: 32, padding: "6px 8px" },
};

// ── Logo image renderer ──
function LogoImage({ src, device = "mobile" }) {
  const spec = LOGO_SPECS[device] || LOGO_SPECS.mobile;
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: spec.padding,
      flexShrink: 0,
    }}>
      <img
        src={src}
        alt="logo"
        style={{
          display: "block",
          maxWidth: spec.maxWidth,
          height: spec.height,
          objectFit: "contain",
        }}
      />
    </div>
  );
}

// ── Logo variants ──

function Logo({ variant = "logo", stageName = "STAGENAME", theme = "light", logoImage, device = "mobile" }) {
  const textColor = v(`${theme}/text/primary`);

  // text variant: always text only
  if (variant === "text") {
    return (
      <span style={{
        fontSize: 16, fontWeight: 700, color: textColor, fontFamily: "var(--font-pretendard)",
        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
      }}>
        {stageName}
      </span>
    );
  }

  // logo variant
  if (variant === "logo") {
    if (logoImage) {
      return <LogoImage src={logoImage} device={device} />;
    }
    return (
      <span style={{ fontSize: 20, fontWeight: 800, color: textColor, letterSpacing: -0.5, fontFamily: "var(--font-pretendard)" }}>
        LOGO
      </span>
    );
  }

  // combi variant
  if (variant === "combi") {
    return (
      <span style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
        {logoImage ? (
          <LogoImage src={logoImage} device={device} />
        ) : (
          <span style={{ fontSize: 20, fontWeight: 800, color: textColor, letterSpacing: -0.5, fontFamily: "var(--font-pretendard)", flexShrink: 0 }}>
            LOGO
          </span>
        )}
        <span style={{
          fontSize: 13, fontWeight: 600, color: v(`${theme}/text/secondary-a`), fontFamily: "var(--font-pretendard)",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>
          {stageName}
        </span>
      </span>
    );
  }

  return null;
}

// ── Icon Button with optional badge ──

function NavIconButton({ iconName, size = 24, theme = "light", badge, badgeCount = 9, onClick }) {
  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      <Button
        styleType="clear"
        contentType="icon"
        size={40}
        color="mono"
        strength={0}
        iconName={iconName}
        iconSize={24}
        theme={theme}
        onClick={onClick}
      />
      {badge === "new" && (
        <span
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: v(`${theme}/surface/form-red`),
            pointerEvents: "none",
          }}
        />
      )}
      {badge === "count" && (
        <CountBadge count={badgeCount} theme={theme} />
      )}
    </div>
  );
}

// ── Count Badge (auto-scales when text overflows) ──

function CountBadge({ count = 9, theme = "light" }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scale, setScale] = useState(1);
  const SIZE = 18;

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth;
      if (textWidth > SIZE - 4) {
        setScale((SIZE - 4) / textWidth);
      } else {
        setScale(1);
      }
    }
  }, [count]);

  return (
    <span
      ref={containerRef}
      style={{
        position: "absolute",
        top: 4,
        right: 0,
        width: SIZE,
        height: SIZE,
        borderRadius: "50%",
        background: v(`${theme}/surface/form-red`),
        color: v("always/white100"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <span
        ref={textRef}
        style={{
          fontFamily: "var(--font-pretendard)",
          fontSize: "var(--typo-11-caption-semibold-font-size)",
          fontWeight: "var(--typo-11-caption-semibold-font-weight)",
          lineHeight: "var(--typo-11-caption-semibold-line-height)",
          letterSpacing: "var(--typo-11-caption-semibold-letter-spacing)",
          whiteSpace: "nowrap",
          transform: `scale(${scale})`,
          transformOrigin: "center",
        }}
      >
        {count}
      </span>
    </span>
  );
}

// ── Avatar (login state: profile image inside 40×40 clear button area) ──

function NavAvatar({ profileImage, theme = "light", device = "mobile", onClick }) {
  const isPc = device === "pc";
  const avatarSize = isPc ? 32 : 28;
  const containerWidth = isPc ? 48 : 44;
  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: containerWidth,
        height: 40,
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderRadius: 6,
      }}
    >
      <div
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: "50%",
          background: v(`${theme}/surface/form-grey-weak-a`),
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <img
          src={profileImage}
          alt="profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </button>
  );
}

// ── PC Nav Menu Item (with hover) ──

function NavMenuItem({ label, active, theme }) {
  const [hovered, setHovered] = useState(false);
  const textColor = v(`${theme}/text/secondary-a`);
  const activeColor = v(`${theme}/text/primary`);
  const hoverBg = v("always/lightgrey010-a");

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchEnd={() => setHovered(false)}
      onTouchCancel={() => setHovered(false)}
      style={{
        fontSize: 14,
        fontWeight: active ? 700 : 400,
        color: active || hovered ? activeColor : textColor,
        padding: "6px 8px",
        cursor: "pointer",
        borderRadius: 6,
        fontFamily: "var(--font-pretendard)",
        whiteSpace: "nowrap",
        transition: "color 0.15s, background 0.15s",
        background: hovered ? hoverBg : "transparent",
      }}
    >
      {label}
    </span>
  );
}

// ── Nav Scroll Arrow Button ──

function NavScrollArrow({ direction, theme, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 40,
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        flexShrink: 0,
        color: v(`${theme}/icon/grey`),
      }}
      aria-label={`Scroll menu ${direction}`}
    >
      <Icon
        name={direction === "left" ? "default_angleTallLeft_line" : "default_angleTallRight_line"}
        size={16}
        color="currentColor"
      />
    </button>
  );
}

// ── PC Nav Menu (scrollable, arrows rendered externally) ──

function NavMenu({ items = [], activeItem = "Home", theme = "light", onScrollState }) {
  const scrollRef = useRef(null);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const left = el.scrollLeft > 1;
    const right = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
    onScrollState?.({ canScrollLeft: left, canScrollRight: right });
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  // Expose scroll function via ref attribute on the nav element
  return (
    <nav
      data-nav-menu
      style={{ display: "flex", alignItems: "center", flex: 1, minWidth: 0, overflow: "hidden" }}
    >
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          flex: 1,
          overflow: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {items.map((item) => (
          <NavMenuItem key={item} label={item} active={item === activeItem} theme={theme} />
        ))}
      </div>
    </nav>
  );

  // Static method won't work here, so we use a different pattern below
}


// ── PC Home Content (arrows in gaps) ──

function PcHomeContent({ logoVariant, stageName, theme, menuItems, activeMenuItem, rightIcons, device, logoImage }) {
  const [scrollState, setScrollState] = useState({ canScrollLeft: false, canScrollRight: false });
  const menuWrapRef = useRef(null);

  const scroll = (dir) => {
    if (!menuWrapRef.current) return;
    const scrollEl = menuWrapRef.current.querySelector("[data-nav-menu] > div");
    if (scrollEl) scrollEl.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <>
      {/* Left: Logo (hug) */}
      <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <Logo variant={logoVariant} stageName={stageName} theme={theme} logoImage={logoImage} device={device} />
      </div>

      {/* Left gap: 24px spacer or left scroll arrow (24px) */}
      <div style={{ width: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {scrollState.canScrollLeft && (
          <NavScrollArrow direction="left" theme={theme} onClick={() => scroll(-1)} />
        )}
      </div>

      {/* Center: Nav menu (fill, no internal arrows) */}
      <div ref={menuWrapRef} style={{ flex: 1, minWidth: 0 }}>
        <NavMenu items={menuItems} activeItem={activeMenuItem} theme={theme} onScrollState={setScrollState} />
      </div>

      {/* Right gap: 24px spacer or right scroll arrow (24px) */}
      <div style={{ width: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {scrollState.canScrollRight && (
          <NavScrollArrow direction="right" theme={theme} onClick={() => scroll(1)} />
        )}
      </div>

      {/* Right: Icons (hug) */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        {rightIcons.map((item, i) => (
          <RightSlotItem key={i} item={item} theme={theme} device={device} />
        ))}
      </div>
    </>
  );
}

// ── Right slot renderer ──

function RightSlotItem({ item, theme, device }) {
  // Avatar slot
  if (item.type === "avatar") {
    if (item.loggedIn && item.profileImage) {
      return <NavAvatar profileImage={item.profileImage} theme={theme} device={device} />;
    }
    // Logged out: icon button with gnb_my_line
    return <NavIconButton iconName="gnb_my_line" theme={theme} />;
  }
  // Normal icon slot
  return (
    <NavIconButton
      iconName={item.icon}
      size={24}
      theme={theme}
      badge={item.badge}
      badgeCount={item.badgeCount}
    />
  );
}

// ── Main Component ──

const DEFAULT_MENU = ["Home", "Story", "POP", "Contents", "Shop", "Community"];

const DEFAULT_RIGHT_ICONS = [
  { icon: "gnb_notification_line", badge: "new" },
  { icon: "default_calendar_line", badge: null },
  { icon: "gnb_cart_line", badge: "count", badgeCount: 9 },
  { type: "avatar", loggedIn: false },
];

export default function NavigationBar({
  // GNB type
  type = "home",
  // Responsive
  device = "mobile",
  // Theme
  theme = "light",
  // Layout (PC only): "wide" (max-width 1080px) | "full" (100%)
  layout = "wide",
  // Logo
  logoVariant = "logo",
  stageName = "STAGENAME",
  logoImage,
  // Nav menu (PC)
  menuItems = DEFAULT_MENU,
  activeMenuItem = "Home",
  // Right icon buttons (home & view types)
  rightIcons = DEFAULT_RIGHT_ICONS,
  // Utility type buttons
  subButtonLabel = "Sub",
  actionButtonLabel = "Action",
  showSubButton = true,
  showActionButton = true,
  // Border
  showBorder = true,
  // Style
  style: styleProp,
  className,
}) {
  const isPc = device === "pc";
  const t = theme;
  const isWide = isPc && layout === "wide";

  const bgColor = v(`${t}/bg/base`);
  const borderColor = v(`${t}/border/default-a`);

  // outer wrapper: full-width bg + border
  const outerStyle = {
    width: "100%",
    background: bgColor,
    borderBottom: showBorder ? `1px solid ${borderColor}` : "none",
    fontFamily: "var(--font-pretendard)",
    position: "relative",
    ...styleProp,
  };

  // inner: the actual flex row (may be max-width constrained)
  const barStyle = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: isPc ? 72 : 48,
    padding: isPc ? "8px 32px" : "4px 8px",
    boxSizing: "border-box",
    ...(isWide && {
      maxWidth: "var(--layout-max-width-wide, 1080px)",
      marginLeft: "auto",
      marginRight: "auto",
    }),
  };

  // ── Render helper: wraps inner bar with outer (bg/border) ──
  const renderBar = (innerContent, extraBarStyle) => (
    <div className={className} style={outerStyle}>
      <div style={{ ...barStyle, ...extraBarStyle }}>
        {innerContent}
      </div>
    </div>
  );

  // ── HOME type ──
  if (type === "home") {
    return renderBar(
      isPc ? (
        <PcHomeContent
          logoVariant={logoVariant}
          stageName={stageName}
          theme={t}
          menuItems={menuItems}
          activeMenuItem={activeMenuItem}
          rightIcons={rightIcons}
          device={device}
          logoImage={logoImage}
        />
      ) : (
        <>
          {/* Mobile: hamburger + logo (fill) */}
          <div style={{ display: "flex", alignItems: "center", gap: 0, flex: 1, minWidth: 0, overflow: "hidden" }}>
            <NavIconButton iconName="gnb_menu_line" size={24} theme={t} />
            <Logo variant={logoVariant} stageName={stageName} theme={t} logoImage={logoImage} device={device} />
          </div>

          {/* Mobile: right icons (hug) */}
          <div style={{ display: "flex", alignItems: "center", gap: 0, flexShrink: 0 }}>
            {rightIcons.map((item, i) => (
              <RightSlotItem key={i} item={item} theme={t} device={device} />
            ))}
          </div>
        </>
      ),
      { gap: isPc ? 0 : 8 }
    );
  }

  // ── VIEW type ──
  if (type === "view") {
    return renderBar(
      <>
        {/* Left */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, flexShrink: 0 }}>
          <NavIconButton iconName="gnb_backAngle_line" size={24} theme={t} />
          <NavIconButton iconName="gnb_home_line" size={24} theme={t} />
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Right icons */}
        <div style={{ display: "flex", alignItems: "center", gap: isPc ? 8 : 0 }}>
          {rightIcons.map((item, i) => (
            <RightSlotItem key={i} item={item} theme={t} device={device} />
          ))}
        </div>
      </>
    );
  }

  // ── UTILITY type ──
  if (type === "utility") {
    return renderBar(
      <>
        {/* Left: Back */}
        <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <NavIconButton iconName="gnb_backAngle_line" size={24} theme={t} />
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Right: Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {showSubButton && (
            <Button
              styleType="text"
              color="mono"
              size={32}
              label={subButtonLabel}
              theme={t}
            />
          )}
          {showActionButton && (
            <Button
              styleType="fill"
              color="picker"
              size={32}
              label={actionButtonLabel}
              theme={t}
            />
          )}
        </div>
      </>
    );
  }

  return null;
}

NavigationBar.displayName = "NavigationBar";
