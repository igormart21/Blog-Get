import { siteConfig } from '@/data/config';
import Sidebar from '@/components/Sidebar';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contato | G-TEC Desentupidora',
    description: 'Entre em contato com a G-TEC Desentupidora. Atendimento 24 horas por telefone, WhatsApp ou e-mail.',
};

export default function ContactPage() {
    return (
        <div className="bg-neutral-light min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <header className="mb-12">
                            <h1 className="text-4xl font-poppins font-bold text-primary-dark mb-4">
                                Fale Conosco
                            </h1>
                            <p className="text-primary-gray text-lg">
                                Estamos prontos para atender você 24 horas por dia.
                                Entre em contato para solicitar um orçamento ou tirar dúvidas.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="flex items-center text-lg font-bold text-primary-dark mb-3">
                                    <Phone className="w-5 h-5 text-primary-green mr-2" /> Telefone & WhatsApp
                                </h3>
                                <p className="text-primary-gray mb-1">{siteConfig.phone}</p>
                                <p>
                                    <a
                                        href={`https://wa.me/${siteConfig.whatsapp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-green font-medium hover:underline"
                                    >
                                        Chamar no WhatsApp
                                    </a>
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="flex items-center text-lg font-bold text-primary-dark mb-3">
                                    <Mail className="w-5 h-5 text-primary-green mr-2" /> E-mail
                                </h3>
                                <p className="text-primary-gray">{siteConfig.email}</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="flex items-center text-lg font-bold text-primary-dark mb-3">
                                    <MapPin className="w-5 h-5 text-primary-green mr-2" /> Localização
                                </h3>
                                <p className="text-primary-gray mb-1">{siteConfig.location}</p>
                                <p className="text-primary-gray text-sm">{siteConfig.state}, {siteConfig.country}</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="flex items-center text-lg font-bold text-primary-dark mb-3">
                                    <Clock className="w-5 h-5 text-primary-green mr-2" /> Horário de Atendimento
                                </h3>
                                <p className="text-primary-gray">{siteConfig.serviceHours}</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                            <h2 className="text-2xl font-poppins font-bold text-primary-dark mb-6">
                                Envie uma Mensagem
                            </h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                        placeholder="Seu nome completo"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">E-mail</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-2">Telefone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                                            placeholder="(00) 00000-0000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-2">Mensagem</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all resize-none"
                                        placeholder="Como podemos ajudar?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-8 py-4 bg-primary-blue text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                                >
                                    Enviar Mensagem
                                </button>
                            </form>
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
