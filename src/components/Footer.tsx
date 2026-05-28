import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="w-full min-w-0 bg-white pt-20 md:pt-32 pb-8 px-5 sm:px-6 md:px-16 border-t border-gray-border/40">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between mb-24 gap-16">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Contact</p>
            <h2 className="text-4xl font-serif mb-2">Nischay Consultancy</h2>
            <p className="text-gray-500 font-medium text-xs tracking-widest uppercase mb-6">
              Determination in Every Development
            </p>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-4 font-medium uppercase tracking-widest text-xs text-black break-words">
              Architecture | Structural Engineering | Urban Planning | Interior Design | Project Management | PMC Services
            </p>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">
              Creating sustainable, efficient, and future-focused built environments with precision and purpose.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:hello@nischay.com" className="text-sm font-light text-gray-500 hover:text-black">hello@nischay.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a href="tel:+919876543210" className="text-sm font-light text-gray-500 hover:text-black">+91 98765 43210</a>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm font-medium">Office</p>
                <p className="text-sm font-light text-gray-500 leading-relaxed max-w-[250px]">
                  804, Synergy Space,<br />Opp. Aashka Hospital, Beside D-mart,<br />Sargasan, Gandhinagar 382421
                </p>
                <a href="#" className="inline-block mt-2 text-xs uppercase tracking-widest underline decoration-gray-300 underline-offset-4 hover:decoration-black cursor-pointer">View on map</a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full relative h-[250px] md:h-[350px] bg-soft-gray mb-16 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
           <iframe 
             src="https://maps.google.com/maps?q=804%2C%20Synergy%20Space%2C%20Opp.Aashka%20Hospital%2C%20Beside%20D-mart%2C%20Sargasan%2C%20Gandhinagar%2C%20Pin%20Code%20382421&t=&z=14&ie=UTF8&iwloc=&output=embed" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-border/60 gap-8">
          <div className="text-2xl font-serif font-black tracking-tighter uppercase">Nischay</div>
          
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-x-8 text-xs font-medium tracking-widest uppercase max-w-full">
            <a href="#about" className="hover:text-gray-500">About</a>
            <a href="#services" className="hover:text-gray-500">Services</a>
            <a href="#projects" className="hover:text-gray-500">Projects</a>
            <a href="#team" className="hover:text-gray-500">Team</a>
            <a href="#contact" className="hover:text-gray-500">Contact</a>
          </nav>

          <div className="flex gap-6 text-gray-400 tracking-wider text-xs font-medium">
            <span className="hover:text-black cursor-pointer hidden md:block">IG</span>
            <span className="hover:text-black cursor-pointer hidden md:block">LI</span>
            <span className="hover:text-black cursor-pointer hidden md:block">TW</span>
            <span className="hover:text-black cursor-pointer hidden md:block">FB</span>
            <a href="#" className="hover:text-black cursor-pointer flex justify-center items-center font-serif text-xs md:hidden">in</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 font-light pt-8 gap-4 pb-8">
          <p>© 2026 Nischay Consultancy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
