import React from 'react';
import { Music, Book, Camera, Palette } from 'lucide-react';

const hobbies = [
  {
    name: "Travelling",
    icon: <Camera className="w-8 h-8" />,
    description: "Capturing moments and exploring visual storytelling through the lens",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "Reading",
    icon: <Book className="w-8 h-8" />,
    description: "Exploring new worlds through books, especially tech and science fiction",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "Music",
    icon: <Music className="w-8 h-8" />,
    description: "Playing guitar and composing digital music in free time",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "Digital Art",
    icon: <Palette className="w-8 h-8" />,
    description: "Creating digital illustrations and exploring graphic design",
    image: "https://images.unsplash.com/photo-1547333472-4d605a7f6d31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

export default function Hobbies() {
  return (
    <div className="h-full w-full overflow-y-auto bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.name}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={hobby.image}
                  alt={hobby.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-white">{hobby.icon}</div>
                  <h3 className="text-xl font-bold text-white">{hobby.name}</h3>
                </div>
                <p className="text-white/80">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}