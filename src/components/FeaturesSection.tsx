import React, { useEffect, useRef } from 'react';
import styles from '../styles/FeaturesSection.module.css';

const FeaturesSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          const cardPosition = card.getBoundingClientRect().top;
          const triggerPoint = window.innerHeight - 100;

          if (cardPosition < triggerPoint) {
            card.classList.add(styles.visible);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.features} id="features">
      <h2>Why Choose RIDY?</h2>
      <div className={styles.cards}>
        {[
          { title: 'Women-to-Women Service', description: 'Every ride connects women with skilled, verified women drivers.' },
          { title: 'Real-Time Safety', description: 'GPS tracking, emergency buttons, and 24/7 customer support.' },
          { title: 'Eco-Friendly Fleet', description: '100% electric vehicles for sustainable urban transport.' },
          { title: 'Custom Packages', description: 'Perfect for college students, working professionals, and homemakers.' },
        ].map((feature, index) => (
          <div
            key={index}
            className={styles.card}
            ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
