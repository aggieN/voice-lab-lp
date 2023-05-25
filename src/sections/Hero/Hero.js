import Image from 'next/image';
import Wrapper from '@/components/Wrapper/Wrapper';

import { alexandria, jura } from "@/utils/fonts";

import * as styles from './Hero.module.scss'


const Hero = () => {
  return (
    <section>
      <div className={styles.decor} />
      <div className={styles.hero}>
        <Wrapper>
          <div className={styles.container}>
            <div className={styles.box}>
              <h1 className={alexandria.className}><span>Przestrzeń</span><span>kreatywnego</span><span>śpiewu</span></h1>
              <button className={`${styles.buttonDesktop} ${jura.className}`}>zapisz się na darmową konsultację</button>
            </div>
            <div className={styles.imageWrapper}>
              <Image src="/aggie-hero-mobile.webp" priority={true} width={440} height={440} alt="Aggie" className={styles.imageMobile} />
              <Image src="/aggie-hero.webp" priority={true} width={740} height={740} alt="Aggie" className={styles.imageDesktop} />
            </div>
            <button className={`${styles.buttonMobile} ${jura.className}`}>zapisz się na darmową konsultację</button>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Hero;