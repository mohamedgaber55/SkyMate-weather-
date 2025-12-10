import { useContext } from 'react'
import './App.css'
import Header from './Components/Header'
import NextDaySections from './Components/NextDay/NextDaySections'
import TodayWeather from './Components/TodayWeater/TodayWeather'
import { DataContext } from './Context/ApiContext';
import imgCloudy from './assets/cloud-back.jpg';
import imgSunny from './assets/sunny-back.jpg';
import imgOther from './assets/snow-back.jpg';

export default function App() {

  // data context 
  const {data} = useContext(DataContext);

  return (
    <div>
      <div 
      // backgroundImage depend on weather state 
          style={
                {backgroundImage:`url(${
                    (data?.current.condition.text === 'Partly cloudy' || 
                    data?.current.condition.text === 'Partly Cloudy' || 
                    data?.current.condition.text === 'Clear' || 
                    data?.current.condition.text === 'Sunny') ?  imgSunny
                    : data?.current.condition.text === 'Cloudy' ||
                    data?.current.condition.text === 'Overcast' ||
                    data?.current.condition.text === 'Mist' ||
                    data?.current.condition.text === 'Fog' ? imgCloudy
                    : imgOther
                  })`}
                }
                
                className={`bg-[url(')] bg-cover h-full w-full`}>

        <div className="bg-[#a5a5a57a] h-full w-full px-2 py-2 lg:py-5 lg:px-7">
          <div className='container mx-auto'>
            <Header />
          </div>
            <div className="container mx-auto bg-[#ffffff5f] backdrop-blur-2xl p-4 mt-2 lg:p-10 lg:mt-5 rounded-2xl border border-[#ffff]">
                <div className="flex flex-wrap lg:justify-between justify-center">
                  <TodayWeather />
                  <NextDaySections />
                </div>
            </div>
        </div>

            <h2 className='bg-[#b9b9b941] backdrop-blur-2xl border-t border-[#ffff] text-center p-2'>Coded By <span className=' font-medium'>Mohamed Gaber</span></h2>
      </div>
    </div>
          
        // 
        // 
  )
}
