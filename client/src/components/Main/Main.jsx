import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignUp from '../../screens/SignUp'
import SignIn from '../../screens/SignIn'

export default function main() {
	return (
    <main>
      <Switch>
        <Route exact path='/' />
        {/* <Route exact path='/about' render={} />
        <Route exact path='/signup' render={} /> */}
        <Route exact path='/signin' render={(props) => ( 
          <SignIn {...props} />
        )} />
      </Switch>
		</main>
	)
}
