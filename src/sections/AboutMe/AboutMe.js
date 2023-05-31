import Image from 'next/image';

import { alexandria, redHatDisplay } from "@/utils/fonts";

import * as styles from './AboutMe.module.scss'
import { ABOUT_ME_DATA, ABOUT_ME_DATA_YOUTUBE, ABOUT_ME_EDUCATION } from '@/content/content';

const AboutMe = () => {
  return (
    <section>
      {ABOUT_ME_DATA.map(({ title, text, image }) =>
        <div className={styles.aboutMe} key={title}>
          <div className={styles.contentWrapper}>
            <h2 className={`${styles.title} ${alexandria.className}`}><span>{title}</span></h2>
            <p className={`${styles.description} ${redHatDisplay.className}`} dangerouslySetInnerHTML={{ __html: text }}></p>
          </div>
          {image &&
            <div className={styles.imageWrapper}>
              <Image src={image.mobile.src} priority={true} width={image.mobile.width} height={image.mobile.height} alt="Aggie" className={styles.imageMobile} />
              <Image src={image.desktop.src} priority={true} width={image.desktop.width} height={image.desktop.height} alt="Aggie" className={styles.imageDesktop} />
            </div>}
        </div>
      )}
      <div className={styles.aboutMeYT}>
        <Image src="/star.svg" width={557.25} height={527.25} className={styles.star} alt="star" />
        <div className={styles.container}>
          <h2 className={`${styles.title} ${alexandria.className}`}><span>{ABOUT_ME_DATA_YOUTUBE.title}</span></h2>
          <p className={`${styles.description} ${redHatDisplay.className}`} dangerouslySetInnerHTML={{ __html: ABOUT_ME_DATA_YOUTUBE.text }}></p>
        </div>
        <div className={styles.youtubeWrapper}>{ABOUT_ME_DATA_YOUTUBE.youtube.map((item, index) => <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>)}</div>
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.contentWrapper}>
          <h2 className={`${styles.title} ${alexandria.className}`}><span>{ABOUT_ME_EDUCATION.title}</span></h2>
          <p className={`${styles.description} ${redHatDisplay.className}`} dangerouslySetInnerHTML={{ __html: ABOUT_ME_EDUCATION.text }}></p>
        </div>

        <div className={styles.imageWrapper}>
          <Image src={ABOUT_ME_EDUCATION.image.mobile.src} priority={true} width={ABOUT_ME_EDUCATION.image.mobile.width} height={ABOUT_ME_EDUCATION.image.mobile.height} alt="Aggie" className={styles.imageMobile} />
          <Image src={ABOUT_ME_EDUCATION.image.desktop.src} priority={true} width={ABOUT_ME_EDUCATION.image.desktop.width} height={ABOUT_ME_EDUCATION.image.desktop.height} alt="Aggie" className={styles.imageDesktop} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;