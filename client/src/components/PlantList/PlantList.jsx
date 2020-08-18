import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { destroyPlant } from '../../services/plants'

export default function PlantList(props) {
  const { plantList } = props
  
  const handleDelete = async (id) => {
    await destroyPlant(id)
    props.setPlantList(props.plants.filter((plant) => {
      return plant.id !== id
    }))
  }

	return (
		<>
			<h2>My Plants</h2>
			<p>
				you have <strong>{plantList.length}</strong> plants in your house
			</p>
      <Link to='/create-plant'>add a plant</Link><br />

			{plantList.map((plant) => (
				<div key={plant.id}>
					<img src={plant.image_url} /> <br/>
          <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
          <br />
          <Link to={`/plants/${plant.id}/update`}><button>update your plant</button></Link> 
          <br />
          <button onClick={() => handleDelete(plant.id)}>delete</button>
				</div>
			))}
		</>
	)
}
