import React from "react";
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Profile() {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white">
        <div className="mb-8 text-center">
        <a href="https://i.postimg.cc/DT0QDCBQ/my-black-dress-photo.jpg" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://i.postimg.cc/DT0QDCBQ/my-black-dress-photo.jpg" 
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-white/90"
          />
        </a>
          <h1 className="text-4xl font-bold mb-2">BAGURI PALLAVI</h1>
          <p className="text-xl opacity-90">Innovative Developer | AI & ML Enthusiast | Building Smart Solutions & Engaging Experiences</p>
        </div>
        
        <div className="space-y-4 mb-8">
          <p className="text-lg leading-relaxed">
            Final year B.Tech student with a passion for AI and web development.
            Focused on creating innovative solutions that combine artificial intelligence
            with modern web technologies.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/baguricoder " className="hover:text-indigo-300 transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/pallavi-baguri-82a607291/ " className="hover:text-indigo-300 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="mailto:bagurikavitha@gmail.com" className="hover:text-indigo-300 transition-colors">
            <Mail className="w-8 h-8" />
          </a>
          <a href="tel:8919339730" className="hover:text-indigo-300 transition-colors">
            <Phone className="w-8 h-8" />
          </a>
        </div>

        <div className="mt-8 text-center text-sm opacity-75">
          <p>Swipe to explore more →</p>
        </div>
      </div>
    </div>
  );
}