
import { LuWrench } from 'react-icons/lu';

import InfoItem from './InfoItem';


export default function ProjectsSection() {

    const projects = [
        {
          title: "Project Name",
          description: "This is a brief description of the project. It showcases the main features and purpose of the application.",
          image: "/drippy shirt.jpg",
          technologies: ["React", "Next.js", "Tailwind CSS"],
        },
        // Add more projects as needed
      ];


    return (
        <section className="container mx-auto px-4 py-16 relative z-10">
            <div className="flex justify-center mb-12">
            <InfoItem icon={<LuWrench className='w-7 h-7'/>} text="Projects" />
            </div>
            <div className="space-y-16">
            {projects.map((project, index) => (
                <ProjectItem key={index} {...project} />
            ))}
            </div>
        </section>
        )


}

function ProjectItem({ title, description, image, technologies }: { title: string, description: string, image: string, technologies: string[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
                <img src={image} alt={title} className="rounded-lg shadow-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-400">{description}</p>
                <div className="flex space-x-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}