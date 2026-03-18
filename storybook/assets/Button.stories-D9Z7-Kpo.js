import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-DdVQmNx-.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{n as i,r as a,t as o}from"./Icon-DAgfyIM6.js";import{n as s,t as c}from"./Button-Dphg_IYZ.js";function l({title:e,children:t}){return(0,b.jsxs)(`div`,{style:{marginBottom:32},children:[(0,b.jsx)(`h3`,{style:{fontSize:13,fontWeight:700,textTransform:`uppercase`,letterSpacing:2,color:`var(--color-light-text-quaternary)`,marginBottom:14,paddingBottom:6,borderBottom:`1px solid var(--color-light-border-divider-weaker)`,fontFamily:`Pretendard, sans-serif`},children:e}),t]})}function u({label:e,active:t,onClick:n}){return(0,b.jsx)(`button`,{onClick:n,style:{padding:`4px 12px`,borderRadius:99,border:t?`1.5px solid var(--color-light-border-stronger)`:`1px solid var(--color-light-border-default-a)`,background:t?`var(--color-light-surface-form-inverted)`:`var(--color-light-bg-base)`,color:t?`var(--color-light-bg-base)`:`var(--color-light-text-tertiary)`,fontSize:12,fontWeight:t?600:400,cursor:`pointer`,fontFamily:`Pretendard, sans-serif`,transition:`all 0.12s`},children:e})}function d({label:e,children:t}){return(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:14},children:[(0,b.jsx)(`span`,{style:{width:90,fontSize:12,fontWeight:600,color:`var(--color-light-text-quaternary)`,fontFamily:k,flexShrink:0,textAlign:`right`},children:e}),(0,b.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,alignItems:`center`},children:t})]})}function f({name:e,active:t,onClick:n}){return(0,b.jsx)(`button`,{onClick:n,title:e||`none`,style:{width:32,height:32,borderRadius:6,border:t?`1.5px solid var(--color-light-border-stronger)`:`1px solid var(--color-light-border-default-a)`,background:t?`var(--color-light-bg-grouped-strong)`:`var(--color-light-bg-base)`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:0},children:e?(0,b.jsx)(a,{name:e,size:18,color:t?`var(--color-light-text-primary)`:`var(--color-light-text-quaternary)`}):(0,b.jsx)(`span`,{style:{fontSize:14,color:`var(--color-light-border-grey-weak-a)`},children:`∅`})})}function p(){let[e,t]=(0,y.useState)(`fill`),[n,r]=(0,y.useState)(`text`),[i,a]=(0,y.useState)(40),[o,c]=(0,y.useState)(`picker`),[l,p]=(0,y.useState)(0),[m,h]=(0,y.useState)(!1),[g,_]=(0,y.useState)(`Button`),[v,x]=(0,y.useState)(``),[S,C]=(0,y.useState)(``),[w,T]=(0,y.useState)(`default_plus_line`),[E,D]=(0,y.useState)(!1),O={styleType:e,contentType:n,size:i,color:o,strength:l,disabled:m,label:g,prefixIcon:v||void 0,suffixIcon:S||void 0,iconName:w,theme:E?`dark`:`light`};return(0,b.jsxs)(`div`,{style:{fontFamily:`Pretendard, sans-serif`,padding:24},children:[(0,b.jsx)(`h2`,{style:{fontSize:22,fontWeight:700,marginBottom:4,color:`var(--color-light-text-primary)`},children:`Button Playground`}),(0,b.jsx)(`p`,{style:{fontSize:13,color:`var(--color-light-text-quaternary)`,marginBottom:28},children:`속성을 조합하고 결과를 실시간으로 확인하세요. Hover / Click 인터랙션도 테스트 가능합니다.`}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`},children:[(0,b.jsxs)(`div`,{style:{flex:`1 1 400px`,minWidth:360,padding:20,background:`var(--color-light-bg-grouped-strong)`,borderRadius:12,border:`1px solid var(--color-light-border-divider-weaker)`},children:[(0,b.jsx)(d,{label:`styleType`,children:[`fill`,`outline`,`clear`,`text`].map(n=>(0,b.jsx)(u,{label:n,active:e===n,onClick:()=>t(n)},n))}),(0,b.jsx)(d,{label:`contentType`,children:[`text`,`icon`].map(e=>(0,b.jsx)(u,{label:e,active:n===e,onClick:()=>r(e)},e))}),(0,b.jsx)(d,{label:`size`,children:[18,20,24,28,32,36,40,48].map(e=>(0,b.jsx)(u,{label:`${e}`,active:i===e,onClick:()=>a(e)},e))}),(0,b.jsx)(d,{label:`color`,children:[`picker`,`mono`,`red`].map(e=>(0,b.jsx)(u,{label:e,active:o===e,onClick:()=>c(e)},e))}),(0,b.jsx)(d,{label:`strength`,children:[0,-1].map(e=>(0,b.jsx)(u,{label:e===0?`0 (strong)`:`-1 (weak)`,active:l===e,onClick:()=>p(e)},e))}),(0,b.jsxs)(d,{label:`disabled`,children:[(0,b.jsx)(u,{label:`false`,active:!m,onClick:()=>h(!1)}),(0,b.jsx)(u,{label:`true`,active:m,onClick:()=>h(!0)})]}),n===`text`&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d,{label:`label`,children:(0,b.jsx)(`input`,{type:`text`,value:g,onChange:e=>_(e.target.value),style:{padding:`5px 10px`,border:`1px solid var(--color-light-border-default-a)`,borderRadius:6,fontSize:13,width:160,fontFamily:`Pretendard, sans-serif`}})}),(0,b.jsx)(d,{label:`prefixIcon`,children:(0,b.jsx)(`div`,{style:{display:`flex`,gap:4,flexWrap:`wrap`},children:F.map(e=>(0,b.jsx)(f,{name:e,active:v===e,onClick:()=>x(e)},e||`none`))})}),(0,b.jsx)(d,{label:`suffixIcon`,children:(0,b.jsx)(`div`,{style:{display:`flex`,gap:4,flexWrap:`wrap`},children:F.map(e=>(0,b.jsx)(f,{name:e,active:S===e,onClick:()=>C(e)},e||`none`))})})]}),n===`icon`&&(0,b.jsx)(d,{label:`icon`,children:(0,b.jsx)(`div`,{style:{display:`flex`,gap:4,flexWrap:`wrap`},children:F.filter(Boolean).map(e=>(0,b.jsx)(f,{name:e,active:w===e,onClick:()=>T(e)},e))})})]}),(0,b.jsxs)(`div`,{style:{flex:`1 1 320px`,minWidth:300},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:6,marginBottom:16},children:[(0,b.jsx)(u,{label:`Light BG`,active:!E,onClick:()=>D(!1)}),(0,b.jsx)(u,{label:`Dark BG`,active:E,onClick:()=>D(!0)})]}),(0,b.jsx)(`div`,{style:{background:E?`var(--color-dark-bg-base)`:`var(--color-light-bg-base)`,border:E?`1px solid var(--color-dark-bg-highlight)`:`1px solid var(--color-light-border-divider-weaker)`,borderRadius:12,padding:40,display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:160,transition:`background 0.2s`},children:(0,b.jsx)(s,{...O})}),(0,b.jsxs)(`div`,{style:{marginTop:16,padding:16,background:`var(--color-light-bg-grouped-strong)`,borderRadius:8,border:`1px solid var(--color-light-border-divider-weaker)`},children:[(0,b.jsx)(`div`,{style:{fontSize:11,fontWeight:600,color:`var(--color-light-icon-grey)`,marginBottom:8,fontFamily:k},children:`PROPS`}),(0,b.jsx)(`pre`,{style:{fontFamily:k,fontSize:11,color:`var(--color-light-text-tertiary)`,margin:0,lineHeight:1.8,whiteSpace:`pre-wrap`},children:`<Button
  styleType="${e}"
  contentType="${n}"
  size={${i}}
  color="${o}"
  strength={${l}}
  disabled={${m}}${n===`text`?`
  label="${g}"${v?`\n  prefixIcon="${v}"`:``}${S?`\n  suffixIcon="${S}"`:``}`:`
  iconName="${w}"`}
/>`})]}),(0,b.jsxs)(`div`,{style:{marginTop:20},children:[(0,b.jsx)(`div`,{style:{fontSize:11,fontWeight:600,color:`var(--color-light-icon-grey)`,marginBottom:10,fontFamily:k},children:`COMPARE STYLES`}),(0,b.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gap:8},children:[`fill`,`outline`,`clear`,`text`].map(r=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6,padding:12,borderRadius:8,background:E?`var(--color-dark-bg-base)`:`var(--color-light-bg-grouped-strong)`,border:r===e?`1.5px solid var(--color-light-border-stronger)`:`1px solid var(--color-light-border-divider-weaker)`,cursor:`pointer`,transition:`all 0.12s`},onClick:()=>t(r),children:[(0,b.jsx)(s,{...O,styleType:r,size:Math.min(i,36),label:n===`text`?g:void 0}),(0,b.jsx)(`span`,{style:{fontFamily:k,fontSize:10,color:r===e?`var(--color-light-text-primary)`:`var(--color-light-icon-grey)`},children:r})]},r))})]}),(0,b.jsxs)(`div`,{style:{marginTop:20},children:[(0,b.jsx)(`div`,{style:{fontSize:11,fontWeight:600,color:`var(--color-light-icon-grey)`,marginBottom:10,fontFamily:k},children:`COMPARE SIZES`}),(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:8,padding:16,background:E?`var(--color-dark-bg-base)`:`var(--color-light-bg-grouped-strong)`,borderRadius:8,border:`1px solid var(--color-light-border-divider-weaker)`,flexWrap:`wrap`},children:[18,20,24,28,32,36,40,48].map(e=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4,cursor:`pointer`},onClick:()=>a(e),children:[(0,b.jsx)(s,{...O,size:e,label:n===`text`?e<=24?`Aa`:g:void 0}),(0,b.jsx)(`span`,{style:{fontFamily:k,fontSize:9,color:i===e?`var(--color-light-text-primary)`:`var(--color-light-border-grey-weak-a)`,fontWeight:i===e?700:400},children:e})]},e))})]})]})]})]})}function m({title:e,children:t}){return(0,b.jsxs)(`div`,{style:{marginBottom:32},children:[(0,b.jsx)(`h3`,{style:{fontSize:16,fontWeight:700,color:`#151515`,margin:`0 0 12px`,paddingBottom:8,borderBottom:`2px solid #151515`},children:e}),t]})}function h({headers:e,rows:t}){return(0,b.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:13,fontFamily:`Pretendard, sans-serif`,marginBottom:16},children:[(0,b.jsx)(`thead`,{children:(0,b.jsx)(`tr`,{children:e.map((e,t)=>(0,b.jsx)(`th`,{style:{textAlign:`left`,padding:`8px 12px`,background:`#f4f4f6`,fontWeight:600,fontSize:12,color:`#454545`,borderBottom:`1px solid #ddd`,whiteSpace:`nowrap`},children:e},t))})}),(0,b.jsx)(`tbody`,{children:t.map((e,t)=>(0,b.jsx)(`tr`,{children:e.map((e,t)=>(0,b.jsx)(`td`,{style:{padding:`8px 12px`,borderBottom:`1px solid #eee`,color:`#333`,verticalAlign:`top`,lineHeight:1.6},children:e},t))},t))})]})}function g({children:e}){return(0,b.jsx)(`code`,{style:{padding:`1px 6px`,background:`#f0f0f3`,borderRadius:4,fontSize:11,fontFamily:I,color:`#d63384`},children:e})}function _({children:e}){return(0,b.jsx)(`div`,{style:{padding:`10px 14px`,background:`#fffbe6`,border:`1px solid #ffe58f`,borderRadius:8,fontSize:12,color:`#665500`,lineHeight:1.7,marginBottom:12},children:e})}function v(){return(0,b.jsxs)(`div`,{style:{fontFamily:`Pretendard, sans-serif`,padding:32,maxWidth:960,margin:`0 auto`},children:[(0,b.jsx)(`h2`,{style:{fontSize:24,fontWeight:700,margin:`0 0 4px`},children:`Button — 컴포넌트 명세서`}),(0,b.jsx)(`p`,{style:{fontSize:13,color:`#999`,margin:`0 0 8px`,fontFamily:I},children:`Figma: Buttons component set · 480 variants`}),(0,b.jsx)(`p`,{style:{fontSize:13,color:`#666`,margin:`0 0 32px`},children:`피그마 Buttons 컴포넌트셋 기반. CSS Custom Properties(디자인 토큰)로 모든 색상/타이포를 제어하며, light/dark 테마를 지원합니다.`}),(0,b.jsx)(m,{title:`Props`,children:(0,b.jsx)(h,{headers:[`Prop`,`타입`,`기본값`,`설명`],rows:[[(0,b.jsx)(g,{children:`styleType`}),(0,b.jsx)(g,{children:`fill | outline | clear | text`}),(0,b.jsx)(g,{children:`fill`}),`버튼 스타일 유형`],[(0,b.jsx)(g,{children:`contentType`}),(0,b.jsx)(g,{children:`text | icon`}),(0,b.jsx)(g,{children:`text`}),`콘텐츠 유형 (텍스트 or 아이콘 전용)`],[(0,b.jsx)(g,{children:`size`}),(0,b.jsx)(g,{children:`18 | 20 | 24 | 28 | 32 | 36 | 40 | 48`}),(0,b.jsx)(g,{children:`40`}),`버튼 높이 (px)`],[(0,b.jsx)(g,{children:`color`}),(0,b.jsx)(g,{children:`picker | mono | red`}),(0,b.jsx)(g,{children:`picker`}),`컬러 테마`],[(0,b.jsx)(g,{children:`strength`}),(0,b.jsx)(g,{children:`0 | -1`}),(0,b.jsx)(g,{children:`0`}),`0: 강함(strong), -1: 약함(weak)`],[(0,b.jsx)(g,{children:`disabled`}),(0,b.jsx)(g,{children:`boolean`}),(0,b.jsx)(g,{children:`false`}),`비활성화 여부 (opacity 0.4)`],[(0,b.jsx)(g,{children:`label`}),(0,b.jsx)(g,{children:`string`}),(0,b.jsx)(g,{children:`"Label"`}),`버튼 텍스트 (contentType=text)`],[(0,b.jsx)(g,{children:`prefixIcon`}),(0,b.jsx)(g,{children:`string`}),`—`,`텍스트 앞 아이콘 이름`],[(0,b.jsx)(g,{children:`suffixIcon`}),(0,b.jsx)(g,{children:`string`}),`—`,`텍스트 뒤 아이콘 이름`],[(0,b.jsx)(g,{children:`iconName`}),(0,b.jsx)(g,{children:`string`}),(0,b.jsx)(g,{children:`"default_plus_line"`}),`아이콘 전용 모드에서 사용할 아이콘`],[(0,b.jsx)(g,{children:`iconSize`}),(0,b.jsx)(g,{children:`number`}),`—`,`아이콘 크기 오버라이드 (미지정 시 size별 기본값)`],[(0,b.jsx)(g,{children:`fullWidth`}),(0,b.jsx)(g,{children:`boolean`}),(0,b.jsx)(g,{children:`false`}),`width: 100%`],[(0,b.jsx)(g,{children:`theme`}),(0,b.jsx)(g,{children:`light | dark`}),(0,b.jsx)(g,{children:`light`}),`라이트/다크 테마`],[(0,b.jsx)(g,{children:`onClick`}),(0,b.jsx)(g,{children:`function`}),`—`,`클릭 핸들러`]]})}),(0,b.jsxs)(m,{title:`Variant 조합`,children:[(0,b.jsx)(_,{children:`총 variant 수: styleType(4) × contentType(2) × size(8) × color(3) × strength(2) × disabled(2) = 768 조합. 피그마 기준 480개 variant (일부 조합 제외).`}),(0,b.jsx)(`h4`,{style:{fontSize:13,fontWeight:600,margin:`16px 0 8px`},children:`styleType`}),(0,b.jsx)(h,{headers:[`styleType`,`배경`,`보더`,`용도`],rows:[[(0,b.jsx)(g,{children:`fill`}),`컬러 배경`,`없음`,`Primary CTA, 강조 액션`],[(0,b.jsx)(g,{children:`outline`}),`투명`,`1px solid 컬러`,`Secondary 액션, 취소`],[(0,b.jsx)(g,{children:`clear`}),`투명`,`없음`,`Tertiary 액션, 인라인 버튼`],[(0,b.jsx)(g,{children:`text`}),`투명`,`없음`,`텍스트 링크 스타일 버튼`]]}),(0,b.jsx)(`h4`,{style:{fontSize:13,fontWeight:600,margin:`16px 0 8px`},children:`color × strength (fill 기준)`}),(0,b.jsx)(h,{headers:[`color`,`strength=0 (strong)`,`strength=-1 (weak)`],rows:[[(0,b.jsx)(g,{children:`picker`}),(0,b.jsxs)(b.Fragment,{children:[`배경 `,(0,b.jsx)(g,{children:`picker/button`}),`, 텍스트 `,(0,b.jsx)(g,{children:`picker/on-button`})]}),(0,b.jsxs)(b.Fragment,{children:[`배경 `,(0,b.jsx)(g,{children:`picker/button-weak-a`}),`, 텍스트 `,(0,b.jsx)(g,{children:`picker/button`})]})],[(0,b.jsx)(g,{children:`mono`}),(0,b.jsxs)(b.Fragment,{children:[`배경 `,(0,b.jsx)(g,{children:`{theme}/surface/form-inverted`}),`, 텍스트 `,(0,b.jsx)(g,{children:`{theme}/text/invert-a`})]}),(0,b.jsxs)(b.Fragment,{children:[`배경 `,(0,b.jsx)(g,{children:`always/lightgrey015-a`}),`, 텍스트 `,(0,b.jsx)(g,{children:`{theme}/text/primary`})]})],[(0,b.jsx)(g,{children:`red`}),(0,b.jsxs)(b.Fragment,{children:[`배경 `,(0,b.jsx)(g,{children:`{theme}/surface/form-red`}),`, 텍스트 `,(0,b.jsx)(g,{children:`always/white100`})]}),(0,b.jsxs)(b.Fragment,{children:[`배경 `,(0,b.jsx)(g,{children:`{theme}/surface/form-red-weak-a`}),`, 텍스트 `,(0,b.jsx)(g,{children:`{theme}/text/red`})]})]]}),(0,b.jsx)(_,{children:`outline/clear/text는 배경 투명, 텍스트/아이콘 컬러만 적용. outline의 보더: strong은 진한 보더, weak(-1)은 연한 보더. mono + weak 조합은 다크 배경에서 사용하도록 설계됨.`})]}),(0,b.jsxs)(m,{title:`사이즈 스펙`,children:[(0,b.jsx)(h,{headers:[`size`,`height`,`fontSize`,`iconSize`,`padding (H×V)`,`gap`,`radius`],rows:[[`18`,`18px`,`11px`,`12px`,`4×1`,`0`,`4px`],[`20`,`20px`,`11px`,`14px`,`4×1`,`0`,`4px`],[`24`,`24px`,`12px`,`16px`,`6×2`,`0`,`6px`],[`28`,`28px`,`13px`,`16px`,`8×3`,`1px`,`6px`],[`32`,`32px`,`13px`,`16px`,`8×3`,`1px`,`6px`],[`36`,`36px`,`14px`,`20px`,`10×4`,`2px`,`6px`],[`40`,`40px`,`14px`,`20px`,`10×4`,`2px`,`6px`],[`48`,`48px`,`16px`,`24px`,`12×6`,`2px`,`6px`]]}),(0,b.jsxs)(_,{children:[(0,b.jsx)(g,{children:`contentType=icon`}),`일 때: padding은 py만 적용 (정사각형에 가까운 형태), minWidth = height.`]})]}),(0,b.jsx)(m,{title:`타이포그래피 토큰 매핑`,children:(0,b.jsx)(h,{headers:[`fontSize (px)`,`토큰`,`fontWeight`,`적용 size`],rows:[[`11`,(0,b.jsx)(g,{children:`11-caption-med`}),`500 (medium)`,`18, 20`],[`12`,(0,b.jsx)(g,{children:`12-caption-med`}),`500 (medium)`,`24`],[`13`,(0,b.jsx)(g,{children:`13-body-med`}),`500 (medium)`,`28, 32`],[`14`,(0,b.jsx)(g,{children:`14-body-med`}),`500 (medium)`,`36, 40`],[`16`,(0,b.jsx)(g,{children:`16-title-med`}),`500 (medium)`,`48`]]})}),(0,b.jsxs)(m,{title:`상태 (States)`,children:[(0,b.jsx)(h,{headers:[`상태`,`처리 방식`,`토큰`],rows:[[`Default`,`기본 스타일 적용`,`—`],[`Hover`,`오버레이 (absolute, inset:0)`,(0,b.jsx)(g,{children:`{theme}/overlay/hover-grey-a`})],[`Active / Press`,`오버레이 (absolute, inset:0)`,(0,b.jsx)(g,{children:`{theme}/overlay/press-grey-a`})],[`Disabled`,`opacity: 0.4, cursor: not-allowed`,`—`]]}),(0,b.jsxs)(_,{children:[`오버레이는 `,(0,b.jsx)(g,{children:`position: absolute; inset: 0; pointerEvents: none`}),`으로 버튼 내부에 렌더. 터치 디바이스: touchStart→press, touchEnd→release. 터치 후 마우스 이벤트 무시 (ghost click 방지).`]})]}),(0,b.jsx)(m,{title:`Outline 보더 토큰 상세`,children:(0,b.jsx)(h,{headers:[`color`,`strength=0`,`strength=-1`],rows:[[(0,b.jsx)(g,{children:`picker`}),(0,b.jsx)(g,{children:`picker/button`}),(0,b.jsx)(g,{children:`picker/button-weak-a`})],[(0,b.jsx)(g,{children:`mono`}),(0,b.jsx)(g,{children:`{theme}/border/stronger`}),(0,b.jsx)(g,{children:`{theme}/border/default-a`})],[(0,b.jsx)(g,{children:`red`}),(0,b.jsx)(g,{children:`{theme}/border/red`}),(0,b.jsx)(g,{children:`{theme}/border/red-weak-a`})]]})}),(0,b.jsxs)(m,{title:`아이콘`,children:[(0,b.jsx)(h,{headers:[`항목`,`값`],rows:[[`Icon 컴포넌트`,(0,b.jsx)(g,{children:`<Icon name={...} size={iconSize} color={iconColor} />`})],[`아이콘 크기`,`size별 기본값 (12~24px), iconSize prop으로 오버라이드 가능`],[`아이콘 색상`,`버튼 텍스트 색상과 동일 토큰 사용`]]}),(0,b.jsx)(`h4`,{style:{fontSize:13,fontWeight:600,margin:`16px 0 8px`},children:`contentType별 구조`}),(0,b.jsx)(h,{headers:[`contentType`,`구조`],rows:[[(0,b.jsx)(g,{children:`text`}),`[prefixIcon] + label(텍스트) + [suffixIcon] — gap으로 간격`],[(0,b.jsx)(g,{children:`icon`}),`iconName 단독 렌더 — 정사각형 패딩, minWidth=height`]]})]}),(0,b.jsx)(m,{title:`사용 예시`,children:(0,b.jsx)(`pre`,{style:{fontFamily:I,fontSize:12,background:`#f4f4f6`,padding:16,borderRadius:8,color:`#333`,lineHeight:1.8,overflow:`auto`},children:`// Primary CTA
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
<Button theme="dark" styleType="fill" color="mono" size={40} label="다크 버튼" />`})}),(0,b.jsx)(m,{title:`Figma 참고`,children:(0,b.jsx)(h,{headers:[`항목`,`값`],rows:[[`디자인 파일`,(0,b.jsxs)(b.Fragment,{children:[`b.spoke User (`,(0,b.jsx)(g,{children:`OCTjdP5XAKan0Sr31pQlKV`}),`)`]})],[`컴포넌트셋`,`Buttons (480 variants)`],[`토큰 파일`,(0,b.jsx)(g,{children:`figma-tokens.json`})],[`CSS 변수`,(0,b.jsx)(g,{children:`src/tokens.css`})]]})})]})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;t((()=>{y=e(n(),1),c(),o(),b=r(),x=[``,...i.filter(e=>!e.includes(`null`))],S={title:`Components/Button`,component:s,argTypes:{styleType:{control:`select`,options:[`fill`,`outline`,`clear`,`text`],description:`버튼 스타일 유형`},contentType:{control:`select`,options:[`text`,`icon`],description:`콘텐츠 유형 (텍스트 or 아이콘)`},size:{control:`select`,options:[18,20,24,28,32,36,40,48],description:`버튼 크기 (px)`},color:{control:`select`,options:[`picker`,`mono`,`red`],description:`컬러 테마`},strength:{control:`select`,options:[0,-1],description:`강도 (0: 강함, -1: 약함)`},disabled:{control:`boolean`,description:`비활성화 여부`},label:{control:`text`,description:`버튼 텍스트`},prefixIcon:{control:`select`,options:x,description:`접두 아이콘`},suffixIcon:{control:`select`,options:x,description:`접미 아이콘`},iconName:{control:`select`,options:i,description:`아이콘 전용 모드에서 사용할 아이콘`,if:{arg:`contentType`,eq:`icon`}},fullWidth:{control:`boolean`,description:`전체 너비 사용`}},args:{styleType:`fill`,contentType:`text`,size:40,color:`picker`,strength:0,disabled:!1,label:`Button`,prefixIcon:``,suffixIcon:``,iconName:`default_plus_line`,fullWidth:!1}},C={render:()=>(0,b.jsx)(p,{})},w={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:24},children:[(0,b.jsx)(l,{title:`Style Types × Colors (strength=0)`,children:(0,b.jsxs)(`table`,{style:A,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{style:j,children:`styleType`}),(0,b.jsx)(`th`,{style:j,children:`picker`}),(0,b.jsx)(`th`,{style:j,children:`mono`}),(0,b.jsx)(`th`,{style:j,children:`red`})]})}),(0,b.jsx)(`tbody`,{children:[`fill`,`outline`,`clear`,`text`].map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{style:N,children:e}),[`picker`,`mono`,`red`].map(t=>(0,b.jsx)(`td`,{style:M,children:(0,b.jsx)(s,{styleType:e,color:t,size:40,label:`Label`})},t))]},e))})]})}),(0,b.jsx)(l,{title:`Style Types × Colors (strength=-1, weak)`,children:(0,b.jsxs)(`table`,{style:A,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{style:j,children:`styleType`}),(0,b.jsx)(`th`,{style:j,children:`picker`}),(0,b.jsx)(`th`,{style:{...j,background:`var(--color-dark-bg-elevated)`,color:`var(--color-light-border-grey-weak-a)`},children:`mono (dark bg)`}),(0,b.jsx)(`th`,{style:j,children:`red`})]})}),(0,b.jsx)(`tbody`,{children:[`fill`,`outline`,`clear`,`text`].map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{style:N,children:e}),(0,b.jsx)(`td`,{style:M,children:(0,b.jsx)(s,{styleType:e,color:`picker`,strength:-1,size:40,label:`Label`})}),(0,b.jsx)(`td`,{style:{...M,background:`var(--color-dark-bg-elevated)`},children:(0,b.jsx)(s,{styleType:e,color:`mono`,strength:-1,size:40,label:`Label`})}),(0,b.jsx)(`td`,{style:M,children:(0,b.jsx)(s,{styleType:e,color:`red`,strength:-1,size:40,label:`Label`})})]},e))})]})})]})},T={render:()=>(0,b.jsxs)(`div`,{style:{padding:24},children:[(0,b.jsx)(l,{title:`All Sizes (fill / picker)`,children:(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,flexWrap:`wrap`},children:[18,20,24,28,32,36,40,48].map(e=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,b.jsx)(s,{size:e,label:`Label`}),(0,b.jsxs)(`span`,{style:P,children:[e,`px`]})]},e))})}),(0,b.jsx)(l,{title:`Icon-only × Sizes`,children:(0,b.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,flexWrap:`wrap`},children:[18,20,24,28,32,36,40,48].map(e=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,b.jsx)(s,{size:e,contentType:`icon`,iconName:`default_plus_line`}),(0,b.jsxs)(`span`,{style:P,children:[e,`px`]})]},e))})})]})},E={render:()=>(0,b.jsxs)(`div`,{style:{padding:24},children:[(0,b.jsx)(l,{title:`States (hover & click to test)`,children:(0,b.jsxs)(`table`,{style:A,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{style:j,children:`State`}),(0,b.jsx)(`th`,{style:j,children:`fill`}),(0,b.jsx)(`th`,{style:j,children:`outline`}),(0,b.jsx)(`th`,{style:j,children:`clear`})]})}),(0,b.jsxs)(`tbody`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{style:N,children:`Default`}),(0,b.jsx)(`td`,{style:M,children:(0,b.jsx)(s,{styleType:`fill`,label:`Hover me`})}),(0,b.jsx)(`td`,{style:M,children:(0,b.jsx)(s,{styleType:`outline`,label:`Hover me`})}),(0,b.jsx)(`td`,{style:M,children:(0,b.jsx)(s,{styleType:`clear`,label:`Hover me`})})]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{style:N,children:`Disabled`}),(0,b.jsx)(`td`,{style:M,children:(0,b.jsx)(s,{styleType:`fill`,label:`Disabled`,disabled:!0})}),(0,b.jsx)(`td`,{style:M,children:(0,b.jsx)(s,{styleType:`outline`,label:`Disabled`,disabled:!0})}),(0,b.jsx)(`td`,{style:M,children:(0,b.jsx)(s,{styleType:`clear`,label:`Disabled`,disabled:!0})})]})]})]})}),(0,b.jsx)(l,{title:`Hover/Active는 마우스를 올려서 확인하세요`,children:(0,b.jsx)(`p`,{style:{fontSize:13,color:`var(--color-light-text-quaternary)`,margin:0},children:`Default → Hover (10% overlay) → Active/Press (15% overlay) → Disabled (40% opacity)`})})]})},D={render:()=>(0,b.jsxs)(`div`,{style:{padding:24},children:[(0,b.jsx)(l,{title:`Prefix / Suffix Icons`,children:(0,b.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,b.jsx)(s,{label:`Search`,prefixIcon:`gnb_search_line`}),(0,b.jsx)(s,{label:`Next`,suffixIcon:`default_angleRight_line`}),(0,b.jsx)(s,{label:`Download`,prefixIcon:`default_download_line`,suffixIcon:`default_angleDown_line`}),(0,b.jsx)(s,{label:`Delete`,prefixIcon:`default_trash_line`,color:`red`}),(0,b.jsx)(s,{label:`Settings`,prefixIcon:`default_settingHexa_line`,styleType:`outline`}),(0,b.jsx)(s,{label:`Share`,prefixIcon:`gnb_share_line`,styleType:`clear`})]})}),(0,b.jsx)(l,{title:`Icon-only`,children:(0,b.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[[`fill`,`outline`,`clear`].map(e=>(0,b.jsx)(s,{contentType:`icon`,styleType:e,iconName:`default_plus_line`,size:40},e)),[`picker`,`mono`,`red`].map(e=>(0,b.jsx)(s,{contentType:`icon`,color:e,iconName:`gnb_search_line`,size:40},e))]})})]})},O={render:()=>(0,b.jsx)(`div`,{style:{padding:24},children:(0,b.jsx)(l,{title:`Complete Variant Matrix (size=40)`,children:(0,b.jsxs)(`table`,{style:A,children:[(0,b.jsxs)(`thead`,{children:[(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{style:j}),[`fill`,`outline`,`clear`,`text`].map(e=>(0,b.jsx)(`th`,{style:j,colSpan:2,children:e},e))]}),(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{style:j,children:`color / str`}),[`fill`,`outline`,`clear`,`text`].map(e=>(0,b.jsxs)(y.Fragment,{children:[(0,b.jsx)(`th`,{style:{...j,fontSize:10},children:`0`}),(0,b.jsx)(`th`,{style:{...j,fontSize:10},children:`-1`})]},e))]})]}),(0,b.jsx)(`tbody`,{children:[`picker`,`mono`,`red`].map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{style:N,children:e}),[`fill`,`outline`,`clear`,`text`].map(t=>(0,b.jsxs)(y.Fragment,{children:[(0,b.jsx)(`td`,{style:{...M,background:void 0},children:(0,b.jsx)(s,{styleType:t,color:e,strength:0,size:40,label:`Aa`})}),(0,b.jsx)(`td`,{style:{...M,background:e===`mono`?`var(--color-dark-bg-elevated)`:void 0},children:(0,b.jsx)(s,{styleType:t,color:e,strength:-1,size:40,label:`Aa`})})]},t))]},e))})]})})})},k=`'SF Mono', 'Fira Code', monospace`,A={borderCollapse:`collapse`,fontFamily:`Pretendard, sans-serif`},j={padding:`8px 14px`,textAlign:`left`,fontSize:11,fontWeight:600,color:`var(--color-light-text-quaternary)`,borderBottom:`2px solid var(--color-light-border-divider-weaker)`,fontFamily:k,whiteSpace:`nowrap`},M={padding:`12px 14px`,borderBottom:`1px solid var(--color-light-bg-grouped-strong)`,verticalAlign:`middle`},N={...M,fontFamily:k,fontSize:12,color:`var(--color-light-text-tertiary)`,whiteSpace:`nowrap`},P={fontFamily:k,fontSize:10,color:`var(--color-light-icon-grey)`},F=[``,`gnb_search_line`,`gnb_share_line`,`gnb_cancel_line`,`gnb_backAngle_line`,`default_plus_line`,`default_checkBig_line`,`default_trash_line`,`default_download_line`,`default_settingHexa_line`,`default_arrowRight_line`,`default_angleRight_line`,`default_angleDown_line`,`default_camera_line`,`default_link_line`,`default_send_solid`,`default_lock_line`,`default_copy_line`],I=`'SF Mono', 'Fira Code', monospace`,L={render:()=>(0,b.jsx)(v,{})},L.storyName=`Spec (명세서)`,C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <PlaygroundUI />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24,
    padding: 24
  }}>
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
            {["fill", "outline", "clear", "text"].map(st => <tr key={st}>
                <td style={tdLabelStyle}>{st}</td>
                {["picker", "mono", "red"].map(c => <td key={c} style={tdStyle}>
                    <Button styleType={st} color={c} size={40} label="Label" />
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </Section>

      <Section title="Style Types × Colors (strength=-1, weak)">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>styleType</th>
              <th style={thStyle}>picker</th>
              <th style={{
              ...thStyle,
              background: "var(--color-dark-bg-elevated)",
              color: "var(--color-light-border-grey-weak-a)"
            }}>mono (dark bg)</th>
              <th style={thStyle}>red</th>
            </tr>
          </thead>
          <tbody>
            {["fill", "outline", "clear", "text"].map(st => <tr key={st}>
                <td style={tdLabelStyle}>{st}</td>
                <td style={tdStyle}>
                  <Button styleType={st} color="picker" strength={-1} size={40} label="Label" />
                </td>
                <td style={{
              ...tdStyle,
              background: "var(--color-dark-bg-elevated)"
            }}>
                  <Button styleType={st} color="mono" strength={-1} size={40} label="Label" />
                </td>
                <td style={tdStyle}>
                  <Button styleType={st} color="red" strength={-1} size={40} label="Label" />
                </td>
              </tr>)}
          </tbody>
        </table>
      </Section>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <Section title="All Sizes (fill / picker)">
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }}>
          {[18, 20, 24, 28, 32, 36, 40, 48].map(s => <div key={s} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6
        }}>
              <Button size={s} label="Label" />
              <span style={metaStyle}>{s}px</span>
            </div>)}
        </div>
      </Section>

      <Section title="Icon-only × Sizes">
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }}>
          {[18, 20, 24, 28, 32, 36, 40, 48].map(s => <div key={s} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6
        }}>
              <Button size={s} contentType="icon" iconName="default_plus_line" />
              <span style={metaStyle}>{s}px</span>
            </div>)}
        </div>
      </Section>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
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
        <p style={{
        fontSize: 13,
        color: "var(--color-light-text-quaternary)",
        margin: 0
      }}>
          Default → Hover (10% overlay) → Active/Press (15% overlay) → Disabled (40% opacity)
        </p>
      </Section>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <Section title="Prefix / Suffix Icons">
        <div style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap"
      }}>
          <Button label="Search" prefixIcon="gnb_search_line" />
          <Button label="Next" suffixIcon="default_angleRight_line" />
          <Button label="Download" prefixIcon="default_download_line" suffixIcon="default_angleDown_line" />
          <Button label="Delete" prefixIcon="default_trash_line" color="red" />
          <Button label="Settings" prefixIcon="default_settingHexa_line" styleType="outline" />
          <Button label="Share" prefixIcon="gnb_share_line" styleType="clear" />
        </div>
      </Section>

      <Section title="Icon-only">
        <div style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }}>
          {["fill", "outline", "clear"].map(st => <Button key={st} contentType="icon" styleType={st} iconName="default_plus_line" size={40} />)}
          {["picker", "mono", "red"].map(c => <Button key={c} contentType="icon" color={c} iconName="gnb_search_line" size={40} />)}
        </div>
      </Section>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <Section title="Complete Variant Matrix (size=40)">
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}></th>
              {["fill", "outline", "clear", "text"].map(st => <th key={st} style={thStyle} colSpan={2}>{st}</th>)}
            </tr>
            <tr>
              <th style={thStyle}>color / str</th>
              {["fill", "outline", "clear", "text"].map(st => <React.Fragment key={st}>
                  <th style={{
                ...thStyle,
                fontSize: 10
              }}>0</th>
                  <th style={{
                ...thStyle,
                fontSize: 10
              }}>-1</th>
                </React.Fragment>)}
            </tr>
          </thead>
          <tbody>
            {["picker", "mono", "red"].map(color => <tr key={color}>
                <td style={tdLabelStyle}>{color}</td>
                {["fill", "outline", "clear", "text"].map(st => <React.Fragment key={st}>
                    <td style={{
                ...tdStyle,
                background: color === "mono" && st !== "fill" ? undefined : undefined
              }}>
                      <Button styleType={st} color={color} strength={0} size={40} label="Aa" />
                    </td>
                    <td style={{
                ...tdStyle,
                background: color === "mono" ? "var(--color-dark-bg-elevated)" : undefined
              }}>
                      <Button styleType={st} color={color} strength={-1} size={40} label="Aa" />
                    </td>
                  </React.Fragment>)}
              </tr>)}
          </tbody>
        </table>
      </Section>
    </div>
}`,...O.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <SpecUI />
}`,...L.parameters?.docs?.source}}},R=[`Playground`,`StyleTypes`,`Sizes`,`States`,`WithIcons`,`FullMatrix`,`Spec`]}))();export{O as FullMatrix,C as Playground,T as Sizes,L as Spec,E as States,w as StyleTypes,D as WithIcons,R as __namedExportsOrder,S as default};