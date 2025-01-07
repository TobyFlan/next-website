import { IconType } from 'react-icons';
import { LuExternalLink, LuWrench } from 'react-icons/lu';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import InfoItem from './InfoItem';
import Image from 'next/image';
import { FaReact } from 'react-icons/fa';
import { SiCplusplus, SiCss3, SiFirebase, SiHtml5, SiJavascript, SiNextdotjs, SiOpengl, SiTailwindcss, SiTypescript } from 'react-icons/si';


export default function ProjectsSection() {

    const projects = [
        {
          title: "Live Blog App",
          description: `
            An active blogging platform built from the ground up. Using React and Next.js for
            the frontend, and Google's Firebase for the backend, providing secure user authentication
            and real-time data updates. Features include user-friendly interactions such as
            liking posts, intuitive navigation and responsive design through the use of Tailwind CSS.
          `,
          image: "/blog_project.png",
          technologies: [
            {name:"React", icon: FaReact},
            {name:"Next.js", icon: SiNextdotjs},
            {name:"Tailwind CSS", icon: SiTailwindcss},
            {name:"Firebase", icon: SiFirebase},
            {name:"TypeScript", icon: SiTypescript}
          ],
          link: "https://blog-app-psi-ashy.vercel.app/"
        },
        {
            title: "Black Hole Ray Tracer",
            description: `
                A custom ray tracer that simulates the bending of light around a black hole, built as my
                dissertation project. The project was created using C++ and OpenGL, with GLSL shaders for
                rendering. The ray tracer uses the Schwarzschild metric to calculate the path of light 
                rays around a black hole.
            `,
            image: "/raytrace_project.png",
            technologies: [
                {name:"C++", icon: SiCplusplus},
                {name:"OpenGL", icon: SiOpengl},
                {name:"GLSL", icon: SiOpengl}
            ]
        },
        {
            title: "Legacy Website",
            description: `
                My first step into web development. A simple website built with HTML, CSS and JavaScript.
                This project was a great learning experience and helped me understand the basics of web development.
            `,
            image: "/legacy_project.png",
            technologies: [
                {name:"HTML", icon: SiHtml5},
                {name:"CSS", icon: SiCss3},
                {name:"JavaScript", icon: SiJavascript}
            ],
            link: "https://tobyflan.github.io/"
        },
        
    ];


    return (
        <section className="container mx-auto px-4 py-16 relative z-10">
            <div className="flex justify-center mb-12">
                <InfoItem icon={<LuWrench className='w-7 h-7'/>} text="Projects" />
            </div>
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <ProjectItem key={index} {...project} isReversed={index % 2 !== 0} />
                ))}
            </div>
        </section>
        )


}

interface Technology {
    name: string;
    icon: IconType;
}

function ProjectItem({ title, description, image, technologies, isReversed, link }: { title: string, description: string, image: string, technologies: Technology[], isReversed: boolean, link?: string }) {
    return (
        <Card className="bg-gray-800/50 border-gray-700 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-indigo-900/90 via-purple-800/80 to-pink-700/90 animate-gradient"></span>

            <CardContent className="p-6 md:p-8">
                <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6`}>
                    <div className="w-full md:w-1/3 h-48 md:h-64 relative rounded-xl overflow-hidden border-2 border-gray-700">
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
    
                    <div className="w-full md:w-2/3 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-gray-200">{title}</h3>
                                {link && (
                                    <Button 
                                        variant="outline" 
                                        size="sm"
                                        className="bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:text-gray-100 transition-colors"
                                        onClick={() => window.open(link, '_blank')}
                                    >
                                        View Project
                                        <LuExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                            <p className="text-gray-300 text-sm md:text-base">{description}</p>
                        </div>
        

                        <div className="flex flex-wrap gap-2 mt-4">
                            {technologies.map((tech, index) => (
                                <ProjectToolBadge key={index} icon={tech.icon} name={tech.name} />
                            ))}
                        </div>

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function ProjectToolBadge({ icon, name }: { icon: IconType, name: string }) {
    return (
        <Badge className="flex items-center gap-1 bg-gray-700/30 text-gray-300">
        {icon({ className: 'w-5 h-5' })}
        <span>{name}</span>
      </Badge>
    )
}