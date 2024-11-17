// src/components/TestimonialsSection.tsx
import React from 'react';
import styles from '../styles/TestimonialsSection.module.css';

const TestimonialsSection: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Riders Say</h2>
      <div className={styles.carousel}>
        <div className={styles.card}>
          <p>"Great service! Quick and affordable."</p>
          <h4>— John Doe</h4>
        </div>
        <div className={styles.card}>
          <p>"Loved the real-time tracking feature."</p>
          <h4>— Jane Smith</h4>
        </div>
        <div className={styles.card}>
          <p>"Best bike taxi experience ever!"</p>
          <h4>— Mark Wilson</h4>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
