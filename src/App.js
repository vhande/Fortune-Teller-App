import React from 'react'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { faker } from '@faker-js/faker';
import {useState} from 'react'
import Info from './Info';

function App() {
  const [maleAge, setMaleAge] = useState({})
  const [maleCountryCode, setMaleCountryCode] = useState("")
  const [femaleAge, setFemaleAge] = useState({})
  const [femaleCountryCode, setFemaleCountryCode] = useState("")
  const [maleCountry, setMaleCountry] = useState("")
  const [femaleCountry, setFemaleCountry] = useState("")
  const [femalePhoto, setFemalePhoto] = useState("")
  const [malePhoto, setMalePhoto] = useState("")

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

  const fetchFemale = async () => {
    const randomFemale = faker.name.firstName('female')
    const resNation = await fetch(`https://api.nationalize.io?name=${randomFemale}`)
    const dataNation = await resNation.json()
    setFemaleCountryCode(dataNation.country[0].country_id)
    const resAge = await fetch(`https://api.agify.io/?name=${randomFemale}`)
    const dataAge = await resAge.json()
    console.log(dataAge)
    setFemaleAge(dataAge)
    return dataNation
  }


  const fetchMale = async () => {
    const randomMale = faker.name.firstName('male')
    const resNation = await fetch(`https://api.nationalize.io?name=${randomMale}`)
    const dataNation = await resNation.json()
    console.log(dataNation.country[0].country_id, "this is counry")
    setMaleCountryCode(dataNation.country[0].country_id)
    const resAge = await fetch(`https://api.agify.io/?name=${randomMale}`)
    const dataAge = await resAge.json()
    console.log(dataAge.age)
    setMaleAge(dataAge)
    return dataNation
  }


  // fetching of the photos

  const fetchFemalePhoto = async () => {
    let res = await fetch(`https://fakeface.rest/face/json?minimum_age=${femaleAge.age}&gender=female&maximum_age=${femaleAge.age}`)
    let data = await res.json()
    setFemalePhoto(data.image_url)}
  
  const fetchMalePhoto = async () => {
    let res = await fetch(`https://fakeface.rest/face/json?minimum_age=${maleAge.age}&gender=male&maximum_age=${maleAge.age}`)
    let data = await res.json()
    setMalePhoto(data.image_url)
  }


    const fetchCountryMale = async () => {
      let response = await fetchMale()
      let res = await fetch(`https://api.worldbank.org/v2/country/${response.country[0].country_id}?format=json`)
      let data = await res.json()
      setMaleCountry(data[1][0].name)
    }
    

    const fetchCountryFemale = async () => {
      let response = await fetchFemale()
      let res = await fetch(`https://api.worldbank.org/v2/country/${response.country[0].country_id}?format=json`)
      let data = await res.json()
      setFemaleCountry(data[1][0].name)
    }
console.log(maleCountry, femaleCountry)
      return(
        <Info.Provider value={{fetchCountryFemale, fetchCountryMale, fetchMale, fetchFemale, fetchUserCountry, maleCountry, femaleCountry, maleAge, femaleAge, fetchMalePhoto, fetchFemalePhoto, femalePhoto, malePhoto, userCountry, femaleCountryCode, maleCountryCode, setFemalePhoto, setMalePhoto, setMaleCountry, setFemaleCountry}}>
        <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home />}/>
         </Routes>
        </BrowserRouter>
        </Info.Provider>
      )
}

export default App