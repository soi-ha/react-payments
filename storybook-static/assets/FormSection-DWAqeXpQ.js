import{u as t,S as e}from"./style-1oStNS6c.js";function l(n){let a=!1,o=!1;return Object.keys(n).map(i=>{const r=n[i];r.hasError&&(a=!0),r.isFilled||(o=!0)}),!(a||o)}const c={onlyNumber:"숫자만 입력 가능합니다.",cardNumberOutOfRange:"카드번호는 16자의 숫자여야 합니다.",expiredCard:"유효기간이 만료된 카드입니다.",expiryFormat:"유효기간은 4자리(MM/YY) 숫자여야 합니다.",onlyEnglish:"영어만 입력 가능합니다.",cvcOutOfRange:"cvc는 3자리 숫자여야 합니다.",nameOutOfRange:"소유자 이름은 50자 이내여야 합니다.",passwordOutOfRange:"비밀번호는 2자리 숫자여야 합니다.",notChoiceCardCompany:"카드사를 선택하지 않았습니다."},p={cardNumberInputCount:4,cardNumberMaxLength:4,expirationDateInputCount:2,expirationDateMaxLength:2,nameInputCount:1,nameMaxLength:50,cvcInputCount:1,cvcMaxLength:3,passwordInputCount:1,passwordMaxLength:2,cardCompanyInputCount:1,minMonth:"01",maxMonth:"12"},u=[["BC카드","BC"],["신한카드","shinhan"],["카카오뱅크","kakao"],["현대카드","hyundai"],["우리카드","woori"],["롯데카드","lotte"],["하나카드","kebhana"],["국민카드","kbstar"]],d=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,h=t.div`
  display: flex;
  width: 100%;
  gap: 8px;
`,x=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,f=t.div`
  font-size: ${e.FONT_SIZE.label};
  font-weight: ${e.BOLD.label};
  line-height: 15px;
  text-align: left;
  color: ${e.COLOR.black};
`,g=t.div`
  height: 12px;
  color: ${e.COLOR.red};
  font-size: 9.5px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
`;export{u as C,g as E,d as F,x as I,f as L,p as O,h as a,c as b,l as c};
