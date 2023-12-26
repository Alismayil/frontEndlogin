import React, { createContext, useEffect, useState } from 'react'
export const tokenContext=createContext()
import axios from 'axios'

function TokenProvider({children}) {


    useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token))
    }, [token])
    
    async function handleLogin(e) {
        e.preventDefault()
        const res = await axios.post('http://localhost:4000/login', {
          userName: userName,
          password: password
        })
        setToken(res.data)
        console.log(res.data);
      }

        


    return (
        <tokenContext.Provider value={{token , setToken,handleLogin, setUserName, setPassword}}>
            {children}
        </tokenContext.Provider>
    )
}

export default TokenProvider