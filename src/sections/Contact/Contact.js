"use client"

import Image from 'next/image';
import Link from 'next/link';

import Wrapper from '@/components/Wrapper/Wrapper';

import { useForm, ValidationError } from '@formspree/react';

import { redHatDisplay, alexandria, jura } from "@/utils/fonts";

import * as styles from './Contact.module.scss'
import { useEffect, useState } from 'react';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

const Contact = () => {
  const [state, handleSubmit] = useForm("xyyaqdbr");
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const [isEmailEmpty, setIsEmailEmpty] = useState(true)
  const [isMessageEmpty, setIsMessageEmpty] = useState(true)

  useEffect(() => {
    if (email.trim().length !== 0) {
      setIsEmailEmpty(false)
    } else {
      setIsEmailEmpty(true)
    }
  }, [isEmailEmpty, email])

  useEffect(() => {
    if (message.trim().length > 5) {
      setIsMessageEmpty(false)
    } else {
      setIsMessageEmpty(true)
    }
  }, [isMessageEmpty, message])

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <section>
      <Wrapper>
        <div className={styles.container}>

          <div className={styles.left}>
            <h1 className={`${styles.title} ${alexandria.className}`}><span>Kontakt</span></h1>
            <div className={styles.social}>
              <p className={`${styles.text} ${redHatDisplay.className}`}>Wypełnij formularz lub napisz do mnie maila na <a href="mailto:aggiesvoicelab@gmail.com">aggiesvoicelab@gmail.com</a></p>
              {/* <div className={styles.iconsWrapper}>
                <SocialIcons variant="dark" />
              </div> */}
            </div>
            <div><p className={`${styles.text} ${redHatDisplay.className}`}>Jeśli chcesz mnie lepiej poznać zanim się zdecydujesz, skorzystaj z darmowej konsultacji</p>
              <Link href="/konsultacja"><button className={`${jura.className} ${styles.button}`}>zapisz się na darmową konsultację</button></Link>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.formWrapper}>
              <form className={`${alexandria.className} ${styles.form}`} onSubmit={handleSubmit}>
                <label htmlFor="email" className={styles.label}>
                  e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`${alexandria.className} ${styles.input}`}
                  onChange={handleEmailChange}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <label htmlFor="message" className={styles.label}>
                  wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`${alexandria.className} ${styles.input} ${styles.textarea}`}
                  onChange={handleMessageChange}
                  maxLength={3000}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                {/* <div className={styles.consent}>
                  <input type="checkbox" id="consent" name="consent" value="consent" className={styles.checkbox} />
                  <label htmlFor="consent" className={styles.consentLabel}>Wyrażam zgodę na przetwarzanie danych osobowych oraz akceptuję <Link href="/polityka-prywatnosci" target='_blank'>Politykę Prywatności</Link></label></div> */}
                <button className={`${styles.button} ${jura.className}`} type="submit" disabled={isEmailEmpty || isMessageEmpty || state.submitting}>
                  wyślij
                </button>
              </form>
            </div>
          </div>
        </div>


      </Wrapper>
    </section>
  );
}
export default Contact;