import { useAtom } from 'jotai'
import { modalAtom } from '../../../../../atoms/modal'
import { IconLocationMarker } from '../../../../Icons'
import Modal from '../../../../Modal'
import Form from '../../Form'
import Result from '../../Result'
import Chip from '../shared/Chip'
import useRegion from './useRegion'

function Select() {
  const { hasRegion, regionName } = useRegion()
  const [isOpen, handleModal] = useAtom(modalAtom)

  return (
    <>
      <Chip onClick={() => handleModal(true)}>
        {hasRegion && (
          <IconLocationMarker width={16} height={16} className="mr-2" />
        )}
        {regionName}
      </Chip>

      <Modal
        isOpen={!hasRegion || isOpen}
        onRequestClose={() => handleModal(false)}
      >
        <Form />
        <Result />
      </Modal>
    </>
  )
}

export default Select
