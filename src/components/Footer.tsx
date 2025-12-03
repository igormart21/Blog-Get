import Link from 'next/link';
import { cities, services, siteConfig } from '@/data/config';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Sobre Nós</h3>
                        <p className={styles.text}>
                            Somos uma desentupidora 24 horas especializada em atendimento residencial e comercial.
                            Garantia de 90 dias e orçamento grátis.
                        </p>
                        <div className={styles.contact}>
                            <p>📞 {siteConfig.phone}</p>
                            <p>📧 {siteConfig.email}</p>
                            <p>📍 {siteConfig.location}, {siteConfig.state}</p>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.title}>Cidades Atendidas</h3>
                        <ul className={styles.list}>
                            {cities.map((city) => (
                                <li key={city.slug}>
                                    <a
                                        href={city.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Desentupidora em {city.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.title}>Serviços</h3>
                        <ul className={styles.list}>
                            {services.slice(0, 6).map((service) => (
                                <li key={service.slug}>
                                    <Link href={`/servicos/${service.slug}`}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.title}>Atendimento 24h</h3>
                        <p className={styles.text}>
                            {siteConfig.serviceHours}
                        </p>
                        <p className={styles.text}>
                            Atendemos todos os dias, inclusive domingos e feriados.
                            Chegamos em até 40 minutos.
                        </p>
                        <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                            Pedir Orçamento
                        </a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name} - Todos os direitos reservados.</p>
                    <p className={styles.keywords}>
                        Desentupidora 24h | Hidrojateamento | Limpa Fossa | Caça Vazamentos
                    </p>
                </div>
            </div>
        </footer>
    );
}
