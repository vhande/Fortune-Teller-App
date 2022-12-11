import React from 'react'
import { Modal, Button, ButtonGroup } from 'react-bootstrap'
import {useContext} from 'react'
import Info from "./Info"


function ModalFemalePhoto({ show, closeModal }) {

    const context = useContext(Info)

    return (
        <Modal
            dialogClassName="my-modal"
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body className="d-flex flex-column justify-content-center align-items-center">

                <img src="https://www.svgrepo.com/show/152991/crystal-ball.svg" className="svg-modal p-3" alt="futurewifefoto" />
                {context.femalePhoto !== "" ? (<img className="img-modal" src={context.femalePhoto} />) : (<p>Her photo will appear soon.</p>)}

            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-center'>
                <ButtonGroup >
                    <a href={ context.userCountry !== "" ? `https://www.skyscanner.net/transport/flights/${context.userCountry}/${context.femaleCountryCode}/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=29475436&inboundaltsenabled=false&infants=0&originentityid=27546033&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0` : 'https://www.skyscanner.net/'}><Button className="rounded m-3">Next flight to {context.femaleCountry}</Button></a>
                    <Button className="rounded m-3" onClick={()=>{closeModal(); context.setFemalePhoto(""); context.setFemaleCountry("");}}>Nah, thanks anyway.</Button>
                </ButtonGroup>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalFemalePhoto
