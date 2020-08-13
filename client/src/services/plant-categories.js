import api from './api-helper'

export const readAllPlantCategories = async () => {
	const resp = await api.get('/plant_categories')
	return resp.data
}

export const readOnePlantCategory = async (id) => {
	const resp = await api.get(`/plant_categories/${id}`)
	return resp.data
}

export const postPlantCategory = async (data) => {
	const resp = await api.post('/plant_categories', { category: data })
	return resp.data
}

export const putPlantCategory = async (id, data) => {
	const resp = await api.put(`/plant_categories/${id}`, { category: data })
	return resp.data
}

export const destoryPlantCategories = async (id) => {
	const resp = await api.delete(`/plant_categories/${id}`)
	return resp
}

export const addPlant = async (plantId, categoryId) => {
	const resp = await api.put(
		`/plants/${plantId}/plant_categories/${categoryId}`
	)
	return resp.data
}
