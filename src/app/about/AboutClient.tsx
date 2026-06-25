"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutClient() {
  const pillars = [
    {
      num: "01",
      label: "Philosophy",
      title: "Every detail matters in architecture",
      desc: "We approach each project with meticulous attention. Precision in design leads to precision in execution. We believe that true quality lies in the details from the structural foundation to the final tactile finish, every element should serve a purpose and elevate the human experience.",
      img: "/images/about/philosophy.jpeg"
    },
    {
      num: "02",
      label: "Expertise",
      title: "Years of knowledge in every project",
      desc: "Our team brings decades of combined experience across residential, commercial, and urban developments. We bridge the gap between creative architectural design and rigorous engineering standards, ensuring our projects are structurally optimized, cost-efficient, and built to endure for generations.",
      img: "/images/about/expertise.jpeg"
    },
    {
      num: "03",
      label: "Innovation",
      title: "Forward-thinking design solutions",
      desc: "We blend timeless design principles with contemporary thinking and digital workflows. By utilizing building information modeling (BIM), advanced structural simulation, and sustainable design frameworks, we craft responsive, forward-looking environments suited for a changing world.",
      img: "/images/about/innovation.jpeg"
    },
    {
      num: "04",
      label: "Partnership",
      title: "Your vision guides our work",
      desc: "We work closely with clients, developers, and municipalities to align our designs with their strategic goals. Through open communication, collaborative workshops, and clear project management, we translate initial ideas into functional, beautiful realities that benefit the broader community.",
      img: "/images/about/partnership.jpeg"
    }
  ];

  const teamMembers = [
    {
      name: "Khushi Shah",
      role: "Former Partner & Architect",
      desc: "Combines architectural leadership with practical design oversight for high-impact developments.",
      img: "/images/teams/khushi_shah.jpg"
    },
    {
      name: "Rohan Soni",
      role: "Former Partner & Engineer",
      desc: "Provides structural engineering direction and ensures feasibility across disciplines.",
      img: "/images/teams/rohan_soni.jpeg"
    },
    {
      name: "Pooja Soni",
      role: "Former Partner & Engineer",
      desc: "Supports engineering strategy and quality control in every stage of planning and execution.",
      img: "/images/teams/pooja_soni.jpeg",
      position: "object-top"
    }
  ];

  return (
    <main className="w-full min-w-0 overflow-x-hidden flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-32 md:pt-48 pb-16 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto border-b border-gray-border/40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col space-y-6 md:space-y-8 mb-16 max-w-4xl"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500 font-medium">
            About the Studio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight text-balance">
            Determination in Every Development.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
            We are a multidisciplinary consultancy firm based in Gandhinagar, shaping architectural forms and structural engineering solutions that stand the test of time.
          </p>
        </motion.div>

        {/* Hero Image Block */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full h-[45vh] md:h-[65vh] relative overflow-hidden group cursor-pointer"
        >
          <Image
            src="/images/about/philosophy.jpeg"
            alt="Nischay Studio Concept"
            fill
            priority
            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        </motion.div>
      </section>

      {/* Studio Profile / Introduction Section */}
      <section className="w-full py-24 md:py-36 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
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
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6 text-gray-600 font-light text-base md:text-lg leading-relaxed"
          >
            <p>
              Founded with a mission to deliver comprehensive, end-to-end consulting services, Nischay Consultancy has grown into a trusted partner for public and private developments. Based in Gandhinagar, Gujarat, we support the region’s growth by offering integrated design, structural analysis, project management, and urban planning.
            </p>
            <p>
              We believe that good architecture cannot exist without structural integrity and functional reality. By combining architects, civil engineers, Project Management Consultancy specialists, and interior designers in one collaborative studio, we eliminate communication gaps and deliver seamless, optimized project executions.
            </p>
            <div className="pt-6 border-t border-gray-border/60 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-serif font-light text-black">15+</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Years Practice</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-light text-black">8+</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">In-House Disciplines</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy & Pillars Sections */}
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
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
                  <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden group cursor-pointer">
                    <Image
                      src={pillar.img}
                      alt={pillar.title}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Partnership Story */}
      <section className="w-full py-24 md:py-36 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto border-t border-gray-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="w-full h-[350px] md:h-[500px] relative overflow-hidden group cursor-pointer">
              <Image
                src="/images/about/office_interior.jpeg"
                alt="Partnership Discussion"
                fill
                className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6 space-y-6 order-1 lg:order-2"
          >
            <p className="text-xs tracking-widest uppercase text-gray-500">History</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
              Founding Partnership & Vision
            </h2>
            <div className="space-y-6 text-gray-600 font-light text-base md:text-lg leading-relaxed">
              <p>
                What began as a collaborative alliance between independent architects and structural consultants solidified into Nischay Consultancy. The firm was created to resolve the constant disconnect between high-concept architectural drawings and structural engineering realities.
              </p>
              <p>
                By bringing multidisciplinary expertise under a unified design management process, we enable Gandhinagar’s residential builders, public agencies, and private developers to execute complex developments with absolute confidence.
              </p>
              <p className="font-serif italic text-black">
                “Our determination is built into every development we design and supervise. We do not just sketch forms; we calculate stability, manage timelines, and shape real spaces.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Profile Section */}
      <section id="team" className="w-full py-24 md:py-48 px-5 sm:px-6 md:px-16 bg-soft-gray/20 border-t border-gray-border/40">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Expertise</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">Our Architects &amp; Specialists</h2>
            </div>
            <p className="text-gray-600 font-light text-sm md:text-base max-w-sm leading-relaxed">
              A diverse collective of professional architects, engineers, estimators, and project managers committed to design precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {teamMembers.map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                className={`group cursor-pointer flex flex-col transition-all duration-700 ${
                  i === 1 ? "md:mt-16" : i === 2 ? "md:mt-8" : ""
                }`}
              >
                {/* Image container */}
                <div className="w-full aspect-[3/4] bg-soft-gray relative overflow-hidden mb-8">
                  {member.img ? (
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className={`object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1.2s] ease-out group-hover:scale-105 ${member.position || 'object-center'}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-serif italic text-5xl">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                </div>

                {/* Info Container with Fine Separator Line */}
                <div className="border-t border-black/10 pt-6 flex justify-between items-start">
                  <div className="space-y-2.5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-semibold block">
                      {member.role}
                    </span>
                    <h3 className="text-2xl font-serif text-black leading-tight group-hover:translate-x-1 transition-transform duration-300">
                      {member.name}
                    </h3>
                  </div>
                  <span className="font-serif italic text-lg text-gray-300">0{i + 1}</span>
                </div>

                {/* Description Bio */}
                <p className="text-sm font-light text-gray-500 leading-relaxed mt-4 max-w-sm">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="w-full py-24 md:py-36 px-5 sm:px-6 md:px-8 text-center bg-black text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="container mx-auto max-w-3xl flex flex-col items-center"
        >
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">Collaborate</p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Ready to build something great?
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-light mb-12 max-w-2xl leading-relaxed">
            Let’s discuss your development. We are here to listen and create solutions that matter. Whether you require architectural layouts, structural designs, or Project Management Consultancy services, our Gandhinagar office is ready to partner with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
            <a
              href="tel:+919898703577"
              className="px-8 py-4 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Us
            </a>
            <a
              href="https://wa.me/919898703577"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
