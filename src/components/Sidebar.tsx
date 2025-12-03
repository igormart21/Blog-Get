'use client';

import Link from 'next/link';
import { Search, ChevronRight, Phone } from 'lucide-react';
import { getRecentArticles } from '@/data/articles';
import { siteConfig, categories } from '@/data/config';

const Sidebar = () => {
    const recentArticles = getRecentArticles(5);

    return (
        <aside className="space-y-8">
            {/* Search Widget */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-poppins font-bold text-primary-dark mb-4">
                    Buscar
                </h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Pesquisar no blog..."
                        className="w-full pl-10 pr-4 py-3 bg-neutral-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue/50 transition-all"
                    />
                    <Search className="absolute left-3 top-3.5 w-5 h-5 text-primary-gray/50" />
                </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-poppins font-bold text-primary-dark mb-4">
                    Categorias
                </h3>
                <ul className="space-y-2">
                    {categories.map((category) => (
                        <li key={category.slug}>
                            <Link
                                href={`/categoria/${category.slug}`}
                                className="flex items-center justify-between group p-2 rounded-lg hover:bg-neutral-light transition-colors"
                            >
                                <span className="text-primary-gray group-hover:text-primary-blue transition-colors">
                                    {category.name}
                                </span>
                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary-blue transition-colors" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-poppins font-bold text-primary-dark mb-4">
                    Posts Recentes
                </h3>
                <div className="space-y-4">
                    {recentArticles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blog/${article.slug}`}
                            className="block group"
                        >
                            <h4 className="text-sm font-semibold text-primary-dark group-hover:text-primary-blue transition-colors line-clamp-2 mb-1">
                                {article.title}
                            </h4>
                            <p className="text-xs text-primary-gray/70">
                                {new Date(article.date).toLocaleDateString('pt-BR')}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA Widget */}
            <div className="bg-gradient-to-br from-primary-dark to-primary-blue rounded-xl p-6 text-white text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-bold mb-2">
                    Precisa de Ajuda?
                </h3>
                <p className="text-white/80 mb-6 text-sm">
                    Atendimento emergencial 24 horas por dia, 7 dias por semana.
                </p>
                <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-3 bg-primary-green text-white font-bold rounded-lg hover:bg-primary-green/90 transition-colors shadow-lg"
                >
                    Chamar no WhatsApp
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
