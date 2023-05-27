import { kufam } from "@/utils/fonts";

import * as styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <p className={`${styles.logo} ${kufam.className}`}>aggie's voice lab</p>
    </div>
  )
}

export default Logo;