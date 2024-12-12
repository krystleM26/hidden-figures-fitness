import React, {useState} from 'react';

function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        classType: '',
    });
    
    const [successMessage, setSucessMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setSucessMessage(`Thank you ${formData.name}! Your booking has been confirmed`);
        setFormData({
            name: '',
            email: '',
            date: '',
            time: '',
            classType: '',
        })
    };

    return (
        <div className='booking'>
         <h1>Book a Session</h1>
          <p>Reserve your spot for one of our classes!</p>
            {successMessage && <div className='success-message'>{successMessage}</div>
            }
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor='name'>Full Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email:</label>
              
                <input
                    type="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange} 
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="time">Preferred Date:</label>
                <input  
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="time">Preferred Time:</label>
                <input 
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="form-group">
                    <label htmlFor="classType">Class Type:</label>
                    <select
                        id="classType"
                        name="classType"
                        value={formData.classType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a class</option>
                        <option value="Yoga">Yoga</option>
                        <option value="HIIT">HIIT</option>
                        <option value="Zumba">Zumba</option>
                        <option value="Strength Training">Strength Training</option>
                    </select>
            </div>
                <button type="submit">Book Now</button>
            </form>
            <div className="image-container">
          <img
            src="/assets/booking-image.jpg"
            alt="Booking illustration"
            className="booking-image"
          />
        </div>
    </div>
    )
}

export default Booking;