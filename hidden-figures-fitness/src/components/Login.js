import React, {useState} from 'react'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "appication/json",
                },
                body: JSON.stringify({email, password})  //sends data to backend
            })
            const data = await response.json();

            if (response.ok) {
                // Handle successful login (e.g., redirect or store a token)
                console.log("Login successful:", data);
            } else {
                setErrorMessage(data.message || "An error occurred during login.");
            }
        } catch(err){
            setErrorMessage("An error has occured while communicating with the server")
        }
    }; 
       
    return (
        <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>} {/* Display error message */}
    </div>
  )

}