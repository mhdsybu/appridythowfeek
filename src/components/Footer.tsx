// src/components/Footer.tsx
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="contact">
      <p>Contact Us</p>
      <p>Email: <a href="mailto:ridyladycab@gmail.com">ridyladycab@gmail.com</a></p>
      <p>Call: <a href="tel:+918072877622">+91 8072877622</a></p>
      <div className={styles.social}>
        <a href="https://www.instagram.com/ridyladycab/">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=61568718355276">Facebook</a>
        <a href="https://www.linkedin.com/company/ridy-the-lady-cab/">LinkedIn</a>
        <a href="https://www.youtube.com/@ridyladycab">YouTube</a>
        <a href="https://x.com/ridyladycab">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
