import React, { useState, useEffect } from 'react';
import Button from './Button'

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username) {
            alert('Username is required to log in.')
            return
        }

        if(!password) {
            alert('Password is required to log in.')
            return
        }

        setUsername('');
        setPassword('');
        setPasswordTwo('');
    
    }

async function registerUser(username, password) {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/register', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              user: {
                username: "${username}",
                password: "${password}"
              }
            })
          }
        );
        const data = await response.json();
        
        console.log(data)
    }

const onSubmitClick = () => {
        registerUser()
    }

    return (
        <form className='add-form'
        onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Username</label>
                <input type='text' 
                placeholder='Username' 
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='text' 
                placeholder='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Confirm Password</label>
                <input type='text' 
                placeholder='Confirm Password' 
                value={passwordTwo}
                onChange={(e) => setPasswordTwo(e.target.value)} />
            </div>
            <Button color='white' text='Submit' onClick= {onSubmitClick} />
        </form>
    )
}

export default Register;