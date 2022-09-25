import React from 'react'
import { Navigate } from "react-router-dom"

function Logout() {
    let loadAble = false;
    function logout() {
        localStorage.removeItem('token')
        loadAble = true;
    }
    logout()
  return (
    <div>
       
        {loadAble && <Navigate to="/"></Navigate>}
        
    </div>
  )
}

export default Logout