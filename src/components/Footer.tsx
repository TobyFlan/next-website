import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import InfoItem from './InfoItem';
import { BiPhoneCall } from "react-icons/bi";


export default function Footer() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <section className={`py-32 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050314] via-indigo-900/30 to-purple-800/20"></div>
                <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-[#050314] via-[#050314]/80 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-end h-full">
                <InfoItem icon={<BiPhoneCall className='w-7 h-7' />} text="Contact Me" />
                <div className="mt-8 flex flex-col items-center">
                    <div className="flex space-x-6 mb-8">
                        <a href="https://github.com/tobyflan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            <FaGithub className="w-8 h-8" />
                        </a>
                        <a href="https://linkedin.com/in/tobias-flanagan-7b6b5b172" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a href="mailto:toby.flanagan@hotmail.co.uk" className="text-gray-300 hover:text-white transition-colors">
                            <FaEnvelope className="w-8 h-8" />
                        </a>
                        </div>
                        <p className="text-gray-400 text-sm">© 2025 Toby Flanagan. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    )

}