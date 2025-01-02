import { motion } from 'framer-motion';

export default function InfoItem({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <motion.div 
        className="flex items-center justify-center space-x-2 text-gray-400"
        whileHover={{ scale: 1.05, color: '#9CA3AF' }}
        >
            {icon}
            <span>{text}</span>
        </motion.div>
    )
}