import Wrapper from '@/components/Wrapper/Wrapper';

import { TERMS_OF_SERVICE } from '@/content/content'
import { redHatDisplay } from "@/utils/fonts";

import * as styles from './TermsOfService.module.scss'

const TermsOfService = () => {

  return (
    <section>
      <Wrapper>
        <div className={`${styles.termsWrapper} ${redHatDisplay.className}`}>
          {TERMS_OF_SERVICE.map(({ title, text }) =>
            <>
              <p className={styles.title}>{title}</p>
              <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></div>
            </>
          )}
        </div>
      </Wrapper>
    </section>

  )
}

export default TermsOfService