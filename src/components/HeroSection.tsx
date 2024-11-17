// src/components/HeroSection.tsx
import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <h1>Right Initiative for Daily Yatra</h1>
      <p>Seamless, safe, and sustainable transport services designed exclusively for women.</p>
      <div className={styles.actions}>
        <button className={styles.ctaBtn}>Get Your First Ride Free</button>
      </div>
    </section>
  );
};

export default HeroSection;
