import Sidebar from '@/components/Sidebar';
import styles from './page.module.css';
import Link from 'next/link';
import { cities, siteConfig } from '@/data/config';
import { getRecentArticles } from '@/data/articles';

export default function Home() {
  return (
    <div className="container section">
      <div className={styles.layout}>
        <div className={styles.content}>
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>Desentupidora 24 Horas</h1>
            <p className={styles.heroText}>
              Atendimento imediato em Canoas, Porto Alegre, Cuiabá e Campo Grande.
              Equipe especializada e garantia de 90 dias.
            </p>
            <div className={styles.heroCta}>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Solicitar Orçamento Grátis</a>
              <a href="tel:08001234567" className="btn btn-outline">Ligar Agora</a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">Problemas de Entupimento Mais Buscados</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Pia Entupida?</h3>
                <p>Resolvemos entupimentos de pia de cozinha e banheiro sem quebrar nada.</p>
                <Link href="/servicos/pia" className={styles.link}>Saiba mais &rarr;</Link>
              </div>
              <div className={styles.card}>
                <h3>Vaso Sanitário?</h3>
                <p>Desentupimento de vaso com equipamentos rotativos e hidrojateamento.</p>
                <Link href="/servicos/vaso" className={styles.link}>Saiba mais &rarr;</Link>
              </div>
              <div className={styles.card}>
                <h3>Esgoto Retornando?</h3>
                <p>Limpeza completa de rede de esgoto e caixas de gordura.</p>
                <Link href="/servicos/esgoto" className={styles.link}>Saiba mais &rarr;</Link>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">Cidades Atendidas</h2>
            <div className={styles.cityGrid}>
              {cities.map(city => (
                <a
                  key={city.slug}
                  href={city.url}
                  className={styles.cityCard}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>{city.name}</h3>
                  <span>{city.state}</span>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4">Últimos Artigos</h2>
            <div className={styles.articlesGrid}>
              {getRecentArticles(6).map(article => (
                <Link key={article.id} href={`/blog/${article.slug}`} className={styles.articleCard}>
                  <div className={styles.articleCategory}>{article.category}</div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  <span className={styles.readMore}>Leia mais →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-12 mb-8">
            <h2 className="mb-4">Desentupidora 24 Horas: Referência em Qualidade</h2>
            <div className={styles.card}>
              <p>A <strong>G-TEC Desentupidora</strong> é líder no mercado de saneamento, oferecendo soluções rápidas e eficazes para entupimentos residenciais, comerciais e industriais. Com uma frota moderna e técnicos altamente capacitados, garantimos um serviço limpo, seguro e com o melhor custo-benefício.</p>

              <h3 className="mt-4 mb-2">Por que escolher a G-TEC?</h3>
              <p>Além do atendimento 24 horas, nos destacamos pela transparência e tecnologia. Utilizamos equipamentos de ponta como hidrojateamento de alta pressão e vídeo inspeção para resolver problemas complexos sem quebra-quebra.</p>

              <h3 className="mt-4 mb-2">Atendimento Regional Especializado</h3>
              <p>Entendemos as necessidades específicas de cada região. Por isso, mantemos bases operacionais estratégicas para garantir a chegada rápida em até 40 minutos:</p>
              <ul>
                <li><strong><a href="https://canoas.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer">Desentupidora em Canoas</a>:</strong> Atendimento expresso para todos os bairros, incluindo Mathias Velho, Marechal Rondon e Centro.</li>
                <li><strong><a href="https://desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer">Desentupidora em Porto Alegre</a>:</strong> Cobertura completa na capital gaúcha, da Zona Norte à Zona Sul.</li>
                <li><strong><a href="https://cuiaba.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer">Desentupidora em Cuiabá</a>:</strong> Soluções para o calor de Cuiabá, evitando mau cheiro e entupimentos frequentes.</li>
                <li><strong><a href="https://campogrande.desentupidora24horas.tec.br" target="_blank" rel="noopener noreferrer">Desentupidora em Campo Grande</a>:</strong> Equipes prontas para atender a Cidade Morena com agilidade.</li>
              </ul>

              <p className="mt-4">Seja para um simples desentupimento de pia ou para a limpeza complexa de fossas sépticas, conte com a G-TEC. Solicite seu orçamento gratuito agora mesmo!</p>
            </div>
          </section>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
