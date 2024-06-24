import React, { useState, useEffect } from 'react';
import '../components/form.scss';


const Modal = (prop) => {

  const doIt = () => {
    prop.set(prev => !prev)
  }

  return (
    <div className='modal'>
      <div className='no'>
        <p>Please enter a valid city name</p>
        <button onClick={doIt}>Dismiss</button>
      </div>
    </div>
  )
}

const Form = (prop) => {
  const [data, setData] = useState('');
  const [toggle , setToggle] = useState(false)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '5b64cd068727b78ebbf2dd693cabe417';
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
        const cityName = "Berlin"
        const fullUrl = `${apiUrl}?q=${cityName}&appid=${apiKey}`;
        prop.city(cityName)
        const response = await  fetch(fullUrl);
        
        const weatherData = await  response.json();
        const temperature = weatherData.main.temp - 273.15;
        const rounded = parseFloat(temperature).toFixed()
        const F = (temperature * 9/5) + 32;
        const rounded2 = parseFloat(F).toFixed()
        prop.wind(weatherData.wind.speed)
        prop.temp(rounded)
        prop.des(weatherData.weather[0].description)
        prop.humid(weatherData.main.humidity)
        prop.f(rounded2)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    fetchData()
  },[])




  useEffect(() => {
    const fetchData = async () => {
        try {
          const apiKey = '5b64cd068727b78ebbf2dd693cabe417';
          const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
          const cityName = data
          const fullUrl = `${apiUrl}?q=${cityName}&appid=${apiKey}`;
          
          const response = await fetch(fullUrl);

          if(!response.ok){
            setErr(true)
          }
          
          const weatherData = await  response.json();
          const temperature = weatherData.main.temp - 273.15;
          const rounded = parseFloat(temperature).toFixed()
          const F = (temperature * 9/5) + 32;
          const rounded2 = parseFloat(F).toFixed()
          prop.wind(weatherData.wind.speed)
          prop.temp(rounded)
          prop.des(weatherData.weather[0].description)
          prop.city(cityName)
          prop.humid(weatherData.main.humidity)
          prop.f(rounded2)
          setData('')
        } catch (error) {
          return
        }
    }

     fetchData()

    },[toggle])


    const [err, setErr] = useState(false)
    
    const handleFetch = (e) => {
      e.preventDefault()
      setToggle(prev => !prev)
      document.querySelector('.input').value = ''
    };


    const inputHandler = (data) => {
      const value = data.target.value
      setData(value)
  }
    return (
      <div className='noo'>
        {err && <Modal set = {setErr}/>}
        <form onSubmit={handleFetch} className='form12'>
          <input type="text" value={data} className='input' onChange={inputHandler} placeholder='Enter your City'/>
          <button>Submit</button>
        </form>
      </div>
  );
};

export default Form;
 