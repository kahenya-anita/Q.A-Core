import React from "react";
import { Linkedin } from "lucide-react";

const TeamMember = ({ name, role, image, linkedin }) => (
  <div className="text-center">
    <div className="relative group">
      <img
        src={image}
        alt={name}
        className="w-48 h-48 rounded-full mx-auto object-cover filter group-hover:brightness-75 transition-all"
      />
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Linkedin className="w-8 h-8 text-white" />
        </a>
      )}
    </div>
    <h3 className="mt-4 text-xl font-semibold text-[#002B3D]">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Wainaina Kasyoka",
      role: "Community Lead",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://www.linkedin.com/in/wainaina-kasyoka/",
    },
    {
      name: "Raphael Nyangenya",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://www.linkedin.com/in/raphael-nyangenya-8ba034b2/",
    },
    {
      name: "Collins Kipkoech",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://www.linkedin.com/in/collins-kipkoech0317/",
    },
    {
      name: "Anita Kahenya",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://www.linkedin.com/in/anita-kahenya/",
    },
    {
      name: "Vicky Jeptoo",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://www.linkedin.com/in/vicky-jeptoo-b2b05316a/",
    },
    {
      name: "Angela Kandie",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://www.linkedin.com/in/angela-kandie/",
    },
    {
      name: "Koffi Kelvin",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://www.linkedin.com/in/koffikelvin/",
    },
    {
      name: "John Doe",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002B3D] mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-[#FFA726] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
