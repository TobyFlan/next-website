'use client'

import { useEffect, useState } from 'react';
import { Card, CardContent } from "./ui/card";
import Image from 'next/image';

import { 
  SiJavascript, SiPython, SiCplusplus, SiC, SiHtml5, SiCss3, 
  SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiFirebase
 } from 'react-icons/si';
import { FaJava, FaNodeJs } from 'react-icons/fa';
import { TbDatabase } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';
import { Cpu, SquareTerminal } from 'lucide-react'

import InfoItem from './InfoItem';


export default function TechSection() {
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
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center space-y-12">
          <div className="flex flex-col items-center space-y-6">
            <InfoItem icon={<SquareTerminal className="w-7 h-7" />} text="Languages" />
            <LanguagesSection />
          </div>
          

          <div className="flex flex-col items-center space-y-6">
            <InfoItem icon={<Cpu className="w-7 h-7" />} text="Main Tools" />
            <ToolsSection />
          </div>

        </div>
      </section>
    </div>
  );
}

function ToolsSection() {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {/* Tools */}
      <TechnologyItem
        name="React"
        logo={SiReact}
        description="JS Web Framwork"
      />
      <TechnologyItem
        name="Next.js"
        logo={SiNextdotjs}
        description="React Web Framework"
      />
      <TechnologyItem
        name="Tailwind CSS"
        logo={SiTailwindcss}
        description="Streamlined CSS framework"
      />
      <TechnologyItem
        name="MongoDB"
        logo={SiMongodb}
        description="NoSQL database"
      />
      <TechnologyItem
        name="Express"
        logo={SiExpress}
        description="Backend framework for Node.js"
      />
      <TechnologyItem
        name="Node.js"
        logo={FaNodeJs}
        description="JavaScript web runtime"
      />
      <TechnologyItem
        name="Firebase"
        logo={SiFirebase}
        description="Google development platform"
      />
      <TechnologyItem
        name="Microsoft Azure"
        logo={VscAzure}
        description="Cloud computing platform"
      />
    </div>
  );


}

function LanguagesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {/* Technology Items */}
      <TechnologyItem
        name="JavaScript / TypeScript"
        logo={SiJavascript}
        description="Web development"
      />
      <TechnologyItem
        name="Python"
        logo={SiPython}
        description="Mathematics and data science"
      />
      <TechnologyItem
        name="Java"
        logo={FaJava}
        description="Object-oriented programming"
      />
      <TechnologyItem
        name="C++"
        logo={SiCplusplus}
        description="High-performance computing"
      />
      <TechnologyItem
        name="C"
        logo={SiC}
        description="Procedural programming"
      />
      <TechnologyItem
        name="HTML"
        logo={SiHtml5}
        description="Web content"
      />
      <TechnologyItem
        name="CSS"
        logo={SiCss3}
        description="Web styling"
      />
      <TechnologyItem
        name="SQL"
        logo={TbDatabase}
        description="Database management"
      />
    </div>
  );
}


function TechnologyItem({ name, logo: Logo, description }: { name: string, logo: React.ComponentType<{ size: number; className: string }>, description: string }) {


  return(
    <Card className="bg-gray-800/50 border-gray-700 rounded-full overflow-hidden backdrop-blur-none lg:backdrop-blur-xl transition-all duration-300 hover:bg-gray-700/60 hover:scale-105 w-72">
      <CardContent className="p-3">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Logo size={36} className="text-gray-300" />
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="text-sm font-medium text-gray-300 truncate">{name}</h3>
            <p className="text-xs text-gray-400 truncate">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )


}

