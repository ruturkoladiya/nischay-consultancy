import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=804,+Synergy+Space,+Opp.+Aashka+Hospital,+Beside+D-mart,+Sargasan,+Gandhinagar+382421";

  return (
    <footer id="contact" className="w-full min-w-0 bg-white pt-20 md:pt-32 pb-8 px-5 sm:px-6 md:px-16 border-t border-gray-border/40">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between mb-24 gap-16">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Contact</p>
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/logo.png"
                alt="Nischay Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h2 className="text-4xl font-serif">Nischay</h2>
            </div>
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
                  <a href="mailto:info@nischayconsultancy.com" className="text-sm font-light text-gray-500 hover:text-black">info@nischayconsultancy.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a href="tel:+919898703577" className="text-sm font-light text-gray-500 hover:text-black">+91 98987 03577</a>
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
                <a 
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs uppercase tracking-widest underline decoration-gray-300 underline-offset-4 hover:decoration-black cursor-pointer"
                >
                  View on map
                </a>
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
             title="Nischay Consultancy Office Location Map"
           ></iframe>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-border/60 gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Nischay Logo"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-2xl font-serif font-black tracking-tighter uppercase">Nischay</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-x-8 text-xs font-medium tracking-widest uppercase max-w-full">
            <Link href="/" className="hover:text-gray-500">Home</Link>
            <Link href="/about" className="hover:text-gray-500">About</Link>
            <Link href="/services" className="hover:text-gray-500">Services</Link>
            <Link href="/#contact" className="hover:text-gray-500">Contact</Link>
          </nav>

          <div className="flex gap-6 text-gray-400 tracking-wider text-xs font-medium">
            <a href="https://www.instagram.com/nischayconsultancy?igsh=MWhhZHh4c2IweWV3YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="hover:text-black transition-colors">IG</a>
            <a href="https://www.linkedin.com/company/nischay-consultancy/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="hover:text-black transition-colors">LI</a>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 font-light pt-8 pb-8">
          <p>© 2026 Nischay Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
