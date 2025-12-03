import { notFound } from 'next/navigation';
import { categories } from '@/data/config';
import { getArticlesByCategory } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
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
        <div className="bg-neutral-light min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-poppins font-bold text-primary-dark mb-4">
                        {category.name}
                    </h1>
                    <p className="text-primary-gray max-w-2xl mx-auto">
                        Confira nossos artigos e dicas sobre {category.name.toLowerCase()}.
                        Informações especializadas para resolver seus problemas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {articles.length > 0 ? (
                                articles.map((article) => (
                                    <ArticleCard key={article.id} article={article} />
                                ))
                            ) : (
                                <div className="col-span-2 text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <p className="text-primary-gray">Nenhum artigo encontrado nesta categoria.</p>
                                </div>
                            )}
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
