

import { useState, useEffect } from 'react';


import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Header() {
  return (

    <main>

        <LinksSection />

        <ProfileSection />

    </main>

  );
}

function ProfileSection() {

    return(
        <motion.div 
        className="flex flex-col items-center min-h-screen p-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
            <Avatar className="w-32 h-32 mb-6">
                <AvatarImage src="/drippy shirt.jpg" alt="John Doe" />
                <AvatarFallback>TF</AvatarFallback>
            </Avatar>
            <div className="text-left space-y-0">
                <h1 className="text-3xl font-bold text-gray-300">Toby Flanagan</h1>
                <p className="text-md text-gray-500">💻 Aspiring Software Engineer</p>
                <p className="text-md text-gray-500">📍 London, UK</p>
                <p className="text-md text-gray-500">🎓 Computer Science Graduate</p>
            </div>
        </motion.div>
    )

}

function LinksSection() {

    const [isMobile, setIsMobile] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const email = "toby.flanagan@hotmail.co.uk";

    // check if mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();

        window.addEventListener('resize', () => checkMobile());
        return () => window.removeEventListener('resize', () => checkMobile());
    })

    // copy email to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setIsCopied(true);
        // todo: style toast
        toast.success("Email copied to clipboard");
        setTimeout(() => setIsCopied(false), 2000);
    }

    return (

        <main>

            <div className="flex justify-between items-start transition-all duration-200">

                {/* Left section with email and cv */}
                <div className="flex space-x-4 p-6">
                    <Card className="bg-gray-800/50 border-gray-700 rounded-full overflow-hidden backdrop-blur-xl">
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

                    <Card className="bg-gray-800/50 border-gray-700 rounded-full overflow-hidden backdrop-blur-xl">
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
                <div className={`flex ${isMobile ? 'space-x-2 p-6' : 'space-x-4 p-10'} items-center`}>

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
        <Card className="bg-gray-800/50 border-gray-700 rounded-full overflow-hidden backdrop-blur-xl">
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