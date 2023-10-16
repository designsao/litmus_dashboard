/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HelpCenter = ({ combinedShape = "https://c.animaapp.com/S5qOUeiW/img/combined-shape-8.png" }) => {
  return (
    <div className="help-center">
      <img className="combined-shape" alt="Combined shape" src={combinedShape} />
    </div>
  );
};

HelpCenter.propTypes = {
  combinedShape: PropTypes.string,
};
