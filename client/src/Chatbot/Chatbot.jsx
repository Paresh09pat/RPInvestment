import React, { useState, useEffect } from 'react';



import './Chatbot.css';

const Chatbot = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [userQuestion, setUserQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);

  useEffect(() => {
    displayBotMessage("Welcome to RPI Assistance. How can we help you today?");
  }, []);

  const handleToggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
    if (chatbotOpen) {
      setShowQuestions(false);
    }
  };

  const handleAskButton = () => {
    if (userQuestion.trim() !== '') {
      displayUserMessage(userQuestion);

      setTimeout(() => {
        displayBotMessage("I'm a bot. This is a sample response.");
        setShowQuestions(true); // Show predefined questions after user input
      }, 1000);
      setUserQuestion(''); // Clear user input
    }
  };

  const handleCloseChat = () => {
    setChatbotOpen(false);
    setShowQuestions(false);
  };

  const displayUserMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
  };

  const displayBotMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'bot' }]);
  };

  const handleQuestionClick = (question) => {
    displayUserMessage(question.question);
    displayBotMessage(`RPI: ${question.answer}`);

    // Display sub-questions if available
    if (question.subQuestions && question.subQuestions.length > 0) {
      question.subQuestions.forEach((subQuestion) => {
        displayBotMessage(`RPI: ${subQuestion.question}`);
      });
    }
  };

  const predefinedQuestions = [
    {
      id: "1",
      question: "Deposite and Withdrawal",
      answer: "The weather today is sunny with a high of 75°F.",
      subQuestions: [
        {
          id: "1_1",
          question: "What's the weather like tomorrow?",
          answer: "The weather tomorrow is expected to be partly cloudy."
        },
        {
          id: "1_2",
          question: "Tell me about the weekend forecast.",
          answer: "The weekend is expected to be sunny with temperatures in the mid-70s."
        }
      ]
    },

  ];

  return (
    <div>
      <button id="toggle-chatbot-button" onClick={handleToggleChatbot}>
        Main chatbot btn
      </button>

      {chatbotOpen && (
        <div id="chatbot-container" className="chatbot-container">
          <div className="header">
            RPI Assistance
            <span id="close_chat" onClick={handleCloseChat}>
              simple
            </span>
          </div>

          <div id="chatbox" className="chatbox">
           
            {messages.map((message, index) => (
              <div key={index} className={`message-container-${message.sender}`}>
                <div className={`message-${message.sender}`}>{message.text}</div>
              </div>
            ))}
          {showQuestions && (
            <div className="questions-container">
              {predefinedQuestions.map((question) => (
                <div
                  key={question.id}
                  className="question"
                  onClick={() => handleQuestionClick(question)}
                >
                  {question.question}
                </div>
              ))}
            </div>
          )}
          </div>


          <div className="common_div">
            <div className="sub_common_div">
              <input
                type="text"
                id="user-question"
                placeholder="Enter your question"
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
              />
              <button id="ask-button" onClick={handleAskButton}>
                inner btn
              </button>
            </div>
          </div>

          <p id="assist-message" style={{ display: 'none' }}>
            For more assistance, call us at <a href="tel:123-456-7890">123-456-7890</a> or email us at{' '}
            <a href="mailto:09patilparesh@gmail.com">09patilparesh@gmail.com</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
