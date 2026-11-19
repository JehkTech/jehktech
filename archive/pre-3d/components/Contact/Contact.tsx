"use client";

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';
import { portfolioData } from '@/data/portfolioData';

export default function Contact() {
  const { contact } = portfolioData;
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <span className={styles.slash}>//</span> {contact.heading}
          </h2>
          <p className={styles.description}>{contact.description}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input type="text" id="name" className={styles.input} placeholder="Enter your name" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" className={styles.input} placeholder="Enter your email" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" rows={5} className={styles.textarea} placeholder="Enter your message" required></textarea>
              </div>
              <button 
                type="submit" 
                className={styles.submitBtn} 
                disabled={status === "submitting" || status === "success"}
              >
                {status === "idle" && "Send Transmission"}
                {status === "submitting" && "Sending..."}
                {status === "success" && "Transmission Sent ✓"}
              </button>
            </form>
          </div>
          
          <div className={styles.infoWrapper}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Direct Line</h3>
              <a href={`mailto:${contact.email}`} className={styles.infoLink}>{contact.email}</a>
            </div>
            
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Networks</h3>
              <div className={styles.socialLinks}>
                {contact.socials.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
