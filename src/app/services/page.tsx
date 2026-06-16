"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  Wind, 
  Zap, 
  Droplets, 
  Flame, 
  PlusCircle, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Activity, 
  FileText, 
  Clock 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("architectural");

  useEffect(() => {
    // Handle initial deep link scroll if hash is in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const y = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: y, behavior: "smooth" });
          setActiveSection(id);
        }, 300);
      }
    }

    const sections = ["architectural", "structural", "mepf", "costing", "pmc", "qaqc"];
    
    // Accessibility & Performance: Use IntersectionObserver instead of a scroll listener
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when section enters the upper-mid viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -150; // offset to account for navbar + sticky sub-nav
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const advantages = [
    {
      num: "01",
      title: "End-to-End Consultancy",
      desc: "We offer comprehensive, multidisciplinary services across the entire project lifecycle from concept planning and design approvals to final QA/QC and PMC handover."
    },
    {
      num: "02",
      title: "Experienced Professionals",
      desc: "Our Gandhinagar studio houses highly qualified architects, structural designers, quantity surveyors, and project managers with deep engineering expertise."
    },
    {
      num: "03",
      title: "Client-Focused Approach",
      desc: "We believe in client-centric design development, designing functional, tailored solutions that align with your requirements and project goals."
    },
    {
      num: "04",
      title: "Technical Expertise",
      desc: "We utilize advanced structural analysis software, Revit BIM coordination, and industry-leading workflows to ensure code compliance and construction precision."
    },
    {
      num: "05",
      title: "Quality & Compliance",
      desc: "Our zero-compromise quality policy ensures full adherence to national/international codes, local municipal building regulations, and safety standards."
    },
    {
      num: "06",
      title: "Timely Delivery & Optimization",
      desc: "Through detailed project scheduling, cost tracking, and value engineering, we optimize material usage and ensure projects stay on track and within budget."
    },
    {
      num: "07",
      title: "Transparent Communication",
      desc: "We maintain clear, professional communication with all stakeholders, providing transparent cost estimation, progress reporting, and site audit logs."
    }
  ];

  return (
    <main className="w-full min-w-0 overflow-x-hidden flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-32 md:pt-48 pb-16 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col space-y-6 md:space-y-8 mb-16 max-w-4xl"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500 font-medium">
            Studio Capabilities
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight">
            Integrated Expertise.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
            At Nischay Consultancy, we deliver comprehensive, multidisciplinary engineering and architectural services across the entire project lifecycle from concept to completion.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full h-[35vh] md:h-[50vh] relative overflow-hidden group cursor-pointer"
        >
          <Image
            src="/images/services/services_hero.jpeg"
            alt="Consultancy Work Backdrop"
            fill
            priority
            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        </motion.div>
      </section>

      {/* Overview Block */}
      <section className="w-full py-16 md:py-24 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto border-b border-gray-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Introduction</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
              A Multidisciplinary Architecture &amp; Engineering Studio
            </h2>
          </div>
          <div className="lg:col-span-7 text-gray-600 font-light text-base md:text-lg leading-relaxed space-y-6">
            <p>
              We operate as an integrated practice where architectural designers, structural engineers, MEPF coordinators, and project managers work collectively under a single, disciplined workflow. Established in Gandhinagar, we serve municipal authorities, public agencies, and private developers with equal technical precision.
            </p>
            <p>
              By aligning design intent directly with structural calculations and financial constraints, we make sure that our projects are calculated correctly, estimated accurately, and constructed to the highest quality.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Sub-navigation */}
      <div className="sticky top-[72px] md:top-[80px] z-40 w-full bg-white border-b border-gray-border/40 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-16 overflow-x-auto scrollbar-none">
          <nav className="flex space-x-8 sm:space-x-12 py-5 min-w-max">
            {[
              { id: "architectural", name: "01. Architecture" },
              { id: "structural", name: "02. Structural" },
              { id: "mepf", name: "03. MEPF Systems" },
              { id: "costing", name: "04. Estimation & Bid" },
              { id: "pmc", name: "05. PMC" },
              { id: "qaqc", name: "06. QA/QC" }
            ].map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={(e) => handleTabClick(e, tab.id)}
                className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                  activeSection === tab.id
                    ? "text-black border-b-2 border-black pb-5 mb-[-21px]"
                    : "text-gray-400 hover:text-black pb-5"
                }`}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Services Redesigned Core Section */}
      <div className="w-full bg-soft-gray/20">
        
        {/* SECTION 1: Architectural Design & Planning */}
        <section id="architectural" className="w-full py-14 md:py-26 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto border-b border-gray-border/40">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
          >
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-serif italic text-gray-300">01</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">Architectural Design &amp; Planning</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-serif text-black mb-8 leading-tight text-balance">
                  Balancing aesthetics, space planning, and environment.
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-base mb-8">
                  We provide innovative, functional, and sustainable architectural solutions tailored to the unique requirements of each project. Our design philosophy centers around site context, local municipal rules, and long-term durability.
                </p>
              </div>

              {/* Our Approach highlight box */}
              <div className="bg-white border border-gray-border/50 p-8 shadow-sm hover:border-black transition-colors duration-500">
                <h4 className="text-xs uppercase tracking-widest text-black font-semibold mb-4">Our Approach</h4>
                <ul className="space-y-3">
                  {[
                    "Client-centric design development",
                    "Compliance with local building regulations",
                    "Integration with structural and MEP systems",
                    "Focus on cost-efficiency and lifecycle performance"
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-gray-500 font-light flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden group cursor-pointer">
                <Image
                  src="/images/services/architectural_design_detail.jpeg"
                  alt="Architectural Design & Planning"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>

              {/* Scope of Services */}
              <div>
                <p className="text-xs uppercase tracking-widest text-black font-semibold mb-6">Scope of Services</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {[
                    "Conceptual design and master planning",
                    "Site analysis and feasibility studies",
                    "Architectural drawings (plans, elevations, sections)",
                    "3D visualization and rendering",
                    "Building approval and statutory drawings",
                    "Interior space planning and design coordination",
                    "Sustainable and green building design solutions",
                    "Preparation of detailed working drawings"
                  ].map((item, idx) => (
                    <div key={idx} className="border-t border-gray-border/40 pt-4 flex gap-4">
                      <span className="font-serif italic text-gray-300 text-sm">0{idx + 1}</span>
                      <p className="text-gray-700 text-sm font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: Structural Engineering Consultancy */}
        <section id="structural" className="w-full py-14 md:py-26 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto border-b border-gray-border/40">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-12">
              <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden group cursor-pointer">
                <Image
                  src="/images/services/structural_engineering_detail.jpeg"
                  alt="Structural Engineering"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>

              {/* Key Strengths */}
              <div>
                <p className="text-xs uppercase tracking-widest text-black font-semibold mb-6">Key Strengths</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Safety-first design philosophy",
                    "Optimization of material usage",
                    "Adherence to national and international standards",
                    "Efficient coordination with other disciplines"
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white border border-gray-border/40 p-5 hover:border-black transition-colors duration-500 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-black mb-3" strokeWidth={1.5} />
                      <p className="text-gray-700 text-sm font-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-5xl font-serif italic text-gray-300">02</span>
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">Structural Engineering Consultancy</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-black mb-8 leading-tight text-balance">
                Safety, precision, and structural stability.
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-base mb-8">
                Our structural team ensures safe, stable, and economical design solutions using advanced analysis tools and industry best practices. We calculate frames and foundations precisely to withstand seismic activities, conforming to IS codes.
              </p>

              {/* High-Contrast Bold Callout Box */}
              <div className="bg-black text-white p-8 md:p-10 space-y-6">
                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Technical Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-light text-gray-300">
                  <ul className="space-y-3">
                    <li>• Structural RCC &amp; steel designs</li>
                    <li>• Advanced software analysis (ETABS, STAAD)</li>
                    <li>• Seismic resistance (IS codes)</li>
                    <li>• Foundation design (shallow &amp; deep)</li>
                  </ul>
                  <ul className="space-y-3">
                    <li>• Structural detailing &amp; BBS</li>
                    <li>• Structural audits &amp; assessment</li>
                    <li>• Retrofitting &amp; strengthening</li>
                    <li>• Peer reviews &amp; value engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 3: MEPF Consultancy */}
        <section id="mepf" className="w-full py-14 md:py-26 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto border-b border-gray-border/40">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="flex flex-col mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-serif italic text-gray-300">03</span>
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">MEPF Consultancy (Mechanical, Electrical, Plumbing &amp; Fire)</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-black max-w-3xl leading-tight text-balance">
                Integrated utility design for operational reliability and occupant comfort.
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-base max-w-3xl mt-6">
                We provide fully coordinated MEPF blueprints. By integrating heating, lighting, sanitation, and safety mechanisms within the structure, we optimize building performance and assure complete compliance with fire codes.
              </p>
            </div>

            {/* 5-Column Technical Panel Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Mechanical */}
              <div className="bg-white border border-gray-border/50 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 shadow-sm">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-border/40">
                    <Wind className="w-5 h-5 text-black shrink-0" strokeWidth={1.5} />
                    <h4 className="text-sm font-semibold text-black">Mechanical (HVAC)</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "HVAC layouts & duct engineering",
                      "Thermal load calculations",
                      "Ventilation & exhaust planning"
                    ].map((item, i) => (
                      <li key={i} className="text-xs text-gray-500 font-light leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Electrical */}
              <div className="bg-white border border-gray-border/50 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 shadow-sm">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-border/40">
                    <Zap className="w-5 h-5 text-black shrink-0" strokeWidth={1.5} />
                    <h4 className="text-sm font-semibold text-black">Electrical</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Electrical load estimations",
                      "HT/LT power distribution",
                      "Energy-efficient illumination",
                      "Backup systems & solar integration"
                    ].map((item, i) => (
                      <li key={i} className="text-xs text-gray-500 font-light leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Plumbing */}
              <div className="bg-white border border-gray-border/50 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 shadow-sm">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-border/40">
                    <Droplets className="w-5 h-5 text-black shrink-0" strokeWidth={1.5} />
                    <h4 className="text-sm font-semibold text-black">Plumbing</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Water distribution networks",
                      "Drainage & storm designs",
                      "Rainwater harvesting systems"
                    ].map((item, i) => (
                      <li key={i} className="text-xs text-gray-500 font-light leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fire Protection */}
              <div className="bg-white border border-gray-border/50 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 shadow-sm">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-border/40">
                    <Flame className="w-5 h-5 text-black shrink-0" strokeWidth={1.5} />
                    <h4 className="text-sm font-semibold text-black">Fire Protection</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Detection & alarms systems",
                      "Sprinklers & hydrant design",
                      "Fire safety code compliances"
                    ].map((item, i) => (
                      <li key={i} className="text-xs text-gray-500 font-light leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Additional / BIM */}
              <div className="bg-white border border-gray-border/50 p-6 flex flex-col justify-between hover:border-black transition-colors duration-500 shadow-sm">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-border/40">
                    <PlusCircle className="w-5 h-5 text-black shrink-0" strokeWidth={1.5} />
                    <h4 className="text-sm font-semibold text-black">Coordinated BIM</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Coordinated MEP drawings",
                      "Clash detection via BIM",
                      "Energy audit & sustainability consulting"
                    ].map((item, i) => (
                      <li key={i} className="text-xs text-gray-500 font-light leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 4: Estimation, Costing & Tendering */}
        <section id="costing" className="w-full py-14 md:py-26 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto border-b border-gray-border/40">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
          >
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-5xl font-serif italic text-gray-300">04</span>
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">Estimation, Costing &amp; Tendering</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-black leading-tight text-balance">
                Reliable Costing & Quantity Takeoff Expertise.
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-base">
                We offer precise costing and quantity takeoff models that minimize financial vulnerabilities. By framing detailed bid specifications, we ensure transparency and protect developer equity.
              </p>
              
              {/* Image in sidebar */}
              <div className="w-full h-[200px] relative overflow-hidden group cursor-pointer">
                <Image
                  src="/images/services/cost_estimation_detail.jpeg"
                  alt="Cost Estimation Master Layout"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>
            </div>

            {/* Structured Cost Table / Comparison Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cost Scope */}
              <div className="bg-white border border-gray-border/50 p-8 flex flex-col justify-between hover:border-black transition-colors duration-500 shadow-sm">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-black mb-6 flex items-center gap-3">
                    <FileText className="w-4 h-4" /> Scope of Services
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Quantity take-offs and BOQ preparation",
                      "Detailed cost estimation and budgeting",
                      "Rate analysis and cost optimization",
                      "Tender document preparation (technical & commercial)",
                      "Bid evaluation and contractor comparison",
                      "Contract preparation and negotiation support"
                    ].map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 font-light flex gap-3">
                        <span className="font-serif italic text-gray-300">0{idx + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-black text-white p-8 flex flex-col justify-between shadow-md">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6 flex items-center gap-3">
                    <TrendingUp className="w-4 h-4" /> Financial Protections
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Accurate project budgeting",
                      "Reduction of financial risks",
                      "Transparent procurement process",
                      "Support in contractor selection"
                    ].map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-300 font-light flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8 border-t border-white/20 mt-8">
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    Our rigorous rate verification eliminates budget overruns and ensures transparent procurement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 5: Project Management Consultancy (PMC) */}
        <section id="pmc" className="w-full py-14 md:py-26 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto border-b border-gray-border/40">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-6 space-y-12">
              <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden group cursor-pointer">
                <Image
                  src="/images/services/project_management_detail.jpeg"
                  alt="PMC Site Execution"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>

              {/* Roadmap representation */}
              <div>
                <p className="text-xs uppercase tracking-widest text-black font-semibold mb-6">Execution Roadmap</p>
                <div className="space-y-6">
                  {[
                    { phase: "Phase 1: Planning", desc: "Detailed timeline scheduling using Primavera or MS Project, setting project critical path." },
                    { phase: "Phase 2: Coordination", desc: "Aligning efforts between client, designers, municipalities, and execution contractors." },
                    { phase: "Phase 3: Supervision", desc: "On-site progress monitoring, billing audits, quality tests, and schedule compliance tracking." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 border-l-2 border-black pl-6 py-1">
                      <div>
                        <h4 className="text-sm font-semibold text-black mb-1">{step.phase}</h4>
                        <p className="text-xs text-gray-500 font-light leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-5xl font-serif italic text-gray-300">05</span>
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">Project Management Consultancy (PMC)</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-black mb-8 leading-tight text-balance">
                Disciplined schedule, budget, and coordination control.
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-base mb-8">
                Our PMC workflows ensure seamless transit from drawings to physical handovers. We optimize schedules, verify material specifications, audit contractor billings, and solve execution bottlenecks dynamically.
              </p>

              {/* Value Proposition highlighted box */}
              <div className="bg-white border border-gray-border/50 p-8 shadow-sm hover:border-black transition-colors duration-500">
                <h4 className="text-xs uppercase tracking-widest text-black font-semibold mb-6 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Value Proposition
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-light text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Proactive issue resolution</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Effective site communication</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Strict adherence to timelines</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span>Improved cost &amp; risk control</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 6: Quality Assurance & Quality Control (QA/QC) */}
        <section id="qaqc" className="w-full py-14 md:py-26 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-5xl font-serif italic text-gray-300">06</span>
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">Quality Assurance &amp; Quality Control (QA/QC)</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-black leading-tight text-balance">
                Zero-compromise material audits and inspections.
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-base">
                We enforce stringent testing protocols to protect project integrity. Our inspectors perform systematic audits of structural steel, concrete strengths, and masonry to prevent structural deviations.
              </p>

              {/* Highlight Commit box */}
              <div className="bg-black text-white p-8 space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Quality Commitment</h4>
                <ul className="space-y-3 text-sm text-gray-300 font-light">
                  <li>• Zero-compromise quality auditing policy</li>
                  <li>• Dynamic site checks for workmanship alignment</li>
                  <li>• Long-term structural durability and safety validation</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="w-full h-[250px] md:h-[400px] relative overflow-hidden group cursor-pointer">
                <Image
                  src="/images/services/quality_assurance_detail.jpeg"
                  alt="QA/QC Inspection Audit"
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>

              {/* Detailed Scope Grid */}
              <div>
                <p className="text-xs uppercase tracking-widest text-black font-semibold mb-6">Scope of QA/QC Services</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Preparation and implementation of QA/QC plans",
                    "Inspection and testing of construction materials",
                    "Site quality inspections and structural audits",
                    "Monitoring workmanship and execution standards",
                    "Compliance validation with IS codes & regulations",
                    "Documentation, reporting, and record management",
                    "Identification and rectification of non-conformities"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-light">
                      <ShieldCheck className="w-5 h-5 text-black shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>

      {/* Integrated Approach Section */}
      <section className="w-full py-14 md:py-26 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto border-t border-gray-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-4">
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-6 font-medium">Methodology</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-black mb-6">
              Our Integrated Approach
            </h2>
            <p className="text-gray-600 font-light text-base leading-relaxed">
              We adopt a collaborative and integrated approach to ensure seamless coordination across all disciplines. By resolving communication friction, we minimize project risk.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                icon: <Layers className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />,
                title: "Interdisciplinary Coordination",
                desc: "Seamless communication loop between architecture, structural designs, and MEPF systems to catch conflicts before construction starts."
              },
              {
                icon: <Zap className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />,
                title: "Advanced Technologies",
                desc: "Harnessing structural analysis software and coordinated BIM models to run mock tests and evaluate spatial structures."
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />,
                title: "Value Engineering",
                desc: "Deep analysis of material options and system efficiency to deliver robust results while optimizing budget allotments."
              },
              {
                icon: <Activity className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />,
                title: "Sustainability Focus",
                desc: "Prioritizing ecological balance through green building systems, rainwater harvesting integration, and energy-conscious planning."
              }
            ].map((item, idx) => (
              <div key={idx} className="border-t border-gray-border/50 pt-8 flex gap-6 group hover:border-black transition-colors duration-500">
                <div className="p-3 bg-soft-gray border border-gray-border/50 group-hover:bg-black group-hover:text-white transition-colors duration-500 h-fit">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Asymmetric Bento Grid Redesign) */}
      <section className="w-full py-14 md:py-26 px-5 sm:px-6 md:px-16 bg-soft-gray/30 border-t border-gray-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-end">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-6 font-medium">Value</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Why Choose Us?
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                Nischay Consultancy stands for technical precision, absolute execution transparency, structural safety, and comprehensive financial accountability.
              </p>
            </div>
          </div>

          {/* Premium Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <div 
                key={i} 
                className={`border border-gray-border/50 bg-white p-8 md:p-10 hover:border-black transition-all duration-500 flex flex-col justify-between shadow-sm ${
                  i === 0 || i === 6 ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-serif italic text-gray-400">{adv.num}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-4 text-black">{adv.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-500">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="w-full py-14 md:py-26 px-5 sm:px-6 md:px-8 text-center bg-black text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="container mx-auto max-w-3xl flex flex-col items-center"
        >
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-6">Start Building</p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
            Discuss your development with us
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-light mb-12 max-w-2xl leading-relaxed">
            Partner with Gandhinagar’s integrated architecture and PMC studio to design and execute your next residential, commercial, or public project. We are ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
            <a
              href="tel:+919898703577"
              className="px-8 py-4 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Studio
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
