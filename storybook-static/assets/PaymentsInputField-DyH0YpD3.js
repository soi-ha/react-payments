import{u as x,S as r,j as O}from"./style-1oStNS6c.js";import{r as m}from"./index-CsdIBAqE.js";const $=x.input`
  font-family: ${r.FONT_FAMILY_INTER};
  width: ${o=>o.width?`${o.width}px`:"100%"};
  padding: 8px;
  border-radius: 2px;
  border: ${o=>o.hasError?`solid 1px ${r.COLOR.red}`:`solid 1px ${r.COLOR.gray170}`};

  &:focus {
    outline: none;
    border: ${o=>o.hasError?`solid 1px ${r.COLOR.red}`:`solid 1px ${r.COLOR.black}`};
  }

  &::placeholder {
    color: ${r.COLOR.gray170};
  }
`,f=m.forwardRef((o,e)=>{const{placeholder:n,maxLength:a,value:s,hasError:t,handleValueChange:d,handleOnBlur:l,handleOnFocus:i,onEnter:p,className:u,width:h,type:c}=o;return O.jsx($,{onKeyDown:p,className:u,onFocus:i,onBlur:l,maxLength:a,placeholder:n,hasError:t,value:s,onChange:d,width:h,type:c,ref:e})});f.__docgenInfo={description:"",methods:[],displayName:"PaymentsInputField"};export{f as P};
