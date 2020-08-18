import React from 'react'
import PlantList from '../components/PlantList/PlantList'
import WaterPlant from '../components/WaterPlant/WaterPlant'

export default function Dashboard(props) {
	const { plantList, setPlantList } = props

	return (
		<div>
			{props.currentUser && (
				<>
          <PlantList
            plantList={plantList}
            setPlantList={setPlantList}
          />
				</>
			)}
		</div>
	)
}
