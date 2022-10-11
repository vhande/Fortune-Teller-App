import React from 'react'
import { Modal, Button, ButtonGroup } from 'react-bootstrap'

function ModalComponent2({ wife, show, closeModal, location, nestedModal, fetchFemalePhoto }) {
  return (
    <Modal
      dialogClassName="my-modal"
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body className="m-4">
        <h4>I see...</h4>
        {location !== "" && wife.age !== undefined ?
          `Her name is ${wife.age.name}. ` : ""}
        {location !== "" && wife.age !== undefined ?
          `She is ${wife.age.age} years old. ` : ""}
        {wife.age !== undefined &&location !== "" ?
          `She is waiting for you in ${location}.` : "This may take a while..."}
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
      {wife.age !== undefined ? <ButtonGroup >
          <Button
            onClick={() => { nestedModal(); fetchFemalePhoto(); closeModal() }}
            className="rounded m-3">I'd like to see her.</Button>
          <Button
            className="rounded m-3"
            onClick={closeModal}>Nah, I'll pass.</Button>
        </ButtonGroup> : ""}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent2