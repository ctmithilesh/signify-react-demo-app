// A reactive varible 
// updated the variable value by TAKING USER INPUT 
import React, { useState } from 'react'
const Employee = () => {

    // var-name, method-update, intial value 
    const [firstName, setFirstName] = useState('Aaron')
    return (
        <div>
            <h1>Employee name is {firstName} </h1>
            <input
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
    )
}

export default Employee
