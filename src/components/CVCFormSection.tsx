import useInput from '../hooks/useInput';
import validateInputAndSetErrorMessage from '../domains/validateInputAndSetErrorMessage';

import PaymentsFormTitle from './common/PaymentsFormTitle';
import PaymentsInputField from './common/PaymentsInputField';

import ERROR_MESSAGE from '../constants/errorMessage';
import OPTION from '../constants/option';
import REGEX from '../constants/regex';

import {
  FormSection,
  InputFieldContainer,
  InputForm,
  Label,
  ErrorMessage,
} from './style/FormSection';
import { useEffect } from 'react';

const CVCFormSection = () => {
  const {
    inputState,
    errorMessage,
    setInputState,
    setErrorMessage,
    handleValueChange,
    setFocus,
    setBlur,
    resetErrors,
  } = useInput({
    inputLength: OPTION.cvcInputCount,
    maxLength: OPTION.cvcMaxLength,
    regex: REGEX.numbers,
    errorText: ERROR_MESSAGE.onlyNumber,
  });

  useEffect(() => {
    resetErrors();
    if (!inputState[0].hasFocus)
      validateInputAndSetErrorMessage({
        inputState,
        setInputState,
        setErrorMessage,
        errorText: ERROR_MESSAGE.cvcOutOfRange,
      });
  }, [inputState[0].hasFocus]);

  return (
    <FormSection>
      <PaymentsFormTitle title="CVC 번호를 입력해 주세요" />
      <InputForm>
        <Label>CVC</Label>
        <InputFieldContainer className="input-field-container">
          <PaymentsInputField
            className="cvc-form-section"
            placeholder="123"
            maxLength={OPTION.cvcMaxLength}
            value={inputState[0].value}
            hasError={inputState[0].hasError}
            handleValueChange={(e) => handleValueChange(e, 0)}
            handleOnFocus={() => setFocus(0)}
            handleOnBlur={() => setBlur(0)}
          />
        </InputFieldContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputForm>
    </FormSection>
  );
};
export default CVCFormSection;