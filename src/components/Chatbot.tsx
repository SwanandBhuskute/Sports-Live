// components/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';
import { GEMINI_ENDPOINT, GEMINI_API_KEY } from '../config/constants';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!userInput) return;

    setMessages([...messages, { text: userInput, sender: 'user' }]);
    setLoading(true);

    try {
      const response = await axios.post(
        `${GEMINI_ENDPOINT}:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: userInput
                }
              ]
            }
          ]
        }
      );

      const botResponse = response.data.candidates[0].content.parts[0].text;
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setLoading(false);
    setUserInput('');
  };

  return (
    <div className="chatbot-popup">
      <button onClick={() => setIsChatOpen(!isChatOpen)} className="chatbot-toggle">
        {isChatOpen ? 'X' : 'Open Chat'}
      </button>
      {isChatOpen && (
        <div className="chatbot">
          <div className="chatbot-messages">
            {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.sender === 'bot' ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.text}
                    </ReactMarkdown>
                  ) : (
                    <div>{message.text}</div>
                  )}
                </div>
              ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={loading}
            />
            <button onClick={handleSendMessage} disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
