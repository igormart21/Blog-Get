import { notFound } from 'next/navigation';
import { services, siteConfig } from '@/data/config';
import Sidebar from '@/components/Sidebar';
import { CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Serviço não encontrado',
        };
    }

    return {
        title: `${service.name} | G-TEC Desentupidora`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-neutral-light min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <header className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 mb-8">
                            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-primary-dark mb-4">
                                {service.name}
                            </h1>
                            <p className="text-primary-gray text-lg mb-8">
                                {service.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-green text-white font-bold rounded-lg hover:bg-primary-green/90 transition-colors shadow-lg"
                                >
                                    Solicitar Orçamento Grátis
                                </a>
                                <a
                                    href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-dark font-bold rounded-lg border-2 border-primary-dark hover:bg-neutral-light transition-colors"
                                >
                                    Ligar Agora
                                </a>
                            </div>
                        </header>

                        <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 mb-8">
                            <h2 className="text-2xl font-poppins font-bold text-primary-dark mb-4">
                                Como funciona o serviço
                            </h2>
                            <p className="text-primary-gray leading-relaxed">
                                {service.longDescription}
                            </p>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                <h3 className="flex items-center text-lg font-bold text-primary-red mb-4">
                                    <AlertTriangle size={20} className="mr-2" />
                                    Causas Comuns
                                </h3>
                                <ul className="space-y-2">
                                    {service.causes.map((cause, index) => (
                                        <li key={index} className="flex items-start text-primary-gray text-sm">
                                            <span className="mr-2">•</span> {cause}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                <h3 className="flex items-center text-lg font-bold text-primary-blue mb-4">
                                    <HelpCircle size={20} className="mr-2" />
                                    Sinais do Problema
                                </h3>
                                <ul className="space-y-2">
                                    {service.signs.map((sign, index) => (
                                        <li key={index} className="flex items-start text-primary-gray text-sm">
                                            <span className="mr-2">•</span> {sign}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        <section className="bg-primary-dark text-white rounded-2xl shadow-md p-8 mb-8">
                            <h2 className="text-2xl font-poppins font-bold mb-6">
                                Por que nos escolher?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle size={20} className="text-primary-green mr-3 flex-shrink-0" />
                                        <span className="text-sm font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-gradient-to-r from-primary-blue to-primary-dark rounded-2xl shadow-lg p-8 text-center text-white">
                            <h2 className="text-2xl font-poppins font-bold mb-2">
                                Precisa de {service.name}?
                            </h2>
                            <p className="text-white/80 mb-6">
                                Atendemos 24 horas em Canoas, Porto Alegre, Cuiabá e Campo Grande.
                            </p>
                            <a
                                href={`https://wa.me/${siteConfig.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-primary-green text-white font-bold rounded-lg hover:bg-primary-green/90 transition-colors shadow-lg hover:scale-105 transform duration-200"
                            >
                                Chamar Técnico Agora
                            </a>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}
