import api from './api-helper'

export const readAllPlants = async () => {
  const resp = await api.get('/plants')
  return resp.data
}

export const postPlant = async (data) => {
	const resp = await api.post('/plants', { plant: data })
	return resp.data
}

