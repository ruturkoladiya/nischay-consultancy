import React from "react";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section id="about" className="w-full min-w-0 py-20 md:py-40 px-5 sm:px-6 md:px-8 bg-white overflow-hidden relative border-t border-gray-border/40">
      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="/logo.png"
            alt="Nischay Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">About</p>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
          Building Ideas with Vision & Precision
        </h2>
        <div className="space-y-6 text-lg text-gray-600 font-light max-w-4xl leading-relaxed mb-16">
          <p>
            Nischay Consultancy is a multidisciplinary consultancy firm based in Gandhinagar, dedicated to delivering comprehensive solutions in architecture, engineering, interior design, urban planning, and PMC services.
          </p>
          <p>
            Our approach combines creative thinking with practical execution to ensure every development is not only visually impactful but also structurally efficient and sustainable. Whether it’s a residential development, public infrastructure, urban streetscape, or interior space, we focus on creating designs that balance aesthetics, usability, and long-term value.
          </p>
          <p>
            Every development we undertake is driven by collaboration, attention to detail, and a passion for building spaces that truly make a difference.
          </p>
        </div>
        
        <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
            alt="Office Interior" 
            fill
            className="object-cover filter grayscale hover:grayscale-0 transition-all duration-[1.5s]"
          />
        </div>
      </div>
    </section>
  );
}
