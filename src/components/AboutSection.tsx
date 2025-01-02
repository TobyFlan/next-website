'use client'

import { useEffect, useState } from 'react';
import { Card, CardContent } from "./ui/card";
import Image from 'next/image';

import { SiNextdotjs } from 'react-icons/si';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <section className={`py-16 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-pink-700/30 animate-gradient"></div>
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-t from-transparent via-transparent to-[#050314]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-transparent to-[#050314]"></div>
        <div className="container mx-auto px-4 relative z-10 justify-center flex flex-col items-center">
          <br></br>
          <br></br>
          <h2 className="text-3xl font-bold mb-4 text-white">Technologies</h2>
          <br></br>
           
          <TechnologyItem name={"NextJS"} logo={SiNextdotjs} description={"Web development framework"} />
          
          <br></br>
          <br></br>
          <br></br>
        </div>
      </section>
    </div>
  );
}


function TechnologyItem({ name, logo: Logo, description }: { name: string, logo: React.ComponentType<{ size: number; className: string }>, description: string }) {


  return(
    <Card className="bg-gray-800/50 border-gray-700 rounded-full overflow-hidden backdrop-blur-xl transition-all duration-300 hover:bg-gray-700/60 hover:scale-105 w-64">
      <CardContent className="p-2">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <Logo size={40} className="text-gray-300"/>
          </div>
          <div className="flex flex-col justify-center overflow-hidden">
            <h3 className="text-sm font-medium text-gray-300 truncate">{name}</h3>
            <p className="text-xs text-gray-400 truncate">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )


}

