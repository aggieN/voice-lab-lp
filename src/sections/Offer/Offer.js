import Image from 'next/image';
import Link from 'next/link';

import Wrapper from '@/components/Wrapper/Wrapper';

import { redHatDisplay, alexandria, jura } from "@/utils/fonts";

import * as styles from './Offer.module.scss'

const Offer = () => {
  return (
    <section>
      <Wrapper>
        <div className={styles.container}>
          <h1 className={`${styles.title} ${alexandria.className}`}><span>Lekcje śpiewu</span></h1>

          <div className={`${styles.contentWrapper} ${redHatDisplay.className}`}>
            <p className={styles.text}>To Ty decydujesz o kierunku swojego rozwoju. Nie narzucam Ci mojego stylu, a swój gust muzyczny zostawiam za drzwiami.  Moim celem będzie zbudowanie w Tobie świadomości własnego głosu i wzbogacenie warsztatu o narzędzia, które pozwolą Ci określić Twoje
              brzmienie. Stawiam na indywidualność. Nawet jeśli jesteś na początku swojej drogi wokalnej i nie wiesz, w jaki sposób chcesz się wyrażać, nie ma problemu. Popracujemy nad poszerzeniem skali, nauczymy Cię śpiewać głośno i cicho, w różnych rejestrach. Pobawimy się barwą i efektami wokalnymi. Chcesz nauczyć się śpiewać z przesterem? Może interesuje Cię technika ornamentacyjna lub śpiewanie z przydechem? A może nawet growl czy fry scream? Poeksperymentujmy!</p>
            <Image className={styles.imageRight} src="/aggie_voice_lab_photo-marianna-kulesza-right.webp" width={260} height={520} alt="Aggie jako Królowa w Rapsodii z Demonem; photo by Marianna Kulesza" />
          </div>
        </div>
        <div className={styles.ctaContainer}>
          <div className={`${styles.text} ${redHatDisplay.className}`}>
            <p className={styles.ctaText}>Lekcje jeden-na-jeden odbywają się w Warszawie (Ursus) albo online.</p>
            <p className={styles.ctaText}>Masz pytania? <Link href='/kontakt'>Napisz do mnie</Link> albo już teraz umów się na 20 minut darmowej konsultacji online. Do zobaczenia! 🙂</p>
          </div>
          <button className={jura.className}>zapisz się na darmową konsultację</button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Offer;
