import api from './api-helper'

export const readAllPlants = async () => {
  const resp = await api.get('/plants')
  return resp.data
}