import React, { useState, useRef, useEffect } from "react";
import lottie from "lottie-web";
import Icon from "../icons/Icon";
import Button from "../components/Button";
import NavigationBar from "../components/NavigationBar";
import { PageLayout, Section, useBreakpoint } from "../components/Layout";
import defaultProfile from "../assets/default-profile/star.png";
import defaultThumbnail from "../assets/default-profile/thumbnail_default.png";
import lottieCheckLight from "../assets/lottie/thankyou-check-light.json";
import lottieCheckDark from "../assets/lottie/thankyou-check-dark.json";
import { t, tRich } from "../i18n";

/*
 * ThankYouPage — 주문 완료(땡큐) 페이지
 *
 * Figma: [P1] 땡큐 (node-id 36627:73452)
 * File: MvyrswCEjSXrECmOx6Af2d (🔴Shop)
 *
 * Scenarios:
 *   - 기본 (Standard): 2 bottom buttons
 *   - konbini: payment deadline notice + 1 bottom button
 *   - Product count: 1건 / N건
 *   - Theme: light / dark
 */

const v = (tokenName) => `var(--color-${tokenName.replace(/\//g, "-")})`;

// ── Mock Data Generator ──

// 디폴트 썸네일 (상품 이미지 없을 때)
export { defaultThumbnail };

const MOCK_PRODUCTS = [
  {
    title: "2026 T1 Membership [연간권]",
    option: "연간권",
    price: 118100,
    qty: 1,
    thumbnail: "https://picsum.photos/seed/t1mem/128/128",
  },
  {
    title: "[MD] ATEEZ GOLDEN HOUR MINI PHOTOCARD",
    option: "ver.A / 1개",
    price: 12000,
    qty: 2,
    thumbnail: "https://picsum.photos/seed/ateez/128/128",
  },
  {
    title: "2026 T1 Championship 프리미엄 시트",
    option: "3인권 / 1개월 이용",
    price: 89000,
    qty: 1,
    thumbnail: "https://picsum.photos/seed/t1seat/128/128",
  },
  {
    title: "[DVD] SEVENTEEN TOUR 'FOLLOW' AGAIN",
    option: "일반판 / 포토카드 A ver.",
    price: 38000,
    qty: 1,
    thumbnail: "https://picsum.photos/seed/svtdvd/128/128",
  },
  {
    title: "BTS WORLD TOUR 공식 응원봉 ver.4",
    option: "한정판",
    price: 45000,
    qty: 1,
    thumbnail: "https://picsum.photos/seed/btslb/128/128",
  },
  {
    title: "IVE THE 1ST WORLD TOUR 포스터 세트",
    option: "A+B 세트 / 한정판",
    price: 22000,
    qty: 3,
    thumbnail: "https://picsum.photos/seed/iveset/128/128",
  },
];

function generateMockProducts(count) {
  const products = [];
  for (let i = 0; i < count; i++) {
    const base = MOCK_PRODUCTS[i % MOCK_PRODUCTS.length];
    products.push({ ...base, id: i });
  }
  return products;
}

function formatPrice(n) {
  return n.toLocaleString("ko-KR");
}

// ── Typography helpers ──

function typo(size, category, weight) {
  const prefix = `--typo-${size}-${category}-${weight}`;
  return {
    fontSize: `var(${prefix}-font-size)`,
    fontWeight: `var(${prefix}-font-weight)`,
    lineHeight: `var(${prefix}-line-height)`,
    letterSpacing: `var(${prefix}-letter-spacing)`,
  };
}

// ── Sub-components ──

// GNB: NavigationBar type="view" 컴포넌트 활용
const GNB_RIGHT_ICONS = [
  { icon: "gnb_notification_line", badge: "new" },
  { icon: "default_calendar_line", badge: null },
  { icon: "gnb_cart_line", badge: "count", badgeCount: 3 },
  { type: "avatar", loggedIn: true, profileImage: defaultProfile },
];

function LottieCheck({ theme }) {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const icon = iconRef.current;
    if (!container || !icon) return;

    // 아이콘 숨기고 로티 보이기
    icon.style.opacity = "0";
    container.style.opacity = "1";

    const animData = theme === "dark" ? lottieCheckDark : lottieCheckLight;
    const anim = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animData,
    });
    animRef.current = anim;

    const cutFrame = Math.floor(anim.totalFrames * 0.4);
    anim.addEventListener("enterFrame", (e) => {
      if (e.currentTime >= cutFrame) {
        // 로티 숨기고 아이콘 표시 (DOM 직접 조작, React 리렌더 없음)
        container.style.opacity = "0";
        icon.style.opacity = "1";
        anim.stop();
      }
    });

    return () => anim.destroy();
  }, [theme]);

  return (
    <div style={{ position: "relative", width: 64, height: 64 }}>
      {/* 로티 */}
      <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />
      {/* 정적 아이콘 (항상 DOM에 존재, opacity로 제어) */}
      <div
        ref={iconRef}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          name="thankyou_check"
          size={64}
          color={v(`${theme}/text/primary`)}
        />
      </div>
    </div>
  );
}

function SuccessHeader({ theme, lang = "ko" }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 16,
      }}
    >
      {/* title 프레임: 아이콘 + gap 4 + 타이틀 + paddingBottom 24 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          paddingBottom: 24,
          width: "100%",
        }}
      >
        <LottieCheck theme={theme} />
        <span
          style={{
            ...typo(20, "title", "semibold"),
            color: v(`${theme}/text/primary`),
            textAlign: "center",
          }}
        >
          {t("S03000", lang)}
        </span>
      </div>
    </div>
  );
}

function KonbiniNotice({ theme, hasPaymentLink = false, lang = "ko" }) {
  const descCode = hasPaymentLink ? "S02793" : "S02703";

  const descContent = hasPaymentLink
    ? tRich(descCode, lang, {
        0: (text) => (
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{ color: v(`${theme}/text/blue`), textDecoration: "none" }}
          >
            {text}
          </a>
        ),
      })
    : t(descCode, lang);

  return (
    <div
      style={{
        background: v(`${theme}/bg/blue-grey`),
        borderRadius: 8,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <span
        style={{
          ...typo(15, "body", "semibold"),
          color: v(`${theme}/text/blue`),
        }}
      >
        {t("S02702", lang, { str1: "2023.02.18. 오후 11:59" })}
      </span>
      <span
        style={{
          ...typo(13, "body", "reg"),
          color: v("always/lightgrey100"),
        }}
      >
        {descContent}
      </span>
    </div>
  );
}

function ProductThumbnail({ src, theme, showBadge, badgeCount }) {
  return (
    <div
      style={{
        position: "relative",
        width: 64,
        height: 64,
        flexShrink: 0,
        borderRadius: 6,
        border: `1px solid ${v("always/black006-a")}`,
        overflow: "hidden",
        background: v(`${theme}/bg/grouped-weak`),
      }}
    >
      <img
        src={src}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {showBadge && (
        <div
          style={{
            position: "absolute",
            bottom: 4,
            right: 4,
            minWidth: 18,
            height: 18,
            borderRadius: 999,
            background: v("always/grey085"),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 3px",
            boxSizing: "border-box",
            ...typo(12, "caption", "semibold"),
            color: v("always/white100"),
          }}
        >
          {badgeCount}
        </div>
      )}
    </div>
  );
}

function OrderCard({ products, theme, showPoints = true, thumbnailOverride }) {
  const isMultiple = products.length > 1;
  const totalPrice = products.reduce((s, p) => s + p.price * p.qty, 0);
  const pointsEarned = Math.floor(totalPrice * 0.02);
  const thumbSrc = thumbnailOverride || products[0].thumbnail;
  const [pressed, setPressed] = useState(false);
  const isTouchRef = useRef(false);

  return (
    <div
      onClick={() => {/* TODO: 주문 상세 페이지 이동 */}}
      onMouseEnter={() => { if (!isTouchRef.current) setPressed(true); }}
      onMouseLeave={() => { setPressed(false); isTouchRef.current = false; }}
      onTouchStart={() => { isTouchRef.current = true; setPressed(true); }}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      style={{
        background: v(`${theme}/surface/card`),
        borderRadius: 12,
        border: `1px solid ${v(`${theme}/border/default-a`)}`,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hover/Touch overlay */}
      {pressed && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            background: v("always/lightgrey006-a"),
            borderRadius: "inherit",
            pointerEvents: "none",
          }}
        />
      )}
      {/* Header: "주문상품 N건" + angleSmallRight */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 32,
          cursor: "pointer",
        }}
      >
        <span style={{ ...typo(14, "body", "semibold"), color: v(`${theme}/text/primary`) }}>
          주문상품 {products.length}건
        </span>
        <Icon
          name="default_angleSmallRight_line"
          size={24}
          color={v(`${theme}/icon/secondary-a`)}
        />
      </div>

      {/* Summary: thumbnail + item info */}
      <div style={{ display: "flex", gap: 12 }}>
        <ProductThumbnail
          src={thumbSrc}
          theme={theme}
          showBadge={isMultiple}
          badgeCount={products.length}
        />
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {/* 상품명 */}
          <span
            style={{
              ...typo(13, "body", "reg"),
              color: v(`${theme}/text/secondary`),
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {products[0].title}
            {isMultiple ? " 외" : ""}
          </span>
          {/* 가격 + 적립 (같은 행) */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span
              style={{
                ...typo(16, "title", "semibold"),
                color: v(`${theme}/text/primary`),
              }}
            >
              {isMultiple ? "총 " : ""}
              {formatPrice(totalPrice)}원
            </span>
            {showPoints && (
              <span
                style={{
                  ...typo(12, "caption", "med"),
                  color: v(`${theme}/text/blue`),
                }}
              >
                +{formatPrice(pointsEarned)}P 적립예정
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ADDITIONAL_INFO_ITEMS = [
  "구매확정 이후 청약철회가 불가합니다.",
  "정기결제 상품의 경우, 최초 결제 이후 결제분부터는 사용 여부 및 결제 시기에 관계 없이 청약철회가 불가합니다.",
  "구매한 상품에 적립 예정 포인트가 있는 경우, 구매 확정 시 포인트가 적립됩니다.",
];

function AdditionalInfo({ theme }) {
  const textStyle = {
    ...typo(12, "caption", "reg"),
    color: v(`${theme}/text/quaternary`),
  };

  return (
    <ul
      style={{
        padding: "8px 0",
        margin: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {ADDITIONAL_INFO_ITEMS.map((text, i) => (
        <li
          key={i}
          style={{
            ...textStyle,
            display: "flex",
            gap: 4,
          }}
        >
          <span style={{ flexShrink: 0 }}>&bull;</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

function ActionButtons({ theme, singleButton = false, isDesktop = false, lang = "ko" }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: v(`${theme}/surface/display-bar-bottom`),
        borderTop: `1px solid ${v("always/black006-a")}`,
      }}
    >
      <div
        className="section-padded"
        style={{
          maxWidth: "var(--layout-max-width-narrow)",
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: singleButton ? 0 : 8,
            paddingTop: 16,
            paddingBottom: isDesktop ? 40 : 16,
          }}
        >
          {singleButton ? (
            <Button
              styleType="fill"
              color="picker"
              size={48}
              label={t("S00664", lang)}
              theme={theme}
              fullWidth
            />
          ) : (
            <>
              <Button
                styleType="outline"
                color="mono"
                size={48}
                label={t("S00664", lang)}
                theme={theme}
                fullWidth
              />
              <Button
                styleType="fill"
                color="picker"
                size={48}
                label={t("B00050", lang)}
                theme={theme}
                fullWidth
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──

export default function ThankYouPage({
  theme = "light",
  lang = "ko",
  isKonbini = false,
  hasPaymentLink = false,
  singleButton = false,
  productCount = 1,
  showPoints = true,
  thumbnailType = "sample", // "sample" | "default"
}) {
  const products = generateMockProducts(productCount);
  const thumbOverride = thumbnailType === "default" ? defaultThumbnail : undefined;
  const { device, isDesktop } = useBreakpoint();

  // GNB 높이: 모바일 48px, PC 72px
  const gnbHeight = isDesktop ? 72 : 48;
  // 하단 버튼 높이: 버튼 48 + 패딩 상16 + 패딩 하(모바일16/PC40) + 보더1
  const actionHeight = 48 + 16 + (isDesktop ? 40 : 16) + 1;

  return (
    <PageLayout theme={theme}>
      {/* GNB — fixed 상단 */}
      <NavigationBar
        type={isDesktop ? "home" : "view"}
        device={device}
        theme={theme}
        showBorder={false}
        rightIcons={GNB_RIGHT_ICONS}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      />

      {/* Content — 자연스러운 스크롤, GNB/하단버튼 영역만큼 패딩 */}
      <div style={{ paddingTop: gnbHeight, paddingBottom: actionHeight + 40 }}>
        <Section maxWidth="narrow" padded>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {/* Success header */}
            <SuccessHeader theme={theme} lang={lang} />

            {/* Konbini notice (탑/카드와 형제 레벨) */}
            {isKonbini && <KonbiniNotice theme={theme} hasPaymentLink={hasPaymentLink} lang={lang} />}

            {/* Order card */}
            <OrderCard
              products={products}
              theme={theme}
              showPoints={showPoints}
              thumbnailOverride={thumbOverride}
            />

            {/* Additional info */}
            <AdditionalInfo theme={theme} />
          </div>
        </Section>
      </div>

      {/* Bottom action buttons — fixed 하단 */}
      <ActionButtons theme={theme} singleButton={singleButton} isDesktop={isDesktop} lang={lang} />
    </PageLayout>
  );
}

ThankYouPage.displayName = "ThankYouPage";
