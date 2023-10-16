/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AtomsStepActive = ({ divClassName, text = "1", className }) => {
  return (
    <div className={`atoms-step-active ${className}`}>
      <div className={`element ${divClassName}`}>{text}</div>
    </div>
  );
};

AtomsStepActive.propTypes = {
  text: PropTypes.string,
};
