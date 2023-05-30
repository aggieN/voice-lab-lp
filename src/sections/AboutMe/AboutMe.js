import Image from 'next/image';

import { alexandria, jura } from "@/utils/fonts";

import * as styles from './AboutMe.module.scss'
import { ABOUT_ME_DATA, ABOUT_ME_DATA_YOUTUBE } from '@/content/content';

const AboutMe = () => {
  return (
    <section>
      {<div className={styles.aboutMeYT}>
        <div className={styles.starContainer}>
          <h2 className={`${styles.title} ${alexandria.className}`}><span>{ABOUT_ME_DATA_YOUTUBE.title}</span></h2>
          <p className={`${styles.description} ${jura.className}`} dangerouslySetInnerHTML={{ __html: ABOUT_ME_DATA_YOUTUBE.text }}></p>
        </div>
      </div>}
      {ABOUT_ME_DATA.map(({ title, text, image }) =>
        <div className={styles.aboutMe}>
          <div className={styles.contentWrapper}>
            <h2 className={`${styles.title} ${alexandria.className}`}><span>{title}</span></h2>
            <p className={`${styles.description} ${jura.className}`} dangerouslySetInnerHTML={{ __html: text }}></p>
          </div>
          {image &&
            <div className={styles.imageWrapper}>
              <Image src={image.mobile.src} priority={true} width={image.mobile.width} height={image.mobile.height} alt="Aggie" className={styles.imageMobile} />
              <Image src={image.desktop.src} priority={true} width={image.desktop.width} height={image.desktop.height} alt="Aggie" className={styles.imageDesktop} />
            </div>}
        </div>
      )}
    </section>
  );
};

export default AboutMe;