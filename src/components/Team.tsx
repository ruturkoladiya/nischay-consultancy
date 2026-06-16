"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
  const team = [
    { name: "Khushi Shah", role: "Former Partner & Architect", img: "/images/teams/khushi_shah.jpg" },
    { name: "Rohan Soni", role: "Former Partner & Engineer", img: "/images/teams/rohan_soni.jpeg" },
    { name: "Pooja Soni", role: "Former Partner & Engineer", img: "/images/teams/pooja_soni.jpeg", position: "object-top" },
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
    <section id="team" className="w-full min-w-0 py-20 md:py-40 px-5 sm:px-6 md:px-8 bg-white border-t border-gray-border/40">
      <div className="container mx-auto max-w-5xl flex flex-col items-center">
        <div className="text-center mb-24">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">Team</p>
          <h2 className="text-4xl md:text-5xl font-serif">Leadership</h2>
          <p className="mt-4 text-gray-600 font-light text-sm max-w-sm mx-auto">
            Experienced professionals dedicated to design excellence.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full text-center"
        >
          {team.map((member, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden bg-soft-gray mb-6 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors duration-500 relative">
                {member.img ? (
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className={`object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 ${member.position || 'object-center'}`}
                  />
                ) : (
                  <span className="font-serif italic text-2xl">{member.name.charAt(0)}</span>
                )}
              </div>
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
