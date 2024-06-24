import '../components/body.scss'
import cloud from './images/cloud_13778841.png'
import wind from './images/wind-2.png'
import humid from './images/3262968.png'
import rain from './images/clouds-sun_9231614.png'

const Content = (prop) => {

  let year = prop.time.getFullYear()

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  let month = prop.time.getMonth()

  let finalMonth = monthNames[month]

  const day = prop.time.getDate();

  return (
    <div className='content-container'>
      <div className='left-section'>
        <div className='p-section'>
          <p className='city'>{prop.city}</p>
          <p className='date'>{year} {finalMonth} {day}</p>
        </div>
        <div className='img-section'>
          <div>
            <img src={`${prop.des === 'rainy'? rain : cloud}`} alt="" />
            <p>{prop.des}</p>
          </div>
          <div>
            <img src={wind} alt="" />
            <p>wind : {prop.wind}</p>
          </div>
          <div>
            <img src={humid} alt="" />
            <p>humidty : {prop.humid} </p>
          </div>
        </div>
      </div>
      <div className='right-section'>
        <h1 className='first'>{prop.temp} C</h1>
        <h1 className='second'>{prop.f} F</h1>
      </div>
    </div>
  )
}


export default Content