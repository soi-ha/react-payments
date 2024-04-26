import { useState } from 'react';
import useRender from '../hooks/useRender';

import Container from './style/CardInfo.style';
import CardNumbersFormSection from './CardNumbersFormSection';
import ExpirationDateFormSection from './ExpirationDateFormSection';
import NameFormSection from './NameFormSection';
import CardCompanyFormSection from './CardCompanyFormSection';
import CVCFormSection from './CVCFormSection';
import PasswordFormSection from './PasswordFormSection';
import Button from './common/Button';
import { STEP } from '../constants/option';

interface Props {
  cardCompany: boolean;
  cardNumber: boolean;
  expirationDate: boolean;
  name: boolean;
  cvc: boolean;
  password: boolean;
}

const CardInfo = ({ ...props }) => {
  const { changeCardInfo } = props;

  const [isValid, setIsValid] = useState<Props>({
    cardCompany: false,
    cardNumber: false,
    expirationDate: false,
    name: false,
    cvc: false,
    password: false,
  });

  const stepList = Object.values(STEP);

  const { renderComponent, setRender } = useRender({
    children: stepList,
  });

  const [step, setStep] = useState(0);

  const changeIsValid = ({ state, isValid }: isValidProps) => {
    setIsValid((prev) => ({ ...prev, [state]: isValid }));

    if (isValid) {
      setRender(state as Step);
    }
  };

  if (renderComponent && stepList.indexOf(renderComponent) + 1 > step) {
    setStep((prev) => prev + 1);
  }

  const changePassword = (password: string) => {
    changeCardInfo((prev: CardInfo) => ({ ...prev, password: password }));
  };

  const changeCVC = (cvc: string) => {
    changeCardInfo((prev: CardInfo) => ({ ...prev, cvc: cvc }));
  };

  const changeCardCompany = (cardCompany: string) => {
    changeCardInfo((prev: CardInfo) => ({ ...prev, cardCompany: cardCompany }));
  };

  const changeCardNumber = (cardNumber: string[]) => {
    changeCardInfo((prev: CardInfo) => ({ ...prev, cardNumber: cardNumber }));
  };

  const changeExpiration = ({ month, year }: ChangeExpirationProps) => {
    changeCardInfo((prev: CardInfo) => ({
      ...prev,
      expirationMonth: month,
      expirationYear: year,
    }));
  };

  const changeName = (name: string) => {
    changeCardInfo((prev: CardInfo) => ({ ...prev, name: name }));
  };

  return (
    <Container>
      <CardNumbersFormSection
        changeCardNumber={changeCardNumber}
        changeIsValid={changeIsValid}
      />

      {step >= 1 && (
        <CardCompanyFormSection
          changeCardCompany={changeCardCompany}
          changeIsValid={changeIsValid}
        />
      )}

      {step >= 2 && (
        <ExpirationDateFormSection
          changeExpiration={changeExpiration}
          changeIsValid={changeIsValid}
        />
      )}

      {step >= 3 && (
        <NameFormSection
          changeName={changeName}
          changeIsValid={changeIsValid}
        />
      )}
      {step >= 4 && (
        <CVCFormSection changeCVC={changeCVC} changeIsValid={changeIsValid} />
      )}
      {step >= 5 && (
        <PasswordFormSection
          changePassword={changePassword}
          changeIsValid={changeIsValid}
        />
      )}

      {Object.values(isValid).every((state) => state) && (
        <Button text="확인" floating />
      )}
    </Container>
  );
};

export default CardInfo;
