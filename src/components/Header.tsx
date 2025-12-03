import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/config';
import { Phone, Menu } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.inner}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/g-tec-logo.png"
                            alt="G-TEC Logo"
                            width={80}
                            height={80}
                            className={styles.logoIcon}
                        />
                        <span className={styles.logoText}>Desentupidora<span className={styles.highlight}>24h</span></span>
                    </Link>

                    <nav className={styles.nav}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/servicos" className={styles.link}>Serviços</Link>
                        <Link href="/blog" className={styles.link}>Blog</Link>
                        <Link href="/contato" className={styles.link}>Contato</Link>
                    </nav>

                    <div className={styles.cta}>
                        <a href={`tel:${siteConfig.phone}`} className={styles.phone}>
                            <Phone size={18} />
                            <span>{siteConfig.phone}</span>
                        </a>
                        <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            {siteConfig.cta.primary}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
