import { useAtom } from 'jotai'
import { modalAtom, ModalName } from '../../../../../atoms/modal'
import { ClientOnly } from '../../../../ClientOnly'
import { IconLocationMarker } from '../../../../Icons'
import Modal from '../../../../Modal'
import Form from '../../Form'
import Result from '../../Result'
import Chip from '../shared/Chip'
import useRegion from './useRegion'

function Select() {
  const { hasRegion, regionName } = useRegion()
  const [modal, handleModal] = useAtom(modalAtom)

  return (
    <ClientOnly>
      <Chip onClick={() => handleModal(ModalName.Region)}>
        {hasRegion && (
          <IconLocationMarker width={16} height={16} className="mr-2" />
        )}
        {regionName}
      </Chip>
      <Modal
        isOpen={!hasRegion || modal === ModalName.Region}
        onRequestClose={() => handleModal(null)}
      >
        <Form />
        <Result />
      </Modal>
    </ClientOnly>
  )
}

export default Select
