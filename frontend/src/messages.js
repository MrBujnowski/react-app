import React, { useEffect, useState } from 'react';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/messages')
            .then((response) => response.json())
            .then((data) => setMessages(data))
            .catch((error) => console.error('Chyba při načítání zpráv:', error));
    }, []);

    return (
        <div>
            <h1>Seznam zpráv</h1>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>{message.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;
