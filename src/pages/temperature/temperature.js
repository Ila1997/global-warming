import axios from 'axios';
import { useState, useEffect } from 'react';
import TemperatureImg from "../../components/img/temperature.png";
import { BarChart } from '../../components/barChart';
import "../temperature/temperature.css"

const fetchData = async () => {
    try {
      const response = await axios.get('https://global-warming.org/api/temperature-api');
      return response.data.result;
    } catch (error) {
      console.error("Si è verificato un errore:", error);
    }}
  ;

  const updateTemperatureData = (prevData, data) => ({
    labels: data.map((item) => item.time.slice(0, 4)),
    datasets: [
      {
        ...prevData.datasets[0],
        data: data.map((item) => item.station)
      },
      {
        ...prevData.datasets[1],
        data: data.map((item) => item.land)
      }
    ]
  });


  
  export const Temperature = () => {
    const [temperatureData, setTemperatureData] = useState({
      labels: [],
      datasets: [
        {
          label: 'Station Temperature',
          data: [],
          backgroundColor: 'rgb(126, 20, 2)',
        },
        {
          label: 'Land Temperature',
          data: [],
          backgroundColor: 'rgb(111, 228, 56)',
        }
      ]
    });
  

  useEffect(() => {
    fetchData().then(data => {
      setTemperatureData(prevData => updateTemperatureData(prevData, data));
    });
  }, []);

  return (
    <div>
      <img src={TemperatureImg} width={'50%'} height={'30%'} alt='tempImg'></img>
      <h1>Temperature</h1>

<div className='div-container'>
  <p>Temperature is a fundamental measurement for describing the climate, and the temperature in particular places can have wide-ranging effects on human life and ecosystems. </p>

  <p>For example, increases in air temperature can lead to more intense heat waves, which can cause illness and death, especially in vulnerable populations.
Annual and seasonal temperature patterns also determine the types of animals and plants that can survive in particular locations. </p>

  <p>Changes in temperature can disrupt a wide range of natural processes, particularly if these changes occur more quickly than plant and animal species can adapt. </p>
  <p>According to NOAA's 2021 Annual Climate Report the combined land and ocean temperature has increased at an average rate of 0.14 degrees Fahrenheit ( 0.08 degrees Celsius) per decade since 1880; however, the average rate of increase since 1981 has been more than twice as fast: 0.32 °F (0.18 °C) per decade. </p>
  <p>We ought to act quickly before it's too late.</p>
  <div className="bg-white dark:bg-white-100 rounded-lg shadow-lg w-full max-w-4xl mt-4 p-3">
        <BarChart chartData={temperatureData} />
      </div>
    </div >
    </div>
  );
} 

  export default Temperature;