import React, { useState } from 'react'
import { postPlant } from '../services/plants'

export default function CreatePlant(props) {
  const [plantData, setPlantData] = useState({
    name: '',
    image_url: '',
    date_purchased: '',
    location: '',
    temperature: '',
    last_watered: '',
    water_frequency: '',
    food_frequency: '',
  })

  const handleChange = (e) => {
    const { value } = e.target
    setPlantData({
      name: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createPlant = await postPlant(plantData)
    props.setPlantList([
      ...props.plantList,
      createPlant
    ])
    props.history.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={plantData.name}
        onChange={handleChange} />
      <button>create</button>
    </form>
  )
}
