import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Byp5fSZP.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{n as i,r as a,t as o}from"./Icon-CqAVQqp2.js";import{n as s,t as c}from"./Button-Cc_B7o6S.js";function l({title:e,children:t}){return(0,h.jsxs)(`div`,{style:{marginBottom:32},children:[(0,h.jsx)(`h3`,{style:{fontSize:13,fontWeight:700,textTransform:`uppercase`,letterSpacing:2,color:`var(--color-light-text-quaternary)`,marginBottom:14,paddingBottom:6,borderBottom:`1px solid var(--color-light-border-divider-weaker)`,fontFamily:`Pretendard, sans-serif`},children:e}),t]})}function u({label:e,active:t,onClick:n}){return(0,h.jsx)(`button`,{onClick:n,style:{padding:`4px 12px`,borderRadius:99,border:t?`1.5px solid var(--color-light-border-stronger)`:`1px solid var(--color-light-border-default-a)`,background:t?`var(--color-light-surface-form-inverted)`:`var(--color-light-bg-base)`,color:t?`var(--color-light-bg-base)`:`var(--color-light-text-tertiary)`,fontSize:12,fontWeight:t?600:400,cursor:`pointer`,fontFamily:`Pretendard, sans-serif`,transition:`all 0.12s`},children:e})}function d({label:e,children:t}){return(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:14},children:[(0,h.jsx)(`span`,{style:{width:90,fontSize:12,fontWeight:600,color:`var(--color-light-text-quaternary)`,fontFamily:w,flexShrink:0,textAlign:`right`},children:e}),(0,h.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,alignItems:`center`},children:t})]})}function f({name:e,active:t,onClick:n}){return(0,h.jsx)(`button`,{onClick:n,title:e||`none`,style:{width:32,height:32,borderRadius:6,border:t?`1.5px solid var(--color-light-border-stronger)`:`1px solid var(--color-light-border-default-a)`,background:t?`var(--color-light-bg-grouped-strong)`:`var(--color-light-bg-base)`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:0},children:e?(0,h.jsx)(a,{name:e,size:18,color:t?`var(--color-light-text-primary)`:`var(--color-light-text-quaternary)`}):(0,h.jsx)(`span`,{style:{fontSize:14,color:`var(--color-light-border-grey-weak-a)`},children:`∅`})})}function p(){let[e,t]=(0,m.useState)(`fill`),[n,r]=(0,m.useState)(`text`),[i,a]=(0,m.useState)(40),[o,c]=(0,m.useState)(`picker`),[l,p]=(0,m.useState)(0),[g,_]=(0,m.useState)(!1),[v,y]=(0,m.useState)(`Button`),[b,x]=(0,m.useState)(``),[S,C]=(0,m.useState)(``),[T,E]=(0,m.useState)(`default_plus_line`),[D,O]=(0,m.useState)(!1),k={styleType:e,contentType:n,size:i,color:o,strength:l,disabled:g,label:v,prefixIcon:b||void 0,suffixIcon:S||void 0,iconName:T,theme:D?`dark`:`light`};return(0,h.jsxs)(`div`,{style:{fontFamily:`Pretendard, sans-serif`,padding:24},children:[(0,h.jsx)(`h2`,{style:{fontSize:22,fontWeight:700,marginBottom:4,color:`var(--color-light-text-primary)`},children:`Button Playground`}),(0,h.jsx)(`p`,{style:{fontSize:13,color:`var(--color-light-text-quaternary)`,marginBottom:28},children:`속성을 조합하고 결과를 실시간으로 확인하세요. Hover / Click 인터랙션도 테스트 가능합니다.`}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`},children:[(0,h.jsxs)(`div`,{style:{flex:`1 1 400px`,minWidth:360,padding:20,background:`var(--color-light-bg-grouped-strong)`,borderRadius:12,border:`1px solid var(--color-light-border-divider-weaker)`},children:[(0,h.jsx)(d,{label:`styleType`,children:[`fill`,`outline`,`clear`,`text`].map(n=>(0,h.jsx)(u,{label:n,active:e===n,onClick:()=>t(n)},n))}),(0,h.jsx)(d,{label:`contentType`,children:[`text`,`icon`].map(e=>(0,h.jsx)(u,{label:e,active:n===e,onClick:()=>r(e)},e))}),(0,h.jsx)(d,{label:`size`,children:[18,20,24,28,32,36,40,48].map(e=>(0,h.jsx)(u,{label:`${e}`,active:i===e,onClick:()=>a(e)},e))}),(0,h.jsx)(d,{label:`color`,children:[`picker`,`mono`,`red`].map(e=>(0,h.jsx)(u,{label:e,active:o===e,onClick:()=>c(e)},e))}),(0,h.jsx)(d,{label:`strength`,children:[0,-1].map(e=>(0,h.jsx)(u,{label:e===0?`0 (strong)`:`-1 (weak)`,active:l===e,onClick:()=>p(e)},e))}),(0,h.jsxs)(d,{label:`disabled`,children:[(0,h.jsx)(u,{label:`false`,active:!g,onClick:()=>_(!1)}),(0,h.jsx)(u,{label:`true`,active:g,onClick:()=>_(!0)})]}),n===`text`&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{label:`label`,children:(0,h.jsx)(`input`,{type:`text`,value:v,onChange:e=>y(e.target.value),style:{padding:`5px 10px`,border:`1px solid var(--color-light-border-default-a)`,borderRadius:6,fontSize:13,width:160,fontFamily:`Pretendard, sans-serif`}})}),(0,h.jsx)(d,{label:`prefixIcon`,children:(0,h.jsx)(`div`,{style:{display:`flex`,gap:4,flexWrap:`wrap`},children:A.map(e=>(0,h.jsx)(f,{name:e,active:b===e,onClick:()=>x(e)},e||`none`))})}),(0,h.jsx)(d,{label:`suffixIcon`,children:(0,h.jsx)(`div`,{style:{display:`flex`,gap:4,flexWrap:`wrap`},children:A.map(e=>(0,h.jsx)(f,{name:e,active:S===e,onClick:()=>C(e)},e||`none`))})})]}),n===`icon`&&(0,h.jsx)(d,{label:`icon`,children:(0,h.jsx)(`div`,{style:{display:`flex`,gap:4,flexWrap:`wrap`},children:A.filter(Boolean).map(e=>(0,h.jsx)(f,{name:e,active:T===e,onClick:()=>E(e)},e))})})]}),(0,h.jsxs)(`div`,{style:{flex:`1 1 320px`,minWidth:300},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,gap:6,marginBottom:16},children:[(0,h.jsx)(u,{label:`Light BG`,active:!D,onClick:()=>O(!1)}),(0,h.jsx)(u,{label:`Dark BG`,active:D,onClick:()=>O(!0)})]}),(0,h.jsx)(`div`,{style:{background:D?`var(--color-dark-bg-base)`:`var(--color-light-bg-base)`,border:D?`1px solid var(--color-dark-bg-highlight)`:`1px solid var(--color-light-border-divider-weaker)`,borderRadius:12,padding:40,display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:160,transition:`background 0.2s`},children:(0,h.jsx)(s,{...k})}),(0,h.jsxs)(`div`,{style:{marginTop:16,padding:16,background:`var(--color-light-bg-grouped-strong)`,borderRadius:8,border:`1px solid var(--color-light-border-divider-weaker)`},children:[(0,h.jsx)(`div`,{style:{fontSize:11,fontWeight:600,color:`var(--color-light-icon-grey)`,marginBottom:8,fontFamily:w},children:`PROPS`}),(0,h.jsx)(`pre`,{style:{fontFamily:w,fontSize:11,color:`var(--color-light-text-tertiary)`,margin:0,lineHeight:1.8,whiteSpace:`pre-wrap`},children:`<Button
  styleType="${e}"
  contentType="${n}"
  size={${i}}
  color="${o}"
  strength={${l}}
  disabled={${g}}${n===`text`?`
  label="${v}"${b?`\n  prefixIcon="${b}"`:``}${S?`\n  suffixIcon="${S}"`:``}`:`
  iconName="${T}"`}
/>`})]}),(0,h.jsxs)(`div`,{style:{marginTop:20},children:[(0,h.jsx)(`div`,{style:{fontSize:11,fontWeight:600,color:`var(--color-light-icon-grey)`,marginBottom:10,fontFamily:w},children:`COMPARE STYLES`}),(0,h.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gap:8},children:[`fill`,`outline`,`clear`,`text`].map(r=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6,padding:12,borderRadius:8,background:D?`var(--color-dark-bg-base)`:`var(--color-light-bg-grouped-strong)`,border:r===e?`1.5px solid var(--color-light-border-stronger)`:`1px solid var(--color-light-border-divider-weaker)`,cursor:`pointer`,transition:`all 0.12s`},onClick:()=>t(r),children:[(0,h.jsx)(s,{...k,styleType:r,size:Math.min(i,36),label:n===`text`?v:void 0}),(0,h.jsx)(`span`,{style:{fontFamily:w,fontSize:10,color:r===e?`var(--color-light-text-primary)`:`var(--color-light-icon-grey)`},children:r})]},r))})]}),(0,h.jsxs)(`div`,{style:{marginTop:20},children:[(0,h.jsx)(`div`,{style:{fontSize:11,fontWeight:600,color:`var(--color-light-icon-grey)`,marginBottom:10,fontFamily:w},children:`COMPARE SIZES`}),(0,h.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:8,padding:16,background:D?`var(--color-dark-bg-base)`:`var(--color-light-bg-grouped-strong)`,borderRadius:8,border:`1px solid var(--color-light-border-divider-weaker)`,flexWrap:`wrap`},children:[18,20,24,28,32,36,40,48].map(e=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4,cursor:`pointer`},onClick:()=>a(e),children:[(0,h.jsx)(s,{...k,size:e,label:n===`text`?e<=24?`Aa`:v:void 0}),(0,h.jsx)(`span`,{style:{fontFamily:w,fontSize:9,color:i===e?`var(--color-light-text-primary)`:`var(--color-light-border-grey-weak-a)`,fontWeight:i===e?700:400},children:e})]},e))})]})]})]})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;t((()=>{m=e(n(),1),c(),o(),h=r(),g=[``,...i.filter(e=>!e.includes(`null`))],_={title:`Components/Button`,component:s,argTypes:{styleType:{control:`select`,options:[`fill`,`outline`,`clear`,`text`],description:`버튼 스타일 유형`},contentType:{control:`select`,options:[`text`,`icon`],description:`콘텐츠 유형 (텍스트 or 아이콘)`},size:{control:`select`,options:[18,20,24,28,32,36,40,48],description:`버튼 크기 (px)`},color:{control:`select`,options:[`picker`,`mono`,`red`],description:`컬러 테마`},strength:{control:`select`,options:[0,-1],description:`강도 (0: 강함, -1: 약함)`},disabled:{control:`boolean`,description:`비활성화 여부`},label:{control:`text`,description:`버튼 텍스트`},prefixIcon:{control:`select`,options:g,description:`접두 아이콘`},suffixIcon:{control:`select`,options:g,description:`접미 아이콘`},iconName:{control:`select`,options:i,description:`아이콘 전용 모드에서 사용할 아이콘`,if:{arg:`contentType`,eq:`icon`}},fullWidth:{control:`boolean`,description:`전체 너비 사용`}},args:{styleType:`fill`,contentType:`text`,size:40,color:`picker`,strength:0,disabled:!1,label:`Button`,prefixIcon:``,suffixIcon:``,iconName:`default_plus_line`,fullWidth:!1}},v={render:e=>(0,h.jsx)(s,{...e})},y={render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:24},children:[(0,h.jsx)(l,{title:`Style Types × Colors (strength=0)`,children:(0,h.jsxs)(`table`,{style:T,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{style:E,children:`styleType`}),(0,h.jsx)(`th`,{style:E,children:`picker`}),(0,h.jsx)(`th`,{style:E,children:`mono`}),(0,h.jsx)(`th`,{style:E,children:`red`})]})}),(0,h.jsx)(`tbody`,{children:[`fill`,`outline`,`clear`,`text`].map(e=>(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{style:O,children:e}),[`picker`,`mono`,`red`].map(t=>(0,h.jsx)(`td`,{style:D,children:(0,h.jsx)(s,{styleType:e,color:t,size:40,label:`Label`})},t))]},e))})]})}),(0,h.jsx)(l,{title:`Style Types × Colors (strength=-1, weak)`,children:(0,h.jsxs)(`table`,{style:T,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{style:E,children:`styleType`}),(0,h.jsx)(`th`,{style:E,children:`picker`}),(0,h.jsx)(`th`,{style:{...E,background:`var(--color-dark-bg-elevated)`,color:`var(--color-light-border-grey-weak-a)`},children:`mono (dark bg)`}),(0,h.jsx)(`th`,{style:E,children:`red`})]})}),(0,h.jsx)(`tbody`,{children:[`fill`,`outline`,`clear`,`text`].map(e=>(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{style:O,children:e}),(0,h.jsx)(`td`,{style:D,children:(0,h.jsx)(s,{styleType:e,color:`picker`,strength:-1,size:40,label:`Label`})}),(0,h.jsx)(`td`,{style:{...D,background:`var(--color-dark-bg-elevated)`},children:(0,h.jsx)(s,{styleType:e,color:`mono`,strength:-1,size:40,label:`Label`})}),(0,h.jsx)(`td`,{style:D,children:(0,h.jsx)(s,{styleType:e,color:`red`,strength:-1,size:40,label:`Label`})})]},e))})]})})]})},b={render:()=>(0,h.jsxs)(`div`,{style:{padding:24},children:[(0,h.jsx)(l,{title:`All Sizes (fill / picker)`,children:(0,h.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,flexWrap:`wrap`},children:[18,20,24,28,32,36,40,48].map(e=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,h.jsx)(s,{size:e,label:`Label`}),(0,h.jsxs)(`span`,{style:k,children:[e,`px`]})]},e))})}),(0,h.jsx)(l,{title:`Icon-only × Sizes`,children:(0,h.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,flexWrap:`wrap`},children:[18,20,24,28,32,36,40,48].map(e=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,h.jsx)(s,{size:e,contentType:`icon`,iconName:`default_plus_line`}),(0,h.jsxs)(`span`,{style:k,children:[e,`px`]})]},e))})})]})},x={render:()=>(0,h.jsxs)(`div`,{style:{padding:24},children:[(0,h.jsx)(l,{title:`States (hover & click to test)`,children:(0,h.jsxs)(`table`,{style:T,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{style:E,children:`State`}),(0,h.jsx)(`th`,{style:E,children:`fill`}),(0,h.jsx)(`th`,{style:E,children:`outline`}),(0,h.jsx)(`th`,{style:E,children:`clear`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{style:O,children:`Default`}),(0,h.jsx)(`td`,{style:D,children:(0,h.jsx)(s,{styleType:`fill`,label:`Hover me`})}),(0,h.jsx)(`td`,{style:D,children:(0,h.jsx)(s,{styleType:`outline`,label:`Hover me`})}),(0,h.jsx)(`td`,{style:D,children:(0,h.jsx)(s,{styleType:`clear`,label:`Hover me`})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{style:O,children:`Disabled`}),(0,h.jsx)(`td`,{style:D,children:(0,h.jsx)(s,{styleType:`fill`,label:`Disabled`,disabled:!0})}),(0,h.jsx)(`td`,{style:D,children:(0,h.jsx)(s,{styleType:`outline`,label:`Disabled`,disabled:!0})}),(0,h.jsx)(`td`,{style:D,children:(0,h.jsx)(s,{styleType:`clear`,label:`Disabled`,disabled:!0})})]})]})]})}),(0,h.jsx)(l,{title:`Hover/Active는 마우스를 올려서 확인하세요`,children:(0,h.jsx)(`p`,{style:{fontSize:13,color:`var(--color-light-text-quaternary)`,margin:0},children:`Default → Hover (10% overlay) → Active/Press (15% overlay) → Disabled (40% opacity)`})})]})},S={render:()=>(0,h.jsxs)(`div`,{style:{padding:24},children:[(0,h.jsx)(l,{title:`Prefix / Suffix Icons`,children:(0,h.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,h.jsx)(s,{label:`Search`,prefixIcon:`gnb_search_line`}),(0,h.jsx)(s,{label:`Next`,suffixIcon:`default_angleRight_line`}),(0,h.jsx)(s,{label:`Download`,prefixIcon:`default_download_line`,suffixIcon:`default_angleDown_line`}),(0,h.jsx)(s,{label:`Delete`,prefixIcon:`default_trash_line`,color:`red`}),(0,h.jsx)(s,{label:`Settings`,prefixIcon:`default_settingHexa_line`,styleType:`outline`}),(0,h.jsx)(s,{label:`Share`,prefixIcon:`gnb_share_line`,styleType:`clear`})]})}),(0,h.jsx)(l,{title:`Icon-only`,children:(0,h.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[[`fill`,`outline`,`clear`].map(e=>(0,h.jsx)(s,{contentType:`icon`,styleType:e,iconName:`default_plus_line`,size:40},e)),[`picker`,`mono`,`red`].map(e=>(0,h.jsx)(s,{contentType:`icon`,color:e,iconName:`gnb_search_line`,size:40},e))]})})]})},C={render:()=>(0,h.jsx)(`div`,{style:{padding:24},children:(0,h.jsx)(l,{title:`Complete Variant Matrix (size=40)`,children:(0,h.jsxs)(`table`,{style:T,children:[(0,h.jsxs)(`thead`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{style:E}),[`fill`,`outline`,`clear`,`text`].map(e=>(0,h.jsx)(`th`,{style:E,colSpan:2,children:e},e))]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{style:E,children:`color / str`}),[`fill`,`outline`,`clear`,`text`].map(e=>(0,h.jsxs)(m.Fragment,{children:[(0,h.jsx)(`th`,{style:{...E,fontSize:10},children:`0`}),(0,h.jsx)(`th`,{style:{...E,fontSize:10},children:`-1`})]},e))]})]}),(0,h.jsx)(`tbody`,{children:[`picker`,`mono`,`red`].map(e=>(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{style:O,children:e}),[`fill`,`outline`,`clear`,`text`].map(t=>(0,h.jsxs)(m.Fragment,{children:[(0,h.jsx)(`td`,{style:{...D,background:void 0},children:(0,h.jsx)(s,{styleType:t,color:e,strength:0,size:40,label:`Aa`})}),(0,h.jsx)(`td`,{style:{...D,background:e===`mono`?`var(--color-dark-bg-elevated)`:void 0},children:(0,h.jsx)(s,{styleType:t,color:e,strength:-1,size:40,label:`Aa`})})]},t))]},e))})]})})})},w=`'SF Mono', 'Fira Code', monospace`,T={borderCollapse:`collapse`,fontFamily:`Pretendard, sans-serif`},E={padding:`8px 14px`,textAlign:`left`,fontSize:11,fontWeight:600,color:`var(--color-light-text-quaternary)`,borderBottom:`2px solid var(--color-light-border-divider-weaker)`,fontFamily:w,whiteSpace:`nowrap`},D={padding:`12px 14px`,borderBottom:`1px solid var(--color-light-bg-grouped-strong)`,verticalAlign:`middle`},O={...D,fontFamily:w,fontSize:12,color:`var(--color-light-text-tertiary)`,whiteSpace:`nowrap`},k={fontFamily:w,fontSize:10,color:`var(--color-light-icon-grey)`},A=[``,`gnb_search_line`,`gnb_share_line`,`gnb_cancel_line`,`gnb_backAngle_line`,`default_plus_line`,`default_checkBig_line`,`default_trash_line`,`default_download_line`,`default_settingHexa_line`,`default_arrowRight_line`,`default_angleRight_line`,`default_angleDown_line`,`default_camera_line`,`default_link_line`,`default_send_solid`,`default_lock_line`,`default_copy_line`],j={render:()=>(0,h.jsx)(p,{})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Button {...args} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <PlaygroundUI />
}`,...j.parameters?.docs?.source}}},M=[`Default`,`StyleTypes`,`Sizes`,`States`,`WithIcons`,`FullMatrix`,`Playground`]}))();export{v as Default,C as FullMatrix,j as Playground,b as Sizes,x as States,y as StyleTypes,S as WithIcons,M as __namedExportsOrder,_ as default};