import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section className="py-24 min-h-[calc(100vh-16rem)]">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-100">Get In Touch</h2>
            <p className="text-slate-400 max-w-lg mx-auto">Have a project in mind or want to say hi? Drop me a message and I'll get back to you as soon as possible.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="space-y-6 flex flex-col justify-center">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Call me at</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-slate-100 hover:text-indigo-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Email me at</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-100 hover:text-indigo-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Location</h4>
                  <p className="text-slate-100">casablanca, morocco</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4 md:col-span-2 bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-white/5 shadow-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors text-slate-200 placeholder-slate-600" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors text-slate-200 placeholder-slate-600" 
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="I'd like to talk about..." 
                  className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors text-slate-200 placeholder-slate-600 resize-none" 
                />
              </div>
              
              <button 
                type="submit"
                className="w-full sm:w-auto py-3 px-8 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
