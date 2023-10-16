/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Home = ({ icon = "https://c.animaapp.com/S5qOUeiW/img/icon-61.svg" }) => {
  return (
    <div className="home">
      <img className="icon" alt="Icon" src={icon} />
    </div>
  );
};

Home.propTypes = {
  icon: PropTypes.string,
};
