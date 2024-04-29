import{j as s}from"./style-1oStNS6c.js";import{r as n}from"./index-CsdIBAqE.js";import{u as j,v as g}from"./validateAndCheckError-Dw9-aDp-.js";import{P as S}from"./PaymentsFormTitle-aKWCOdka.js";import{P as T}from"./PaymentsInputField-DyH0YpD3.js";import{F as L,I as P,L as M,a as V,O as u,E as A,b as c}from"./FormSection-DWAqeXpQ.js";import{R as _}from"./regex-BHDXXUrE.js";const N=({changeCardNumber:E,changeIsValid:l})=>{const{inputState:e,errorMessage:v,setInputState:i,setErrorMessage:d,handleValueChange:x,setFocus:y,setBlur:F,resetErrors:C}=j({inputLength:u.cardNumberInputCount,maxLength:u.cardNumberMaxLength,regex:_.numbers,errorText:c.onlyNumber}),[p,I]=n.useState(!0),m=[n.useRef(null),n.useRef(null),n.useRef(null),n.useRef(null)],R=(a,r)=>{var t;r.target.value.length===u.cardNumberMaxLength&&m[a].current&&((t=m[a+1].current)==null||t.focus())},O=a=>{a.key==="Enter"&&g({inputState:e,setInputState:i,setErrorMessage:d,changeIsValid:l,stateText:"cardNumber",errorText:c.cardNumberOutOfRange})};return n.useEffect(()=>{E([e[0].value,e[1].value,e[2].value,e[3].value]),I(Object.values(e).every(a=>!a.hasFocus))},[e]),n.useEffect(()=>{C(),p&&g({inputState:e,setInputState:i,setErrorMessage:d,changeIsValid:l,stateText:"cardNumber",errorText:c.cardNumberOutOfRange})},[p]),s.jsxs(L,{children:[s.jsx(S,{title:"결제할 카드 번호를 입력해 주세요",subTitle:"본인 명의의 카드만 결제 가능합니다."}),s.jsxs(P,{children:[s.jsx(M,{children:"카드번호"}),s.jsx(V,{className:"input-field-container",children:Array.from({length:u.cardNumberInputCount}).map((a,r)=>s.jsx(T,{placeholder:"1234",maxLength:u.cardNumberMaxLength,value:e[r].value,hasError:e[r].hasError,handleValueChange:t=>{x(t,r),R(r,t)},handleOnFocus:()=>y(r),handleOnBlur:()=>F(r),onEnter:t=>O(t),ref:m[r]},r))}),s.jsx(A,{children:v})]})]})};N.__docgenInfo={description:"",methods:[],displayName:"CardNumbersFormSection",props:{changeCardNumber:{required:!0,tsType:{name:"signature",type:"function",raw:"(cardNumber: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"cardNumber"}],return:{name:"void"}}},description:""},changeIsValid:{required:!0,tsType:{name:"signature",type:"function",raw:"({ state, isValid }: isValidProps) => void",signature:{arguments:[{type:{name:"isValidProps"},name:""}],return:{name:"void"}}},description:""}}};const K={title:"CardNumbersFormSection",component:N},o={args:{changeCardNumber:()=>{},changeIsValid:()=>{}}};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    changeCardNumber: () => {},
    changeIsValid: () => {}
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,K as default};