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

        onClear(props)

        setUsername('')
        setPassword('')
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

            <input type='submit'  
            className='btn'/>
        </form>
    )
}

export default Login;