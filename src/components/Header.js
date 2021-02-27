import React, { useState, useEffect } from 'react';
import { useEffect } from 'react';
import Button from './Button'
import Login from './Login'
import Register from './Register'

const Header = () => {
    const onClick = () => {
        console.log('CLICK')
    }
    const [showLogin, setShowLogin] = useState
    (false)

    const [showRegister, setShowRegister] = useState
    (false)

    const [showLoginBtn, setShowLoginBtn] = useState
    (true)

    const [showRegisterBtn, setShowRegisterBtn] = useState
    (true)

    const onLoginClick = () => { 
        setShowLogin (!showLogin)
        setShowRegisterBtn (!showRegisterBtn)}

    const onRegisterClick = () => { 
        setShowRegister (!showRegister)
        setShowLoginBtn (!showLoginBtn)}
    
    useEffect()

    return (
    <header className='header'>
        <h1>STRANGER'S THINGS</h1>
        <h3>buy a stranger's things, or sell a stranger things</h3>
        {showLoginBtn && <Button color='white' text='Log In' onClick= {onLoginClick} />}
        {showRegisterBtn && <Button color='white' text='Register' onClick= {onRegisterClick} />}
        {showLogin && <Login />}
        {showRegister && <Register />}
    </header>
  )
}

export default Header;