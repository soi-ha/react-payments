import { useMemo, useState } from 'react';
import { CardInfoContext } from '../context/CardInfoContext';

export const CardInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardCompany: null,
    cardNumber: ['', '', '', ''],
    expirationMonth: '',
    expirationYear: '',
    name: '',
    cvc: '',
    password: '',
  });

  const changeCardInfo = (newCardInfo: CardInfo) => {
    setCardInfo(newCardInfo);
  };

  const contextValue = useMemo(
    () => ({ cardInfo, changeCardInfo }),
    [cardInfo, changeCardInfo],
  );

  return (
    <CardInfoContext.Provider value={contextValue}>
      {children}
    </CardInfoContext.Provider>
  );
};
