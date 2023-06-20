import Link from 'next/link';

import Wrapper from '@/components/Wrapper/Wrapper';

import { redHatDisplay, alexandria, jura } from "@/utils/fonts";

import * as styles from './Intro.module.scss'
import AboutMeShort from '../AboutMeShort/AboutMeShort';
import OfferShort from '../OfferShort/OfferShort';

const Intro = () => {
  return (
    <section>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.textWrapper}>
            <h2 className={`${styles.leftCol} ${alexandria.className} `}><span>Witaj w </span><span>Aggie&apos;s Voice Lab</span></h2>
            <div className={`${styles.rightCol} ${redHatDisplay.className} `}>
              <p>
                - szkole śpiewu, gdzie liczy się eksperymentowanie i kreatywność. To bezpieczna przestrzeń stworzona, aby odkrywać potencjał Twojego głosu. W moim laboratorium stawiam na twórcze podejście do nauki śpiewu. Wierzę, że każdy głos jest unikalny i posiada nieograniczone możliwości. Niezależnie od tego, czy jesteś początkującym, czy doświadczoną wokalistką, moja misja polega na tym, aby wspierać Cię w poszerzaniu granic Twojego głosu.
              </p>
            </div>

          </div>
        </div>
      </Wrapper>
      <AboutMeShort />
      <OfferShort />
      <div className={styles.ctaContainer}>
        <Wrapper>
          <div className={styles.ctaWrapper}>
            <p className={redHatDisplay.className}>Jeśli jesteś zainteresowana albo zainteresowany rozpoczęciem nauki śpiewu, ale masz pytania lub wątpliwości zapraszam Cię na 15 minut darmowej konsultacji online. To dobra okazja, żeby się poznać i opowiedzieć o swoich doświadczeniach oraz oczekiwaniach.</p>
            <Link href="/konsultacja"><button className={jura.className}>zapisz się na darmową konsultację</button></Link>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Intro;
