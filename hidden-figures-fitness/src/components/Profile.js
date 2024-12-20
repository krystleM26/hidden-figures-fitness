import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Profile.css';

export default function Profile() {
    const [user, setUser] = useState(null); // Holds the user's profile data
    const [isEditing, setIsEditing] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch user data when the component mounts
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    setErrorMessage('Failed to fetch user profile.');
                }
            } catch (err) {
                setErrorMessage('Error fetching profile data.');
            }
        };

        fetchUserProfile();
    }, []);

    // Handle form submission to update profile
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ email: newEmail, password: newPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                setUser(data); // Update user data after successful update
                setIsEditing(false); // Stop editing mode
            } else {
                setErrorMessage(data.message || 'Failed to update profile.');
            }
        } catch (err) {
            setErrorMessage('Error updating profile.');
        }
    };

    return (
        <div className="profile-container">
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {user ? (
                <div className="profile-form">
                    <h2>{isEditing ? 'Edit Profile' : 'User Profile'}</h2>
                    {isEditing ? (
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="save-btn">Save Changes</button>
                        </form>
                    ) : (
                        <div className="user-details">
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Password:</strong> ********</p>
                            <button onClick={() => setIsEditing(true)} className="edit-btn">
                                Edit Profile
                            </button>
                        </div>
                    )}
                    <Link to="/" className="back-btn">Back to Home</Link>
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </div>
    );
}
