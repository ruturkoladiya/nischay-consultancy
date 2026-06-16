"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative w-full min-h-screen min-w-0 flex flex-col pt-28 pb-8 md:pt-32 md:pb-16 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto justify-between">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-8 mt-12 mb-20"
      >
        <motion.p 
          variants={itemVariants}
          className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-500 font-medium text-balance px-2"
        >
          Determination in Every Development
        </motion.p>
        <motion.h1 
          variants={itemVariants}
          className="text-[clamp(3.5rem,8vw,7rem)] font-serif leading-[1.05] tracking-tight text-balance"
        >
          Designing Spaces That Shape the Future
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600 max-w-3xl font-light leading-relaxed"
        >
          At Nischay Consultancy, we believe great design is not just about buildings, it’s about creating environments that inspire people, improve communities, and stand strong for generations. From architecture and structural engineering to urban planning and project management, we deliver thoughtful solutions that combine creativity, functionality, and technical excellence.
        </motion.p>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600 max-w-3xl font-light leading-relaxed"
        >
          With a commitment to quality, transparency, and innovation, we help transform ideas into sustainable and future-ready spaces.
        </motion.p>
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <a href="#contact" className="px-8 py-4 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors flex items-center gap-2">
            Get a Consultation <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#about" className="px-8 py-4 border border-gray-border text-sm font-medium tracking-wide hover:bg-soft-gray transition-colors">
            About Us
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden group"
      >
        <Image 
          src="/images/premium_archtecture_exterior.jpeg" 
          alt="Premium Architecture Exterior"
          fill
          priority
          className="object-cover group-hover:scale-105 transition-all duration-[2s] ease-out grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </motion.div>
    </section>
  );
}
