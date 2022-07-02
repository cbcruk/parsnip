import clsx from 'clsx'
import { ClientOnly } from '../ClientOnly'
import styles from './Progress.module.css'

type Props = {
  isLoading: boolean
}

function Progress({ isLoading }: Props) {
  return (
    <ClientOnly>
      <div
        className={clsx(styles.wrapper, {
          'is-loading': isLoading,
        })}
      >
        <div className={styles.bar} />
      </div>
    </ClientOnly>
  )
}

export default Progress
