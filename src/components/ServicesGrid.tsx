import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      title: "Architectural Design",
      desc: "We create modern, functional, and meaningful architectural spaces that reflect the client’s vision while ensuring comfort, efficiency, and timeless design.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Structural Engineering",
      desc: "Our engineering solutions are focused on safety, durability, and technical precision, ensuring every structure performs with long-term reliability.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Project Management",
      desc: "From planning to execution, we manage projects with clear coordination, systematic workflows, and a commitment to timely delivery.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2062&q=80",
    },
    {
      title: "Interior Design",
      desc: "We design interiors that elevate everyday experiences through smart space planning, refined aesthetics, and practical functionality.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    },
    {
      title: "Urban Planning",
      desc: "Our urban development solutions aim to improve connectivity, sustainability, and public engagement through strategic planning and infrastructure design.",
      img: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    },
    {
      title: "Tender & PMC Services",
      desc: "We provide professional tendering and project management consultancy services to maintain quality standards, project transparency, and efficient execution.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
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
            <button className="px-6 py-3 bg-black text-white text-sm hover:bg-gray-800 transition-colors">
              Discuss Your Project
            </button>
            <button className="px-6 py-3 border border-gray-border flex items-center justify-center gap-2 text-sm bg-white hover:bg-gray-50">
              Explore Our Work <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-12 border-t border-gray-border/60">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="w-full relative h-[250px] md:h-[300px] mb-6 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover filter grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6 flex-1">
                {service.desc}
              </p>
              <div className="text-sm font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                Details <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
