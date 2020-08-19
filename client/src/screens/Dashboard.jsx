import React from 'react'
import PlantList from '../components/PlantList/PlantList'
import WaterPlant from '../components/WaterPlant/WaterPlant'
import styled from 'styled-components'

const DashboardContainer = styled.div`
  background-color: #73c8a9;
  *{
    box-sizing: border-box;
  }

`


export default function Dashboard(props) {
	const { plantList, setPlantList } = props

	return (
		<DashboardContainer>
			{props.currentUser && (
				<>
          <PlantList
            plantList={plantList}
            setPlantList={setPlantList}
          />
				</>
			)}
		</DashboardContainer>
	)
}
