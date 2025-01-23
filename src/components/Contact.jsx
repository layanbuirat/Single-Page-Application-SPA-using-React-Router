import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>CONTACT</h2>
       <div className={styles.starDivider}>
              <div className={styles.starLine}></div>
              <i className={`fa-solid fa-star ${styles.starIcon}`}></i>
              <div className={styles.starLine}></div>
        </div>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Full name" required />
        <input type="email" placeholder="Email address" required />
        <input type="tel" placeholder="Phone number" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;