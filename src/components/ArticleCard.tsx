import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Article } from '@/data/articles';

interface ArticleCardProps {
    article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
    return (
        <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group">
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 text-sm text-primary-gray/70 mb-3">
                    <span className="bg-neutral-light px-2 py-1 rounded text-primary-blue font-medium text-xs uppercase tracking-wider">
                        {article.category}
                    </span>
                    <span>•</span>
                    <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.date).toLocaleDateString('pt-BR')}
                    </div>
                </div>

                <Link href={`/blog/${article.slug}`} className="block mb-3">
                    <h3 className="text-xl font-poppins font-bold text-primary-dark group-hover:text-primary-blue transition-colors line-clamp-2">
                        {article.title}
                    </h3>
                </Link>

                <p className="text-primary-gray mb-6 line-clamp-3 flex-grow">
                    {article.excerpt}
                </p>

                <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center text-primary-blue font-semibold group-hover:translate-x-2 transition-transform"
                >
                    Ler artigo completo <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </article>
    );
};

export default ArticleCard;
