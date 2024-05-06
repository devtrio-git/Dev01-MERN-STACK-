import React from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = ()=>{
        // code logic
        navigate('/')
    }
  return (
    <>
        {/* <Navbar /> */}
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login as Guest</button>
        </div>
    </>
  )
}

export default Login
