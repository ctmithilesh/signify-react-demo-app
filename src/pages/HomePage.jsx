import React from 'react'
import Cats from '../components/Cats'
import Employee from '../components/Employee'
import Hello from '../components/Hello'
import Navigation from '../components/Navigation'

const HomePage = () => {
    return (
        <>
            <Navigation />
            <Cats />
            <Employee />
            <Hello />
        </>
    )
}

export default HomePage
