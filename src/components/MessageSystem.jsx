import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, Send, X, Bot, User, Sparkles, Clock, Image, Smile, Phone, Video, MoreVertical, Check, CheckCheck, ArrowDown, Mic, Paperclip, MapPin, IndianRupee, Calendar, ThumbsUp, Heart, Home } from 'lucide-react';
import './MessageSystem.css';

const EMOJI_LIST = ['👍', '❤️', '😊', '🏠', '🔑', '✨', '🎉', '💰'];

const SMART_REPLIES = {
  greeting: [
    "Hey 👋 Interested in this property?",
    "Hi sir 😄 This property is getting a lot of attention lately.",
    "Hello! How can I help you today?",
    "Namaste 🙏 Looking for your dream home?",
    "Hey boss 😄 What would you like to know about this property?",
  ],

  availability: [
    "Yes sir 😄 Property abhi available hai. Visit schedule kar du?",
    "Haan ji, abhi market mein hai 👀",
    "Available hai sir, but kaafi inquiries aa rahi hain.",
    "Great timing 😄 Property still available hai.",
  ],

  price: [
    "Sir thoda negotiation possible hai 😄",
    "Market rate ke hisaab se kaafi acha price hai.",
    "Owner serious buyer ke liye price discuss kar sakte hain 👀",
    "Whitefield side mein demand kaafi high chal rahi hai sir.",
  ],

  visit: [
    "Weekend pe visit arrange kar deta hoon 😄",
    "Saturday aur Sunday slots available hain 👌",
    "Virtual tour bhi available hai sir 👀",
    "Aap bas timing batao, visit set kar deta hoon.",
  ],

  location: [
    "Location kaafi premium hai 😄",
    "Nearby schools, metro aur malls sab available hain.",
    "Area family-friendly hai aur connectivity bhi mast hai 👌",
    "Investment point of view se bhi strong location hai 👀",
  ],

  funny: [
    "Sir token de do, aur bhi party interested hai 👀",
    "Kal hi ek family dekh ke gayi thi 😄",
    "Budget thoda badhao sir, Whitefield mein demand high hai 😂",
    "Owner bol rahe the serious buyer chahiye 😅",
    "Mumbai mein itne price mein parking bhi mushkil hai 😂",
    "Sir free mein toh chai bhi nahi milti aajkal 😭",
    "Aap bas token bhejo, baaki sab manage ho jayega 😎",
    "Itna negotiation toh owner bhi nahi karta sir 😂",
    "Bhai itna sasta hota toh main khud le leta 😭",
    "Sir aapko ghar chahiye ya miracle? 😂",
  ],

  general: [
    "Sure sir 😄 Let me check that for you.",
    "One sec 👀 Owner se confirm karke batata hoon.",
    "Aapki requirement kaafi interesting hai 😄",
    "Main details nikal ke bhejta hoon sir.",
    "Aapko similar properties bhi dikha sakta hoon 👌",
    "This property is getting lots of attention lately 👀",
  ],
};

function getSmartReply(userMessage) {
  const msg = userMessage.toLowerCase();

  // Greetings
  if (
    /\b(hi|hii|hiii|hello|helloo|hellp|hey|heyy|yo|sup|good morning|good evening)\b/.test(msg)
  ) {
    return pickRandom(SMART_REPLIES.greeting);
  }

  // Funny / Desi replies
  if (
    /\b(free|cheap|sasta|lol|haha|scam|fake|mehenga|discount|bro|bhai|kidney|free mai|free mein|kam karo|negotiation|pagal|bakwas|miracle)\b/.test(msg)
  ) {
    return pickRandom(SMART_REPLIES.funny);
  }

  // Availability
  if (
    /\b(available|availability|still available|vacant)\b/.test(msg)
  ) {
    return pickRandom(SMART_REPLIES.availability);
  }

  // Price
  if (
    /\b(price|cost|budget|offer|rate|emi)\b/.test(msg)
  ) {
    return pickRandom(SMART_REPLIES.price);
  }

  // Visit
  if (
    /\b(visit|tour|see|viewing|schedule|inspect|walk.?through)\b/.test(msg)
  ) {
    return pickRandom(SMART_REPLIES.visit);
  }

  // Location
  if (
    /\b(location|area|neighborhood|nearby|locality|connect)\b/.test(msg)
  ) {
    return pickRandom(SMART_REPLIES.location);
  }

  // Default reply
  return pickRandom(SMART_REPLIES.general);
}


function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

export default function MessageSystem({ agent, propertyTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1, from: 'agent', type: 'text',
      text: `Hi! 👋 I'm ${agent?.name || 'your agent'}. How can I help you with "${propertyTitle || 'this property'}"?`,
      time: new Date(), status: 'read', reactions: [],
    },
    {
      id: 2, from: 'agent', type: 'property-card',
      text: propertyTitle || 'Featured Property',
      time: new Date(), status: 'read', reactions: [],
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEnd = useRef(null);
  const messagesContainer = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleScroll = () => {
    if (!messagesContainer.current) return;
    const { scrollTop, scrollHeight, clientHeight } = messagesContainer.current;
    setShowScrollBtn(scrollHeight - scrollTop - clientHeight > 100);
  };

  const addReaction = (msgId, emoji) => {
    setMessages(prev => prev.map(m =>
      m.id === msgId
        ? { ...m, reactions: m.reactions.includes(emoji) ? m.reactions.filter(e => e !== emoji) : [...m.reactions, emoji] }
        : m
    ));
    setShowEmoji(false);
  };

  const sendMessage = (e, overrideText) => {
    if (e) e.preventDefault();
    const text = overrideText || input.trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(), from: 'user', type: 'text',
      text, time: new Date(), status: 'sent', reactions: [],
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setShowEmoji(false);

    // Mark as delivered
    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === userMsg.id ? { ...m, status: 'delivered' } : m));
    }, 500);

    // Show typing
    setIsTyping(true);

    // Smart reply
    const delay = 1500 + Math.random() * 2000;
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1, from: 'agent', type: 'text',
        text: getSmartReply(text),
        time: new Date(), status: 'read', reactions: [],
      };
      setMessages(prev => {
        const updated = prev.map(m => m.id === userMsg.id ? { ...m, status: 'read' } : m);
        return [...updated, reply];
      });
      setIsTyping(false);
      if (!isOpen) setUnreadCount(c => c + 1);
    }, delay);
  };

  const formatTime = (date) => new Date(date).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const quickActions = [
    { label: 'Is it available?', icon: <Home size={12} /> },
    { label: 'Schedule visit', icon: <Calendar size={12} /> },
    { label: 'Price negotiable?', icon: <IndianRupee size={12} /> },
    { label: 'Share location', icon: <MapPin size={12} /> },
  ];

  const StatusIcon = ({ status }) => {
    if (status === 'sent') return <Check size={12} className="status-icon" />;
    if (status === 'delivered') return <CheckCheck size={12} className="status-icon" />;
    if (status === 'read') return <CheckCheck size={12} className="status-icon read" />;
    return null;
  };

  return (
    <>
      {/* Floating Toggle */}
      {!isOpen && (
        <button className="chat-toggle-btn" onClick={() => setIsOpen(true)} id="chat-toggle">
          <div className="chat-toggle-inner">
            <MessageCircle size={24} />
          </div>
          {unreadCount > 0 && (
            <span className="chat-toggle-badge">
              <span className="badge-pulse" />
              {unreadCount}
            </span>
          )}
          <span className="chat-toggle-label">Chat with Agent</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window" id="chat-window">
          {/* Decorative top glow */}
          <div className="chat-glow" />

          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <span className="avatar-letter">{(agent?.name || 'A')[0]}</span>
                <span className="avatar-status-ring" />
              </div>
              <div className="chat-header-text">
                <span className="chat-agent-name">{agent?.name || 'Property Agent'}</span>
                <span className="chat-status">
                  <span className="status-dot" />
                  Online · Typically replies instantly
                </span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button className="chat-header-btn" title="Voice Call"><Phone size={16} /></button>
              <button className="chat-header-btn" title="Video Call"><Video size={16} /></button>
              <button className="chat-header-btn" title="More"><MoreVertical size={16} /></button>
              <button className="chat-close" onClick={() => setIsOpen(false)} title="Close">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages" ref={messagesContainer} onScroll={handleScroll}>
            <div className="chat-date-badge">
              <Clock size={11} />
              Today
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`chat-bubble ${msg.from} ${msg.type === 'property-card' ? 'card-msg' : ''}`}>
                {msg.from === 'agent' && (
                  <div className="bubble-avatar">
                    <span className="avatar-letter sm">{(agent?.name || 'A')[0]}</span>
                  </div>
                )}
                <div className="bubble-content">
                  {msg.type === 'property-card' ? (
                    <div className="inline-property-card">
                      <div className="ipc-shimmer" />
                      <div className="ipc-body">
                        <span className="ipc-badge">🏠 Property Details</span>
                        <p className="ipc-title">{msg.text}</p>
                        <p className="ipc-hint">Tap to view full details</p>
                      </div>
                    </div>
                  ) : (
                    <p className="bubble-text">{msg.text}</p>
                  )}
                  <div className="bubble-meta">
                    <span className="bubble-time">{formatTime(msg.time)}</span>
                    {msg.from === 'user' && <StatusIcon status={msg.status} />}
                  </div>
                  {msg.reactions.length > 0 && (
                    <div className="bubble-reactions">
                      {msg.reactions.map((r, i) => <span key={i} className="reaction-chip">{r}</span>)}
                    </div>
                  )}
                  {/* Reaction button */}
                  <button className="reaction-trigger" onClick={() => setShowEmoji(showEmoji === msg.id ? false : msg.id)}>
                    <Smile size={14} />
                  </button>
                  {showEmoji === msg.id && (
                    <div className="emoji-picker">
                      {EMOJI_LIST.map(e => (
                        <button key={e} className="emoji-btn" onClick={() => addReaction(msg.id, e)}>{e}</button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble agent">
                <div className="bubble-avatar">
                  <span className="avatar-letter sm">{(agent?.name || 'A')[0]}</span>
                </div>
                <div className="bubble-content">
                  <div className="typing-indicator">
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEnd} />
          </div>

          {/* Scroll to bottom */}
          {showScrollBtn && (
            <button className="scroll-bottom-btn" onClick={scrollToBottom}>
              <ArrowDown size={16} />
            </button>
          )}

          {/* Quick Actions */}
          <div className="quick-actions">
            {quickActions.map((q) => (
              <button key={q.label} className="quick-action-chip" onClick={() => sendMessage(null, q.label)}>
                {q.icon}
                {q.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form className="chat-input-area" onSubmit={sendMessage}>
            <button type="button" className="input-action-btn" title="Attach file">
              <Paperclip size={18} />
            </button>
            <div className="input-wrapper">
              <input
                ref={inputRef}
                type="text"
                className="chat-input"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                id="chat-input"
              />
              <button type="button" className="input-emoji-btn" onClick={() => setShowEmoji(showEmoji === 'input' ? false : 'input')} title="Emoji">
                <Smile size={18} />
              </button>
              {showEmoji === 'input' && (
                <div className="emoji-picker input-picker">
                  {EMOJI_LIST.map(e => (
                    <button key={e} type="button" className="emoji-btn" onClick={() => setInput(prev => prev + e)}>{e}</button>
                  ))}
                </div>
              )}
            </div>
            {input.trim() ? (
              <button type="submit" className="chat-send-btn active" id="chat-send">
                <Send size={18} />
              </button>
            ) : (
              <button type="button" className="chat-send-btn mic-btn" title="Voice message">
                <Mic size={18} />
              </button>
            )}
          </form>
        </div>
      )}
    </>
  );
}
