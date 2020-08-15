import React from 'react'
import PlantList from '../components/PlantList/PlantList'
import WaterPlant from '../components/WaterPlant/WaterPlant'


export default function Dashboard(props) {
  const { plantList } = props

  return (
    <div>
      {
        props.currentUser &&
        <>
          <WaterPlant />
          <PlantList
            plantList={plantList}/>
        </>
      }
    </div>
  )
}
