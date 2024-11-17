// src/components/AboutRIDY.tsx
import React from 'react';
import styles from '../styles/AboutRIDY.module.css';

const AboutRIDY: React.FC = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.contentWrapper}>
        <h2 className={styles.heading}>About RIDY</h2>
        <div className={styles.section}>
          <h3 className={styles.subHeading}>Who We Are</h3>
          <p className={styles.description}>
            RIDY is a women-focused ride-sharing platform revolutionizing urban mobility by blending safety, sustainability, and empowerment into one seamless experience.
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.subHeading}>Our Mission</h3>
          <p className={styles.description}>
            To create a world where women can travel confidently while reducing carbon footprints and fostering gender equality.
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.subHeading}>Our Vision</h3>
          <p className={styles.description}>
            To be the leading provider of eco-friendly, women-centric ride services in India and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutRIDY;
