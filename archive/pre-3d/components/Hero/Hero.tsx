import styles from './Hero.module.css';
import { portfolioData } from '@/data/portfolioData';

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.greeting}>Hello, I'm</span>
            <br />
            {hero.title}
          </h1>
          <h2 className={styles.subtitle}>{hero.subtitle}</h2>
          <p className={styles.description}>{hero.description}</p>
          <div className={styles.ctaGroup}>
            <a href="#about" className={styles.primaryBtn}>{hero.cta1}</a>
            <a href="#contact" className={styles.secondaryBtn}>{hero.cta2}</a>
          </div>
        </div>
        <div className={styles.visualHook}>
          <div className={styles.glowOrb}></div>
          <div className={styles.gridOverlay}></div>
        </div>
      </div>
    </section>
  );
}
