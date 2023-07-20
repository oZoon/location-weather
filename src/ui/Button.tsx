import React from "react"
import styled from "styled-components"

import { colors } from "@/assets/colors"
import { H14TitleCSS } from "./typography"

type Props = {
  onClick: () => void
  children: string | JSX.Element
  disabled?: boolean
}

export const Button: React.FC<Props> = ({
  onClick,
  children,
  disabled = false,
}) => (
  <Wrapper onClick={onClick} type="button" disabled={disabled}>
    {children}
  </Wrapper>
)

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  transition: all 0.15s linear;
  ${H14TitleCSS}
  height: 30px;
  padding: 6px 12px;
  margin: 0;
  border: 1px solid ${colors.gray};
  background-color: ${colors.transparent};
  color: ${colors.black};
  cursor: pointer;

  &:hover {
    background-color: ${colors.black};
    color: white;
    border: 1px solid ${colors.black};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;

    &:hover {
      background-color: ${colors.transparent};
      color: ${colors.black};
      border: 1px solid ${colors.gray};
    }
  }
`
