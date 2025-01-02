'use client'

import { useEffect, useState } from 'react';
import { Card, CardContent } from "./ui/card";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <section className={`py-16 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-pink-700/30 animate-gradient"></div>
        <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-t from-transparent via-transparent to-[#050314]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-b from-transparent via-transparent to-[#050314]"></div>
        <div className="container mx-auto px-4 relative z-10 justify-center flex flex-col items-center">
          <br></br>
          <br></br>
          <br></br>
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-gray-200 max-w-2xl">
            As a passionate developer, I thrive on creating innovative solutions that push the boundaries of what's possible in web development. With a keen eye for design and a love for clean, efficient code, I bring ideas to life in the digital realm. My journey in tech has been one of constant learning and growth, embracing new technologies and methodologies to stay at the forefront of this ever-evolving field.
          </p>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </section>
    </div>
  );
}

