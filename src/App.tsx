import React from "react"
import { configure } from "mobx"

import "@/assets/common.css"
import "@/assets/lato.css"
import styled from "styled-components"
import { Search } from "./containers/Search"
import { Locality } from "./containers/Locality"
import { Weather } from "./containers/Weather"
configure({ enforceActions: "observed" })

export const App: React.FC = () => (
  <Container>
    <Search />
    <Locality />
    <Weather />
  </Container>
)

const Container = styled.div`
  display: flex;
  max-width: 920px;
  margin: 0 auto;
  margin-top: 12px;
  gap: 12px;
`
