// src/components/BookingSection.tsx
import React from 'react';
import styles from '../styles/BookingSection.module.css';

const BookingSection: React.FC = () => {
  return (
    <section className={styles.booking}>
      <h2>Book Your Ride</h2>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Enter Pickup Location"
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Enter Drop-off Location"
          className={styles.input}
        />
        <button type="submit" className={styles.submitBtn}>
          Confirm Booking
        </button>
      </form>
    </section>
  );
};

export default BookingSection;
