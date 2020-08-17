import React, { useState } from 'react'

export default function CreatePlant() {
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
    setPlantData({ name: value })
  }

  return (
    <form>
      <input type="text" value={plantData.name} onChange
    </form>
  )
}
