import { observer } from "mobx-react"
import React from "react"
import styled from "styled-components"

import { weather } from "@/store"
import { WeatherItem } from "@/components/WeatherItem"

export const Weather: React.FC = observer(() => {
  return <Container>
    <WeatherItem item={weather.get()} />
    {/* {weather.get()?.main.temp} */}
    </Container>
})

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 300px;
`
