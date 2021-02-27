import React, { useState } from 'react';

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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

        setUsername('')
        setPassword('')
    }

    async function logInUser(username, password) {
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
            logInUser()
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
            <Button color='white' text='Submit' onClick= {onSubmitClick} />
        </form>
    )
}

export default Login;