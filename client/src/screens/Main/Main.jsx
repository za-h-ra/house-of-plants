import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../About'
import Home from '../Home'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import Dashboard from '../Dashboard'
import { readAllPlants } from '../../services/plants'
import CreatePlant from '../CreatePlant'
import { readAllPlantCategories } from '../../services/plant-categories'

export default function Main(props) {
	const { setCurrentUser, currentUser } = props
  const [plantList, setPlantList] = useState([])
  const [plantCategory, setPlantCategory] = useState([])

  useEffect(() => {
    if (currentUser) {
      getPlantList()
      getPlantCategory()
     }
	}, [currentUser])


	const getPlantList = async () => {
		const plantList = await readAllPlants()
		setPlantList(plantList)
  }
  
  const getPlantCategory = async () => {
    const plantCategory = await readAllPlantCategories()
    setPlantCategory(plantCategory)
  }

	return (
    <main>
      <Route
					exact
					path='/'
					render={(props) => (
            <Home
              {...props}
              setCurrentUser={setCurrentUser} />
					)}
				/>
				<Route
					exact
					path='/signin'
					render={(props) => (
            <SignIn {...props}
              setCurrentUser={setCurrentUser} />
					)}
				/>
				<Route
					exact
					path='/signup'
					render={(props) => (
						<SignUp {...props} setCurrentUser={setCurrentUser} />
					)}
        />
      <Route exact path='/dashboard' render={(props) => (
        <Dashboard
          currentUser={currentUser}
          plantList={plantList}
          />
      )} />
      
      <Route exact path='/create-plant' render={(props) => (
        <CreatePlant
          {...props}
          currentUser={currentUser}
          plantList={plantList}
          setPlantList={setPlantList}
          plantCategory={plantCategory}
          />
        )} />
		</main>
	)
}
