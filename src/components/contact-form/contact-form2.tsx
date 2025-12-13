import React from 'react';
import { Send, CheckCircle2 } from 'lucide-react'; // Ensure you have lucide-react installed

const ContactForm2 = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 font-sans text-slate-900">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-red-50 blur-[100px] opacity-60"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-slate-200 blur-[80px] opacity-40"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 items-center">
        
        {/* LEFT COLUMN: The "Pitch" */}
        <div className="space-y-8">
          <div className="space-y-4">
            {/* Badge for professional touch */}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>
              24/7 Support Available
            </span>
            
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Get support for your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                application today.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Have questions about your admit letter or application? Fill out the form and our senior counselors will guide you through the process step-by-step.
            </p>
          </div>

          {/* Social Proof / Trust Indicators */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Direct access to admission experts</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Response within 2 hours</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Secure & Confidential</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The "Pro" Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
          <form className="space-y-6">
            
            {/* Row 1: Name & Phone Side-by-Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-slate-400 text-slate-800"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-slate-400 text-slate-800"
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-slate-400 text-slate-800"
              />
            </div>

            {/* Row 3: Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                How can we help?
              </label>
              <textarea 
                id="message" 
                rows={4}
                placeholder="Tell us about your application status..."
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none placeholder:text-slate-400 text-slate-800"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="button" 
              className="group w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-4 rounded-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-red-700/20 flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-xs text-center text-slate-400 mt-4">
              By sending this message, you agree to our privacy policy.
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm2;