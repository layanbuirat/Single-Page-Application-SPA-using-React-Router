import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.aboutTitle}>ABOUT</h2>
      <div className={styles.starDivider}>
        <div className={styles.starLine}></div>
        <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
        <div className={styles.starLine}></div>
      </div>
      <div className={styles.aboutContent}>
        <p>
          Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the
          complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets
          for easy customization.
        </p>
        <p>
          You can create your own custom avatar for the masthead, change the icon in the dividers, and
          add your email address to the contact form to make it fully functional!
        </p>
      </div>
      <button className={styles.downloadButton}>
        <i className="fa-solid fa-download"></i> Free Download!
      </button>
    </section>
  );
};

export default About;