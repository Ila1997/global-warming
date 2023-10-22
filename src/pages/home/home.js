import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../../components/img/background-image.png'
//import { MenuList } from '../helpers/menuList';
//import MenuItem from '../menuItem';
//import Sidebar from '../sidebar';
//import "../styles/menu.css";
import '../home/home.css';

function home() {
  
  return (
    <div className="home" style={{backgroundImage:  `url(${BannerImage})`}}>
    <div className='headerContainer'>
      <h1>Global Warming</h1>
      <p> “Twenty-five years ago, people could be excused for not knowing much, or doing much, about climate change. 
        
       Today we have no excuse.”
       <br />
– Desmond Tutu</p>
</div>
      

    </div>
  
  )
}

export default home
