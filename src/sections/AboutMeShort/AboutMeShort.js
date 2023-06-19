import Link from 'next/link';
import Image from 'next/image';

import Wrapper from '@/components/Wrapper/Wrapper';

import { redHatDisplay, alexandria, jura } from "@/utils/fonts";

import * as styles from './AboutMeShort.module.scss'

const AboutMeShort = () => {
  return (
    <section>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image src="/aggie-main-mobile.webp" priority={true} width={380} height={422} alt="Aggie" className={styles.imageMobile} />
            <Image src="/aggie-main.webp" priority={true} width={600} height={667} alt="Aggie" className={styles.imageDesktop} />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={`${styles.title} ${alexandria.className}`}>Kilka słów o mnie</h3>
            <div className={`${styles.text} ${redHatDisplay.className}`}>{`Jestem wokalistką, nauczycielką śpiewu, autorką tekstów i muzyki oraz aktorką musicalową. Współpracowałam z brytyjską prog-rockową formacją Touchstone, z którą napisałam oraz nagrałam, dostępną na streamingach, EPkę o nazwie "Lights from the Sky". Podczas studiów w Akademii Muzycznej rozpoczęłam przygodę z musicalami. Zagrałam w spektaklach: Balladyna, Upiór w operze, Broadway Street i Prześliczna Wiolonczelistka. Byłam związana z Teatrem Rampa w Warszawie, gdzie występowałam w popularnych spektaklach: Rapsodia z demonem, Twist & Shout, Jesus Christ Superstar i Kobiety na skraju załamania nerwowego. Nagrałam kilka kawałków z TEDE: Forever Ja, Keptn' i Łatwopalność. Współpracowałam też ze Studio Accantus.`}
            </div>
            <div className={styles.buttonWrapper}>
              <Link href="/o-mnie"><button className={`${styles.button} ${jura.className}`}>kliknij, by dowiedzieć się o mnie więcej</button></Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default AboutMeShort;