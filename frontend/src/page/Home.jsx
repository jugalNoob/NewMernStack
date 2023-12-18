import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'


function Home() {

  const {isLoggedIn}=useAuth()

  return (
    <div>
 <Link to="/">Home</Link>
 <br />

 <br />
 {isLoggedIn  ? <Link to="/logout">logout</Link>
 
: <>
 <Link to="/form">form</Link>
 <br />
 <Link to="/login">login</Link>
</>}

    </div>
  )
}

export default Home