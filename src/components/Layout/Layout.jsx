import React from "react";

/*
 * Layout — 페이지 레이아웃 래퍼 컴포넌트
 *
 * b.spoke 레이아웃 규칙 적용:
 *   - Breakpoint: 801px (mobile-first)
 *   - Padding: mobile 16px / desktop 32px (모듈별 조건부)
 *   - Max Width: wide(1080) / narrow(704) / full(100%)
 *
 * Usage:
 *   <PageLayout theme="light">
 *     <NavigationBar />
 *     <Section maxWidth="wide">
 *       <h1>Dashboard</h1>
 *     </Section>
 *     <Section maxWidth="full" padded={false}>
 *       <HeroBanner />
 *     </Section>
 *   </PageLayout>
 */

const v = (tokenName) => `var(--color-${tokenName.replace(/\//g, "-")})`;

const BREAKPOINT = 801;

// ── PageLayout: 최상위 페이지 래퍼 ──

export function PageLayout({
  theme = "light",
  children,
  style: styleProp,
  className,
}) {
  return (
    <div
      className={`page ${className || ""}`}
      style={{
        background: v(`${theme}/bg/base`),
        color: v(`${theme}/text/primary`),
        fontFamily: "var(--font-pretendard)",
        ...styleProp,
      }}
    >
      {children}
    </div>
  );
}

PageLayout.displayName = "PageLayout";

// ── Section: 콘텐츠 섹션 (패딩 + max-width 적용 단위) ──

const MAX_WIDTH_MAP = {
  wide: "var(--layout-max-width-wide)",
  narrow: "var(--layout-max-width-narrow)",
  full: "100%",
};

export function Section({
  maxWidth = "wide",
  padded = true,
  children,
  style: styleProp,
  className,
  as: Tag = "section",
}) {
  const maxWidthValue = MAX_WIDTH_MAP[maxWidth] || MAX_WIDTH_MAP.wide;
  const isFull = maxWidth === "full";

  return (
    <Tag
      className={`${padded ? "section-padded" : ""} ${className || ""}`}
      style={{
        maxWidth: isFull ? "100%" : maxWidthValue,
        marginLeft: isFull ? undefined : "auto",
        marginRight: isFull ? undefined : "auto",
        width: "100%",
        boxSizing: "border-box",
        ...styleProp,
      }}
    >
      {children}
    </Tag>
  );
}

Section.displayName = "Section";

// ── useBreakpoint: 반응형 훅 ──
// .page 컨테이너의 실제 너비를 기준으로 판단 (container query와 동기화)
// .page가 없으면 window.innerWidth 폴백

export function useBreakpoint() {
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== "undefined" ? window.innerWidth >= BREAKPOINT : false
  );

  React.useEffect(() => {
    const pageEl = document.querySelector(".page");

    if (pageEl) {
      // .page 컨테이너 너비 기준 (디버그 시뮬레이션 대응)
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setIsDesktop(entry.contentRect.width >= BREAKPOINT);
        }
      });
      ro.observe(pageEl);
      return () => ro.disconnect();
    } else {
      // 폴백: window 미디어 쿼리
      const mq = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);
      const handler = (e) => setIsDesktop(e.matches);
      mq.addEventListener("change", handler);
      setIsDesktop(mq.matches);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);

  return { isDesktop, isMobile: !isDesktop, device: isDesktop ? "pc" : "mobile" };
}

export default { PageLayout, Section, useBreakpoint };
