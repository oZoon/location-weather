import { observer } from "mobx-react"
import React from "react"
import styled from "styled-components"

import { locality, search, weather } from "@/store"
import { Button, Checkbox, Input } from "@/ui"

export const Search: React.FC = observer(() => {
  const handleReset = React.useCallback(() => {
    locality.reset()
    weather.reset()
  }, [])

  return (
    <Container>
      <Input
        value={search.get()}
        onChange={search.set}
        onSubmit={() =>
          search.get() !== "" ? locality.fetch(search.get()) : undefined
        }
        onClear={search.reset}
      />
      <Checkbox
        label="сохранять историю локаций"
        checked={locality.getKeepProps()}
        onChange={locality.setKeepProps}
      />
      <Button
        onClick={handleReset}
        disabled={locality.getCoords().length === 0}
      >
        Сбросить историю локаций
      </Button>
    </Container>
  )
})

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 394px;
  gap: 12px;
`
