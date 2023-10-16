/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Events = ({ icon = "https://c.animaapp.com/S5qOUeiW/img/icon-60.png" }) => {
  return (
    <div className="events">
      <img className="icon-3" alt="Icon" src={icon} />
    </div>
  );
};

Events.propTypes = {
  icon: PropTypes.string,
};
