import React from "react"
import styled from "styled-components"

import { HopperItem } from "@/api"
import { colors } from "@/assets/colors"
import { H14TitleCSS, H20TitleCSS } from "@/ui"

type Props = HopperItem & {
  selected: number | null
  onClick: (param: HopperItem) => void
}

export const CoordinateItem: React.FC<Props> = ({
  selected,
  onClick,
  ...item
}) => (
  <Container
    onClick={() => onClick(item)}
    isSelected={selected === item.osm_id}
  >
    <Name>{item.name}</Name>
    <Country>{item.country}</Country>
  </Container>
)

type ContainerProps = {
  isSelected: boolean
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  gap: 8px;
  padding: 12px 8px;
  background-color: ${({ isSelected }) =>
    isSelected ? colors.bisque : colors.transparent};

  &:hover {
    background-color: ${colors.light};
  }
`

const Name = styled.div`
  ${H20TitleCSS}
`

const Country = styled.div`
  ${H14TitleCSS}
`
