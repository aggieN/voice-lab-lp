import Image from 'next/image';
import * as styles from './Icon.module.scss'

const Icon = ({ src, variant }) => {

  const img = variant === 'light' ? `${src}-dark.svg` : `${src}.svg`

  return (
    <div className={`${styles.iconBox} ${variant === 'dark' && styles.dark} ${variant === 'light' && styles.light}`} >
      <Image src={img} priority={true} width={24} height={24} alt="icon" />
    </div>
  )
}

export default Icon;