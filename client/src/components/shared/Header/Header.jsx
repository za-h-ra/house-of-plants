import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <h1>House Of Plants</h1>
      <Link to='/signin'>Sign In</Link> <br/>
      <Link to='/signup'>Create an Account</Link>
    </div>
  )
}
