"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';

import { alexandria } from "@/utils/fonts";
import * as styles from './Navbar.module.scss';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.05
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className={`${styles.navbar} ${alexandria.className}`}>
      {/* <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <Link href="/" >Home</Link>
        <Link href="/" >Home</Link>
        <Link href="/" >Home</Link>
      </div> */}
      <div className={`${styles.star} ${styles.starLight} ${isMenuOpen ? styles.starExpanding : styles.starRotating}`} onClick={openMenu}>
      </div>
      <div className={`${styles.menuMobile} ${isMenuOpen && styles.menuMobileOpen}`}>
        <div className={`${styles.star} ${styles.starDark} ${isMenuOpen ? styles.starRotating : styles.starClosing}`} onClick={closeMenu}>
        </div>
        <motion.ul className={styles.navMobile} variants={container}
          initial="hidden"
          animate={isMenuOpen ? "show" : "hide"}>
          <motion.li variants={item}><Link href="/omnie" >o mnie</Link></motion.li>
          <motion.li variants={item}><Link href="/oferta" >oferta</Link></motion.li>
          <motion.li variants={item}><Link href="/cennik" >cennik</Link></motion.li>
          <motion.li variants={item}><Link href="/kontakt" >kontakt</Link></motion.li>
        </motion.ul>
        {/* dać tu cta button */}
      </div>
    </nav>
  );
};


export default Navbar;