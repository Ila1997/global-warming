import React from "react";
import BannerImage from "../../components/img/background-image.png";
import "../home/home.css";

function home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Global Warming</h1>
        <p>
          {" "}
          “Twenty-five years ago, people could be excused for not knowing much,
          or doing much, about climate change. Today we have no excuse.”
          <br />– Desmond Tutu
        </p>
      </div>
    </div>
  );
}

export default home;
