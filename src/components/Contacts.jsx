import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast'; // Import the toast library

const Contacts = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Show a "loading" toast while sending
    const toastId = toast.loading('Initiating secure transmission...', {
      style: {
        background: '#0a0a0a',
        color: '#10b981',
        border: '1px solid #10b981',
        fontFamily: 'monospace',
      },
    });

    emailjs.sendForm(
        'service_vu2wqer',
        'template_vxu57qe',
        form.current,
        {
          publicKey: '36FOp_yP6s-XHrOj9',
        }
      )
      .then(
        (result) => {
          // Success Toast
          toast.success('System: Transmission Successful.', {
            id: toastId, // Replace the loading toast
            style: {
              background: '#0a0a0a',
              color: '#10b981',
              border: '1px solid #10b981',
              fontFamily: 'monospace',
            },
            iconTheme: {
              primary: '#10b981',
              secondary: '#0a0a0a',
            },
          });
          
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('FAILED...', error);
          // Error Toast
          toast.error(`Transmission Failed: ${error.text || 'Check connection.'}`, {
            id: toastId,
            style: {
              background: '#0a0a0a',
              color: '#ef4444', // Red for errors
              border: '1px solid #ef4444',
              fontFamily: 'monospace',
            },
             iconTheme: {
              primary: '#ef4444',
              secondary: '#0a0a0a',
            },
          });
        }
      );
  };

  return (
    <section id="contacts" className="max-w-[90%] 2xl:max-w-[1400px] mx-auto px-6 py-20 border-t border-gray-800/50 mb-20 relative">
      
      {/* This component renders the toasts */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="grid md:grid-cols-2 gap-12">
        {/* --- LEFT COLUMN --- */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6 flex items-center gap-3">
              <span className="text-emerald-500 font-mono text-2xl">&gt;</span> establish_connection
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              Currently based in <span className="text-gray-200">Patna / Bhubaneswar</span>. Open to internship opportunities and technical collaborations in Cybersecurity, IoT, and AI/ML.
            </p>
          </div>
          
          <div className="space-y-6 font-mono text-sm">
            <div className="group">
              <p className="text-emerald-500 text-xs mb-1 uppercase tracking-widest">// Email_Primary</p>
              <a href="mailto:adityaalok.0088@gmail.com" className="text-gray-300 hover:text-emerald-400 transition-colors text-base break-all">
                adityaalok.0088@gmail.com
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="group">
                <p className="text-emerald-500 text-xs mb-1 uppercase tracking-widest">// GitHub_Repo</p>
                <a href="https://github.com/Adi2329002" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Adi2329002
                </a>
              </div>
              <div className="group">
                <p className="text-emerald-500 text-xs mb-1 uppercase tracking-widest">// LinkedIn_ID</p>
                <a href="https://www.linkedin.com/in/adityaalok0088" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  adityaalok0088
                </a>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#111] border border-gray-800 rounded-md">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-gray-500 font-mono text-xs uppercase tracking-tighter">Current_Node: Bhubaneswar, IN</span>
          </div>
        </div>

        {/* --- RIGHT COLUMN (Form) --- */}
        <div className="bg-[#050505] p-8 rounded-lg border border-gray-800 shadow-2xl relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          
          <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="first-name" className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest">First_Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-3 text-gray-100 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-gray-800"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="last-name" className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest">Last_Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-3 text-gray-100 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-gray-800"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest">Email_Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="user@network.com"
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-3 text-gray-100 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-gray-800"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest">Transmission_Payload</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Enter your message here..."
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded p-3 text-gray-100 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none placeholder:text-gray-800"
              ></textarea>
            </div>

            <button type="submit" className="w-full group/btn bg-emerald-500/5 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all duration-500 py-4 rounded font-mono text-xs uppercase tracking-[0.3em] mt-4 relative overflow-hidden">
              <span className="relative z-10">Execute_Send()</span>
              <div className="absolute inset-0 bg-emerald-500 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>
        </div>
      </div>
      
      {/* --- FOOTER --- */}
      <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 font-mono text-[10px] uppercase tracking-widest">
        <p>© 2026 Aditya Alok. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-emerald-500/50 hover:text-emerald-500 cursor-default transition-colors">System.v4.0.0</span>
          <span className="text-gray-800">|</span>
          <span>Bhubaneswar, Odisha</span>
        </div>
      </div>
    </section>
  );
};

export default Contacts;