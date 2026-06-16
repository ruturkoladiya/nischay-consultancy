"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="w-full min-w-0 py-20 md:py-40 px-5 sm:px-6 md:px-8 text-center bg-soft-gray border-t border-gray-border/40">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="container mx-auto max-w-3xl flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
          Let’s Create Something Meaningful Together
        </h2>
        <p className="text-lg text-gray-600 font-light mb-12 max-w-4xl leading-relaxed">
          Whether you are planning a residential space, infrastructure development, commercial development, or urban transformation, Nischay Consultancy is committed to delivering solutions that combine innovation, engineering excellence, and thoughtful design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 justify-center">
          <a 
            href="tel:+919898703577" 
            className="px-10 py-4 bg-black text-white text-sm font-medium tracking-wider uppercase hover:bg-gray-800 transition-colors duration-300 text-center"
          >
            Get a Consultation
          </a>
          <a 
            href="https://wa.me/919898703577" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-black bg-white text-black text-sm font-medium tracking-wider uppercase hover:bg-black hover:text-white transition-colors duration-300 text-center"
          >
            Contact Our Team
          </a>
        </div>
      </motion.div>
    </section>
  );
}
