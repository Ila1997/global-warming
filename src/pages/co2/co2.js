import axios from 'axios';
import { useState, useEffect } from 'react';
import Co2Img from "../../components/img/co2.png";
import { LineChart } from '../../components/lineChart';
import "../co2/co2.css"
import { withTheme } from '@emotion/react';


const fetchData = async () => {
    try {
      const response = await axios.get('https://global-warming.org/api/co2-api');
      return response.data.co2;
    } catch (error) {
      console.error("Si è verificato un errore:", error);
    }}
  ;

  const updateCo2Data = (prevData, data) => ({
    labels: data.map((item) => item.year.slice(0, 4)),
    datasets: [
      {
        ...prevData.datasets[0],
        data: data.map((item) =>  parseFloat(item.cycle))
      },
      {
        ...prevData.datasets[1],
        data: data.map((item) =>  parseFloat(item.trend))
      }
    ]
  });
  

    export const Co2 = () => {
        const [co2Data, setCo2Data] = useState({
          labels: [],
          datasets: [
            {
              label: 'Cycle',
              data: [],
              backgroundColor: ' rgb(174, 0, 255)',
              
              lineTension: 0.7,
            },
            {
              label: 'Trend',
              data: [],
              backgroundColor: 'rgb(255, 217, 0)',
              
              lineTension: 0.7,
            }
          ]
        });
      
        useEffect(() => {
          fetchData().then(data => {
            setCo2Data(prevData => updateCo2Data(prevData, data));
          });
        }, []);
      

  return (
     <div>
      <img src={Co2Img} width={400} height={210} alt='Co2Img'></img>
      <h1>CO2</h1>

      <div>
  <p>Carbon dioxide is Earth’s most important greenhouse gas: a gas that absorbs and radiates heat. Unlike oxygen or nitrogen (which make up most of our atmosphere), greenhouse gases absorb heat radiating from the Earth’s surface and re-release it in all directions—including back toward Earth’s surface. </p>

  <p>Without carbon dioxide, Earth’s natural greenhouse effect would be too weak to keep the average global surface temperature above freezing. By adding more carbon dioxide to the atmosphere, people are supercharging the natural greenhouse effect, causing global temperature to rise.</p>

  <p> According to observations by the NOAA Global Monitoring Lab, in 2021 carbon dioxide alone was responsible for about two-thirds of the total heating influence all human-produced greenhouse gases.</p>
  <p>Another reason carbon dioxide is important in the Earth system is that it dissolves into the ocean like the fizz in a can of soda. It reacts with water molecules, producing carbonic acid and lowering the ocean's pH (raising its acidity). </p>
  <p> Since the start of the Industrial Revolution, the pH of the ocean's surface waters has dropped from 8.21 to 8.10.</p>
  <p>We must stop it before the damage is unrepairable.</p>
  <div className="bg-white dark:bg-white-100 rounded-lg shadow-lg w-full max-w-4xl mt-4 p-3">
        <LineChart chartData={co2Data} />
      </div>
    </div >
    </div>
  );
} 

  export default Co2;