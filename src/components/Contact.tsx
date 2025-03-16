import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-indigo-900 text-white rounded-2xl mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a
            href="mailto:baguripallavipallavi@gmail.com"
            className="flex items-center gap-2 hover:text-indigo-300 transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span>baguripallavipallavi@gmail.com</span>
          </a>
          <a
            href="tel:8919339730"
            className="flex items-center gap-2 hover:text-indigo-300 transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span>8919339730</span>
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            className="hover:text-indigo-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-indigo-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}