// src/components/Navbar.tsx
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" className={styles.logoImage} />
        <span>RIDY - The Lady Cab</span>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#works">Ride</a></li>
        <li><a href="#section">Impacts</a></li>
        <li><a href="#join">Let's Join</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.actions}>
        <button className={styles.ctaBtn}>Become a Partner</button>
        <button className={styles.ctaBtnAlt}>Invest in Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
