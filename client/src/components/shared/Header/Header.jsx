import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      
      <h1>House Of Plants</h1>

      {
        props.currentUser ? (
          <>
            <p>{props.currentUser.username}</p>
            <button>logout</button>
          </>
        ) : (
          <>
            <Link to='/signin'>Sign In</Link> <br />
            <Link to='/signup'>Create an Account</Link>
          </>
        )
      }
      
    </header>
    
  )
}
