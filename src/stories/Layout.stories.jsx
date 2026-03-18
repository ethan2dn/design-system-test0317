import React from "react";
import { PageLayout, Section, useBreakpoint } from "../components/Layout";
import NavigationBar from "../components/NavigationBar";

export default {
  title: "Foundation/Layout",
};

// ── 레이아웃 스펙 문서 ──

const Cell = ({ children, header, mono, style }) => (
  <td
    style={{
      padding: "10px 16px",
      fontSize: 13,
      fontWeight: header ? 600 : 400,
      fontFamily: mono ? "monospace" : "Pretendard, sans-serif",
      borderBottom: "1px solid var(--color-light-border-default-a)",
      background: header ? "var(--color-light-surface-form-grey-weak-b)" : "transparent",
      color: "var(--color-light-text-primary)",
      ...style,
    }}
  >
    {children}
  </td>
);

const Tag = ({ children, color = "#333" }) => (
  <code
    style={{
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: 4,
      fontSize: 12,
      fontFamily: "monospace",
      background: "#f1f1f1",
      color,
    }}
  >
    {children}
  </code>
);

const SectionTitle = ({ children }) => (
  <h2 style={{ fontSize: 20, fontWeight: 700, margin: "40px 0 8px", fontFamily: "Pretendard, sans-serif" }}>
    {children}
  </h2>
);

const Desc = ({ children }) => (
  <p style={{ fontSize: 13, color: "#666", margin: "0 0 16px", fontFamily: "Pretendard, sans-serif" }}>
    {children}
  </p>
);

export const Spec = () => (
  <div style={{ padding: 32, maxWidth: 900, fontFamily: "Pretendard, sans-serif" }}>
    <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Layout System</h1>
    <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>
      b.spoke 디자인 시스템의 반응형 레이아웃 규칙입니다.
    </p>

    {/* Breakpoints */}
    <SectionTitle>Breakpoints</SectionTitle>
    <Desc>모바일 우선 접근. 801px 이상에서 데스크톱 스타일 활성화.</Desc>
    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24 }}>
      <thead>
        <tr>
          <Cell header>Key</Cell>
          <Cell header>Viewport</Cell>
          <Cell header>Description</Cell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "10px 16px" }}><Tag>mobile</Tag> (default)</td>
          <Cell mono>~800px</Cell>
          <Cell>기본 스타일. 모바일 우선 적용.</Cell>
        </tr>
        <tr>
          <td style={{ padding: "10px 16px" }}><Tag>desktop</Tag></td>
          <Cell mono>801px~</Cell>
          <Cell>데스크톱 유틸리티 클래스 활성화.</Cell>
        </tr>
      </tbody>
    </table>

    {/* Padding */}
    <SectionTitle>Padding Rules</SectionTitle>
    <Desc>디바이스별 수평 패딩. 전역이 아닌 모듈별 조건부 적용.</Desc>
    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24 }}>
      <thead>
        <tr>
          <Cell header>Device</Cell>
          <Cell header>Horizontal Padding</Cell>
          <Cell header>Application</Cell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "10px 16px" }}><Tag>mobile</Tag></td>
          <Cell mono>16px</Cell>
          <Cell>모듈별 조건부 적용</Cell>
        </tr>
        <tr>
          <td style={{ padding: "10px 16px" }}><Tag>desktop</Tag></td>
          <Cell mono>32px</Cell>
          <Cell>모듈별 조건부 적용</Cell>
        </tr>
      </tbody>
    </table>

    {/* Max Width */}
    <SectionTitle>Max Width Options (Desktop)</SectionTitle>
    <Desc>데스크톱에서 사용할 수 있는 최대 너비 옵션.</Desc>
    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 32 }}>
      <thead>
        <tr>
          <Cell header>Option</Cell>
          <Cell header>Max Width</Cell>
          <Cell header>Use Case</Cell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "10px 16px" }}><Tag color="#0a7">wide</Tag></td>
          <Cell mono>1080px</Cell>
          <Cell>대시보드, 리스트 페이지, 복잡한 레이아웃</Cell>
        </tr>
        <tr>
          <td style={{ padding: "10px 16px" }}><Tag color="#07a">narrow</Tag></td>
          <Cell mono>704px</Cell>
          <Cell>텍스트 위주 콘텐츠, 폼, 아티클</Cell>
        </tr>
        <tr>
          <td style={{ padding: "10px 16px" }}><Tag color="#a00">full</Tag></td>
          <Cell mono>100%</Cell>
          <Cell>히어로 섹션, 테이블, 배너</Cell>
        </tr>
      </tbody>
    </table>

    {/* Visual */}
    <SectionTitle>Max Width Visual</SectionTitle>
    <div style={{ background: "#f8f8f8", borderRadius: 8, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
      {[
        { label: "Wide (1080px)", width: 1080, color: "rgba(0,170,80,0.12)", border: "rgba(0,170,80,0.3)" },
        { label: "Narrow (704px)", width: 704, color: "rgba(0,120,200,0.12)", border: "rgba(0,120,200,0.3)" },
        { label: "Full (100%)", width: "100%", color: "rgba(200,0,0,0.08)", border: "rgba(200,0,0,0.3)" },
      ].map(({ label, width, color, border }) => (
        <div
          key={label}
          style={{
            maxWidth: width,
            width: "100%",
            margin: "0 auto",
            padding: "12px 0",
            background: color,
            border: `1px dashed ${border}`,
            borderRadius: 6,
            textAlign: "center",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {label}
        </div>
      ))}
    </div>
  </div>
);

Spec.storyName = "Spec";

// ── 라이브 데모: 네비바 + 섹션 조합 ──

export const LiveDemo = () => {
  const { isDesktop, device } = useBreakpoint();

  return (
    <PageLayout theme="light" style={{ minHeight: "100vh" }}>
      <NavigationBar
        type="home"
        device={device}
        theme="light"
        logoVariant="combi"
        stageName="b.spoke"
      />

      <div className="page-content" style={{ paddingTop: 24 }}>
        {/* Wide section */}
        <Section maxWidth="wide" padded>
          <div style={{
            background: "rgba(0,170,80,0.06)",
            border: "1px dashed rgba(0,170,80,0.3)",
            borderRadius: 8,
            padding: 24,
            marginBottom: 16,
            textAlign: "center",
          }}>
            <strong>wide</strong> — max-width: 1080px
            <br />
            <span style={{ fontSize: 13, color: "#888" }}>
              현재: {isDesktop ? "desktop" : "mobile"} / padding: {isDesktop ? "32px" : "16px"}
            </span>
          </div>
        </Section>

        {/* Narrow section */}
        <Section maxWidth="narrow" padded>
          <div style={{
            background: "rgba(0,120,200,0.06)",
            border: "1px dashed rgba(0,120,200,0.3)",
            borderRadius: 8,
            padding: 24,
            marginBottom: 16,
            textAlign: "center",
          }}>
            <strong>narrow</strong> — max-width: 704px
            <br />
            <span style={{ fontSize: 13, color: "#888" }}>텍스트 위주, 폼, 아티클에 적합</span>
          </div>
        </Section>

        {/* Full section */}
        <Section maxWidth="full" padded={false}>
          <div style={{
            background: "rgba(200,0,0,0.05)",
            border: "1px dashed rgba(200,0,0,0.3)",
            padding: 24,
            textAlign: "center",
          }}>
            <strong>full</strong> — 100% viewport width, no padding
            <br />
            <span style={{ fontSize: 13, color: "#888" }}>히어로 섹션, 배너에 적합</span>
          </div>
        </Section>

        {/* Wide section with content */}
        <Section maxWidth="wide" padded style={{ paddingTop: 24 }}>
          <div style={{
            background: "var(--color-light-surface-form-grey-weak-b)",
            borderRadius: 8,
            padding: 24,
          }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 16 }}>Content Example</h3>
            <p style={{ margin: 0, fontSize: 14, color: "var(--color-light-text-secondary-a)" }}>
              브라우저 창 크기를 조절하면 breakpoint(801px) 기준으로 패딩과 네비바가 반응합니다.
              wide 섹션은 최대 1080px, narrow는 704px로 제한됩니다.
            </p>
          </div>
        </Section>
      </div>
    </PageLayout>
  );
};

LiveDemo.storyName = "Live Demo";
LiveDemo.parameters = {
  layout: "fullscreen",
};
