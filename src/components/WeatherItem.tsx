import React from "react"
import styled from "styled-components"

import { WeatherResponse } from "@/api"
import { colors } from "@/assets/colors"
import { H14TitleCSS } from "@/ui"

export const WeatherItem: React.FC<{ item: WeatherResponse | null }> = ({
  item,
}) => {
  if (item === null) {
    return null
  }

  return (
    <Container>
      <Text>Состояние: {item.weather[0].description}</Text>
      <Text>Температура, С: {item.main.temp}</Text>
      <Text>Скорость ветра, м/с: {item.wind.speed}</Text>
      <Text>Направление ветра, градус: {item.wind.deg}</Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  gap: 8px;
  padding: 12px 8px;
  background-color: ${colors.transparent};
`

const Text = styled.div`
  ${H14TitleCSS}
`
