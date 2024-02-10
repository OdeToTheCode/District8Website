import '../styles/Contact.css';


const React = require('react');
const { useState } = React;


const Contact = () => {

  const [formData, setFormData] = React.useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch('http://localhost:3001/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(respons => respons.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>Contact page</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Subject:</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
