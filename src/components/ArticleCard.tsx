import Link from 'next/link';
import { Article } from '@/data/articles';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
    article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.content}>
                <span className={styles.category}>{article.category}</span>
                <h3 className={styles.title}>
                    <Link href={`/blog/${article.slug}`}>
                        {article.title}
                    </Link>
                </h3>
                <p className={styles.excerpt}>{article.excerpt}</p>
                <Link href={`/blog/${article.slug}`} className={styles.link}>
                    Ler mais &rarr;
                </Link>
            </div>
        </article>
    );
}
