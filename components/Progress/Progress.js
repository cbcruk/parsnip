import clsx from 'clsx'
import styles from './Progress.module.css'

function Progress({ isLoading }) {
  return (
    <div
      className={clsx(styles.wrapper, {
        'is-loading': isLoading,
      })}
    >
      <div className={styles.bar} />
    </div>
  )
}

export default Progress
