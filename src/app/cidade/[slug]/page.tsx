import { notFound } from 'next/navigation';
import { cities, siteConfig } from '@/data/config';
import { getArticlesByCity } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return cities.map((city) => ({
        slug: city.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const city = cities.find((c) => c.slug === slug);

    if (!city) {
        return {
            title: 'Cidade não encontrada',
        };
    }

    return {
        title: `Desentupidora em ${city.name} 24 Horas | G-TEC`,
        description: `Atendimento de desentupidora 24 horas em ${city.name}, ${city.state}. Chegamos em 40 minutos. Orçamento grátis.`,
    };
}

export default async function CityPage({ params }: PageProps) {
    const { slug } = await params;
    const city = cities.find((c) => c.slug === slug);

    if (!city) {
        notFound();
    }

    const articles = getArticlesByCity(slug);

    return (
        <div className="bg-neutral-light min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <header className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 mb-8">
                            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-primary-dark mb-4">
                                Desentupidora em {city.name} - 24 Horas
                            </h1>
                            <p className="text-primary-gray text-lg mb-6">
                                Atendimento especializado em {city.name}, {city.state}.
                                Chegamos em até 40 minutos em qualquer bairro.
                                Serviço rápido, limpo e com garantia de 90 dias.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-green text-white font-bold rounded-lg hover:bg-primary-green/90 transition-colors shadow-lg"
                                >
                                    Chamar Agora em {city.name}
                                </a>
                            </div>
                        </header>

                        <section className="mb-12">
                            <h2 className="text-2xl font-poppins font-bold text-primary-dark mb-6">
                                Serviços em {city.name}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {articles.length > 0 ? (
                                    articles.map((article) => (
                                        <ArticleCard key={article.id} article={article} />
                                    ))
                                ) : (
                                    <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                        <p className="text-primary-gray">Confira nossos serviços disponíveis em {city.name}.</p>
                                    </div>
                                )}
                            </div>
                        </section>

                        <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 mb-8">
                            <h2 className="text-2xl font-poppins font-bold text-primary-dark mb-4">
                                Bairros Atendidos em {city.name}
                            </h2>
                            <p className="text-primary-gray mb-4">
                                Nossa equipe de <strong>desentupidora em {city.name}</strong> está estrategicamente posicionada para atender todos os bairros com rapidez. Chegamos em até 40 minutos para resolver emergências de esgoto, pia, vaso sanitário e caixa de gordura.
                            </p>

                            <h3 className="text-xl font-poppins font-semibold text-primary-dark mt-6 mb-3">
                                Cobertura Total na Região
                            </h3>
                            <p className="text-primary-gray mb-4">
                                Não importa onde você esteja em {city.name}, a G-TEC vai até você. Atendemos residências, condomínios, comércios e indústrias com a mesma qualidade e agilidade.
                            </p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                                <li className="flex items-center text-primary-gray"><span className="w-2 h-2 bg-primary-green rounded-full mr-2"></span>Centro e Região Central</li>
                                <li className="flex items-center text-primary-gray"><span className="w-2 h-2 bg-primary-green rounded-full mr-2"></span>Zona Norte e bairros adjacentes</li>
                                <li className="flex items-center text-primary-gray"><span className="w-2 h-2 bg-primary-green rounded-full mr-2"></span>Zona Sul e áreas residenciais</li>
                                <li className="flex items-center text-primary-gray"><span className="w-2 h-2 bg-primary-green rounded-full mr-2"></span>Zona Leste e polos comerciais</li>
                                <li className="flex items-center text-primary-gray"><span className="w-2 h-2 bg-primary-green rounded-full mr-2"></span>Zona Oeste e distritos industriais</li>
                            </ul>

                            <div className="mt-6 p-4 bg-neutral-light rounded-lg border border-gray-200">
                                <h4 className="font-bold text-primary-dark mb-2">Atendemos também em outras cidades:</h4>
                                <p className="text-sm text-primary-gray">
                                    Além de {city.name}, possuímos bases em
                                    <a href="https://canoas.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline mx-1 font-medium">Canoas</a>,
                                    <a href="https://desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline mx-1 font-medium">Porto Alegre</a>,
                                    <a href="https://cuiaba.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline mx-1 font-medium">Cuiabá</a> e
                                    <a href="https://campogrande.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline mx-1 font-medium">Campo Grande</a>.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-poppins font-bold text-primary-dark mb-4">
                                Dúvidas Frequentes - Desentupidora {city.name}
                            </h2>
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <details className="group p-4 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary-dark font-medium">
                                        <h3 className="text-lg">Qual o preço do desentupimento em {city.name}?</h3>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-primary-gray">
                                        O orçamento é gratuito e feito no local. Cobramos por metro ou preço fixo dependendo do serviço. Garantimos o melhor preço de desentupidora em {city.name}.
                                    </p>
                                </details>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <details className="group p-4 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary-dark font-medium">
                                        <h3 className="text-lg">Vocês atendem de madrugada em {city.name}?</h3>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-primary-gray">
                                        Sim, somos uma desentupidora 24 horas em {city.name}. Atendemos emergências de dia, de noite, domingos e feriados sem taxa extra de visita.
                                    </p>
                                </details>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <details className="group p-4 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-primary-dark font-medium">
                                        <h3 className="text-lg">Qual a garantia do serviço?</h3>
                                        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-primary-gray">
                                        Oferecemos garantia de até 90 dias para todos os serviços de desentupimento realizados em {city.name}, com emissão de nota fiscal e laudo técnico se necessário.
                                    </p>
                                </details>
                            </div>
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
