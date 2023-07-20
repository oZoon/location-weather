import React from "react"
import styled from "styled-components"

import { Icon } from "./Icon"
import { colors } from "@/assets/colors"
import { H14TitleCSS } from "./typography"

type CheckboxProps = {
  label: string
  checked: boolean
  onChange: (value: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}) => (
  <Wrapper>
    <InputWrapper checked={checked}>
      <Input
        checked={checked}
        type="checkbox"
        onChange={() => onChange(!checked)}
      />
      {checked && (
        <IconWrapper>
          <Icon icon="checkboxChecked" />
        </IconWrapper>
      )}
    </InputWrapper>
    <Text>{label}</Text>
  </Wrapper>
)

const Wrapper = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  color: inherit;
  cursor: pointer;
  gap: 8px;
  width: 100%;
`

type InputWrapperProps = {
  checked?: boolean
}

const InputWrapper = styled.div<InputWrapperProps>`
  height: 14px;
  width: 14px;
  border: solid 1px ${({ checked }) => (checked ? colors.black : colors.gray)};
  border-radius: 0;
  position: relative;
`

const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`

const Text = styled.span`
  ${H14TitleCSS}
`

const IconWrapper = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
`
