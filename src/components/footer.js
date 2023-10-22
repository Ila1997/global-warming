import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./styles/footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <GitHubIcon /> <InstagramIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2023 Ilaria Nuzzaco</p>
    </div>
  );
}

export default Footer;