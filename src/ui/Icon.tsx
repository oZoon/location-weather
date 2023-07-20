/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"

import Cross from "./icons/cross.svg"
import CheckboxChecked from "./icons/checkbox-checked.svg"

const Icons = {
  cross: Cross,
  checkboxChecked: CheckboxChecked,
}

type Props = {
  icon: IconName
}

export type IconName = keyof typeof Icons

export const Icon = ({ icon }: Props) => {
  const Component = Icons[icon]
  return <Component />
}
