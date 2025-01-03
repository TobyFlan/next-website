import { IconType } from 'react-icons';
import { LuWrench } from 'react-icons/lu';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
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
            loking posts, intuitive navigation and respinsive design through the use of Tailwind CSS.
          `,
          image: "/drippy shirt.jpg",
          technologies: [
            {name:"React", icon: FaReact},
            {name:"Next.js", icon: SiNextdotjs},
            {name:"Tailwind CSS", icon: SiTailwindcss},
            {name:"Firebase", icon: SiFirebase},
            {name:"TypeScript", icon: SiTypescript}
          ],
        },
        {
            title: "Legacy Website",
            description: "This is another brief description of the project. Blah Blah Blah.",
            image: "/drippy shirt.jpg",
            technologies: [
                {name:"HTML", icon: SiHtml5},
                {name:"CSS", icon: SiCss3},
                {name:"JavaScript", icon: SiJavascript}
            ]
        },
        {
            title: "Black Hole Ray Tracer",
            description: "This is a brief description of the project. Blah Blah Blah.",
            image: "/drippy shirt.jpg",
            technologies: [
                {name:"C++", icon: SiCplusplus},
                {name:"OpenGL", icon: SiOpengl},
                {name:"GLSL", icon: SiOpengl}
            ]
        }
        
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

function ProjectItem({ title, description, image, technologies, isReversed }: { title: string, description: string, image: string, technologies: Technology[], isReversed: boolean }) {
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
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-200">{title}</h3>
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