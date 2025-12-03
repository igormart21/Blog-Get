'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import { siteConfig } from '@/data/config';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const services = [
        { href: '/servicos/pia', label: 'Desentupidora de Pia' },
        { href: '/servicos/ralo', label: 'Desentupidora de Ralo' },
        { href: '/servicos/vaso', label: 'Desentupidora de Vaso' },
        { href: '/servicos/esgoto', label: 'Desentupidora de Esgoto' },
        { href: '/servicos/caixa-gordura', label: 'Caixa de Gordura' },
        { href: '/servicos/limpa-fossa', label: 'Limpa Fossa' },
        { href: '/servicos/hidrojateamento', label: 'Hidrojateamento' },
    ];

    const pages = [
        { href: '/', label: 'Início' },
        { href: '/blog', label: 'Blog' },
        { href: '/servicos', label: 'Serviços' },
        { href: '/contato', label: 'Contato' },
    ];

    return (
        <footer className="bg-[#0B2E54] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 mb-6">
                            <div className="relative w-32 h-32">
                                <Image
                                    src="/images/g-tec-logo.png"
                                    alt="G-Tec Desentupidora Logo"
                                    fill
                                    sizes="128px"
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-poppins font-bold">
                                    G-Tec Desentupidora
                                </h3>
                                <p className="text-sm text-gray-300">Porto Alegre</p>
                            </div>
                        </Link>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Especialistas em desentupimento em Porto Alegre e região.
                            Atendimento 24 horas com equipamentos modernos e técnicos qualificados.
                        </p>

                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/desentupidora.portoalegre/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center hover:bg-primary-yellow hover:text-primary-dark transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center hover:bg-primary-yellow hover:text-primary-dark transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-poppins font-semibold mb-6">
                            Nossos Serviços
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-300 hover:text-primary-green transition-colors duration-200 text-sm"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-poppins font-semibold mb-6">
                            Links Rápidos
                        </h4>
                        <ul className="space-y-3">
                            {pages.map((page) => (
                                <li key={page.href}>
                                    <Link
                                        href={page.href}
                                        className="text-gray-300 hover:text-primary-green transition-colors duration-200 text-sm"
                                    >
                                        {page.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-poppins font-semibold mb-6">
                            Contato
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        <a
                                            href={`tel:+${siteConfig.phone.replace(/\D/g, '')}`}
                                            className="hover:text-primary-green transition-colors duration-200"
                                        >
                                            {siteConfig.phone}
                                        </a>
                                    </p>
                                    <p className="text-xs text-gray-400">Atendimento 24h</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        <a
                                            href={`mailto:${siteConfig.email}`}
                                            className="hover:text-primary-green transition-colors duration-200"
                                        >
                                            {siteConfig.email}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        {siteConfig.location}
                                    </p>
                                    <p className="text-xs text-gray-400">{siteConfig.state}, {siteConfig.country}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Clock className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        24 horas por dia
                                    </p>
                                    <p className="text-xs text-gray-400">7 dias por semana</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a
                                href={`https://wa.me/${siteConfig.whatsapp}`}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-red to-primary-red/80 text-white rounded-lg font-semibold hover:from-primary-dark hover:to-primary-red hover:scale-105 transition-all duration-300 shadow-xl border-2 border-primary-red hover:border-primary-dark"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path></svg>
                                Fale no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} G-Tec Desentupidora. Todos os direitos reservados.
                        </p>

                        <div className="flex space-x-6 text-sm">
                            <Link
                                href="/politica-privacidade"
                                className="text-gray-400 hover:text-primary-green transition-colors duration-200"
                            >
                                Política de Privacidade
                            </Link>
                            <Link
                                href="/termos-uso"
                                className="text-gray-400 hover:text-primary-green transition-colors duration-200"
                            >
                                Termos de Uso
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
