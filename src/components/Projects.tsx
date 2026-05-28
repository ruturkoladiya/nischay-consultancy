import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Sardhav Lake Rejuvenation",
      tags: ["Gandhinagar"],
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
    },
    {
      title: "Uvarsad Lake Development",
      tags: ["Public Infrastructure"],
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1935&q=80"
    },
    {
      title: "Pethapur Iconic Road Development",
      tags: ["Urban Streetscape"],
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
      title: "Residential Architecture Projects",
      tags: ["Residential"],
      img: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
    },
    {
      title: "War Memorial",
      tags: ["Ahmedabad"],
      img: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Modern Interior Design Projects",
      tags: ["Interior Design"],
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="w-full min-w-0 py-20 md:py-32 px-5 sm:px-6 md:px-16">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Featured Projects Section</p>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-center">Projects That Reflect Our Vision</h2>
        <p className="text-lg text-gray-600 font-light mb-20 text-center max-w-3xl">
          From lake rejuvenation initiatives and urban street development to residential architecture and public infrastructure, our projects showcase a balance of innovation, sustainability, and functionality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer flex flex-col">
              <div className="w-full overflow-hidden mb-6 relative h-[250px] md:h-[400px]">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs uppercase tracking-wider text-gray-400 border border-gray-border/50 px-2 py-1">{tag}</span>
                ))}
              </div>
              <div className="text-sm font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                View project <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-20 text-center max-w-2xl text-gray-500 font-serif italic text-lg">
          Each project is designed with a deep understanding of its environment, purpose, and long-term impact.
        </p>
      </div>
    </section>
  );
}
