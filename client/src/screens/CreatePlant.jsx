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

const StyledInput = styled.input`

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
    plant_category_id: ''
  })
  


	const handleChange = (e) => {
		const { value, name } = e.target
    setPlantData({
      ...plantData,
			[name]: value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const createPlant = await postPlant(plantData)
		props.setPlantList([...props.plantList, createPlant])
		props.history.push('/dashboard')
	}

	return (
		<FormContainer>
      <FormBox onSubmit={handleSubmit}>
      <h2>add your plant!</h2>
				{/* <input
					type='text'
					placeholder='select category'
					value={plantData.name}
					onChange={handleChange}
				/> */}
        <select name="plant_category_id" onChange={handleChange}> 
          <option selected disabled>Select Plant Category</option>
          {
            props.plantCategory.map(category => (
              <option value={category.id}>{category.name}</option>
            ))
        }
        </select>
        <input
          name="name"
					type='text'
					placeholder='plant name'
					value={plantData.name}
					onChange={handleChange}
        />
         <input
          name="image_url"
					type='text'
					placeholder='image URL'
					value={plantData.image_url}
					onChange={handleChange}
				/>
        <input
          name="date_purchased"
					type='text'
					placeholder='date purchased'
					value={plantData.date_purchased}
					onChange={handleChange}
				/>
        <input
          name="location"
					type='text'
					placeholder='location'
					value={plantData.location}
					onChange={handleChange}
				/>
        <input
          name="temperature"
					type='text'
					placeholder='temperature'
					value={plantData.temperature}
					onChange={handleChange}
				/> <br />
				<label>
          choose your water frequency:
					<input
            name="water_frequency"
						type='text'
						placeholder='water frequency'
						value={plantData.water_frequency}
						onChange={handleChange}
          />
          <input
            name="food_frequency"
						type='text'
						placeholder='food frequency'
						value={plantData.food_frequency}
						onChange={handleChange}
					/>
				</label> <br />
				<button>create</button>
			</FormBox>
		</FormContainer>
	)
}
