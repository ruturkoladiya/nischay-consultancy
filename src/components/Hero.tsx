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
          At Nischay Consultancy, we believe great design is not just about
          buildings, it’s about creating environments that inspire people,
          improve communities, and stand strong for generations. From
          architecture and structural engineering to urban planning and project
          management, we deliver thoughtful solutions that combine creativity,
          functionality, and technical excellence.
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 max-w-3xl font-light leading-relaxed"
        >
          With a commitment to quality, transparency, and innovation, we help
          transform ideas into sustainable and future-ready spaces.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            Get a Consultation <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-gray-border text-sm font-medium tracking-wide hover:bg-soft-gray transition-colors"
          >
            About Us
          </a>
        </motion.div>
      </motion.div>

      {/* Creative Architectural/Geometric Animation */}
      <div className="w-full relative flex flex-col items-center justify-center py-8 md:py-22 mt-8 overflow-hidden min-h-[50vh] md:min-h-[60vh] group">
        {/* Kinetic Wireframe Sculpture (Represents structure, space, engineering) */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 transition-opacity duration-1000 group-hover:opacity-40"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            animate={{ rotateX: [0, 360], rotateY: [0, 180] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[90vw] h-[90vw] md:w-[40vw] md:h-[40vw] max-w-[600px] max-h-[600px] border-[1px] border-black rounded-full"
          />
          <motion.div
            animate={{ rotateY: [0, 360], rotateZ: [0, 180] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[70vw] h-[70vw] md:w-[30vw] md:h-[30vw] max-w-[450px] max-h-[450px] border-[1px] border-black rounded-full"
          />
          <motion.div
            animate={{ rotateZ: [0, 360], rotateX: [0, 180] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[110vw] h-[110vw] md:w-[50vw] md:h-[50vw] max-w-[750px] max-h-[750px] border-[1px] border-black rounded-full"
          />
        </div>

        {/* Central Glassmorphism Nameplate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          className="relative z-10 w-[90%] md:w-auto mx-auto text-center backdrop-blur-md bg-white/40 px-4 py-8 sm:px-10 sm:py-10 md:px-18 md:py-14 rounded-3xl border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)] hover:bg-white/60 cursor-pointer"
        >
          <h2 className="text-[clamp(1.75rem,5vw,5rem)] font-serif font-light tracking-[0.1em] sm:tracking-[0.15em] text-gray-900 uppercase mb-4 sm:mb-6 leading-tight sm:leading-none">
            Nischay
            <br className="md:hidden" /> Consultancy
          </h2>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6 sm:mb-8" />
          <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.4em] uppercase text-gray-500 font-medium">
            Architectural Intelligence
          </p>
        </motion.div>
      </div>
    </section>
  );
}
