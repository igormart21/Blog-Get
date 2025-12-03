import { notFound } from 'next/navigation';
import { cities, siteConfig } from '@/data/config';
import { getArticlesByCity } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import styles from './page.module.css';
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
        <div className="container section">
            <div className={styles.layout}>
                <div className={styles.content}>
                    <header className={styles.header}>
                        <h1 className={styles.title}>Desentupidora em {city.name} - 24 Horas</h1>
                        <p className={styles.description}>
                            Atendimento especializado em {city.name}, {city.state}.
                            Chegamos em até 40 minutos em qualquer bairro.
                            Serviço rápido, limpo e com garantia de 90 dias.
                        </p>
                        <div className={styles.cta}>
                            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Chamar Agora em {city.name}</a>
                        </div>
                    </header>

                    <section className="mb-8">
                        <h2 className="mb-4">Serviços em {city.name}</h2>
                        <div className={styles.grid}>
                            {articles.length > 0 ? (
                                articles.map((article) => (
                                    <ArticleCard key={article.id} article={article} />
                                ))
                            ) : (
                                <p>Confira nossos serviços disponíveis em {city.name}.</p>
                            )}
                        </div>
                    </section>

                    <section className={styles.localInfo}>
                        <h2 className="mb-4">Bairros Atendidos em {city.name}</h2>
                        <p>Nossa equipe de <strong>desentupidora em {city.name}</strong> está estrategicamente posicionada para atender todos os bairros com rapidez. Chegamos em até 40 minutos para resolver emergências de esgoto, pia, vaso sanitário e caixa de gordura.</p>

                        <h3 className="mt-4 mb-2">Cobertura Total na Região</h3>
                        <p>Não importa onde você esteja em {city.name}, a G-TEC vai até você. Atendemos residências, condomínios, comércios e indústrias com a mesma qualidade e agilidade.</p>

                        <ul className={styles.neighborhoods}>
                            <li>Centro e Região Central</li>
                            <li>Zona Norte e bairros adjacentes</li>
                            <li>Zona Sul e áreas residenciais</li>
                            <li>Zona Leste e polos comerciais</li>
                            <li>Zona Oeste e distritos industriais</li>
                        </ul>

                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h4 className="font-bold mb-2">Atendemos também em outras cidades:</h4>
                            <p className="text-sm">
                                Além de {city.name}, possuímos bases em
                                <a href="https://canoas.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-1">Canoas</a>,
                                <a href="https://desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-1">Porto Alegre</a>,
                                <a href="https://cuiaba.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-1">Cuiabá</a> e
                                <a href="https://campogrande.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-1">Campo Grande</a>.
                            </p>
                        </div>
                    </section>

                    <section className={styles.faq}>
                        <h2 className="mb-4">Dúvidas Frequentes - Desentupidora {city.name}</h2>
                        <details className={styles.details}>
                            <summary>Qual o preço do desentupimento em {city.name}?</summary>
                            <p>O orçamento é gratuito e feito no local. Cobramos por metro ou preço fixo dependendo do serviço. Garantimos o melhor preço de desentupidora em {city.name}.</p>
                        </details>
                        <details className={styles.details}>
                            <summary>Vocês atendem de madrugada em {city.name}?</summary>
                            <p>Sim, somos uma desentupidora 24 horas em {city.name}. Atendemos emergências de dia, de noite, domingos e feriados sem taxa extra de visita.</p>
                        </details>
                        <details className={styles.details}>
                            <summary>Qual a garantia do serviço?</summary>
                            <p>Oferecemos garantia de até 90 dias para todos os serviços de desentupimento realizados em {city.name}, com emissão de nota fiscal e laudo técnico se necessário.</p>
                        </details>
                    </section>
                </div>
                <Sidebar />
            </div>
        </div>
    );
}
