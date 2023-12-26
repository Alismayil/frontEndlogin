import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const tokenRegisterContext=createContext()

function TokenRegisterProvider({children}) {

    const [userNameRegister, setUserNameRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const [tokenRegister, setTokenRegister] = useState("")

    async function handleRegister(e) {
        e.preventDefault()
        const res = await axios.post('http://localhost:4000/register', {
          userName: userNameRegister,
          password: passwordRegister
        })
        setTokenRegister(res.data)
        console.log(res.data);
      }
      
      
      useEffect(() => {
        localStorage.setItem("tokenRegister", JSON.stringify(tokenRegister))
        }, [tokenRegister])
      
        


    return (
        <tokenContext.Provider value={{tokenRegister , setTokenRegister,handleRegister, setUserNameRegister, setPasswordRegister}}>
            {children}
        </tokenContext.Provider>
    )
}

export default TokenRegisterProvider