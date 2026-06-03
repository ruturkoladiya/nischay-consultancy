import React from "react";
import Image from "next/image";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Nischay Consultancy",
  description: "Learn about Nischay Consultancy's architectural vision, design philosophy, leadership, and multidisciplinary expertise.",
};

export default function AboutPage() {
  const pillars = [
    {
      num: "01",
      label: "Philosophy",
      title: "Every detail matters in architecture",
      desc: "We approach each project with meticulous attention. Precision in design leads to precision in execution. We believe that true quality lies in the details from the structural foundation to the final tactile finish, every element should serve a purpose and elevate the human experience.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      num: "02",
      label: "Expertise",
      title: "Years of knowledge in every project",
      desc: "Our team brings decades of combined experience across residential, commercial, and urban developments. We bridge the gap between creative architectural design and rigorous engineering standards, ensuring our projects are structurally optimized, cost-efficient, and built to endure for generations.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
    },
    {
      num: "03",
      label: "Innovation",
      title: "Forward-thinking design solutions",
      desc: "We blend timeless design principles with contemporary thinking and digital workflows. By utilizing building information modeling (BIM), advanced structural simulation, and sustainable design frameworks, we craft responsive, forward-looking environments suited for a changing world.",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      num: "04",
      label: "Partnership",
      title: "Your vision guides our work",
      desc: "We work closely with clients, developers, and municipalities to align our designs with their strategic goals. Through open communication, collaborative workshops, and clear project management, we translate initial ideas into functional, beautiful realities that benefit the broader community.",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const teamMembers = [
    {
      name: "Khushi Shash",
      role: "Former Partner & Architect",
      desc: "Combines architectural leadership with practical design oversight for high-impact projects."
    },
    {
      name: "Rohan Soni",
      role: "Former Partner & Engineer",
      desc: "Provides structural engineering direction and ensures project feasibility across disciplines."
    },
    {
      name: "Pooja Soni",
      role: "Former Partner & Engineer",
      desc: "Supports engineering strategy and quality control in every stage of planning and execution."
    }
  ];

  return (
    <main className="w-full min-w-0 overflow-x-hidden flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-32 md:pt-48 pb-16 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto border-b border-gray-border/40">
        <div className="flex flex-col space-y-6 md:space-y-8 mb-16 max-w-4xl">
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500 font-medium">
            About the Studio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight">
            Determination in Every Development.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
            We are a multidisciplinary consultancy firm based in Gandhinagar, shaping architectural forms and structural engineering solutions that stand the test of time.
          </p>
        </div>

        {/* Hero Image Block */}
        <div className="w-full h-[45vh] md:h-[65vh] relative overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            alt="Nischay Studio Concept"
            fill
            priority
            className="object-cover filter grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        </div>
      </section>

      {/* Studio Profile / Introduction Section */}
      <section className="w-full py-24 md:py-36 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Nischay Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-xs tracking-widest uppercase text-gray-500 font-medium">Profile</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-balance">
              Integrated Architectural & Engineering Solutions
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-gray-600 font-light text-base md:text-lg leading-relaxed">
            <p>
              Founded with a mission to deliver comprehensive, end-to-end consulting services, Nischay Consultancy has grown into a trusted partner for public and private developments. Based in Gandhinagar, Gujarat, we support the region’s growth by offering integrated design, structural analysis, project management, and urban planning.
            </p>
            <p>
              We believe that good architecture cannot exist without structural integrity and functional reality. By combining architects, civil engineers, PMC specialists, and interior designers in one collaborative studio, we eliminate communication gaps and deliver seamless, optimized project executions.
            </p>
            <div className="pt-6 border-t border-gray-border/60 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-serif font-light text-black">15+</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Years Practice</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-light text-black">120+</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-light text-black">8+</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">In-House Disciplines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Pillars Sections (Grid layouts per wireframe) */}
      <section className="w-full border-t border-gray-border/40 bg-soft-gray/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-16 py-24 md:py-36 space-y-24 md:space-y-36">
          <div className="max-w-3xl">
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Pillars</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Our Core Design and Project Philosophies
            </h2>
          </div>

          <div className="space-y-16 md:space-y-28">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-12 border-t border-gray-border/60 items-center"
              >
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl md:text-5xl font-serif italic text-gray-300 font-light">
                        {pillar.num}
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                        {pillar.label}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-black mb-6 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden group">
                    <Image
                      src={pillar.img}
                      alt={pillar.title}
                      fill
                      className="object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Partnership Story */}
      <section className="w-full py-24 md:py-36 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto border-t border-gray-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="w-full h-[350px] md:h-[500px] relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="Partnership Discussion"
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <p className="text-xs tracking-widest uppercase text-gray-500">History</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
              Founding Partnership & Vision
            </h2>
            <div className="space-y-6 text-gray-600 font-light text-base md:text-lg leading-relaxed">
              <p>
                What began as a collaborative alliance between independent architects and structural consultants solidified into Nischay Consultancy. The firm was created to resolve the constant disconnect between high-concept architectural drawings and structural engineering realities.
              </p>
              <p>
                By bringing multidisciplinary expertise under a unified design management process, we enable Gandhinagar’s residential builders, public agencies, and private developers to execute complex projects with absolute confidence.
              </p>
              <p className="font-serif italic text-black">
                “Our determination is built into every development we design and supervise. We do not just sketch forms; we calculate stability, manage timelines, and shape real spaces.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profile Section (staggered editorial grid) */}
      <section id="team" className="w-full py-24 md:py-36 px-5 sm:px-6 md:px-16 bg-soft-gray/20 border-t border-gray-border/40">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Expertise</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">Our Architects & Specialists</h2>
            </div>
            <p className="text-gray-600 font-light text-sm md:text-base max-w-sm leading-relaxed">
              A diverse collective of professional architects, engineers, estimators, and project managers committed to design precision.
            </p>
          </div>

          {/* Premium Architectural Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="flex flex-col border border-gray-border/50 bg-white p-8 group hover:border-black transition-all duration-500 cursor-pointer justify-between min-h-[300px]"
              >
                <div>
                  <div className="w-12 h-12 bg-soft-gray mb-6 flex items-center justify-center text-gray-500 group-hover:bg-black group-hover:text-white transition-colors duration-500 font-serif italic text-xl">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-serif font-medium text-black mb-1 group-hover:translate-x-1 transition-transform duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {member.desc}
                  </p>
                </div>

                <div className="mt-8 flex gap-4 text-xs font-serif italic text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="hover:text-black transition-colors">Li</span>
                  <span className="hover:text-black transition-colors">Tw</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="w-full py-24 md:py-36 px-5 sm:px-6 md:px-8 text-center bg-black text-white">
        <div className="container mx-auto max-w-3xl flex flex-col items-center">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">Collaborate</p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Ready to build something great?
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-light mb-12 max-w-2xl leading-relaxed">
            Let’s discuss your project. Make here to listen and create solutions that matter. Whether you require architectural layouts, structural designs, or PMC services, our Gandhinagar office is ready to partner with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
            <a
              href="tel:+919876543210"
              className="px-8 py-4 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Studio
            </a>
            <a
              href="https://wa.me/919876543210"
              className="px-8 py-4 border border-white text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
