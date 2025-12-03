import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { siteConfig } from '@/data/config';
import Sidebar from '@/components/Sidebar';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: 'Artigo não encontrado',
        };
    }

    return {
        title: `${article.title} | G-TEC Desentupidora`,
        description: article.excerpt,
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="bg-neutral-light min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <article className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                            <header className="mb-8">
                                <span className="inline-block bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
                                    {article.category}
                                </span>
                                <h1 className="text-3xl md:text-4xl font-poppins font-bold text-primary-dark mb-4 leading-tight">
                                    {article.title}
                                </h1>
                                <div className="text-primary-gray/70 text-sm flex items-center">
                                    <span>Publicado em {new Date(article.date).toLocaleDateString('pt-BR')}</span>
                                </div>
                            </header>

                            <div
                                className="prose prose-lg max-w-none text-primary-gray prose-headings:font-poppins prose-headings:text-primary-dark prose-a:text-primary-blue prose-strong:text-primary-dark"
                                dangerouslySetInnerHTML={{ __html: article.content || '' }}
                            />

                            <div className="mt-12 p-8 bg-neutral-light rounded-xl border border-gray-200 text-center">
                                <h2 className="text-2xl font-poppins font-bold text-primary-dark mb-4">
                                    Precisa de ajuda com {article.title}?
                                </h2>
                                <p className="text-primary-gray mb-6">
                                    Nossa equipe está pronta para atender você 24 horas por dia.
                                </p>
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-8 py-4 bg-primary-green text-white font-bold rounded-lg hover:bg-primary-green/90 transition-colors shadow-lg hover:scale-105 transform duration-200"
                                >
                                    Solicitar Orçamento Grátis
                                </a>
                            </div>
                        </article>
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
