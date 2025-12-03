import { siteConfig } from '@/data/config';
import Sidebar from '@/components/Sidebar';
import styles from './page.module.css';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contato | G-TEC Desentupidora',
    description: 'Entre em contato com a G-TEC Desentupidora. Atendimento 24 horas por telefone, WhatsApp ou e-mail.',
};

export default function ContactPage() {
    return (
        <div className="container section">
            <div className={styles.layout}>
                <div className={styles.content}>
                    <header className={styles.header}>
                        <h1 className={styles.title}>Fale Conosco</h1>
                        <p className={styles.description}>
                            Estamos prontos para atender você 24 horas por dia.
                            Entre em contato para solicitar um orçamento ou tirar dúvidas.
                        </p>
                    </header>

                    <div className={styles.grid}>
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>
                                <Phone size={24} /> Telefone & WhatsApp
                            </h3>
                            <p className={styles.infoText}>{siteConfig.phone}</p>
                            <p className={styles.infoText}>
                                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)' }}>
                                    Chamar no WhatsApp
                                </a>
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>
                                <Mail size={24} /> E-mail
                            </h3>
                            <p className={styles.infoText}>{siteConfig.email}</p>
                        </div>

                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>
                                <MapPin size={24} /> Localização
                            </h3>
                            <p className={styles.infoText}>{siteConfig.location}</p>
                            <p className={styles.infoText}>{siteConfig.state}, {siteConfig.country}</p>
                        </div>

                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>
                                <Clock size={24} /> Horário de Atendimento
                            </h3>
                            <p className={styles.infoText}>{siteConfig.serviceHours}</p>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <h2 className={styles.formTitle}>Envie uma Mensagem</h2>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Nome</label>
                                <input type="text" id="name" className={styles.input} placeholder="Seu nome completo" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>E-mail</label>
                                <input type="email" id="email" className={styles.input} placeholder="seu@email.com" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>Telefone</label>
                                <input type="tel" id="phone" className={styles.input} placeholder="(00) 00000-0000" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Mensagem</label>
                                <textarea id="message" className={styles.textarea} placeholder="Como podemos ajudar?"></textarea>
                            </div>

                            <button type="submit" className={styles.button}>Enviar Mensagem</button>
                        </form>
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    );
}
