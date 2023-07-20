import axios from "axios"

export const HOPPER_URL = process.env.HOPPER_URL
export const HOPPER_PATH = process.env.HOPPER_PATH
export const HOPPER_KEY = process.env.HOPPER_KEY
export const HOPPER_QS = { locale: "ru" }

export const WEATHER_URL = process.env.WEATHER_URL
export const WEATHER_PATH = process.env.WEATHER_PATH
export const WEATHER_KEY = process.env.WEATHER_KEY
export const WEATHER_QS = { lang: "ru", units: "metric" }

export const apiHopper = axios.create({
  baseURL: HOPPER_URL
})

export const apiWeather = axios.create({
  baseURL: WEATHER_URL
})
