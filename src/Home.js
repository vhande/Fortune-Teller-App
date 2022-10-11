import React from 'react'
import { Container, Button, ButtonGroup } from 'react-bootstrap'
import ModalComponent1 from './ModalComponent1';
import ModalComponent2 from './ModalComponent2';
import ModalFemalePhoto from './ModalFemalePhoto';
import ModalMalePhoto from  './ModalMalePhoto';

function Home({fetchCountryFemale, fetchCountryMale, country1, country2, femaleName, maleName, fetchFemalePhoto, femalePhoto, fetchMalePhoto, malePhoto, countryLinkMale, countryLinkFemale,fetchUserCountry, userCountry}) {
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [showPhotoFemale, setShowPhotoFemale] = React.useState(false);
    const [showPhotoMale, setShowPhotoMale] = React.useState(false);
    const nestedModal1 = ()=>setShowPhotoFemale(true);
    const nestedModal2 = ()=>setShowPhotoMale(true);
    const closeModal = () =>{
        setModalShow1(false)
        setModalShow2(false)
     }

  
  return (
    
    <Container className="d-flex flex-column justify-content-center align-items-center" fluid>
      <ModalComponent1
        fetchMalePhoto={fetchMalePhoto}
        location={country1}
        husband={maleName}
        closeModal={closeModal}
        nestedModal={nestedModal2}
        show={modalShow1} />
      <ModalComponent2
        fetchFemalePhoto={fetchFemalePhoto}
        nestedModal={nestedModal1}
        location={country2}
        wife={femaleName}
        closeModal={closeModal}
        show={modalShow2} />
      <ModalFemalePhoto
        countryLinkFemale={countryLinkFemale}
        userCountry={userCountry}
        location={country2}
        femalePhoto={femalePhoto}
        femaleName={femaleName}
        show={showPhotoFemale}
        closeModal={() => setShowPhotoFemale(false)}/>
      <ModalMalePhoto
        userCountry={userCountry}
        countryLinkMale={countryLinkMale}
        location={country1} show={showPhotoMale}
        closeModal={() => { setShowPhotoMale(false) }}
        maleName={maleName}
        malePhoto={malePhoto}/>

      
       <img alt="crystal-ball" src="https://www.svgrepo.com/show/152991/crystal-ball.svg" className="svg p-3"/>
        <Container className="d-flex flex-row  justify-content-center align-items-center">
        <ButtonGroup aria-label="Basic example">
            <Button className= "m-3 btn-lg w-100 rounded" onClick={() => {setModalShow1(true); fetchCountryMale(); fetchUserCountry()}} >Where is my future husband?</Button>
            <Button className="m-3 btn-lg w-100 rounded"  onClick={() =>{setModalShow2(true); fetchCountryFemale(); fetchUserCountry()}} >Where is my future wife?</Button>
        </ButtonGroup>
            
        </Container>
        </Container>
  )
}

export default Home