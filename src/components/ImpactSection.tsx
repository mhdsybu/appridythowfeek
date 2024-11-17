import React from 'react';
import styles from '../styles/ImpactSection.module.css';

const ImpactSection: React.FC = () => {
  return (
    <section className={styles.impactSection} id='section'>
      <h2 className={styles.heading}>Impact Section</h2>
      <div className={styles.categories}>
        <div className={styles.category}>
          <h3>Empowering Women</h3>
          <p>Creating thousands of job opportunities for women.</p>
          <p>Offering financial independence and career growth.</p>
        </div>
        <div className={styles.category}>
          <h3>Sustainability First</h3>
          <p>Supporting green transportation goals with EVs.</p>
          <p>Reducing air pollution and carbon footprints.</p>
        </div>
        <div className={styles.category}>
          <h3>Investment Opportunity</h3>
          <p>Why Invest in RIDY?</p>
          <p>A high-growth market with increasing demand for women-specific transportation services.</p>
          <p>Proven business model focused on safety, sustainability, and scalability.</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
