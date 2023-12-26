import React, { useContext } from 'react'
import { tokenRegisterContext } from '../registerContext';


const {  handleRegister , setUserNameRegister,setPasswordRegister } = useContext(tokenRegisterContext)



function RegisterPage() {

  function handleRegisterUserName(e) {
    setUserNameRegister(e.target.value)
    console.log(e.target.value);
  }
  
  function handleRegisterPassword(e) {
    setPasswordRegister(e.target.value)
    console.log(e.target.value);
  }

  
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
    <form action="" onClick={(e)=>handleRegister(e)} style={{display:"flex", flexDirection:"column", justifyContent:"center", gap:"10px"}}>
      <input type="text" onChange={(e) => handleRegisterUserName(e)} placeholder='user' style={{width:"300px", height:"30px"}} />
      <input type="text" onChange={(e) => handleRegisterPassword(e)} placeholder='password' style={{width:"300px", height:"30px"}} />
      <button type='submit' style={{width:"307px", height:"30px"}}>Register</button>
    </form>
  </div>
  )
}

export default RegisterPage