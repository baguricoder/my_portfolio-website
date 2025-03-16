import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "ADM Banking System",
    description: ["his project is an enhanced version of the traditional ATM banking system, integrating facial recognition technology to improve security and",
                   "streamline user authentication. the system aims to reduce fraudulent activities and provide a more user-friendly banking experience."],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    github: "https://github.com/baguricoder/facial-recognition-banking-system",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask"]
  },
  {
    title: "Hand Gesture Recognition",
    description: "Real-time hand gesture recognition using OpenCV and TensorFlow",
    image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    github: "https://github.com/pallavibaguri/Hand-Gesture-Recognition",
    demo: "https://hand-gesture-recognition-demo.netlify.app",
    tech: ["Python", "TensorFlow", "MediaPipe"]
  },
  {
    title: "Glass-reselling-hub",
    description: "This project is a reselling platform designed to help customers sell their old glass items at a low cost, making them accessible to new buyers.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    github: "https://github.com/baguricoder/Glass-Resell-Hub",
    tech: ["💻 React.js | Node.js | MongoDB | Express.js"]
  },
  {
    title: "LinkedIn-message-DM-Filter",
    description: "Managing 50-150 LinkedIn messages per week can be overwhelming, especially when they include job applications, networking requests, sales pitches, and casual chats. To solve this, I built a LinkedIn DM Organizer that automatically categorizes and prioritizes messages for better productivity!",
    image: "https://images.app.goo.gl/hSjvkJ3iez7Yrmse8",
    github: "https://github.com/baguricoder/linkedIn-message-classifier",
    tech: ["🔹 Tech Stack:",
      "✅ React.js for an intuitive UI.",
      "✅ Firebase for message storage.",
      "✅ JavaScript for automation and filtering logic."]
  }
];

export default function Projects() {
  return (
    <div className="h-full w-full overflow-y-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-white hover:text-indigo-300 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-white hover:text-indigo-300 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}