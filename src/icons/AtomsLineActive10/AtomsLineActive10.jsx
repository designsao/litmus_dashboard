/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const AtomsLineActive10 = ({ color = "#738DED", className }) => {
  return (
    <svg
      className={`atoms-line-active-10 ${className}`}
      fill="none"
      height="2"
      viewBox="0 0 56 2"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path-3" d="M0 1H56" stroke={color} strokeWidth="2" />
    </svg>
  );
};

AtomsLineActive10.propTypes = {
  color: PropTypes.string,
};
