import Hero from '@/components/Hero';
import { services } from '@/data/config';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />

            {/* Services Section */}
            <section className="py-20 bg-neutral-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-dark mb-4">
                            Nossos Serviços Especializados
                        </h2>
                        <p className="text-primary-gray max-w-2xl mx-auto">
                            Soluções completas para problemas de entupimento em residências, comércios e indústrias.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link
                                href={`/servicos/${service.slug}`}
                                key={service.slug}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-blue/10"
                            >
                                <div className="h-full flex flex-col">
                                    <h3 className="text-xl font-poppins font-bold text-primary-dark mb-3 group-hover:text-primary-blue transition-colors">
                                        {service.name}
                                    </h3>
                                    <p className="text-primary-gray mb-6 flex-grow">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-primary-blue font-medium group-hover:translate-x-2 transition-transform">
                                        Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-neutral-light rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-primary-dark mb-6">
                            Desentupidora 24 Horas: Referência em Qualidade
                        </h2>
                        <div className="prose prose-lg text-primary-gray max-w-none">
                            <p className="mb-4">
                                A <strong>G-TEC Desentupidora</strong> é líder no mercado de saneamento, oferecendo soluções rápidas e eficazes para entupimentos residenciais, comerciais e industriais. Com uma frota moderna e técnicos altamente capacitados, garantimos um serviço limpo, seguro e com o melhor custo-benefício.
                            </p>

                            <h3 className="text-xl font-poppins font-semibold text-primary-dark mt-6 mb-3">
                                Por que escolher a G-TEC?
                            </h3>
                            <p className="mb-4">
                                Além do atendimento 24 horas, nos destacamos pela transparência e tecnologia. Utilizamos equipamentos de ponta como hidrojateamento de alta pressão e vídeo inspeção para resolver problemas complexos sem quebra-quebra.
                            </p>

                            <h3 className="text-xl font-poppins font-semibold text-primary-dark mt-6 mb-3">
                                Atendimento Regional Especializado
                            </h3>
                            <p className="mb-4">
                                Entendemos as necessidades específicas de cada região. Por isso, mantemos bases operacionais estratégicas para garantir a chegada rápida em até 40 minutos:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4 mt-4 list-none pl-0">
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary-green mr-2 mt-1 flex-shrink-0" />
                                    <span><strong><a href="https://canoas.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Desentupidora em Canoas</a>:</strong> Atendimento expresso para todos os bairros.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary-green mr-2 mt-1 flex-shrink-0" />
                                    <span><strong><a href="https://desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Desentupidora em Porto Alegre</a>:</strong> Cobertura completa na capital gaúcha.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary-green mr-2 mt-1 flex-shrink-0" />
                                    <span><strong><a href="https://cuiaba.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Desentupidora em Cuiabá</a>:</strong> Soluções para o calor de Cuiabá.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary-green mr-2 mt-1 flex-shrink-0" />
                                    <span><strong><a href="https://campogrande.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Desentupidora em Campo Grande</a>:</strong> Equipes prontas para atender a Cidade Morena.</span>
                                </li>
                            </ul>

                            <p className="mt-6">
                                Seja para um simples desentupimento de pia ou para a limpeza complexa de fossas sépticas, conte com a G-TEC. Solicite seu orçamento gratuito agora mesmo!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
