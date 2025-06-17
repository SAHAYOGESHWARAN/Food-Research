import React, { useState } from 'react';
import '../styles/support.css';
const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'Go to Settings > Change Password to update your password.'
  },
  {
    question: 'How can I upgrade my subscription?',
    answer: 'Visit the Subscriptions page to view and select available plans.'
  },
  {
    question: 'Who do I contact for billing issues?',
    answer: 'Use the support form below or email support@foodresearch.com.'
  }
];

const Support = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    // Here you would send the form data to your backend
    setSubmitted(true);
  };

  return (
    <div className="support-page">
      <h2>Support</h2>
      <section className="support-section">
        <h3>Contact Us</h3>
        {submitted ? (
          <div className="support-success">Thank you for contacting support! We will get back to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="support-form">
            <label>
              Name
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              Message
              <textarea name="message" value={form.message} onChange={handleChange} required />
            </label>
            {error && <div className="support-error">{error}</div>}
            <button type="submit">Send Message</button>
          </form>
        )}
      </section>
      <section className="support-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Support;
