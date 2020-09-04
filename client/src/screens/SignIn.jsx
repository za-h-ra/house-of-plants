import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../services/auth'
import styled from 'styled-components'

const FormContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	background-image: url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80');
	@media only screen and (max-width: 768px) {
		display: unset;
	}
`

const FormBox = styled.form`
	width: 300px;
	padding: 40px;
	top: 50%;
	left: 50%;
	color: white;
	// transform: translate(-50%, -50%);
	background: #78e08f;
	background-image: linear-gradient(#73c8a9, #373b44);
	text-align: center;
	border-radius: 10px;
	margin-top: 100px;
	margin-bottom: 100px;
	box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
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
	border-radius: 24px;
  transition: 0.25s;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  ::placeholder {
    color: white;
    font-family: 'Quicksand', sans-serif;

`

const StyledButton = styled.button`
	background-color: transparent;
	font-weight: 700;
	width: 100%;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	margin: 20px auto;
	text-align: center;
	border: 2px solid #0a3d62;
	padding: 14px 10px;
	outline: none;
	color: white;
	border-radius: 24px;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	transition: filter 0.2s ease-out;
	&:hover {
		filter: saturate(50%);
		background-color: #0a3d62;
	}
`

const StyledLink = styled(Link)`
	color: white;
	text-decoration: underline;
	&:hover {
		color: #649173;
		text-decoration: underline;
	}
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
		props.history.push('/dashboard')
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
				<StyledButton>login</StyledButton>
				<StyledLink to='/signup'>sign up!</StyledLink>
			</FormBox>
		</FormContainer>
	)
}
