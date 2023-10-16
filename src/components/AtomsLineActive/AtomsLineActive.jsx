/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AtomsLineActive = ({
  className,
  atomsLineActive = "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-56.svg",
}) => {
  return <img className={`atoms-line-active ${className}`} alt="Atoms line active" src={atomsLineActive} />;
};

AtomsLineActive.propTypes = {
  atomsLineActive: PropTypes.string,
};
