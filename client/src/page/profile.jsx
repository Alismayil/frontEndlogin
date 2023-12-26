import React, { useContext } from 'react'
import { tokenContext } from '../conext'
import { jwtDecode } from "jwt-decode";

function Profile() {
  const { token } = useContext(tokenContext)
  const decoded = jwtDecode(token);
  console.log(decoded);

  return (
    <div>
      salam {decoded.userName}
    </div>
  )
}

export default Profile