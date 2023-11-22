import axios from "axios";
import { useState, useEffect } from "react";
import No2Img from "../../components/img/no2.png";
import { LineChart } from "../../components/lineChart";
import "../no2/no2.css";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://global-warming.org/api/nitrous-oxide-api"
    );
    return response.data.nitrous;
  } catch (error) {
    console.error("Si è verificato un errore:", error);
  }
};

const updateNo2Data = (prevData, data) => ({
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

export const No2 = () => {
  const [no2Data, setNo2Data] = useState({
    labels: [],
    datasets: [
      {
        label: "Average",
        backgroundColor: "rgb(24, 204, 0)",
        lineTension: 0.4,
        fill: false,
      },
      {
        label: "Trend",
        backgroundColor: "rgb(204, 201, 0)",
        lineTension: 0.4,
      },
    ],
  });

  useEffect(() => {
    fetchData().then((data) => {
      setNo2Data((prevData) => updateNo2Data(prevData, data));
    });
  }, []);

  return (
    <div>
      <img src={No2Img} width={"50%"} height={"30%"} alt="No2Img"></img>
      <h1>NO2</h1>

      <div className="div-container">
        <p>
          Nitrogen dioxide (NO2), an often-overlooked greenhouse gas, is a
          significant contributor to global warming.
        </p>

        <p>
          Nitrous oxide has always existed in the atmosphere. It’s mostly
          produced by microbes in soil and naturally released, especially from
          tropical rainforests, permafrost melting in the Arctic, as well as
          microbes in the oceans.
        </p>

        <p>
          An estimated one-third to one-half of the nitrous oxide released into
          the atmosphere today is a result of human activities. The biggest
          culprit: the increase in agricultural lands and synthetic fertilizer
          use in agriculture, which has steadily increased in recent decades.
          And industrial farming—especially of annual crops like vegetables and
          grains—are especially to blame, as farmers tend to over-apply
          fertilizers to boost their yields.
        </p>
        <p>
          In essence, both synthetic and organic fertilizers increase the amount
          of nitrogen available to microbes in the soil, which turn it into
          nitrous oxide.
        </p>
        <p>
          {" "}
          Experts say the key to reducing agricultural emissions of nitrous
          oxide is using fertilizer more efficiently. This means figuring out
          the right amount to use and the right time to apply it.
        </p>
        <p>
          It could help the world achieve multiple goals related to
          environmental and social sustainability.
        </p>
        <div className="bg-white dark:bg-white-100 rounded-lg shadow-lg w-full max-w-4xl mt-4 p-3">
          <LineChart chartData={no2Data} />
        </div>
      </div>
    </div>
  );
};

export default No2;
