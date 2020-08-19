import React, { useState } from 'react'
import { postPlant } from '../services/plants'
import styled from 'styled-components'

const FormContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	background-image: url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80');
`

const FormBox = styled.form`
	width: 400px;
	padding: 40px;
	top: 50%;
	left: 50%;
	color: white;
	// transform: translate(-50%, -50%);
	background: #78e08f;
	background-image: linear-gradient(#73c8a9, #373b44);
	text-align: center;
	border-radius: 10px;
	margin-top: 100px;
	margin-bottom: 100px;
	box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
`

const StyledInput = styled.input`
	background-color: transparent;
	width: 100%;
	background: none;
	display: block;
	margin: 20px auto;
	text-align: center;
	border: 2px solid #0a3d62;
	padding: 14px 10px;
	outline: none;
	color: white;
	border-radius: 24px;
  transition: 0.25s;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  ::placeholder {
    color: white;
    font-family: 'Quicksand', sans-serif;

`

const StyledButton = styled.button`
	background-color: transparent;
	font-weight: 700;
	width: 100%;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	margin: 20px auto;
	text-align: center;
	border: 2px solid #0a3d62;
	padding: 14px 10px;
	outline: none;
	color: white;
	border-radius: 24px;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	transition: filter 0.2s ease-out;
	&:hover {
		filter: saturate(50%);
		background-color: #0a3d62;
	}
`

const StyledCategory = styled.select`
  background-color: transparent;
	width: 100%;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
	display: block;
	margin: 20px auto;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
	border: 2px solid #0a3d62;
	padding: 14px 10px;
	outline: none;
	color: white;
	border-radius: 24px;
  transition: 0.25s;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
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
        <StyledCategory name="plant_category_id" onChange={handleChange}> 
          <option selected disabled>Select Plant Category</option>
          {
            props.plantCategory.map(category => (
              <option value={category.id}>{category.name}</option>
            ))
        }
        </StyledCategory>
        <StyledInput
          name="name"
					type='text'
					placeholder='plant name'
					value={plantData.name}
					onChange={handleChange}
        />
         <StyledInput
          name="image_url"
					type='text'
					placeholder='image URL'
					value={plantData.image_url}
					onChange={handleChange}
				/>
        <StyledInput
          name="date_purchased"
					type='text'
					placeholder='date purchased'
					value={plantData.date_purchased}
					onChange={handleChange}
				/>
        <StyledInput
          name="location"
					type='text'
					placeholder='location'
					value={plantData.location}
					onChange={handleChange}
				/>
        <StyledInput
          name="temperature"
					type='text'
					placeholder='temperature'
					value={plantData.temperature}
					onChange={handleChange}
				/> <br />
				<label>
          choose your water frequency:
					<StyledInput
            name="water_frequency"
						type='text'
						placeholder='water frequency'
						value={plantData.water_frequency}
						onChange={handleChange}
          />
          <StyledInput
            name="food_frequency"
						type='text'
						placeholder='food frequency'
						value={plantData.food_frequency}
						onChange={handleChange}
					/>
				</label> <br />
				<StyledButton>create</StyledButton>
			</FormBox>
		</FormContainer>
	)
}
