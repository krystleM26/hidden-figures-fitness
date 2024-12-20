import React, {useState} from "react";
import './SignUp.css';



export default function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignUp = (e) {
        e.prevedntDefault();


    }

  return (
    <div className="signup-bx">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
            <label>Name:</label>
            <imput 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label>Email:</label>
            <input 
                type="email"
                value={email}
                onChange={(e) =>  setEmail(
                    e.target.value
                )}
                required
            />
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign up</button>
        </form>
    </div>

  )
}
