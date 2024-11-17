import React from 'react';
import styles from '../styles/HowRIDYWorks.module.css';
import { motion } from 'framer-motion';

const HowRIDYWorks: React.FC = () => {
  const steps = [
    { id: 1, title: 'Download the App', description: 'Easy registration with user-friendly features.', image: '/images/step1.jpg' },
    { id: 2, title: 'Book Your Ride', description: 'Set your pick-up and destination with a single click.', image: '/images/step2.jpg' },
    { id: 3, title: 'Enjoy the Ride', description: 'Experience safety, comfort, and reliability.', image: '/images/step3.jpg' },
    { id: 4, title: 'Rate & Review', description: 'Help us improve by sharing your feedback.', image: '/images/step4.jpg' },
  ];

  return (
    <section className={styles.howWorks} id="works">
      <h2 className={styles.heading}>How RIDY Works</h2>
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className={`${styles.step} ${index % 2 === 0 ? styles.stepEven : styles.stepOdd}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.image}>
            <img src={step.image} alt={`Step ${step.id}`} />
          </div>
          <div className={styles.textBox}>
            <span className={styles.stepNumber}>Step {step.id}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default HowRIDYWorks;
