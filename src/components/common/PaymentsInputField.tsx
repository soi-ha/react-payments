import Input from '../style/PaymentsInputField.style';

const PaymentsInputField = ({ ...props }: PaymentsInputFieldProps) => {
  const {
    placeholder,
    maxLength,
    value,
    hasError,
    handleValueChange,
    handleOnBlur,
    handleOnFocus,
    className,
    width,
    type,
  } = props;

  return (
    <Input
      className={className}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      maxLength={maxLength}
      placeholder={placeholder}
      hasError={hasError}
      value={value}
      onChange={handleValueChange}
      width={width}
      type={type}
    />
  );
};

export default PaymentsInputField;
