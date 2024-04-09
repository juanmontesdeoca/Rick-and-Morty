
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './services/getRandomNumber';
import ResidentCard from './components/ResidentCard';
import LocationInfo from './components/LocationInfo';
import FormSearch from './components/FormSearch';

  function App() {

  const randomLocation = getRandomNumber(126)
   const [locationSelected, setLocationSelected] = useState(randomLocation)

  const url = `https://rickandmortyapi.com/api/location/${locationSelected || getRandomNumber(126)}`;
  const[location, getLocation, hasError ] = useFetch(url)
   
  useEffect(()=>{
    getLocation()
}, [locationSelected])

  return (
   <div className='app'>
   <h1 className='h1' > Rick and Morty</h1>
   <FormSearch
      setLocationSelected={setLocationSelected}
      />
      {hasError  ? (
      <h2>X you errores </h2>
       ) : (
        <>
          <LocationInfo 
          location={location}
         />

         <div className='container__resident'>
             {
                 location?.residents.map(url=> (  
                     <ResidentCard 
                     key= {url}
                     url={url}
                     /> 
                    )) }
         </div>
         </>

        )
      }
      </div>
  )
}
export default App
