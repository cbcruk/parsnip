import clsx from 'clsx'
import { ClientOnly } from '../ClientOnly'
import styles from './Progress.module.css'

function Progress({ isLoading }) {
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
