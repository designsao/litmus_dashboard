/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Communities = ({
  className,
  icon = "https://c.animaapp.com/S5qOUeiW/img/icon-57.svg",
  img = "https://c.animaapp.com/S5qOUeiW/img/icon-58.svg",
  overlapGroupClassName,
  iconClassName,
  iconClassNameOverride,
}) => {
  return (
    <div className={`communities ${className}`}>
      <div className="group">
        <div className={`overlap-group-2 ${overlapGroupClassName}`}>
          <img className={`icon-5 ${iconClassName}`} alt="Icon" src={icon} />
          <img className={`icon-6 ${iconClassNameOverride}`} alt="Icon" src={img} />
        </div>
      </div>
    </div>
  );
};

Communities.propTypes = {
  icon: PropTypes.string,
  img: PropTypes.string,
};
