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

const StyledLink = styled(Link)`
	color: white;
	text-decoration: none;
	font-weight: 700;
	&:hover {
		text-decoration: underline;
		color: #ff9068;
	}
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

`

const PlantDetails = styled.div`
  background: #079992;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin-top: 20px;
  padding: 2%;
  

`

const PlantLink = styled(Link)`
color: white;
text-transform: uppercase;
text-decoration: none;
font-weight: 600;
&:hover {
  text-decoration: underline;
}

`

const PlantImage = styled.img`
  height: 200px;
  width: 100%;
  text-align: center;
  
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
				<StyledLink to='/create-plant'>add a plant</StyledLink>
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
							<button>update your plant</button>
						</Link>
						<br />
						<button onClick={() => handleDelete(plant.id)}>delete</button>
					</PlantDetails>
				))}
			</PlantCard>
		</StyledDashboard>
	)
}
