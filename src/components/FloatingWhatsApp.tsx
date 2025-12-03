'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/config';

const FloatingWhatsApp = () => {
    return (
        <Link
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="fixed right-4 bottom-4 z-50"
        >
            <motion.div
                className="group relative"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="absolute -inset-2 rounded-full bg-primary-green/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-xl border-2 border-primary-green overflow-hidden bg-white hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    <Image
                        src="/images/whatsapp-icon.webp"
                        alt="Ícone do WhatsApp"
                        width={56}
                        height={56}
                        className="object-contain"
                        sizes="56px"
                        priority
                    />
                </div>
            </motion.div>
        </Link>
    );
};

export default FloatingWhatsApp;
