import clsx from 'clsx'

export const STATUS = {
  reserved: ['예약중', 'bg-green-600'],
  closed: ['거래완료', 'bg-gray-600'],
}

function Label({ status }) {
  if (!status) {
    return null
  }

  if (status === 'ongoing') {
    return null
  }

  const [label, color] = STATUS[status]

  return (
    <span
      className={clsx(`px-1 rounded text-xs text-white`, {
        [color]: true,
      })}
    >
      {label || ''}
    </span>
  )
}

export default Label
