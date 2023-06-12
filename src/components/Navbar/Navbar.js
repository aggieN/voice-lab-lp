"use client"
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import Link from 'next/link';
import Wrapper from '@/components/Wrapper/Wrapper';
import Logo from '@/components/Logo/Logo'

import { alexandria, jura } from "@/utils/fonts";
import * as styles from './Navbar.module.scss';
// import SocialIcons from '../SocialIcons/SocialIcons';

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

const variants = {
  visible: { opacity: 1, y: 0, backgroundColor: "#FFF1D7" },
  hidden: { opacity: 0, y: -25, backgroundColor: "#15183F" }
};

const Navbar = () => {

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const update = () => {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useMotionValueEvent(scrollY, "change", () => {
    update()
  })

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (

    <motion.nav
      className={`${styles.navbar} ${alexandria.className}`}
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}>
      <Wrapper>
        <div className={styles.menuDesktop}>
          <Logo />
          <ul className={`${styles.navDesktop} ${jura.className}`}>
            <li><Link href="/omnie" >o mnie</Link></li>
            <li><Link href="/lekcje-spiewu" >lekcje śpiewu</Link></li>
            <li><Link href="/cennik" >cennik</Link></li>
            <li><Link href="/kontakt" >kontakt</Link></li>
          </ul>
        </div>

        <div className={`${styles.star} ${styles.starLight} ${isMenuOpen ? styles.starExpanding : styles.starRotating}`} onClick={openMenu}>
        </div>
        <div className={`${styles.menuMobile} ${isMenuOpen && styles.menuMobileOpen}`}>
          <motion.div
            variants={item}
            initial="hidden"
            animate={isMenuOpen ? "show" : "hide"}
            transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6, delay: 1 }}
          >
            <Logo onClick={() => setMenuOpen(false)} />
          </motion.div>
          <div className={`${styles.star} ${styles.starDark} ${isMenuOpen ? styles.starRotating : styles.starClosing}`} onClick={closeMenu}>
          </div>
          <motion.ul className={styles.navMobile} variants={container}
            initial="hidden"
            animate={isMenuOpen ? "show" : "hide"}>
            <motion.li onClick={() => setMenuOpen(false)} variants={item}><Link href="/omnie" >o mnie</Link></motion.li>
            <motion.li onClick={() => setMenuOpen(false)} variants={item}><Link href="/lekcje-spiewu" >lekcje śpiewu</Link></motion.li>
            <motion.li onClick={() => setMenuOpen(false)} variants={item}><Link href="/cennik" >cennik</Link></motion.li>
            <motion.li onClick={() => setMenuOpen(false)} variants={item}><Link href="/kontakt" >kontakt</Link></motion.li>
          </motion.ul>
          {/* <div className={styles.socials}>
            <SocialIcons variant="light" />
          </div> */}
        </div>
      </Wrapper>
    </motion.nav>
  );
};


export default Navbar;