import Link from 'next/link';

import Wrapper from '@/components/Wrapper/Wrapper';

import { redHatDisplay, alexandria, jura } from "@/utils/fonts";

import * as styles from './Pricing.module.scss'

const Pricing = () => {
  return (
    <section>
      <Wrapper>
        <div className={styles.container}>
          <h1 className={`${styles.title} ${alexandria.className}`}><span>Cennik</span></h1>
          <div className={`${styles.boxes} ${alexandria.className}`}>
            <div className={styles.box}>
              <div className={styles.boxInner}>
                <p className={styles.text}>50 minut</p>
                <p className={styles.price}>150zł</p>
                <p className={styles.additionalText}>stacjonarnie lub online</p>
                <Link href="/kontakt"><button className={`${jura.className} ${styles.button}`}>umów się na lekcję</button></Link>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.boxInner}>
                <p className={styles.text}>4 lekcje x 50 min*</p>
                <p className={styles.price}>520zł</p>
                <p className={styles.additionalText}>*płatność z góry do wykorzystania w ciągu miesiąca</p>
                <Link href="/kontakt"><button className={`${jura.className} ${styles.button}`}>umów się na lekcję</button></Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className={styles.ctaContainer}>
        <Wrapper>
          <div className={`${styles.ctaWrapper} ${redHatDisplay.className}`}>
            <div className={styles.payment}><p>Metody płatności:</p>
              <ul>
                <li>✅<span>gotówka</span></li>
                <li>✅<span>przelew</span></li>
                <li>✅<span>BLIK na telefon</span></li>
                <li>✘<span>brak opcji płatności kartą</span></li>
              </ul>
              <p>Szczegóły dotyczące płatności oraz zasady odwoływania lekcji znajdziesz w <Link href="/regulamin" target="_blank">regulaminie</Link>. Umówienie się na lekcję jest jednoznaczne z jego akceptacją.</p></div>
              <div className={`${styles.info} ${alexandria.className}`}>
            <div className={styles.box}>
              <div className={styles.boxInner}>
                <p className={styles.text}><Link href="/kontakt">Umów się na lekcję</Link> lub skorzystaj z 15 minutowej darmowej konsultacji.
                </p>
                <Link href="/konsultacja"><button className={`${jura.className} ${styles.button}`}>zapisz się na darmową konsultację</button></Link>
              </div>
            </div>
          </div>
          </div>
          
        </Wrapper>

      </div>
    </section>
  );
};

export default Pricing;
