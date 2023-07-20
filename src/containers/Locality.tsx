import { observer } from "mobx-react"
import React from "react"
import styled from "styled-components"

import { HopperItem } from "@/api"
import { CoordinateItem } from "@/components/CoordinateItem"
import { locality, weather } from "@/store"

export const Locality: React.FC = observer(() => {
  const handleSelect = React.useCallback((params: HopperItem) => {
    locality.setSelected(params.osm_id)
    weather.fetch({ lat: params.point.lat, lon: params.point.lng })
  }, [])

  if (locality.getCoords().length === 0) {
    return null
  }

  return (
    <Container>
      {locality.getCoords().map((item) => (
        <CoordinateItem
          key={`${item.osm_id}-${item.osm_key}`}
          {...item}
          onClick={handleSelect}
          selected={locality.getSelected()}
        />
      ))}
    </Container>
  )
})

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 194px;
  gap: 4px;
`
