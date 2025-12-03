import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';

export const metadata = {
    title: 'Blog | G-TEC Desentupidora',
    description: 'Dicas, novidades e informações sobre desentupimento e manutenção residencial.',
};

export default function BlogIndex() {
    return (
        <div className="bg-neutral-light min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-poppins font-bold text-primary-dark mb-4">
                        Blog da G-TEC
                    </h1>
                    <p className="text-primary-gray max-w-2xl mx-auto">
                        Confira nossas dicas de especialistas para manter sua casa livre de entupimentos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {articles.map((article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
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
