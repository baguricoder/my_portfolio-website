import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering(AI AND ML)",
    institution: "Sri Venkateswara College of Engineering  and Technology ",
    location: " 📍Chittoor, Andhra Pradesh",
    period: "2021 - 2025",
    gpa: "8.26 CGPA",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    degree: "Intermidiate college",
    field: "MPC",
    institution: "Seetharamaiah Junior girls College",
    location: "📍Dharmavaram, Andhra Pradesh",
    period: "2019 - 2021",
    gpa: "80%",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

export default function Education() {
  return (
    <div className="h-full w-full overflow-y-auto bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-white/80 mb-1">{edu.field}</p>
                <div className="flex items-center gap-2 text-white/70 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                  {edu.gpa}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

