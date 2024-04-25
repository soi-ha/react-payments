import { useState } from 'react';

interface Props {
  inputLength: number;
  errorText: string;
}

const useSelect = ({ inputLength }: Props) => {
  const initializeInputFieldState = (length: number) => {
    return Array.from({ length }, (_, index) => ({
      value: '',
      hasError: false,
      hasFocus: index === 0,
    })).reduce((acc, curr, index) => {
      acc[index] = curr;
      return acc;
    }, {} as InputStates);
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [inputState, setInputState] = useState<InputStates>(
    initializeInputFieldState(inputLength),
  );

  const handleValueChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number,
  ) => {
    const newValue = e.target.value;
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        value: newValue,
      },
    }));
  };

  const setFocus = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: true,
      },
    }));
  };

  const setBlur = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: false,
      },
    }));
  };

  const resetErrors = () => {
    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = inputState[key];
      acc[key] = { ...field, hasError: false };
      return acc;
    }, {});
    setInputState(newState);
    setErrorMessage('');
  };

  return {
    inputState,
    errorMessage,
    setInputState,
    setErrorMessage,
    handleValueChange,
    setFocus,
    setBlur,
    resetErrors,
  };
};

export default useSelect;