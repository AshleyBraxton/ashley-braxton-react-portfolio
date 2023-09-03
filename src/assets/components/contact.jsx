import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    const validateEmail = (email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    };

    const showInvalidEmailMessage = () => {
        if (formState.email && !validateEmail(formState.email)) {
            return (
                <div className="invalid-email-message">
                    Invalid email address
                </div>
            );
        }
    };

    return (
        <div>
            <h1>Contact me</h1>
            <p id='contact-me-message'> Please feel free to reach out to me here:</p>
            <form id="contact-form" onSubmit={handleFormSubmit} className="form">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
          {showInvalidEmailMessage()}
        </label>
        <label htmlFor="message">
          Message:
          <input
            name="message"
            type="message"
            value={formState.message}
            onChange={handleChange}
            required
          />
          </label>
          <button type="submit" className="border-0 border-solid rounded-md hover:text-cyan-500 hover:underline">Submit</button>
          </form>
        </div>
    )
}

export default Contact;