import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:"flex", gap:"30px", justifyContent:"center"}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>LogIn</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/profile"}>Profile</Link>
    </div>
  )
}

export default Navbar