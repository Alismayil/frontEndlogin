import React, { useContext, useState } from 'react'
import { tokenContext } from '../conext'

function LogInPage() {

  const {  handleLogin , setUserName,setPassword } = useContext(tokenContext)


  function handleUserName(e) {
    setUserName(e.target.value)
    console.log(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value)
    console.log(e.target.value);
  }


  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "100px" }}>
      <form onSubmit={(e) => handleLogin(e)} action="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
        <input required onChange={(e) => handleUserName(e)} type="text" placeholder='user' style={{ width: "300px", height: "30px" }} />
        <input required onChange={(e) => handlePassword(e)} type="text" placeholder='password' style={{ width: "300px", height: "30px" }} />
        <button type='submit' style={{ width: "307px", height: "30px" }}>LogIn</button>
      </form>
    </div>
  )
}

export default LogInPage