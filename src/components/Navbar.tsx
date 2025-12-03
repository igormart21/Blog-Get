'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';
import { siteConfig } from '@/data/config';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { href: '/', label: 'Início' },
        { href: '/blog', label: 'Blog' },
        { href: '/servicos', label: 'Serviços' },
        { href: '/contato', label: 'Contato' },
    ];

    const serviceItems = [
        { href: '/servicos/pia', label: 'Desentupimento de Pia' },
        { href: '/servicos/ralo', label: 'Desentupimento de Ralo' },
        { href: '/servicos/vaso', label: 'Desentupimento de Vaso' },
        { href: '/servicos/esgoto', label: 'Desentupimento de Esgoto' },
        { href: '/servicos/caixa-gordura', label: 'Caixa de Gordura' },
        { href: '/servicos/limpa-fossa', label: 'Limpa Fossa' },
        { href: '/servicos/hidrojateamento', label: 'Hidrojateamento' },
    ];

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28">
                            <Image
                                src="/images/g-tec-logo.png"
                                alt="G-Tec Desentupidora Logo"
                                fill
                                sizes="(max-width: 768px) 64px, (max-width: 1024px) 96px, 112px"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-primary-gray hover:text-primary-blue transition-colors duration-200 font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="text-primary-gray hover:text-primary-blue transition-colors duration-200 font-medium flex items-center">
                                Serviços
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-64 bg-neutral-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-2">
                                    {serviceItems.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="block px-4 py-2 text-sm text-primary-gray hover:bg-primary-blue hover:text-white transition-colors duration-200"
                                        >
                                            {service.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red transition-all duration-300 shadow-md border-2 border-primary-red hover:border-primary-dark"
                        >
                            <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" /></svg>
                            <span>Orçamento 24h</span>
                        </a>
                        <a
                            href="https://www.instagram.com/desentupidora.portoalegre/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-blue hover:text-primary-dark transition-colors duration-200"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-md text-primary-gray hover:text-primary-blue hover:bg-neutral-light transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-neutral-light"
                    >
                        <div className="px-4 py-2 space-y-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block py-2 text-primary-gray hover:text-primary-blue transition-colors duration-200 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <div className="border-t border-neutral-light pt-2">
                                <p className="text-sm font-semibold text-primary-soft mb-2">Serviços:</p>
                                {serviceItems.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        className="block py-1 text-sm text-primary-gray hover:text-primary-blue transition-colors duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {service.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="border-t border-neutral-light pt-2 flex items-center space-x-4">
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-poppins font-semibold hover:from-primary-dark hover:to-primary-red transition-all duration-300 shadow-md border-2 border-primary-red hover:border-primary-dark"
                                >
                                    <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" /></svg>
                                    <span>Orçamento 24h</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/desentupidora.portoalegre/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-blue"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
