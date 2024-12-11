import { useState, useEffect } from 'preact/hooks';
import './app.css';

// Komponenta Messages pro načítání a zobrazení zpráv
function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/messages') // Připojení k backendu
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error('Chyba při načítání zpráv:', error));
  }, []);

  return (
    <div>
      <h2>Seznam zpráv</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
}

export function App() {
  return (
    <div>
      <header>
        <h1>Moje Preact Aplikace</h1>
      </header>
      <main>
        <Messages /> {/* Vykreslí komponentu Messages */}
      </main>
    </div>
  );
}
