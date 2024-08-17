import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const styles = {
        navbar: {
          display: 'flex',
          justifyContent: 'space-around',
          padding: '10px',
          backgroundColor: '#333',
          color: '#fff'
        },
        link: {
          color: '#fff',
          textDecoration: 'none'
        }
      };
    return (
        <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
    );
}

export default Navbar;
