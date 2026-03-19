import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Create a "ref" for the form element so EmailJS knows which form to send
  const form = useRef();

  // The function to handle the email sending
  const sendEmail = (e) => {
    e.preventDefault(); // Stops the page from refreshing on submit

    // Using the updated EmailJS syntax with the publicKey object
    emailjs.sendForm(
        'service_vu2wqer',    // Your Service ID
        'template_vxu57qe',   // Your Template ID
        form.current,         // The form reference
        {
          publicKey: '36FOp_yP6s-XHrOj9', // Your Public Key
        }
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          
          // Clear the form fields after a successful send
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          // This will log the exact reason it failed to your browser console
          console.error('FAILED...', error);
          alert(`Failed to send message: ${error.text || 'Check console for details.'}`);
        }
      );
  };

  return (
    <section id="contacts" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800/50 mb-20">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* --- LEFT COLUMN: Contact Information --- */}
        <div>
          <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <span className="text-emerald-500 font-mono text-xl">&gt;</span> ping aditya
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm currently looking for new opportunities and collaborations. Whether you have an inquiry, want to discuss a potential project, or just want to say hi, please use the contact form!
          </p>
          
          <div className="space-y-4 font-mono text-sm">
            <div className="flex items-center gap-4 text-gray-300">
              <span className="text-emerald-500">EMAIL:</span> 
              {/* This href="mailto:..." is what opens the user's default Mail app */}
              <a href="mailto:adityaalok.0088@gmail.com" className="hover:text-emerald-400 transition-colors">
                adityaalok.0088@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="text-emerald-500">GITHUB:</span> 
              <a href="https://github.com/Adi2329002" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                github.com/Adi2329002
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="text-emerald-500">LINKEDIN:</span> 
              <a href="https://www.linkedin.com/in/adityaalok0088/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                Aditya Alok
              </a>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: The Email Form --- */}
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800">
          
          {/* Attach the ref and the onSubmit handler to the form tag */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="first-name" className="text-emerald-400 font-mono text-xs">First Name_</label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-[#121212] border border-gray-700 rounded p-3 text-gray-100 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="last-name" className="text-emerald-400 font-mono text-xs">Last Name_</label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-[#121212] border border-gray-700 rounded p-3 text-gray-100 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-emerald-400 font-mono text-xs">Email_ *</label>
              <input
                type="email"
                id="email"
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#121212] border border-gray-700 rounded p-3 text-gray-100 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-emerald-400 font-mono text-xs">Message_</label>
              <textarea
                id="message"
                name="message" 
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#121212] border border-gray-700 rounded p-3 text-gray-100 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 py-3 rounded font-mono text-sm mt-4">
              execute_send()
            </button>

          </form>
        </div>

      </div>
      
      {/* --- BOTTOM FOOTER --- */}
      <div className="text-center mt-20 pt-8 border-t border-gray-800/50 text-gray-600 font-mono text-xs">
        © {new Date().getFullYear()} by Aditya Alok. Built with React & Tailwind.
      </div>
    </section>
  );
};

export default Contacts;