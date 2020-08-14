import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn(props) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    })
  }
  
  return (
    <div>
      <form>
        <h2>sign in!</h2>
        <input type="text" name="username" value={login.username}  />
        <input type="password" name="password" value={login.password} />
        <Link>sign up</Link>
        <button>submit</button>
      </form>
      
    </div>
  )
}
