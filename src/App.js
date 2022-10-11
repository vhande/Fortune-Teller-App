import React from 'react'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { faker } from '@faker-js/faker';
import {useState} from 'react'

function App() {
  // fetch user ip, then country
  const [userCountry, setUserCountry] = useState([])
  const fetchUserAdress = async () => {
    let res = await fetch('https://api.ipify.org/?format=json')
    let data = await res.json()
    return data
  }


  const fetchUserCountry = async () => {
    let response = await fetchUserAdress();
    let res = await fetch(`https://ipapi.co/${response.ip}/json/`)
    let data = await res.json()
    setUserCountry(data.country_code)
  }

  console.log(userCountry)


  // fetching info by creating a fake name
  const [femaleName, setFemaleName] = useState({})
  const [maleName, setMaleName] = useState({})
  const [countryLinkMale, setCountryLinkMale] = useState("")
  const [countryLinkFemale, setCountryLinkFemale] = useState("")

  const fetchFemale = async () => {
    const randomFemale = faker.name.firstName('female')
    const res = await fetch(`https://who1am.herokuapp.com/${randomFemale}`)
    const data = await res.json()
    setFemaleName(data)
    setCountryLinkFemale(data.nation.country[0].country_id)
    return data
  }


  const fetchMale = async () => {
    const randomMale = faker.name.firstName('male')
    const res = await fetch(`https://arkakapi.herokuapp.com/https://who1am.herokuapp.com/${randomMale}`)
    const data = await res.json()
    setMaleName(data)
    setCountryLinkMale(data.nation.country[0].country_id)
    return data
  }


  // fetching of the photos
  const [femalePhoto, setfemalePhoto] = useState({})
  const [malePhoto, setmalePhoto] = useState({})
  const fetchFemalePhoto = async () => {
    let res = await fetch(`https://fakeface.rest/face/json?minimum_age=${femaleName.age.age}&gender=female&maximum_age=${femaleName.age.age}`)
    let data = await res.json()
    setfemalePhoto(data.image_url)}
  
  const fetchMalePhoto = async () => {
    let res = await fetch(`https://fakeface.rest/face/json?minimum_age=${maleName.age.age}&gender=male&maximum_age=${maleName.age.age}`)
    let data = await res.json()
    setmalePhoto(data.image_url)
  }


    // fetching country name from the country code
    const [country1,setCountry1] = useState([])
    const [country2,setCountry2] = useState([])

    const fetchCountryMale = async () => {
      let response = await fetchMale()
      let res = await fetch(`https://api.worldbank.org/v2/country/${response.nation.country[0].country_id}?format=json`)
      let data = await res.json()
      setCountry1(data[1][0].name)
    }
    

    const fetchCountryFemale = async () => {
      let response = await fetchFemale()
      let res = await fetch(`https://api.worldbank.org/v2/country/${response.nation.country[0].country_id}?format=json`)
      let data = await res.json()
      setCountry2(data[1][0].name)
    }

      return(
        <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home 
         userCountry={userCountry} 
         fetchUserCountry={fetchUserCountry} 
         countryLinkFemale={countryLinkFemale} 
         countryLinkMale={countryLinkMale} 
         country1={country1} 
         country2={country2} 
         fetchCountryMale={fetchCountryMale} 
         fetchCountryFemale={fetchCountryFemale} 
         fetchFemalePhoto={fetchFemalePhoto} 
         femalePhoto={femalePhoto} 
         fetchMalePhoto={fetchMalePhoto} 
         malePhoto={malePhoto} 
         maleName={maleName} 
         femaleName={femaleName}/>}/>
         </Routes>
        </BrowserRouter>
      )
}

export default App