import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Hi, I'm Pallavi Baguri",
    subtitle: "Innovative Developer | AI & ML Enthusiast | Building Smart Solutions & Engaging Experiences",
    content: "Turning innovative ideas into reality through code and creativity",
  },
  {
    id: 2, 
    title: "My Skills",
    content: "AI • ML • React.js • Python • Cloud Computing • SQL  • HTML  • Java  • CSS ",
  },
  {
    id: 3,
    title: "My Projects",
    content: "AI Banking System Using Facial Recognization • Hand Gesture Recognition • Glass-reselling-hub • LinkedIn-message-DM-Filter",
  },
  {
    id: 4,
    title: "Let's Connect",
    content: (
      <div className="flex gap-6 justify-center items-center">
        <a href="https://github.com/baguricoder" className="hover:text-indigo-600 transition-colors">
          <Github className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/pallavi-baguri-82a607291/ " className="hover:text-indigo-600 transition-colors">
          <Linkedin className="w-8 h-8" />
        </a>
        <a href="mailto:baguripallavipallavi@gmail.com" className="hover:text-indigo-600 transition-colors">
          <Mail className="w-8 h-8" />
        </a>
        <a href="tel:8919339730" className="hover:text-indigo-600 transition-colors">
          <Phone className="w-8 h-8" />
        </a>
      </div>
    ),
  },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl transform transition-all duration-500">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-opacity duration-500 absolute w-full ${
              index === currentSlide ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-900 mb-4">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <h2 className="text-xl md:text-2xl text-center text-indigo-700 mb-6">
                {slide.subtitle}
              </h2>
            )}
            <div className="text-lg md:text-xl text-center text-gray-700">
              {slide.content}
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-indigo-600 w-4' : 'bg-indigo-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
