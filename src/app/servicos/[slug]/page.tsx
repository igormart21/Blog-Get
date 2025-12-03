import { notFound } from 'next/navigation';
import { services, siteConfig } from '@/data/config';
import Sidebar from '@/components/Sidebar';
import styles from './page.module.css';
import { CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Serviço não encontrado',
        };
    }

    return {
        title: `${service.name} | G-TEC Desentupidora`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="container section">
            <div className={styles.layout}>
                <div className={styles.content}>
                    <header className={styles.header}>
                        <h1 className={styles.title}>{service.name}</h1>
                        <p className={styles.lead}>{service.description}</p>
                        <div className={styles.cta}>
                            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Solicitar Orçamento Grátis</a>
                            <a href="tel:08001234567" className="btn btn-outline">Ligar Agora</a>
                        </div>
                    </header>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Como funciona o serviço</h2>
                        <p className={styles.text}>{service.longDescription}</p>
                    </section>

                    <div className={styles.grid}>
                        <section className={styles.card}>
                            <h3 className={styles.cardTitle}>
                                <AlertTriangle size={20} className={styles.iconWarning} />
                                Causas Comuns
                            </h3>
                            <ul className={styles.list}>
                                {service.causes.map((cause, index) => (
                                    <li key={index}>{cause}</li>
                                ))}
                            </ul>
                        </section>

                        <section className={styles.card}>
                            <h3 className={styles.cardTitle}>
                                <HelpCircle size={20} className={styles.iconInfo} />
                                Sinais do Problema
                            </h3>
                            <ul className={styles.list}>
                                {service.signs.map((sign, index) => (
                                    <li key={index}>{sign}</li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <section className={styles.benefits}>
                        <h2 className={styles.sectionTitle}>Por que nos escolher?</h2>
                        <div className={styles.benefitGrid}>
                            {service.benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefitItem}>
                                    <CheckCircle size={20} className={styles.iconSuccess} />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.ctaBox}>
                        <h2>Precisa de {service.name}?</h2>
                        <p>Atendemos 24 horas em Canoas, Porto Alegre, Cuiabá e Campo Grande.</p>
                        <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Chamar Técnico Agora</a>
                    </section>
                </div>
                <Sidebar />
            </div>
        </div>
    );
}
