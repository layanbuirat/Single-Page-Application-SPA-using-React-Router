import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.portfolioTitle}>PORTFOLIO</h2>
      <div className={styles.starDivider}>
        <div className={styles.starLine}></div>
        <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
        <div className={styles.starLine}></div>
      </div>
      <div className={styles.portfolioGrid}>
        <div className={styles.portfolioItem}>
          <img src="/images/portfolio/p1.jpg" alt="Project 1" />
        </div>
        <div className={styles.portfolioItem}>
          <img src="/images/portfolio/p2.jpg" alt="Project 2" />
        </div>
        <div className={styles.portfolioItem}>
          <img src="/images/portfolio/p3.jpg" alt="Project 3" />
        </div>
        <div className={styles.portfolioItem}>
          <img src="/images/portfolio/p4.jpg" alt="Project 4" />
        </div>
        <div className={styles.portfolioItem}>
          <img src="/images/portfolio/p5.jpg" alt="Project 5" />
        </div>
        <div className={styles.portfolioItem}>
          <img src="/images/portfolio/p6.jpg" alt="Project 6" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;