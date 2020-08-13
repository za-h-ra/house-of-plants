import React from 'react'
import { Route } from 'react-router-dom'
import SignIn from '../../screens/SignIn

export default function main() {
	return (
    <main>
			<Route path='/signin' render={() => <SignIn />} />
		</main>
	)
}
