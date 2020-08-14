import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignUp from '../../screens/SignUp'
import SignIn from '../../screens/SignIn'

export default function main(props) {
  const {setCurrentUser} = props
  
  return (
    <main>
      <Switch>
        <Route exact path='/' />
        <Route exact path='/signin' render={(props) => ( 
          <SignIn
            {...props}
            setCurrentUser={setCurrentUser}/>
        )} />
        <Route exact path='/signup' render={(props) => ( 
          <SignUp
            {...props}
            setCurrentUser={setCurrentUser}/>
        )} />
      </Switch>
		</main>
	)
}
