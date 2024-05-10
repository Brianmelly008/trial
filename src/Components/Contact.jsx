import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 20px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 5px;
        }

        input,
        textarea {
            margin-bottom: 10px;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            padding: 10px 20px;
            background: #007bff;
            color: white;
            border-radius: 4px;
            border: none;
            cursor: pointer;

            &:hover {
                background: #0056b3;
            }
        }
    }
`;

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://example.com/submit-form', { // Update URL to your backend endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, message }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setSubmitStatus('Message sent successfully!');
                    setEmail('');
                    setMessage('');
                } else {
                    throw new Error(data.error || 'Failed to send message');
                }
            })
            .catch(error => {
                setSubmitStatus(`Error: ${error.message}`);
            });
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={handleMessageChange} required />
                <button type="submit">Send</button>
            </form>
            {submitStatus && <p>{submitStatus}</p>}
        </Container>
    );
}

export default Contact;
