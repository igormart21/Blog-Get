import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | G-TEC Desentupidora',
    description: 'Dicas, novidades e informações sobre desentupimento, limpeza de fossa e manutenção preventiva.',
};

export default function BlogPage() {
    return (
        <div className="container section">
            <div className={styles.layout}>
                <div className={styles.content}>
                    <header className={styles.header}>
                        <h1 className={styles.title}>Blog G-TEC</h1>
                        <p className={styles.description}>
                            Confira nossos artigos técnicos, dicas de manutenção e novidades sobre o setor de saneamento.
                        </p>
                    </header>

                    <div className={styles.grid}>
                        {articles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
}
