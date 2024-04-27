import{u as h,S as e,j as n}from"./style-1oStNS6c.js";const m=h.select`
  font-family: ${e.FONT_FAMILY_INTER};
  width: 100%;
  padding: 8px;
  border-radius: 2px;
  border: solid 1px ${e.COLOR.gray170};

  &:focus {
    outline: none;
    border: solid 1px ${e.COLOR.black};
  }

  &:required:invalid {
    color: ${e.COLOR.gray170};
  }

  option[value=''][disabled] {
    display: none;
  }
`,x=({...r})=>{const{options:l,name:a,placeholder:d,hasError:s,value:t,handleValueChange:i,handleOnBlur:u,handleOnFocus:c,onEnter:p}=r;return n.jsxs(m,{name:a,value:t,hasError:s,onChange:i,onFocus:c,onBlur:u,onKeyDown:p,required:!0,children:[n.jsx("option",{value:"",disabled:!0,selected:!0,children:d}),l.map(o=>n.jsx("option",{value:o[1],children:o[0]}))]})};x.__docgenInfo={description:"",methods:[],displayName:"PaymentsSelectField"};export{x as P};
