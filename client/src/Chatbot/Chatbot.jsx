import React, { useState } from 'react';
import axios from 'axios';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, user: 'user' }]);
    setInput('');

    try {
      const response = await axios.post('/api/chatbot', { message: input });
      setMessages([...messages, { text: response.data.message, user: 'bot' }]);
    } catch (error) {
      console.error('Error sending message to chatbot:', error);
    }
  };

  return (
    <div>
      <div style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <InputGroup className="mb-3">
        <FormControl placeholder="Type your message..." value={input} onChange={handleInputChange} />
        <Button variant="primary" onClick={sendMessage}>
          Send
        </Button>
      </InputGroup>
    </div>
  );
};



export default Chatbot;
