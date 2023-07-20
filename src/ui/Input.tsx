import React from "react"
import styled from "styled-components"

import { Button } from "./Button"
import { H14TitleCSS } from "./typography"
import { Icon } from "./Icon"
import { colors } from "@/assets/colors"

type InputProps = {
  value: string
  onChange: (str: string) => void
  onSubmit: () => void
  onClear: () => void
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onSubmit,
  onClear,
}) => {
  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit()
    },
    [onSubmit]
  )

  return (
    <InputWrapper onSubmit={handleSubmit}>
      <InputField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Введите название локации"
      />
      {value.length > 0 && (
        <IconWrapper onClick={onClear}>
          <Icon icon="cross" />
        </IconWrapper>
      )}
      <Button onClick={onSubmit}>Отправить</Button>
    </InputWrapper>
  )
}

const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  position: relative;
`

const InputField = styled.input`
  padding: 6px 12px;
  border: 1px solid ${colors.gray};
  ${H14TitleCSS}
  height: 30px;
  width: 100%;
  box-sizing: border-box;

  &:active,
  &:focus {
    border: 1px solid ${colors.gray};
    outline: none;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  right: 115px;
  top: 3px;
  cursor: pointer;
`
