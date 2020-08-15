import React from 'react'
import { Link } from 'react-router-dom'

export default function PlantCategoryList(props) {
  return (
    <>
      <h2>My Plants</h2> 
      <p>you have <strong>8</strong> plants in your house</p>
      <Link to="/create-plant">add a plant</Link>

      {props.PlantCategory && props.PlantCategory.map((category) => (
      <p>{category.name}</p>
      ))}
      
    </>
  )
}
