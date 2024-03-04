import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const loginStatus = true
    const navigate = useNavigate()

    useEffect(() => {
        if (loginStatus) {
            navigate('/dashboard')
        }
        else {
            navigate('/login')
        }

    })

    return (
        <div>
            <h1>I am Login</h1>
            <div>
                <input type="email" name="" id="" />
            </div>
            <div>
                <input type="password" name="" id="" />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Login
