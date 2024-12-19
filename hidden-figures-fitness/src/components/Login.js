import React, {useState} from 'react'
import '../styles/Login.css'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);


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

    const handleLogout = () => {
        console.log("User logged out");
        setIsLoggedIn(false); // Reset state to logged out
        setEmail(""); // Optionally clear email
        setPassword(""); // Optionally clear password
      };
       
    return (
        <div className="login-container">
            <div className="login-form">
            <h2>{isLoggedIn ? "Welcome Back!" : "Login"}</h2>
            {isLoggedIn ? (
                <button onClick={handleLogout} className="logout-btn">
                    Log Out
                </button>
             ) : (
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>)}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
  )

}