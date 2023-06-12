import Link from 'next/link';
import { SOCIAL_ICONS } from '@/content/content';

import * as styles from './SocialIcons.module.scss'
import Icon from '../Icon/Icon';

const SocialIcons = ({variant}) => {
  return (
    <div className={styles.container}>
      {SOCIAL_ICONS.map(({ src, link }) => <div className={styles.item} key={link}><Link href={link} target="_blank"><Icon src={src} variant={variant} /></Link></div>)}
    </div>
  )
}

export default SocialIcons