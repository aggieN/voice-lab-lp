import Wrapper from '@/components/Wrapper/Wrapper';

import { redHatDisplay, alexandria, jura } from "@/utils/fonts";

import * as styles from './Intro.module.scss'

const Intro = () => {
  return (
    <section>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.textWrapper}>
            <div className={`${styles.leftCol} ${alexandria.className} `}><span>Witaj w </span><span>Aggie&apos;s Voice Lab</span></div>
            <div className={`${styles.rightCol} ${redHatDisplay.className} `}>
              <p>
                - szkole śpiewu, gdzie eksperymentowanie, kreatywność i bezpieczna przestrzeń spotykają się, aby odkrywać potencjał Twojego głosu. W moim laboratorium stawiam na twórcze podejście do nauki śpiewu. Wierzę, że każdy głos jest unikalny i posiada nieograniczone możliwości. Niezależnie od tego, czy jesteś początkującym, czy doświadczoną wokalistką, moja misja polega na tym, aby wspierać Cię w odkrywaniu i poszerzaniu granic Twojego głosu.
              </p>
            </div>

          </div>
        </div>
      </Wrapper>
      <div className={styles.ctaContainer}>
        <Wrapper>
          <div className={styles.ctaWrapper}>
            <p className={redHatDisplay.className}>Jeśli jesteś zainteresowana albo zainteresowany rozpoczęciem nauki śpiewu, ale masz pytania lub wątpliwości zapraszam Cię na 20 minut darmowej konsultacji online. To dobra okazja, żeby się poznać i opowiedzieć o swoich doświadczeniach oraz oczekiwaniach.</p>
            <button className={jura.className}>zapisz się na darmową konsultację</button>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Intro;