import { useAtom } from 'jotai'
import { modalAtom } from '../../../../../atoms/modal'
import { IconLocationMarker } from '../../../../Icons'
import Modal from '../../../../Modal'
import Form from '../../Form'
import Result from '../../Result'
import useRegion from './useRegion'

function Select() {
  const { hasRegion, regionName } = useRegion()
  const [isOpen, handleModal] = useAtom(modalAtom)

  return (
    <>
      <button
        suppressHydrationWarning
        className="inline-flex items-center gap-1 h-10 p-2 bg-blue-100 rounded-md text-xs text-green-500 font-bold cursor-pointer"
        onClick={() => handleModal(true)}
      >
        {hasRegion && <IconLocationMarker />}
        {regionName}
      </button>

      <Modal isOpen={isOpen} onRequestClose={() => handleModal(false)}>
        <Form />
        <Result />
      </Modal>
    </>
  )
}

export default Select
