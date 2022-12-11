import React from 'react'
import { Modal, Button, ButtonGroup, Spinner } from 'react-bootstrap'
import {useContext} from 'react'
import Info from "./Info"


function ModalComponent2({ show, closeModal, nestedModal}) {
  const context = useContext(Info)
  return (
    <Modal
      dialogClassName="my-modal"
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered className="d-flex justify-content-center align-items-center w-100">
      <Modal.Body className="m-4">
        {context.femaleCountry !== "" ?
          <>
            <h4 className="m-3">I see...</h4>
            <p className="m-3">Her name is {context.femaleAge.name}. She is {context.femaleAge.age} years old. She is waiting for you in {context.femaleCountry}.</p>
          </>
          :
          <div className="d-flex">
            <Spinner className="spinner mx-2" animation="border" role="status">
            </Spinner><p>This may take a while...</p></div>}
      </Modal.Body>
      {context.femaleCountry !== "" ? <Modal.Footer className='d-flex justify-content-center'>
        <ButtonGroup >
          <Button
            onClick={() => { nestedModal(); context.fetchFemalePhoto(); closeModal() }}
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