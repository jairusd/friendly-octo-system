import React from 'react'
import { Modal } from 'react-bootstrap'

const LoaderModal = ({ onHide, show }) => (
  <Modal
    show={show}
    onHide={onHide}
    bsSize='small'
    keyboard={false}
    backdrop='static'
    aria-labelledby='contained-modal-title-sm'
  >
    <Modal.Body>
      <img src='/img/loader.svg' className='center-block' alt='loading' />
    </Modal.Body>
  </Modal>
)

export default LoaderModal
