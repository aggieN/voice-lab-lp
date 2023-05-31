import Link from 'next/link';

import { kufam } from "@/utils/fonts";

import * as styles from './Logo.module.scss';

const Logo = (props) => {
  return (
    <div className={styles.logoWrapper} {...props}>
      <Link href="/">
        <p className={`${styles.logo} ${kufam.className}`}>aggie's voice lab</p>
      </Link>
    </div>

  )
}

export default Logo;