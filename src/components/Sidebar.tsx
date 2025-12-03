import Link from 'next/link';
import { categories, cities, siteConfig } from '@/data/config';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.widget}>
                <h3 className={styles.title}>Solicitar Orçamento</h3>
                <div className={styles.ctaBox}>
                    <p>Atendimento imediato 24h!</p>
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                        Chamar no WhatsApp
                    </a>
                    <p className={styles.promo}>10% OFF no 1º serviço</p>
                </div>
            </div>

            <div className={styles.widget}>
                <h3 className={styles.title}>Categorias</h3>
                <ul className={styles.list}>
                    {categories.map((cat) => (
                        <li key={cat.slug}>
                            <Link href={`/categoria/${cat.slug}`} className={styles.link}>
                                {cat.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.widget}>
                <h3 className={styles.title}>Cidades</h3>
                <ul className={styles.list}>
                    {cities.map((city) => (
                        <li key={city.slug}>
                            <a
                                href={city.url}
                                className={styles.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {city.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
