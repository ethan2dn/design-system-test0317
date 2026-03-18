---
name: 페이지 마크업 기본 프로세스
description: 새 페이지 마크업 시 반드시 따라야 할 규칙 — 토큰, 컴포넌트, 반응형, 디버그 패널, 확인 질문 기준
type: feedback
---

페이지 마크업 시 아래 규칙을 반드시 따른다.

## 디자인 토큰 필수 사용
- **타이포**: `--typo-*` CSS 변수만 사용. 하드코딩 금지.
- **컬러**: `--color-*` CSS 변수만 사용. 하드코딩 금지.
- **아이콘**: `Icon` 컴포넌트 + 기존 등록된 아이콘만 사용.
- 피그마에서 토큰이 적용되지 않은 부분이 발견되면 → **마크업 전에 사용자에게 질문**하고 진행.
- 피그마에서 기존 등록된 아이콘과 동일한 토큰의 아이콘이 없으면 → **마크업 전에 사용자에게 질문**.

## 기존 컴포넌트 우선 활용
- NavigationBar, Button, Icon, Layout(PageLayout, Section, useBreakpoint) 등 이미 만든 컴포넌트를 반드시 활용.
- 컴포넌트가 있는데 하드코딩으로 다시 만들지 않는다.

## 반응형 필수
- 모든 페이지는 반응형. `useBreakpoint()` 사용.
- 레이아웃 규칙 참고: breakpoint 801px, 모바일 패딩 16px, PC 패딩 32px.
- `PageLayout` + `Section` 컴포넌트 사용.
- PC 레이아웃 콘텐츠 타입(wide 1080px / narrow 704px / full 100%)은 페이지별로 다를 수 있으므로 → **불확실하면 사용자에게 확인 질문**.

### 패딩 규칙 — 절대 직접 패딩을 하드코딩하지 않는다
- 수평 패딩은 반드시 `Section padded` 또는 `.section-padded` 클래스로 적용.
- **모바일(~800px): 16px**, **PC(801px~): 32px** — CSS 변수 `--layout-padding-mobile` / `--layout-padding-desktop`로 자동 전환.
- `layout.css`에 container query(`@container page`)가 설정되어 있어 디버그 Viewport Width 시뮬레이션에서도 컨테이너 실제 너비 기준으로 패딩이 정확히 전환됨.
- `useBreakpoint()`도 `.page` 컨테이너의 실제 너비를 `ResizeObserver`로 감지하므로, 디버그에서 너비를 바꾸면 네비바 device 전환도 정확히 동작함.

## 하단 액션버튼 영역
- 많은 페이지에서 하단에 CTA 버튼 영역이 고정(`position: sticky; bottom: 0`)으로 붙는 패턴이 반복됨.
- 상단 보더: `1px solid always/black006-a`, 배경: `{theme}/surface/display-bar-bottom`.
- 수평 패딩: `.section-padded` 클래스 사용 (모바일 16px / PC 32px 자동 전환).
- **하단 패딩은 모바일/PC가 다를 수 있음**: 모바일 16px, PC 40px. `useBreakpoint()`의 `isDesktop`으로 분기.
- max-width는 해당 페이지의 콘텐츠 타입(narrow/wide)에 맞춤.
- 버튼 개수(1개/2개 등)는 시나리오에 따라 다르므로 디버그 패널에서 전환 가능하게 구성.

## 네비바 기본 설정
- `layout` 기본값: `"wide"` (1080px). full은 예외 케이스.
- 우측 아이콘 기본: 알림, 캘린더, 장바구니, 마이페이지 순서.
- `showBorder` prop으로 보더 유무 제어 가능.

## 디버그 패널
- 모든 마크업 페이지에 디버그 패널 기본 포함.
- **우하단 플로팅 레이어** 형태, 드래그 이동 가능, 접었다 펼 수 있게.
- 현재 컨테이너 너비 + Mobile/PC 상태 실시간 표시.
- 다크/라이트 모드 전환.
- 해당 페이지의 시나리오별 상태 전환 (페이지마다 다름).
- 동적 데이터가 있으면 목업 데이터로 랜덤 생성 + 건수 조절 가능.
- **Viewport Width 시뮬레이션**: 360/375/402/800/801/1080/Full/직접입력 프리셋. 컨테이너 너비를 제한하여 반응형 전환을 실제로 확인 가능.

## 독립 웹페이지 + 스토리북
- `src/pages/` 에 페이지 컴포넌트 생성.
- `src/stories/` 에 스토리 파일 생성 (Playground 포함).
- `src/main.jsx` 에서 독립 웹페이지로도 확인 가능하게.

**Why:** 피그마 → 토큰 → 컴포넌트 → 마크업 파이프라인의 일관성 유지. 토큰/컴포넌트 미사용 시 디자인 시스템의 의미가 없어짐.
**How to apply:** 새 페이지 마크업 시작 전 이 규칙 체크. 불확실한 부분은 마크업 전에 반드시 질문.