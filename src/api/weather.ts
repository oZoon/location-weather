import qs from "qs"

import { WEATHER_KEY, WEATHER_PATH, WEATHER_QS, apiWeather } from "./base"
import { IResponse, WeatherParams, WeatherResponse } from "./types"

export const getWeatherData = async (
  p: WeatherParams
): Promise<WeatherResponse> => {
  const params = {
    ...p,
    ...WEATHER_QS,
    appid: WEATHER_KEY
  }

  const response: Promise<IResponse<WeatherResponse, WeatherParams>> =
    apiWeather.get(`${WEATHER_PATH}`, {
      params,
      paramsSerializer: (p) => qs.stringify(p)
    })

  return (await response).data
}
