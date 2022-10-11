import React from 'react'
import { Modal, Button, ButtonGroup } from 'react-bootstrap'

function ModalComponent1({ husband, show, closeModal, location, nestedModal, fetchMalePhoto }) {

  return (
    <Modal dialogClassName="my-modal"
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <h4>I see...</h4>
        {location !== "" && husband.age !== undefined ?
          `His name is ${husband.age.name}. ` : ""}
        {husband.age !== undefined && location !== "" ?
          `He is ${husband.age.age} years old. ` : ""}
        {husband.age !== undefined && location !== "" ?
          `He is waiting for you in ${location}.` :
          "This may take a while..." }
      </Modal.Body>
      {husband.age !== undefined ? <Modal.Footer className='d-flex justify-content-center'>
       <ButtonGroup >
           <Button
            onClick={() => { fetchMalePhoto(); nestedModal(); closeModal() }}
            className="rounded m-3">I'd like to see him.</Button>
           <Button
            className="rounded m-3"
            onClick={closeModal}>Nah, I'll pass.</Button> 
        </ButtonGroup> 
      </Modal.Footer> : "" }
    </Modal>
  );
}

export default ModalComponent1