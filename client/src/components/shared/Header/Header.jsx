import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { removeToken } from '../../../services/auth'
import PlantProgress from '../../PlantProgress/PlantProgress'
import Logo from '../Logo/Logo'

export default function Header(props) {
	const history = useHistory()

	const handleLogout = () => {
		props.setCurrentUser(null)
		localStorage.removeItem('authToken')
		removeToken()
		history.push('/')
	}

	return (
		<header>
			<Logo/>

			{props.currentUser ? (
				<>
					<p>hey, {props.currentUser.username}!</p>
					<button onClick={handleLogout}>logout</button>
				</>
			) : (
				<>
					<Link to='/signin'>Sign In</Link> <br />
					<Link to='/signup'>Create an Account</Link>
				</>
        )}
      <hr />
      {
        props.currentUser && (
          <>
            <PlantProgress />
          </>
        )
      }
		</header>
	)
}
