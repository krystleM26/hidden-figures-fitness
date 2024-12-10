import React, {useState} from 'react';

function Booking() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your session has been booked');
    }

    return (
        <div>
            <h1>Book a Session</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input  
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} 
                />
                <input 
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <button type="submit">Book Now</button>
            </form>
        </div>
    )
}

export default Booking;