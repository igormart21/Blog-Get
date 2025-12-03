import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { siteConfig } from '@/data/config';
import Sidebar from '@/components/Sidebar';
import styles from './page.module.css';
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
        <div className="container section">
            <div className={styles.layout}>
                <div className={styles.content}>
                    <article className={styles.article}>
                        <header className={styles.header}>
                            <span className={styles.category}>{article.category}</span>
                            <h1 className={styles.title}>{article.title}</h1>
                            <div className={styles.meta}>
                                <span>Publicado em {new Date(article.date).toLocaleDateString('pt-BR')}</span>
                            </div>
                        </header>

                        <div
                            className={styles.body}
                            dangerouslySetInnerHTML={{ __html: article.content || '' }}
                        />

                        <div className={styles.cta}>
                            <h2>Precisa de ajuda com {article.title}?</h2>
                            <p>Nossa equipe está pronta para atender você 24 horas por dia.</p>
                            <a
                                href={`https://wa.me/${siteConfig.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Solicitar Orçamento Grátis
                            </a>
                        </div>
                    </article>
                </div>
                <Sidebar />
            </div>
        </div>
    );
}
