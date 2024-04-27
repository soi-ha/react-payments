import{u as h,S as e,j as C}from"./style-1oStNS6c.js";import"./index-CsdIBAqE.js";const w=h.button`
  font-weight: ${e.BOLD.title};
  font-size: ${e.FONT_SIZE.middle};
  background-color: ${e.COLOR.black50};
  color: ${e.COLOR.white24};
  border: none;
  padding: 18px 0;
  width: ${t=>t.width?`${t.width}px`:"100%"};
  border-radius: ${t=>t.floating?"0":"5px"};
  cursor: pointer;
  ${t=>t.floating?`   z-index: 1;
    position: fixed;
    bottom: 0;
    max-width:375px;`:""};
`,g=({...t})=>{const{text:x,onClick:D,floating:B,width:f}=t;return C.jsx(w,{type:"button",onClick:D,floating:B,width:f,children:x})};g.__docgenInfo={description:"",methods:[],displayName:"Button"};const b={title:"Button",component:g},o={args:{text:"버튼 텍스트"}},r={args:{text:"버튼 텍스트",floating:!0}},n={args:{text:"버튼 텍스트",width:100}};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    text: '버튼 텍스트'
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var u,c,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: '버튼 텍스트',
    floating: true
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: '버튼 텍스트',
    width: 100
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const S=["Default","Floating","OnWidth"];export{o as Default,r as Floating,n as OnWidth,S as __namedExportsOrder,b as default};
