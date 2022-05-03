import { useContext } from 'react';
import styled from 'styled-components';

import { CardNumberContext } from '../../../context/CardNumberContext';
import { ExpiredDateContext } from '../../../context/ExpiredDateContext';
import { CardOwnerContext } from '../../../context/CardOwnerContext';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 213px;
  height: 133px;
  padding: 14px 14px 0;
  background-color: #d2d2d2;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

export const CardCompanyName = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #383838;
`;

export const IC = styled.div`
  width: 40px;
  height: 26px;
  margin-top: 16px;
  background: #cbba64;
  border-radius: 4px;
`;

export const CardNumberContainer = styled.p`
  display: flex;
  justify-content: center;
  gap: 5px;
  height: 10px;
  margin-top: 15px;
  font-weight: 700;
  font-size: 13px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #525252;
`;

export const CardBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
  margin-top: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #525252;
`;

export const CardOwnerName = styled.span`
  word-break: break-all;
`;

function Card() {
  const companyName = '신한카드';
  const { cardNumberString } = useContext(CardNumberContext);
  const { expiredDateString } = useContext(ExpiredDateContext);
  const { ownerNameString } = useContext(CardOwnerContext);

  return (
    <CardContainer>
      <CardCompanyName>{companyName}</CardCompanyName>
      <IC />
      <CardNumberContainer>{cardNumberString}</CardNumberContainer>
      <CardBottomContainer>
        <CardOwnerName>{ownerNameString}</CardOwnerName>
        <span>{expiredDateString}</span>
      </CardBottomContainer>
    </CardContainer>
  );
}

export default Card;