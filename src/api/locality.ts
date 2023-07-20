import qs from "qs"

import { HOPPER_KEY, HOPPER_PATH, HOPPER_QS, apiHopper } from "./base"
import { HopperItem, HopperParams, HopperResponse, IResponse } from "./types"

export const getLocalityData = async (
  p: HopperParams
): Promise<HopperItem[]> => {
  const params = {
    ...p,
    ...HOPPER_QS,
    key: HOPPER_KEY
  }

  const response: Promise<IResponse<HopperResponse, HopperParams>> =
    apiHopper.get(`${HOPPER_PATH}`, {
      params,
      paramsSerializer: (p) => qs.stringify(p)
    })

  return (await response).data.hits
}
