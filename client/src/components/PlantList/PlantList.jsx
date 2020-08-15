import React from 'react'
import { Link } from 'react-router-dom'

export default function PlantList(props) {
	const { plantList } = props
	return (
		<>
			<h2>My Plants</h2>
			<p>
				you have <strong>{plantList.length}</strong> plants in your house
			</p>
			<Link to='/create-plant'>add a plant</Link>

			{plantList.map((plant) => (
				<div key={plant.id}>
					<img src={plant.image_url} />
					<p>{plant.name}</p>
				</div>
			))}
		</>
	)
}
