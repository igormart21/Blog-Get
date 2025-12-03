import { notFound } from 'next/navigation';
import { categories } from '@/data/config';
import { getArticlesByCategory } from '@/data/articles';
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
    return categories.map((cat) => ({
        slug: cat.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        return {
            title: 'Categoria não encontrada',
        };
    }

    return {
        title: `${category.name} | G-TEC Desentupidora`,
        description: `Artigos e dicas sobre ${category.name} - G-TEC Desentupidora`,
    };
}

export default async function CategoryPage({ params }: PageProps) {
    const { slug } = await params;
    const category = categories.find((c) => c.slug === slug);

    if (!category) {
        notFound();
    }

    const articles = getArticlesByCategory(slug);

    return (
        <div className="container section">
            <div className={styles.layout}>
                <div className={styles.content}>
                    <header className={styles.header}>
                        <h1 className={styles.title}>{category.name}</h1>
                        <p className={styles.description}>
                            Confira nossos artigos e dicas sobre {category.name.toLowerCase()}.
                            Informações especializadas para resolver seus problemas.
                        </p>
                    </header>

                    <div className={styles.grid}>
                        {articles.length > 0 ? (
                            articles.map((article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))
                        ) : (
                            <p>Nenhum artigo encontrado nesta categoria.</p>
                        )}
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
}
