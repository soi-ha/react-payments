import React, { Children, cloneElement, isValidElement } from "react";
import styled from "styled-components";
import { ERROR_MESSAGE } from "../../../constants/inputInfo";
import { useCheckLength } from "../../../hooks/useCheckLength";

interface InputGroupProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function InputGroup(props: InputGroupProps) {
  const { children, asChild } = props;
  const childrenList = Children.toArray(children);
  const { error, checkInputLength } = useCheckLength();

  return asChild &&
    isValidElement<{ children: React.ReactNode }>(childrenList[0]) ? (
    <>
      {cloneElement(childrenList[0], {
        children: childrenList[0].props.children,
      })}
      {error && <ErrorMessage>{ERROR_MESSAGE.COMMON}</ErrorMessage>}
    </>
  ) : (
    <>
      <GroupSection onBlur={checkInputLength}>{children}</GroupSection>
      {error && <ErrorMessage>{ERROR_MESSAGE.COMMON}</ErrorMessage>}
    </>
  );
}

const GroupSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
  margin-top: 0.5rem;

  ${({ theme }) => theme.fonts.body}

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 7px;
`;

const ErrorMessage = styled.strong`
  ${({ theme }) => theme.fonts.label}
  color : ${({ theme }) => theme.colors.error}
`;
