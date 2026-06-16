"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Integrated Expertise",
      desc: "A complete combination of architecture, engineering, planning, and execution support under one roof.",
      img: "/images/services/mepf_consultancy.jpeg",
      className: "md:col-span-2 md:row-span-2 relative group overflow-hidden text-white flex flex-col justify-end p-8 md:p-12"
    },
    {
      title: "Design with Purpose",
      desc: "We focus on creating spaces that are practical, sustainable, and future-ready while maintaining strong visual appeal.",
      img: "/images/about/innovation.jpeg",
      className: "md:col-span-1 md:row-span-1 relative group overflow-hidden text-white flex flex-col justify-end p-8 md:p-10"
    },
    {
      title: "Transparent Approach",
      desc: "Clear communication, professional processes, and collaborative project management at every stage.",
      img: "/images/about/partnership.jpeg",
      className: "md:col-span-1 md:row-span-1 relative group overflow-hidden text-white flex flex-col justify-end p-8 md:p-10"
    },
    {
      title: "Quality & Commitment",
      desc: "We believe in delivering developments with precision, efficiency, and uncompromising quality standards.",
      img: "/images/about/philosophy.jpeg",
      className: "md:col-span-1 md:row-span-1 relative group overflow-hidden text-white flex flex-col justify-end p-8"
    },
    {
      title: "Timely Execution",
      desc: "Our disciplined workflow ensures developments are completed efficiently without compromising design or quality.",
      img: "/images/about/expertise.jpeg",
      className: "md:col-span-2 md:row-span-1 relative group overflow-hidden text-white flex flex-col justify-end p-8 md:p-10"
    }
  ];

  return (
    <section className="w-full min-w-0 py-32 px-5 sm:px-6 md:px-8 bg-white border-t border-gray-border/40">
      <div className="container mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Advantage</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Why Nischay Consultancy</h2>
          </div>
          <p className="text-lg text-gray-600 font-light max-w-md leading-relaxed">
            Determination in Every Development. We build with precision, ensuring every space serves a profound purpose.
          </p>
        </div>
        
        {/* Architectural Bento Box Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[350px] gap-4 w-full"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, scale: 0.96, y: 24 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
                }
              }}
              className={`${feature.className} bg-neutral-950`}
            >
              
              {/* Background Image */}
              <Image 
                src={feature.img}
                alt={feature.title}
                fill
                className="object-cover filter grayscale opacity-40 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-out z-0"
              />
              
              {/* Dark Gradient Overlay for extreme text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 pointer-events-none z-10 transition-opacity duration-700 group-hover:opacity-80"></div>
              
              {/* Content */}
              <div className="relative z-20 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-serif italic text-gray-300">
                    0{i + 1}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 group-hover:-rotate-45 transition-all duration-500" />
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">{feature.title}</h3>
                  <p className="text-sm md:text-base font-light leading-relaxed max-w-md text-gray-200">
                    {feature.desc}
                  </p>
                </div>
              </div>
              
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
