import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Sparkles, Clock } from 'lucide-react';
import './MessageSystem.css';

const AUTO_REPLIES = [
  "Thank you for your interest! I'll check the availability and get back to you shortly.",
  "That's a great choice! This property has been getting a lot of attention. Would you like to schedule a site visit?",
  "Sure! I can arrange a virtual tour for you this week. What time works best?",
  "The price is negotiable for serious buyers. Shall I set up a meeting with the owner?",
  "I've noted your requirements. Let me find similar properties in your budget range.",
  "Great question! The maintenance charges are included in the price. I'll send you the full breakdown.",
];

export default function MessageSystem({ agent, propertyTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'agent',
      text: `Hi! I'm ${agent?.name || 'your agent'}. How can I help you with "${propertyTitle || 'this property'}"?`,
      time: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEnd = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now(),
      from: 'user',
      text: input.trim(),
      time: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate agent typing + reply
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        from: 'agent',
        text: AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)],
        time: new Date(),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 1200 + Math.random() * 1500);
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button className="chat-toggle-btn" onClick={() => setIsOpen(true)} id="chat-toggle">
          <MessageCircle size={24} />
          <span className="chat-toggle-badge">1</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window" id="chat-window">
          {/* Chat Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <Bot size={20} />
              </div>
              <div>
                <span className="chat-agent-name">{agent?.name || 'Property Agent'}</span>
                <span className="chat-status">
                  <span className="status-dot" />
                  Online
                </span>
              </div>
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="chat-messages">
            <div className="chat-date-badge">
              <Clock size={12} />
              Today
            </div>
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-bubble ${msg.from}`}>
                <div className="bubble-icon">
                  {msg.from === 'agent' ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div className="bubble-content">
                  <p className="bubble-text">{msg.text}</p>
                  <span className="bubble-time">{formatTime(msg.time)}</span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-bubble agent">
                <div className="bubble-icon"><Bot size={14} /></div>
                <div className="bubble-content">
                  <div className="typing-indicator">
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEnd} />
          </div>

          {/* Quick Replies */}
          <div className="quick-replies">
            {['Is it available?', 'Schedule a visit', 'Price negotiable?'].map((q) => (
              <button key={q} className="quick-reply-btn" onClick={() => {
                setInput(q);
                inputRef.current?.focus();
              }}>
                <Sparkles size={10} />
                {q}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form className="chat-input-area" onSubmit={sendMessage}>
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id="chat-input"
            />
            <button type="submit" className="chat-send-btn" disabled={!input.trim()} id="chat-send">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
