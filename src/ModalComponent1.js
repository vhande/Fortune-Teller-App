import React, { useEffect } from 'react'
import { Modal, Button, ButtonGroup, Spinner } from 'react-bootstrap'
import {useContext} from 'react'
import Info from "./Info"

function ModalComponent1({ show, closeModal, nestedModal }) {

  const context = useContext(Info)
  return (
    <Modal dialogClassName="my-modal"
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered className="d-flex justify-content-center align-items-center w-100">
      <Modal.Body>
        {context.maleCountry !== "" ?
          <>
            <h4 className="m-3">I see...</h4>
            <p className="m-3">His name is {context.maleAge.name}. He is {context.maleAge.age} years old. He is waiting for you in {context.maleCountry}.</p>
          </>
          :
          <div className="d-flex">
            <Spinner className="spinner mx-2" animation="border" role="status">
            </Spinner><p>This may take a while...</p></div>}
      </Modal.Body>
      {context.maleCountry !== "" ? <Modal.Footer className='d-flex justify-content-center'>
        <ButtonGroup >
          <Button
            onClick={() => { context.fetchMalePhoto(); nestedModal(); closeModal() }}
            className="rounded m-3">I'd like to see him.</Button>
          <Button
            className="rounded m-3"
            onClick={closeModal}>Nah, I'll pass.</Button>
        </ButtonGroup>
      </Modal.Footer> : ""}
    </Modal>
  );
}

export default ModalComponent1