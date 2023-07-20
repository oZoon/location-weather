import { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios"

export interface IResponse<D, R> {
  data: D
  status: number
  statusText: string
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders
  request: R
}

export type HopperParams = {
  q: string
}

export type HopperPoint = {
  lat: number // 55.7504461,
  lng: number // 37.6174943
}

export type HopperItem = {
  point: HopperPoint
  extent: number[]
  name: string // "Москва",
  country: string // "Россия",
  countrycode: string // "RU",
  state: string // "Москва",
  osm_id: number // 2555133,
  osm_type: string // "R",
  osm_key: string // "place",
  osm_value: string // "city"
}

export type HopperResponse = {
  hits: HopperItem[]
  locale: string
}

export type WeatherParams = {
  lat: number
  lon: number
}

export type WeatherResponse = {
  coord: {
    lon: number // 37.6175,
    lat: number // 55.7504
  }
  weather: [
    {
      id: number // 500,
      main: string // "Rain",
      description: string // "небольшой дождь",
      icon: string // "10d"
    }
  ]
  base: string // "stations",
  main: {
    temp: number // 289.5,
    feels_like: number // 289.67,
    temp_min: number // 289.11,
    temp_max: number // 290.95,
    pressure: number // 1011,
    humidity: number // 95,
    sea_level: number // 1011,
    grnd_level: number // 994
  }
  visibility: number // 10000,
  wind: {
    speed: number // 3.93,
    deg: number // 331,
    gust: number // 8.84
  }
  rain: {
    "1h": number // 0.17
  }
  clouds: {
    all: number // 100
  }
  dt: number // 1689415602,
  sys: {
    type: number // 1,
    id: number // 9029,
    country: string // "RU",
    sunrise: number // 1689383112,
    sunset: number // 1689444315
  }
  timezone: number // 10800,
  id: number //  524925,
  name: string // "Московская область",
  cod: number // 200
}
