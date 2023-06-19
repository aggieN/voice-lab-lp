import Link from 'next/link';
import Image from 'next/image';

import Wrapper from '@/components/Wrapper/Wrapper';

import { redHatDisplay, alexandria, jura } from "@/utils/fonts";

import * as styles from './OfferShort.module.scss'

const OfferShort = () => {
  return (
    <section>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.textWrapper}>
            <h3 className={`${styles.title} ${alexandria.className}`}>Lekcje śpiewu</h3>
            <div className={`${styles.text} ${redHatDisplay.className}`}>{`Moja edukacja wokalna była często oparta na surowych ocenach i wskazywaniu błędów. Często zdarzało się, że moi nauczyciele sami nie potrafili przedstawić dźwięków, których ode mnie wymagali lub narzucali mi swój gust, co spowodowało, że stawałam się ich kopią. Jednak miałam szczęście, że w trakcie studiów w Kopenhadze (Complete Vocal Institute) poznałam metodę Complete Vocal Technique. Okazała się ona punktem zapalnym dla mojej wokalnej rewolucji. Dzięki tej metodzie nauczyłam się anatomii głosu. Opanowałam też szereg technik i metod, które pozwoliły mi na odblokowanie dźwięków, o których nie śmiałam nawet marzyć.`}
            </div>
            <div className={`${styles.text} ${redHatDisplay.className}`}>{`To wszystko sprawiło, że postanowiłam stworzyć Aggie’s Voice Lab. Chcę zachęcić wszystkich, którzy pragną wyrażać się poprzez śpiew, do eksperymentowania i poszukiwania własnego brzmienia. W Aggie’s Voice Lab stawiam na indywidualne podejście, szanując Twoje unikalne cechy i aspiracje. Chcę pomóc Ci odkryć Twoją niepowtarzalną muzyczną tożsamość.`}</div>
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/testimonial-1.webp" priority={true} width={662} height={385} alt="opinia: Absolutnie Polecam!!!!! Agnieszka jest świetną wokalistką z olbrzymim doświadczeniem. Dzięki Wiedzy którą zdobywała latami, potrafi trafnie nazwać, i rozwiązać problem z którym boryka się wokalista podczas śpiewania konkretnej partii wokalnej. Warto wspomnieć o tym że Agnieszka jest bardzo ciepłą, i cierpliwą osobą, pozwala to otworzyć się przed wydawaniem dźwięków, a co ważniejsze na popełnianie błędów.  P O L E C A M." className={styles.image} />
            <Image src="/testimonial.webp" priority={true} width={662} height={382} alt="opinia: Agnieszka jest profesjonalistką, która bardzo szybko zauważa elementy do doskonalenia w śpiewie. Skupia się na wszystkich obszarach nauki śpiewu: emisji głosu, techniki oddechu, ustawienia aparatu głosowego jak i interpretacji utworu. Po kilku tygodniach ćwiczeń widze wymierne efekty i znaczny progres w głośności i jakości śpiewanych dźwięków oraz zwiekszeniu skali. Polecam serdecznie." className={styles.image} />
          </div>
          <div className={styles.buttonWrapper}>
              <Link href="/lekcje-spiewu"><button className={`${styles.button} ${jura.className}`}>kliknij, by dowiedzieć się więcej o lekcjach śpiewu</button></Link>
            </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default OfferShort;