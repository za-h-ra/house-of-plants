import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { destroyPlant } from '../../services/plants'
import AddButton from '../AddButton/AddButton'

const StyledDashboard = styled.div`
	background-color: #73c8a9;
  transition: 0.6s linear;

	* {
		box-sizing: border-box;
	}
`

const HeadingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: auto;
	padding: 0px 100px;
`
const StyledHeading = styled.h2`
	color: white;
	font-size: 40px;
`



const TagLine = styled.p`
	color: white;
	text-align: center;
	font-size: 20px;

	span {
		font-weight: 700;
	}
`

const PlantCard = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 flex-wrap: wrap;
 text-align: center;

`

const PlantDetails = styled.div`
  background-image: linear-gradient(#fad390, #b71540);
  width: 400px;
  text-align: center;
  margin-top: 20px;
  padding: 2%;
  
`

const PlantImage = styled.img`
  object-fit: cover;
  height: 300px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  
`

const PlantLink = styled(Link)`
color: white;
text-transform: uppercase;
text-decoration: none;
font-weight: 600;
font-size: 20px;
letter-spacing: 2px;
&:hover {
  text-decoration: underline;
}
`

const StyledButton = styled.button`
  background-color: #0a3d62;
  margin: 10px auto;
  font-family: 'Quicksand', sans-serif;
  color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  text-align: center;
  outline: none;
  border: none;
  border-radius: 25px;
  padding: 10px 10px;
  font-weight: 500;
  &:hover {
    background-color: #3c6382;
  }

`

export default function PlantList(props) {
	const { plantList } = props

	const handleDelete = async (id) => {
		await destroyPlant(id)
		props.setPlantList(
			props.plantList.filter((plant) => {
				return plant.id !== id
			})
		)
	}

	return (
		<StyledDashboard>
			<HeadingContainer>
				<StyledHeading>My Plants</StyledHeading>
				<Link to='/create-plant'><AddButton/></Link>
			</HeadingContainer>

			<TagLine>
				you have <span>{plantList.length}</span> plants in your house
			</TagLine>
			<br />
			<PlantCard>
				{plantList.map((plant) => (
					<PlantDetails key={plant.id}>
						<PlantImage src={plant.image_url} /> <br />
						<PlantLink to={`/plants/${plant.id}`}>{plant.name}</PlantLink>
						<br />
						<Link to={`/plants/${plant.id}/update`}>
              <StyledButton>update your plant</StyledButton>
						</Link>
						<br />
						<StyledButton onClick={() => handleDelete(plant.id)}>delete</StyledButton>
					</PlantDetails>
				))}
			</PlantCard>
		</StyledDashboard>
	)
}
