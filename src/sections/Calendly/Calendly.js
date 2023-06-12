"use client"

import { InlineWidget } from "react-calendly";

import Wrapper from '@/components/Wrapper/Wrapper';
import * as styles from './Calendly.module.scss'

const Calendly = () => {

  return (
    <section className={styles.calendar}>
      <Wrapper>
        <InlineWidget url="https://calendly.com/aggie-voice-lab/20-minutowa-darmowa-konsultacja?text_color=15183f&primary_color=15183f" styles={{
          height: '1000px'
        }} />
      </Wrapper>
    </section>
  );
}
export default Calendly;