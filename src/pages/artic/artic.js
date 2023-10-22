import axios from 'axios';
import { useState, useEffect } from 'react';
import ArticImg from "../../components/img/artic.png";
import { LineChart } from '../../components/lineChart';

const fetchData = async () => {
    try {
      const response = await axios.get('https://global-warming.org/api/arctic-api');
      return response.data.arcticData;
    } catch (error) {
      console.error("Si è verificato un errore:", error);
    }
  };
  
  const updateArticData = (prevData, data) => ({
    labels: data.map((item) => item.year.toString()),
    datasets: [
      {
        ...prevData.datasets[0],
        data: data.map((item) => item.extent)
      },
      {
        ...prevData.datasets[1],
        data: data.map((item) => item.area)
      }
    ]
  });

  export const Artic = () => {
    const [articData, setArticData] = useState({
      labels: [],
      datasets: [
        {
          label: "Extent",
          backgroundColor: 'rgb(0, 163, 204)',
        },
        {
          label: "Area",
          backgroundColor: 'rgb(16, 5, 46)',
          lineTension: 0.4,
        }
      ]
    });
  
    useEffect(() => {
      fetchData().then(data => {
        setArticData(prevData => updateArticData(prevData, data));
      });
    }, []);

    return (
        <div>
          <img src={ArticImg} width={400} height={210} alt='ArticImg'></img>
          <h1>Artic</h1>

<div>
  <p>Polar ice caps are melting as global warming causes climate change.</p>

  <p>If emissions continue to rise unchecked, the Arctic could be ice-free in the summer by 2040. But what happens in the Arctic does not stay in the Arctic. Sea ice loss has far-reaching effects around the world.</p>

  <p>When there’s less sea ice, animals that depend on it for survival must adapt or perish. Loss of ice and melting permafrost spells trouble for polar bears, walruses, arctic foxes, snowy owls, reindeer, and many other species. As they are affected, so too are the other species that depend on them, in addition to people.</p>
  <p>Limiting the increase in global temperature is our best chance of securing a safer future for all, preventing even more damaging consequences than we’ve already seen. By keeping the rise to 1.5 C (2.7 F) we can prevent the worst effects of climate change.</p>
  <p> To deliver on these important goals, WWF works with communities and governments around the world to significantly and quickly reduce emissions and to help people and nature prepare for the many impacts of a changing climate. </p>
  <div className="bg-white dark:bg-white-100 rounded-lg shadow-lg w-full max-w-4xl mt-4 p-3">
            <LineChart chartData={articData} />
            </div>
          </div>
        </div >
      );
    } 
    
      export default Artic;