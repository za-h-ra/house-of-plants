import React, { useState } from 'react'
import { postPlant } from '../services/plants'
import styled from 'styled-components'

const FormContainer = styled.div`
	display: flex;
	flex-flow: column;
  align-items: center;
  justify-content: center;
`

const FormBox = styled.form`
  width: 400px;
	padding: 60px;
	top: 50%;
	left: 50%;
	text-align: center;
	border-radius: 10px;
	margin-top: 100px;
	margin-bottom: 100px;
	box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
`


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
			name: value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const createPlant = await postPlant(plantData)
		props.setPlantList([...props.plantList, createPlant])
		props.history.push('/')
	}

	return (
		<FormContainer>
      <FormBox onSubmit={handleSubmit}>
      <h2>add your plant!</h2>
				<input
					type='text'
					placeholder='select category'
					value={plantData.name}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='plant name'
					value={plantData.name}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='date purchased'
					value={plantData.name}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='location'
					value={plantData.name}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='temperature'
					value={plantData.name}
					onChange={handleChange}
				/> <br />
				<label>
					choose your water frequency:
					<input
						type='text'
						placeholder='daily'
						value={plantData.name}
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='weekly'
						value={plantData.name}
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='monthly'
						value={plantData.name}
						onChange={handleChange}
					/>
				</label> <br />
				<button>create</button>
			</FormBox>
		</FormContainer>
	)
}
