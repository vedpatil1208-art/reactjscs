import { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';
import './ContactForm.css';

export default function ContactForm({ agent }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="contact-form-wrapper glass-card" id="contact-form">
      <div className="contact-header">
        <h3 className="contact-title">Contact Agent</h3>
        {agent && (
          <div className="agent-info">
            <div className="agent-avatar">
              {agent.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <p className="agent-name">{agent.name}</p>
              <p className="agent-contact">{agent.phone}</p>
            </div>
          </div>
        )}
      </div>

      {submitted ? (
        <div className="contact-success animate-scale-in">
          <CheckCircle size={48} />
          <h4>Message Sent!</h4>
          <p>The agent will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-fields">
          <div className="field-wrapper">
            <User size={16} className="field-icon" />
            <input
              type="text"
              className="input-field icon-input"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              required
              id="contact-name"
            />
          </div>
          <div className="field-wrapper">
            <Mail size={16} className="field-icon" />
            <input
              type="email"
              className="input-field icon-input"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              required
              id="contact-email"
            />
          </div>
          <div className="field-wrapper">
            <Phone size={16} className="field-icon" />
            <input
              type="tel"
              className="input-field icon-input"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              id="contact-phone"
            />
          </div>
          <div className="field-wrapper">
            <MessageSquare size={16} className="field-icon textarea-icon" />
            <textarea
              className="input-field icon-input textarea-field"
              placeholder="I'm interested in this property..."
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              rows={4}
              required
              id="contact-message"
            />
          </div>
          <button type="submit" className="btn btn-primary contact-submit" id="contact-submit">
            <Send size={16} />
            Send Inquiry
          </button>
        </form>
      )}
    </div>
  );
}
