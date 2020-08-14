import React, { useState } from 'react'
import { registerUser } from '../services/auth'


export default function SignUp(props) {
  const [loginData, setLoginData] = useState({
    username: '',
    email: '',
		password: ''
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setLoginData({
			...loginData,
			[name]: value
		})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await registerUser(loginData)
    props.setCurrentUser(userData)
    props.history.push('/')
  }

	return (
		<div>
      <form onSubmit={handleSubmit}>
        <h2>sign up!</h2>
				<input
          type='text'
          placeholder="username"
					name='username'
					value={loginData.username}
					onChange={handleChange}
        />
        	<input
          type='text'
          placeholder="email"
					name='email'
					value={loginData.email}
					onChange={handleChange}
				/>
				<input
          type='password'
          placeholder="password"
					name='password'
					value={loginData.password}
					onChange={handleChange}
				/>
				<button>create account</button>
			</form>
		</div>
	)
}
