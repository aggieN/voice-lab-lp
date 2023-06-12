import Wrapper from '@/components/Wrapper/Wrapper';
import SocialIcons from '@/components/SocialIcons/SocialIcons';
import Link from 'next/link';

import { redHatDisplay, jura } from "@/utils/fonts";

import * as styles from './Footer.module.scss'


const Footer = () => {
  const date = new Date()
  const currYear = date.getFullYear()
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.innerWrapper}>
          <div className={`${styles.links} ${redHatDisplay.className}`}>
            <Link href="/polityka-prywatnosci" target='_blank'>Polityka Prywatności</Link>
            <Link href="/regulamin" target='_blank'>Regulamin</Link>
            <Link href="/kontakt" target='_blank'>Kontakt</Link>
          </div>
          <SocialIcons variant="light" />
          <p className={`${styles.text} ${redHatDisplay.className}`}>{`© ${currYear} Aggie's Voice Lab`}</p>
        </div>
      </Wrapper>

    </footer>
  )
}

export default Footer;