import "./app.scss"
import Form from "./components/form";
import Content from "./components/Body";
import { useState } from "react";
import {motion} from 'framer-motion'


function App() {

  const [temp , setWeatherData] = useState('')
  const [wind , setWind] = useState('')
  const [time , setTime] = useState(new Date())
  const [description , setDescription] = useState('Wtf are you even talkin about')
  const [city, setCity] = useState('')
  const [humidity , setHumidity] = useState('')
  const [f , setF] = useState('')

  const variants = {
    initial : {
      opacity : 0
    },
    animate : {
      opacity : 1,
      transition : {
        duration : 2
      }
    }
  }

  const pageVarianits = {
    initial : {
      opacity : 0,
      y : '100%'
    },
    animate : {
      opacity : 1,
      y : '0%',
      transition : {
        duration : 2,
        delay : 1,
      } 
    }
  }

  return (
    <motion.div className="main-container" variants={variants} initial= {'initial'} animate = {'animate'}>
      <Form wind = {setWind} temp = {setWeatherData} time = {setTime} des = {setDescription} city = {setCity} humid = {setHumidity}
       f = {setF}/>
      <div className = "app-container"> 
          <motion.div className="content" variants={pageVarianits} initial={'initial'} animate = {'animate'}>
            <Content wind = {wind} time = {time} temp = {temp} des = {description} city = {city} humid = {humidity} f = {f}/>
          </motion.div>
      </div>
    </motion.div>
  );
}

export default App