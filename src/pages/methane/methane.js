import axios from "axios";
import { useState, useEffect } from "react";
import MethaneImg from "../../components/img/methane.png";
import { LineChart } from "../../components/lineChart";
import "../methane/methane.css";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://global-warming.org/api/methane-api"
    );
    return response.data.methane;
  } catch (error) {
    console.error("Si è verificato un errore:", error);
  }
};

const updateMethaneData = (prevData, data) => ({
  labels: data.map((item) => item.date.slice(0, 4)),
  datasets: [
    {
      ...prevData.datasets[0],
      data: data.map((item) => parseFloat(item.average)),
    },
    {
      ...prevData.datasets[1],
      data: data.map((item) => parseFloat(item.trend)),
    },
  ],
});

export const Methane = () => {
  const [methaneData, setMethaneData] = useState({
    labels: [],
    datasets: [
      {
        label: "Average",
        backgroundColor: "rgb(10, 0, 92)",
        lineTension: 0.4,
      },
      {
        label: "Trend",
        backgroundColor: "rgb(255, 187, 0)",
        lineTension: 0.4,
      },
    ],
  });

  useEffect(() => {
    fetchData().then((data) => {
      setMethaneData((prevData) => updateMethaneData(prevData, data));
    });
  }, []);

  return (
    <div>
      <img src={MethaneImg} width={"50%"} height={"30%"} alt="MethaneImg"></img>
      <h1>Methane</h1>

      <div className="div-container">
        <p>
          Due to its structure, methane traps more heat in the atmosphere per
          molecule than carbon dioxide (CO2), making it 80 times more harmful
          than CO2 for 20 years after it is released.
        </p>

        <p>
          According to the Environmental Protection Agency, landfills are
          world's largest source of methane, a major contributor to global
          warming.
        </p>

        <p>
          {" "}
          According to observations by the NOAA Global Monitoring Lab, in 2021
          carbon dioxide alone was responsible for about two-thirds of the total
          heating influence all human-produced greenhouse gases.
        </p>
        <p>
          {" "}
          A seminal U.N. report published in May found that immediate reductions
          in methane emissions are the best, swiftest chance the planet has at
          slowing climate change. And targeting landfills is a great place to
          start because by tuning the gas collection system, and getting it to
          work at its optimum level, you get a lot. You collect more methane,
          and you don't release it to the atmosphere.
        </p>
        <p>
          {" "}
          Cutting methane emissions by 45 per cent by 2030 could help us meet
          the Paris Agreement's goal of limiting global warming to 1.5°C.
        </p>
        <div className="bg-white dark:bg-white-100 rounded-lg shadow-lg w-full max-w-4xl mt-4 p-3">
          <LineChart chartData={methaneData} />
        </div>
      </div>
    </div>
  );
};

export default Methane;
