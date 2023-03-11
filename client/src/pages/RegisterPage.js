import { useState } from "react"


export default function RegisterPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function register(event) {
        event.preventDefault()
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'}
        })
    }
    return (
        <form className="register" action="" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" 
                value={username} 
                onChange={event => setUsername(event.target.value)}
                placeholder="username"/>
            <input type="text" 
                value={password}
                onChange= {event => setPassword(event.target.value)}
                placeholder="password"/>
            <button>Register</button>
        </form>
    )
}