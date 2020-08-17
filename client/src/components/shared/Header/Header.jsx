import React from 'react'
import { Link, useHistory, NavLink } from 'react-router-dom'
import { removeToken } from '../../../services/auth'
import Logo from '../Logo/Logo'
import styled from 'styled-components'

const NavBar = styled.nav`
  background-color: #006266;
  width: 100%;
  height: 90px;
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
`

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  a {
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    font-size: 15px;
    height: 20px;
    margin: 10px;
    text-align: center;
    &:hover, &.active {
      text-shadow: 0 0 .75px #ffd9da, 0 0 .75px #ffd9da;
    }
  }
`

export default function Header(props) {
	const history = useHistory()

	const handleLogout = () => {
		props.setCurrentUser(null)
		localStorage.removeItem('authToken')
		removeToken()
		history.push('/')
	}

	return (
		<NavBar>
			<Logo/>

			{props.currentUser ? (
				<>
					<p>hey, {props.currentUser.username}!</p>
					<button onClick={handleLogout}>logout</button>
				</>
			) : (
          <>
            <LinksContainer>
              <Link to="/about">about</Link>
              <Link to="/discover">discover</Link>
              <Link to='/signin'>sign in</Link>
              <Link to='/signup'>create an account</Link>
            </LinksContainer>
				</>
        )}
     
		</NavBar>
	)
}
