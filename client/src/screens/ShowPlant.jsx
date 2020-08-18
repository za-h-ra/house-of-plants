import React, { useState, useEffect } from 'react'
import { readOnePlant } from '../services/plants'

export default function ShowPlant(props) {

  const [onePlant, setOnePlant] = useState(null)

  useEffect(() => {
    getPlant()
  }, [])

  const getPlant = async () => {
    const plantItem = await readOnePlant(props.match.params.id)
    setOnePlant(plantItem)
  }

  return (
    <div>
      {
        onePlant && ( 
          <>
            <img src={onePlant.image_url}/>
            <h3>{onePlant.name}</h3>
            <p>{onePlant.plant_category.name}</p>
            <p>{onePlant.date_purchased}</p>
            <p>{onePlant.location}</p>
            <p>{onePlant.temperature}</p>
            <p>{onePlant.last_watered}</p>
            <p>{onePlant.water_frequency}</p>
            <p>{onePlant.food_frequency}</p>
            </>
        )
      }
    </div>
  )
}
