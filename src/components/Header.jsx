import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>START BOOTSTRAP</h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
};

export default Header;