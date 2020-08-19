import React, { useState, useEffect } from 'react'
import { readOnePlant } from '../services/plants'
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #079992;

	* {
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
`

const PlantCard = styled.div`
	cursor: pointer;
	width: 340px;
	height: 480px;
	color: white;
	display: flex;
	flex-flow: column;
	align-items: center;
	width: 500px;
	height: 700px;
  justify-content: center;
  background-color: #78e08f;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

const PlantImage = styled.img`
	object-fit: cover;
	height: 400px;
	width: 400px;
`

const PlantCardDetails = styled.div`
  padding: 40px 10px;
  
`

const TextBox = styled.p`
  font-weight: 500;
`

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
		<PageContainer>
			{onePlant && (
				<PlantCard>
					<PlantImage src={onePlant.image_url} />
					<PlantCardDetails>
						<h3>{onePlant.name}</h3>
						<p>{onePlant.plant_category.name}</p>
						<p>{onePlant.date_purchased}</p>
						<p>{onePlant.location}</p>
						<p>{onePlant.temperature}</p>
            <p>{onePlant.last_watered}</p>
            <br />
            <TextBox>How Often I need to feed my plant:</TextBox>
						<p><strong>Water:</strong> {onePlant.water_frequency}</p>
						<p><strong>Fertilizer:</strong> {onePlant.food_frequency}</p>
					</PlantCardDetails>
				</PlantCard>
			)}
		</PageContainer>
	)
}
