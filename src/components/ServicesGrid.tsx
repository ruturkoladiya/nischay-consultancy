"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  const services = [
    {
      title: "Architectural Design & Planning",
      desc: "We deliver innovative, functional, and sustainable architectural design and master planning balancing aesthetics, practicality, and regulatory compliance.",
      img: "/images/architectural_design.jpeg",
      href: "/services#architectural",
    },
    {
      title: "Structural Engineering Consultancy",
      desc: "Advanced structural analysis and safe, stable, and economical designs for RCC, steel, and composite structures adhering strictly to code compliance.",
      img: "/images/services/structural_engineering.jpeg",
      href: "/services#structural",
    },
    {
      title: "MEPF Consultancy",
      desc: "Fully integrated Mechanical, Electrical, Plumbing, and Fire (MEPF) system design ensuring operational reliability, comfort, and safety.",
      img: "/images/services/mepf.jpeg",
      href: "/services#mepf",
    },
    {
      title: "Estimation, Costing & Tendering",
      desc: "Precise cost estimations, detailed quantity take-offs (BOQ), rate analysis, and bid evaluation support to maintain complete financial control.",
      img: "/images/about/estimation.jpeg",
      href: "/services#costing",
    },
    {
      title: "Project Management Consultancy (PMC)",
      desc: "End-to-end planning, scheduling, stakeholder coordination, and dynamic site supervision to deliver developments on time and within budget.",
      img: "/images/services/pmc_overview.jpeg",
      href: "/services#pmc",
    },
    {
      title: "Quality Assurance & Quality Control (QA/QC)",
      desc: "Preparation and execution of rigorous QA/QC plans, material testing, and workmanship audits to guarantee structural durability.",
      img: "/images/services/qaqc_overview.jpeg",
      href: "/services#qaqc",
    },
  ];

  return (
    <section
      id="services"
      className="w-full min-w-0 py-20 md:py-32 px-5 sm:px-6 md:px-16 bg-soft-gray border-t border-gray-border/40"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-20">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            What We Do
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link
              href="/#contact"
              className="px-6 py-3 bg-black text-white text-sm hover:bg-gray-800 transition-colors text-center"
            >
              Get a Consultation
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-gray-border flex items-center justify-center gap-2 text-sm bg-white hover:bg-gray-50 transition-colors"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-12 border-t border-gray-border/60">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <Link
                href={service.href}
                className="flex flex-col group cursor-pointer h-full"
              >
                <div className="w-full relative h-[250px] md:h-[300px] mb-6 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>
                <div className="text-sm font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                  Details <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
