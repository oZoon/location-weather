import { action, makeAutoObservable, observable } from "mobx"

import { WeatherParams, WeatherResponse, getWeatherData } from "@/api"

class Weather {
  response: WeatherResponse | null = null

  constructor() {
    makeAutoObservable(this, {
      response: observable,
      set: action,
      reset: action,
      fetch: action
    })
  }

  get = () => {
    return this.response
  }

  set = (value: WeatherResponse) => {
    this.response = value
  }

  reset = () => {
    this.response = null
  }

  fetch = (params: WeatherParams) => {
    getWeatherData(params).then((json) => this.set(json))
  }
}

export const weather = new Weather()
