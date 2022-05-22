import ReactModal from 'react-modal'
import { isBrowser } from '../../utils'

function Modal({ children, ...props }) {
  return (
    <ReactModal
      appElement={isBrowser() ? document.getElementById('__next') : null}
      overlayClassName="fixed z-20 inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm"
      className="max-w-xl p-4 rounded m-auto mt-8 bg-white shadow-lg"
      {...props}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
