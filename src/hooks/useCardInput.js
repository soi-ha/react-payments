import { useCallback, useReducer } from 'react';
import { INPUT_ELEMENT_KEY_SEPARATOR } from '../utils/constants';

const cardInputReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_CARD_NUMBER': {
      const { key, cardNumber } = payload;
      return {
        ...state,
        cardNumber: { ...state.cardNumber, [`${key}`]: cardNumber },
      };
    }

    case 'CHANGE_EXPIRATION_DATE': {
      const { key, date } = payload;
      return {
        ...state,
        expirationDate: { ...state.expirationDate, [`${key}`]: date },
      };
    }

    case 'CHANGE_OWNER_NAME': {
      const { ownerName } = payload;
      return {
        ...state,
        ownerName,
      };
    }

    case 'CHANGE_PASSWORD_INPUT': {
      const { elementKey, value } = payload;
      const [stateName, stateKey] = elementKey.split(INPUT_ELEMENT_KEY_SEPARATOR);

      if (stateKey) {
        return { ...state, [`${stateName}`]: { ...state[stateName], [`${stateKey}`]: value } };
      }

      return { ...state, [`${stateName}`]: value };
    }

    case 'CHANGE_CARD_COMPANY': {
      const { cardType } = payload;
      return { ...state, cardType };
    }

    default:
      throw new Error();
  }
};

const defaultCardInputState = {
  cardNumber: {
    first: '',
    second: '',
    third: '',
    forth: '',
  },
  expirationDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  securityCode: '',
  password: {
    first: '',
    second: '',
  },
  cardType: null,
};

export const useCardInput = card => {
  const [cardInput, cardInputDispatch] = useReducer(
    cardInputReducer,
    card ? { ...card } : defaultCardInputState,
  );

  const getInputState = useCallback(
    key => {
      const [stateName, stateKey] = key.split(INPUT_ELEMENT_KEY_SEPARATOR);

      if (!stateKey) {
        return cardInput[stateName];
      }

      return cardInput[stateName][stateKey];
    },
    [cardInput],
  );

  return [cardInput, cardInputDispatch, getInputState];
};