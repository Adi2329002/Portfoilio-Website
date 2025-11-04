import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // STEP 3: Create a "ref" for the form element
  const form = useRef();

  // STEP 4: Create the function to send the email
  const sendEmail = (e) => {
    e.preventDefault(); // This stops the page from reloading

    // This is where you put your keys from EmailJS
    emailjs.sendForm(
        'service_vu2wqer',    // Paste your Service ID here
        'template_vxu57qe',   // Paste your Template ID here
        form.current,         // This is a reference to your form
        '36FOp_yP6s-XHrOj9'     // Paste your Public Key here
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          // Clear the form fields after sending
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message, please try again.');
        }
      );
  };
    return(
        <footer id="contacts" className="contact-section">
            {/* This div wraps both columns */}
      <div className="contact-container">

        {/* --- LEFT COLUMN --- */}
        <div className="contact-left">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            If you have any inquiries or just want to say hi, 
            please use the contact form!
          </p>
          
          
          <div className="contact-info-item">
            
                <img 
              src="/Email.png" 
              alt="Email Icon" 
              className="contact-icon" 
            /> 
            <a href="mailto:your-email@gmail.com">adityaalok.0088@gmail.com</a>
          </div>

          {/* Social Media Links */}
          <div className="contact-socials">
            <a href="https://github.com/Adi2329002" target="_blank" rel="noopener noreferrer">
              <img 
                src="/github.png" 
                alt="GitHub Icon" 
                className="contact-icon" 
              />
              <span className="social-text">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/adityaalok0088/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/linkedin.png" 
                alt="LinkedIn Icon" 
                className="contact-icon" 
              />
              <span className="social-text">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        {/* --- RIGHT COLUMN (Updated Form) --- */}
<div className="contact-right">
    {/* STEP 1: Attach the ref and the onSubmit function */}
    <form ref={form} onSubmit={sendEmail} className="contact-form">
        
        <div className="form-row">
            <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                {/* STEP 2: Link input to state */}
                <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                {/* STEP 2: Link input to state */}
                <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="email">Email *</label>
            {/* STEP 2: Link input to state */}
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>

        <div className="form-group">
            <label htmlFor="message">Message</label>
            {/* STEP 2: Link input to state */}
            <textarea
                id="message"
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send</button>

    </form>
</div>
</div>
      {/* A simple copyright notice for the bottom */}
      <div className="footer-bottom">
        <p>© 2025 by Aditya Alok. All rights reserved.</p>
      </div>
        
        </footer>
    );

};
export default Contacts;