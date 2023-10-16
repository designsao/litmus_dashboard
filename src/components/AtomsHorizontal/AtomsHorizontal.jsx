/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AtomsHorizontal = ({ className, divClassName, text = "Timeline Title" }) => {
  return (
    <div className={`atoms-horizontal ${className}`}>
      <div className={`timeline-title ${divClassName}`}>{text}</div>
    </div>
  );
};

AtomsHorizontal.propTypes = {
  text: PropTypes.string,
};
