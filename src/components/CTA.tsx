import React from "react";

export default function CTA() {
  return (
    <section className="w-full min-w-0 py-20 md:py-40 px-5 sm:px-6 md:px-8 text-center bg-soft-gray">
      <div className="container mx-auto max-w-3xl flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
          Let’s Create Something Meaningful Together
        </h2>
        <p className="text-lg text-gray-600 font-light mb-12 max-w-4xl">
          Whether you are planning a residential space, infrastructure project, commercial development, or urban transformation, Nischay Consultancy is committed to delivering solutions that combine innovation, engineering excellence, and thoughtful design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+123456789" className="px-10 py-4 bg-black text-white text-sm font-medium tracking-wider uppercase hover:bg-gray-800 transition-colors">
            Start Your Project
          </a>
          <a href="https://wa.me/123456789" className="px-10 py-4 border border-black bg-white text-black text-sm font-medium tracking-wider uppercase hover:bg-gray-50 transition-colors">
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
