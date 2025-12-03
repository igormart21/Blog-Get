import { services } from '@/data/config';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Nossos Serviços | G-TEC Desentupidora',
    description: 'Conheça todos os serviços de desentupimento que oferecemos. Atendimento 24 horas em Canoas, Porto Alegre e região.',
};

export default function ServicesPage() {
    return (
        <div className="bg-neutral-light min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <header className="mb-12">
                            <h1 className="text-4xl font-poppins font-bold text-primary-dark mb-4">
                                Nossos Serviços
                            </h1>
                            <p className="text-primary-gray text-lg">
                                Oferecemos soluções completas para problemas de entupimento residencial,
                                comercial e industrial. Confira nossa lista de serviços especializados.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service) => (
                                <Link
                                    key={service.slug}
                                    href={`/servicos/${service.slug}`}
                                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
                                >
                                    <h2 className="text-xl font-poppins font-bold text-primary-dark mb-3 group-hover:text-primary-blue transition-colors">
                                        {service.name}
                                    </h2>
                                    <p className="text-primary-gray mb-6 flex-grow line-clamp-3">
                                        {service.description}
                                    </p>
                                    <span className="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform mt-auto">
                                        Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                                    </span>
                                </Link>
                            ))}
                        </div>
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
