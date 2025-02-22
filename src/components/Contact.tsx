import React from 'react';

export default function Contact() {
  return (
    <div className="bg-[var(--bg-secondary)] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[var(--text-primary)] mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form action="https://formsubmit.co/wefindhomesgoa@gmail.com" method="POST" className="space-y-8">
              {/* Honeypot to prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Success page redirect */}
              <input 
                type="hidden" 
                name="_next" 
                value={window.location.href + "#contact"}
              />

              <div className="relative group">
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full px-4 py-3 bg-[var(--bg-primary)] text-[var(--text-primary)] border-b-2 border-[var(--text-primary)] focus:border-[var(--text-primary)] transition-colors duration-300 outline-none"
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="relative group">
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-4 py-3 bg-[var(--bg-primary)] text-[var(--text-primary)] border-b-2 border-[var(--text-primary)] focus:border-[var(--text-primary)] transition-colors duration-300 outline-none"
                  required
                  placeholder="Your email"
                />
              </div>
              
              <div className="relative group">
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 bg-[var(--bg-primary)] text-[var(--text-primary)] border-2 border-[var(--text-primary)] focus:border-[var(--text-primary)] transition-colors duration-300 outline-none resize-none rounded-none"
                  required
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-transparent text-[var(--text-primary)] py-3 px-6 border-2 border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300 font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="group p-6 bg-[var(--bg-primary)] border-l-4 border-[var(--text-primary)]">
              <h3 className="font-semibold text-[var(--text-primary)]">Email</h3>
              <p className="text-[var(--text-primary)] opacity-90">wefindhomesgoa@gmail.com</p>
            </div>
            
            <div className="group p-6 bg-[var(--bg-primary)] border-l-4 border-[var(--text-primary)]">
              <h3 className="font-semibold text-[var(--text-primary)]">Phone</h3>
              <p className="text-[var(--text-primary)] opacity-90">+91 98237 91401</p>
            </div>
            
            <div className="group p-6 bg-[var(--bg-primary)] border-l-4 border-[var(--text-primary)]">
              <h3 className="font-semibold text-[var(--text-primary)]">Address</h3>
              <p className="text-[var(--text-primary)] opacity-90">Address is 
Office no 14 nagvado betalbatim salcete 403713 <br />South Goa, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
