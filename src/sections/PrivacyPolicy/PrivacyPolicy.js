import Wrapper from '@/components/Wrapper/Wrapper';

import { PRIVACY_POLICY } from '@/content/content'
import { redHatDisplay } from "@/utils/fonts";

import * as styles from './PrivacyPolicy.module.scss'

const Privacy = () => {

  return (
    <section>
      <Wrapper>
        <div className={`${styles.privacyWrapper} ${redHatDisplay.className}`}>
          {PRIVACY_POLICY.map(({ title, text }) =>
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

export default Privacy