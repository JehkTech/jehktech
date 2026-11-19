import styles from './About.module.css';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        <h2 className={styles.heading}>
          <span className={styles.slash}>//</span> {about.heading}
        </h2>
        
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            {about.content.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className={styles.rolesGrid}>
            {about.roles.map((role) => (
              <div key={role.id} className={styles.roleCard}>
                <div className={styles.roleIcon}>
                  {/* Pseudo-icon based on index or mentalist theme */}
                  <span className={styles.bracket}>[</span>
                  <span className={styles.number}>0{role.id}</span>
                  <span className={styles.bracket}>]</span>
                </div>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <p className={styles.roleDesc}>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
