import React, { useState } from 'react';
//import '../styles/ScheduleSession.css'; // Optional: Include your CSS for styling

const ScheduleSession = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        therapist: '',
    });

    const therapists = ['Dr. Smith', 'Dr. Johnson', 'Dr. Brown']; // Example therapist names

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.date && formData.time && formData.therapist) {
            alert(`Session scheduled on ${formData.date} at ${formData.time} with ${formData.therapist}`);
            // Add logic to save the session data to your backend or database
        } else {
            alert('Please fill in all the fields.');
        }
    };

    return (
        <div className="schedule-session-container">
            <h1>Schedule a Therapy Session</h1>
            <form className="schedule-session-form" onSubmit={handleSubmit}>
                {/* Date Field */}
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Time Field */}
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Therapist Selection */}
                <div className="form-group">
                    <label htmlFor="therapist">Therapist:</label>
                    <select
                        id="therapist"
                        name="therapist"
                        value={formData.therapist}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a Therapist</option>
                        {therapists.map((therapist, index) => (
                            <option key={index} value={therapist}>
                                {therapist}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="schedule-session-button">
                    Schedule Session
                </button>
            </form>
        </div>
    );
};

export default ScheduleSession;
