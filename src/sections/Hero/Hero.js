import Link from 'next/link';
import Image from 'next/image';
import Wrapper from '@/components/Wrapper/Wrapper';

import { alexandria, jura } from "@/utils/fonts";
import bg from '../../../public/aggie-hero-mobile.webp'

import * as styles from './Hero.module.scss'


const Hero = () => {

  const innerContent = () => {
    return (
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.box}>
            <h1 className={alexandria.className}><span>Przestrzeń</span><span>kreatywnego</span><span>śpiewu</span></h1>
            <div className={styles.buttonDesktop}>
              <Link href="/konsultacja" className={styles.link}><button className={`${styles.button} ${jura.className}`}>zapisz się na <span>darmową </span>konsultację</button></Link>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/aggie-hero.webp" priority={true} width={740} height={740} alt="Aggie" className={styles.imageDesktop} />
          </div>
          <div className={styles.buttonMobile}>
            <Link href="/konsultacja" className={styles.link}><button className={`${styles.button} ${jura.className}`}>zapisz się na <span>darmową </span>konsultację</button></Link>
          </div>
        </div>
      </Wrapper>
    )
  }

  return (
    <section>
      <div className={styles.decor} />
      <div className={styles.hero}>
        <div className={styles.heroMobile} style={{ backgroundImage: `url(${bg.src})`, backgroundAttachment: 'fixed', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 60%' }}>
          <div className={styles.overlay}></div>
          {innerContent()}
        </div>
        <div className={styles.heroDesktop}>{innerContent()}</div>
      </div>
    </section>
  );
};

export default Hero;