import React from "react";

export default function Team() {
  const team = [
    { name: "Khushi Shash", role: "Former Partner & Architect" },
    { name: "Rohan Soni", role: "Former Partner & Engineer" },
    { name: "Pooja Soni", role: "Former Partner & Engineer" },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full text-center">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-soft-gray mb-6 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                <span className="font-serif italic text-2xl">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-2 mb-4">{member.role}</p>
              <div className="flex gap-4 text-xs font-serif italic text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="hover:text-black transition-colors">Li</span>
                <span className="hover:text-black transition-colors">Tw</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
