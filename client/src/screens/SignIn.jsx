import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../services/auth'

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
    e.preventDault()
    const userData = await loginUser(loginData)
    props.setCurrentUser(userData)
  }

	return (
		<div>
      <form onSubmit={handleSubmit}>
        <h2>sign in!</h2>
				<input
          type='text'
          placeholder="username"
					name='username'
					value={loginData.username}
					onChange={handleChange}
				/>
				<input
          type='password'
          placeholder="password"
					name='password'
					value={loginData.password}
					onChange={handleChange}
				/>
				<Link>sign up!</Link>
				<button>submit</button>
			</form>
		</div>
	)
}
