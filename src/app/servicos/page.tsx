import { services } from '@/data/config';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nossos Serviços | G-TEC Desentupidora',
    description: 'Conheça todos os serviços de desentupimento que oferecemos. Atendimento 24 horas em Canoas, Porto Alegre e região.',
};

export default function ServicesPage() {
    return (
        <div className="container section">
            <div className={styles.layout}>
                <div className={styles.content}>
                    <header className={styles.header}>
                        <h1 className={styles.title}>Nossos Serviços</h1>
                        <p className={styles.description}>
                            Oferecemos soluções completas para problemas de entupimento residencial,
                            comercial e industrial. Confira nossa lista de serviços especializados.
                        </p>
                    </header>

                    <div className={styles.grid}>
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/servicos/${service.slug}`}
                                className={styles.card}
                            >
                                <h2 className={styles.cardTitle}>{service.name}</h2>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <span className={styles.link}>Saiba mais →</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
}
