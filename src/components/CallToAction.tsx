import React from 'react';
import styles from '../styles/CallToAction.module.css';

const CallToAction: React.FC = () => {
  return (
    <section className={styles.cta} id='join'>
      <h2 className={styles.heading}>Join the RIDY Movement</h2>
      <p>Ready to Ride? Get your first ride free! Book now and experience the RIDY difference.</p>
      <button className={styles.button}>Book Now</button>
      <p>Partner With Us: Be part of our mission to empower women and transform urban mobility.</p>
    </section>
  );
};

export default CallToAction;
