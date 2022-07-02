import { ReactNode } from 'react'
import ReactModal from 'react-modal'
import { isBrowser } from '../../utils'

type Props = {
  children: ReactNode
} & ReactModal['props']

function Modal({ children, ...props }: Props) {
  return (
    <ReactModal
      appElement={
        (isBrowser() ? document.getElementById('__next') : null) as HTMLElement
      }
      overlayClassName="fixed z-20 inset-0 bg-stone-900 bg-opacity-75 backdrop-blur-sm"
      className="max-w-xl p-4 rounded m-auto mt-8 mx-4 bg-stone-800 shadow-lg"
      {...props}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
