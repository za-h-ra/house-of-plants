import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import Home from '../Home'
import { readAllPlantCategories } from '../../services/plant-categories'

export default function Main(props) {
	const { setCurrentUser } = props

	const [plantCategory, setPlantCategory] = useState([])

	useEffect(() => {
		getPlantCategory()
	}, [])


	const getPlantCategory = async () => {
		const plantCatgeoryList = await readAllPlantCategories()
		setPlantCategory(plantCatgeoryList)
	}

	return (
		<main>
			<Switch>
				<Route exact path='/' />
				<Route
					exact
					path='/signin'
					render={(props) => (
						<SignIn {...props} setCurrentUser={setCurrentUser} />
					)}
				/>
				<Route
					exact
					path='/signup'
					render={(props) => (
						<SignUp {...props} setCurrentUser={setCurrentUser} />
					)}
        />
        
			</Switch>
		</main>
	)
}
