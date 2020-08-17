import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../services/auth'
import styled from 'styled-components'

const FormContainer = styled.div`
	display: flex;
	flex-flow: column;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80");
`

const FormBox = styled.form`
	width: 300px;
	padding: 40px;
	top: 50%;
	left: 50%;
	// transform: translate(-50%, -50%);
	background: #78e08f;
  text-align: center;
  border-radius: 5px;
  margin-top: 100px;
  margin-bottom: 100px;
`
const StyledInput = styled.input`
  background-color: transparent;
  width: 100%;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #0a3d62;
  padding: 14px 10px;
  outline: none;
  color: white;
`



export default function SignIn(props) {
	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setLoginData({
			...loginData,
			[name]: value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const userData = await loginUser(loginData)
		props.setCurrentUser(userData)
		props.history.push('/')
	}

	return (
		<FormContainer>
			<FormBox onSubmit={handleSubmit}>
				<h2>sign in!</h2>
				<StyledInput
					type='text'
					placeholder='username'
					name='username'
					value={loginData.username}
					onChange={handleChange}
				/>
				<StyledInput
					type='password'
					placeholder='password'
					name='password'
					value={loginData.password}
					onChange={handleChange}
				/>{' '}
				<br />
				<Link to='/signup'>sign up!</Link>
				<button>submit</button>
			</FormBox>
		</FormContainer>
	)
}
