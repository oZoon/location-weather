import { action, makeAutoObservable, observable } from "mobx"

import { getLocalityData, HopperItem } from "@/api"

export class Locality {
  isKeepResults = true
  locationArray: HopperItem[] = []
  selectedOsmId: number | null = null

  constructor() {
    makeAutoObservable(this, {
      isKeepResults: observable,
      locationArray: observable,
      selectedOsmId: observable,
      setKeepProps: action,
      setCoords: action,
      reset: action,
      fetch: action,
      setSelected: action
    })
  }

  getKeepProps = () => {
    return this.isKeepResults
  }

  setKeepProps = (value: boolean) => {
    this.isKeepResults = value
  }

  getCoords = () => {
    return this.locationArray
  }

  setCoords = (result: HopperItem[]) => {
    if (this.isKeepResults) {
      const osmIds = this.locationArray.map((item) => item.osm_id)
      result.forEach((item) => {
        if (!osmIds.includes(item.osm_id)) {
          this.locationArray.push(item)
          osmIds.push(item.osm_id)
        }
      })
    } else {
      this.reset()
      this.locationArray = result
    }
  }

  reset = () => {
    this.locationArray = []
  }

  fetch = (q: string) => {
    getLocalityData({ q }).then((json) => this.setCoords(json))
  }

  getSelected = () => {
    return this.selectedOsmId
  }

  setSelected = (item: number) => {
    this.selectedOsmId = item
  }
}

export const locality = new Locality()
