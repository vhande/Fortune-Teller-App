import React from 'react'
import { Modal, Button, ButtonGroup } from 'react-bootstrap'

function ModalMalePhoto({ show, closeModal, malePhoto, location ,countryLinkMale, userCountry}) {
  let todayDate = new Date().toISOString().slice(2, 10).split("").filter(item => item !== "-").join("");
  
  return (
    <Modal
      dialogClassName="my-modal"
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
        <img src="https://www.svgrepo.com/show/152991/crystal-ball.svg" className="svg-modal p-3" alt= "futurehusbandphoto"/>
        {malePhoto !== "" ? (<img className="img-modal" src={malePhoto}/>) : (<p>His photo will appear soon.</p>)} 
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center ">
        <ButtonGroup>
          <a href={ userCountry !== undefined ? `https://www.skyscanner.net/transport/flights/${userCountry}/${countryLinkMale}/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=29475436&inboundaltsenabled=false&infants=0&originentityid=27546033&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0` : 'https://www.skyscanner.net/' }><Button className="rounded m-3">Next flight to {location}</Button></a>
          <Button 
           className="rounded m-3"
           onClick={closeModal}>Nah, thanks anyway.</Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalMalePhoto