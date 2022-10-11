import React from 'react'
import { Modal, Button, ButtonGroup, Spinner } from 'react-bootstrap'


function ModalComponent2({ wife, show, closeModal, location, nestedModal, fetchFemalePhoto }) {
  return (
    <Modal
      dialogClassName="my-modal"
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body className="m-4">
        {wife.age !== undefined ? <h4>I see...</h4> : ""}
        {location !== "" && wife.age !== undefined ?
          `Her name is ${wife.age.name}. ` : ""}
        {location !== "" && wife.age !== undefined ?
          `She is ${wife.age.age} years old. ` : ""}
        {wife.age !== undefined && location !== "" ?
          `She is waiting for you in ${location}.` : <div className="d-flex">
            <Spinner className="spinner mx-2" animation="border" role="status">
            </Spinner><p>This may take a while...</p></div>}
      </Modal.Body>
      {wife.age !== undefined ? <Modal.Footer className='d-flex justify-content-center'>
        <ButtonGroup >
          <Button
            onClick={() => { nestedModal(); fetchFemalePhoto(); closeModal() }}
            className="rounded m-3">I'd like to see her.</Button>
          <Button
            className="rounded m-3"
            onClick={closeModal}>Nah, I'll pass.</Button>
        </ButtonGroup>
      </Modal.Footer> : ""}
    </Modal>
  );
}

export default ModalComponent2