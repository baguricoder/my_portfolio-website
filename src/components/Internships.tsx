import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const internships = [
  {
    company: "SKILL SAVVY",
    role: "Java Programming Intern",
    period: "Aug 2024 -oct 2024",
    location: "Remote",
    description: ["Completed a Java Programming Internship at Skill SAVVY, where I enhanced code efficiency by 30% through optimized",
                  "algorithms and reduced debugging time by 40% using structured problem-solving."],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    company: "SLASH MARK",
    role: "React.js Internship",
    period: "Sep 2024-Oct 2024",
    location: "Remote",
    description: "Developed responsive web applications using React.js and implemented modern UI/UX designs.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    company: "GLOBLE QUEST TECHNOLOGIES",
    role: "INTERN",
    period: "mar 2025 - present",
    location: "Bangalore",
    description: "s.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

export default function Internships() {
  return (
    <div className="h-full w-full overflow-y-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Internships</h2>
        <div className="space-y-6">
          {internships.map((internship) => (
            <div
              key={internship.company}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={internship.image}
                  alt={internship.company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">{internship.role}</h3>
                </div>
                <p className="text-white/80 font-semibold mb-2">{internship.company}</p>
                <div className="flex items-center gap-4 text-white/70 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{internship.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{internship.location}</span>
                  </div>
                </div>
                <p className="text-white/90">{internship.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}