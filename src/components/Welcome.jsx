import React from 'react';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <section id="welcome" className={styles.welcomeSection}>
      <div className={styles.welcomeContent}>
        <img src="/images/portfolio/logo.jpg" alt="Start Bootstrap Logo" className={styles.logo} />
        <h1>Start Bootstrap</h1>
        <div className={styles.starDivider}>
          <div className={styles.starLine}></div>
          <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
          <div className={styles.starLine}></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
};

export default Welcome;