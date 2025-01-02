import { useState, useEffect } from 'react';


import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Laptop, MapPin, GraduationCap } from 'lucide-react';
import toast from 'react-hot-toast';

import InfoItem from './InfoItem';


export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (

    <main>

        <LinksSection isMobile={isMobile} />

        <ProfileSection isMobile={isMobile} />

    </main>

  );
}

function ProfileSection({ isMobile }: { isMobile: boolean }) {

    return(
        <motion.div 
            className="flex flex-col items-center p-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >

            <div className="relative w-full max-w-sm mx-auto h-48 sm:h-40">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Card className="bg-gray-800/50 border-gray-700 rounded-full overflow-hidden backdrop-blur-xl flex items-center justify-center p-2 w-36 h-36">
                    <Avatar className="w-32 h-32">
                        <AvatarImage src="/drippy shirt.jpg" alt="Toby Flanagan" />
                        <AvatarFallback>TF</AvatarFallback>
                    </Avatar>
                    </Card>
                </div>

                <Card className={
                    `bg-gray-800/50 border-gray-700 rounded-full overflow-hidden 
                    ${!isMobile && 'backdrop-blur-xl'} 
                    absolute z-10 left-1/2 transform -translate-x-1/2
                    sm:translate-x-0 sm:left-auto sm:right-0 
                    top-3/4 sm:top-1/3 sm:-translate-y-2/3 sm:-rotate-12
                    ${!isMobile && "animate-slow-float"}`}
                >
                    <CardContent className="p-2">
                    <Button className="bg-gray-700/50 text-gray-300 hover:text-gray-100 rounded-full px-4 py-2 transition-colors duration-200 cursor-default">
                        Toby Flanagan 👋
                    </Button>
                    </CardContent>
                </Card>
            </div>

            <motion.div 
                className="mt-16 sm:mt-12 space-y-3 text-center min-w-max"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <InfoItem icon={<Laptop className="w-5 h-5" />} text="Aspiring Software Engineer" />
                <InfoItem icon={<MapPin className="w-5 h-5" />} text="London, UK" />
                <InfoItem icon={<GraduationCap className="w-5 h-5" />} text="Computer Science Graduate" />
            </motion.div>

        </motion.div>
    )
}



function LinksSection({ isMobile }: { isMobile: boolean }) {

    const [isCopied, setIsCopied] = useState(false);
    const email = "toby.flanagan@hotmail.co.uk";

    // copy email to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setIsCopied(true);
        // todo: style toast
        toast.success("Email copied to clipboard");
        setTimeout(() => setIsCopied(false), 2000);
    }

    return (

        <main className="overflow-x-hidden">

            <div className="flex justify-between items-start transition-all duration-200 w-full">

                {/* Left section with email and cv */}
                <div className="flex space-x-4 pt-6 pb-6 pl-6 pr-0">
                    <Card className={`bg-gray-800/50 border-gray-700 rounded-full overflow-hidden ${!isMobile && "backdrop-blur-xl"}`}>
                        <CardContent className="p-2">
                            <div className="flex items-center space-x-2">
                                {!isMobile && <p className="text-sm text-gray-300 px-4">{email}</p>}
                                <Button 
                                    size="sm"
                                    className={`${isMobile ? "bg-gray-950/70" : "bg-gray-700/50"} text-gray-300 hover:text-gray-100 rounded-full px-4 py-2 transition-all duration-200`}
                                    onClick={copyToClipboard}
                                >
                                    <p>{isCopied ? "Copied!" : isMobile ? "Email" : "Copy"}</p>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className={`bg-gray-800/50 border-gray-700 rounded-full overflow-hidden ${!isMobile && "backdrop-blur-xl"}`}>
                        <CardContent className="p-2">
                            <div className="flex items-center">
                                <Button 
                                    size="sm"
                                    className="bg-gray-700/50 text-gray-300 hover:text-gray-100 rounded-full px-4 py-2 transition-colors duration-200"
                                    onClick={() => window.open("https://docs.google.com/document/d/1gI_YSFg0zwChIqjyK7UdAZ1BYpqwBCbsfLv-sospqBI/edit?usp=sharing")}
                                >
                                    <p>Resume</p>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right section with socials */}
                <div className={`flex ${isMobile ? 'space-x-1 pt-6 pb-6 pl-0 pr-6' : 'space-x-4 p-10'} items-center`}>

                    {isMobile ? (
                        <>

                            {/* TODO: these button iconds are depricated, need to find new ones! */}

                            <SocialButton icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/tobias-flanagan-7b6b5b172/" />
                            <SocialButton icon={<Github size={20} />} href="https://github.com/TobyFlan" />
                            <SocialButton icon={<Instagram size={20} />} href="https://www.instagram.com/t_flandalf/" />
                        </>
                    ) : (
                        <p className="text-gray-300">
                            <SocialLink text="LinkedIn" href="https://www.linkedin.com/in/tobias-flanagan-7b6b5b172/" />
                            {" / "}
                            <SocialLink text="GitHub" href="https://github.com/TobyFlan" />
                            {" / "}
                            <SocialLink text="Instagram" href="https://www.instagram.com/t_flandalf/" />
                        </p>
                    )}

                </div>

            </div>

        </main>

    )

}

function SocialButton({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <Card className={`bg-gray-800/50 border-gray-700 rounded-full overflow-hidden`}>
            <CardContent className="p-2">
                <Button 
                    size="sm"
                    className="bg-gray-700/50 text-gray-300 hover:text-gray-100 rounded-full p-2 transition-colors duration-200"
                    onClick={() => window.open(href, '_blank')}
                >
                    {icon}
                </Button>
            </CardContent>
        </Card>
    )
}

function SocialLink({ text, href }: { text: string, href: string }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-gray-100 transition-colors duration-200 underline"
        >
            {text}
        </a>
    )
}