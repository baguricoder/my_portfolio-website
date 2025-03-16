import React from 'react';
import { 
  Code2, Database, Cloud, Brain, 
  Gamepad2, Terminal
} from 'lucide-react';

const skills = [
  {
    category: "Programming",
    icon: <Code2 className="w-8 h-8" />,
    items: ["Python", "Java","CSS","HTML","JavaScript", "React.js"]
  },
  {
    category: "AI & ML",
    icon: <Brain className="w-8 h-8" />,
    items: ["OpenCV", "TensorFlow"]
  },
  {
    category: "Cloud & Databases",
    icon: <Cloud className="w-8 h-8" />,
    items: ["AWS", "SQL", "Linux"]
  },
  {
    category: "Game Development",
    icon: <Gamepad2 className="w-8 h-8" />,
    items: ["Unity", "3D Animation"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-indigo-600 mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-700 text-center">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}