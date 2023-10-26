import React from 'react';
import { IconContext } from "react-icons";
import { PiGithubLogoBold, PiInstagramLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './styles/sidebar.css';

const Sidebar = ({ onSelect }) => {
    const handleItemClick = () => {
        if (onSelect) {
            onSelect();
        }
    }

    const links = [
      {path: "/", label: "home"},
      {path: "/temperature", label: "Temperature"},
      { path: "/co2", label: "CO2"},
      { path: "/metano", label: "Methane"},
      { path: "/no2", label: "NO2"},
      { path: "/artic", label: "Artic"}
    ]

  return (
    <div className="sidebar-container" style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', border: '1px rgba(20, 20, 20, 0.78)', }}>
      <CDBSidebar textColor="#fff" backgroundColor="background-color: #1b1b1b;">
        
        <CDBSidebarHeader className="sidebar-container" prefix={<i className="fa fa-bars fa-large"></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit' }}>
            Informations
          </a>
          <div className='social-icons'>
  <IconContext.Provider value={{ className:"social-icons" }}>
  <a href="https://github.com/Ila1997" rel="noreferrer" target="_blank" className='social-icon'>
    <PiGithubLogoBold />
    </a> 
    <a href="https://www.instagram.com/ilaria.nuzzaco/" rel="noreferrer" target="_blank"className='social-icon' >
    <PiInstagramLogoBold />
    </a>
    <a href="https://it.linkedin.com/in/ilaria-nuzzaco-front-end-developer" rel="noopener" target="_blank" className='social-icon'>
    <PiLinkedinLogoBold />
    </a>
  </IconContext.Provider>
        </div>

        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-container">
          <CDBSidebarMenu>

            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/temperature" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="temperature-high">Temperature</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/co2" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="smog">CO2</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/methane" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="industry">Methane</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/no2" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="leaf">NO2</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/artic" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="snowflake">Artic</CDBSidebarMenuItem>
            </NavLink> 
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

      
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;