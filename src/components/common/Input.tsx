import React from 'react';
import styled from 'styled-components';
import { InputType } from '../../types/type';

interface InputProps {
  type?: InputType;
  underLine?: boolean;
  placeHolder?: string;
  width?: string;
  height?: string;
  innerRef?: React.RefObject<HTMLInputElement>;
}

const StyledInput = styled.input<InputProps>`
  border: none;
  border-bottom: ${(props) => (props.underLine ? '2px solid black;' : 'none')};
  text-align: center;
  font-size: 18px;
  width: ${(props) => props.width || '240px'};
  height: ${(props) => props.height || '22px'};
  padding-bottom: 3px;
`;

const Input = ({
  type,
  underLine,
  placeHolder = '입력해주세요.',
  width,
  height,
  innerRef,
  ...rest
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      underLine={underLine}
      placeholder={placeHolder}
      width={width}
      height={height}
      ref={innerRef}
      {...rest}
      className="input-box"
    />
  );
};

export default Input;