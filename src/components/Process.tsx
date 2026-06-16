"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      title: "Understanding the Vision",
      desc: "We begin by understanding the client’s goals, requirements, and aspirations for the project."
    },
    {
      title: "Planning & Design Development",
      desc: "Our team develops creative and technically strong concepts that align with functionality, sustainability, and design excellence."
    },
    {
      title: "Execution & Coordination",
      desc: "We ensure smooth coordination between planning, engineering, and project execution through organized management processes."
    },
    {
      title: "Final Delivery",
      desc: "Every project is delivered with attention to quality, detail, and long-term performance."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="w-full min-w-0 py-20 md:py-32 px-5 sm:px-6 md:px-16 border-t border-gray-border/40 bg-white">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Process</p>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-20">Our Approach</h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col border-t border-gray-border/60 pt-6 group"
            >
              <span className="text-5xl font-serif text-gray-200 mb-6 group-hover:text-black transition-colors duration-500">0{index + 1}</span>
              <h3 className="text-xl font-medium mb-4">{step.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
