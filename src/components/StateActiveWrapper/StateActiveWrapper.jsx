/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AtomsLineActive10 } from "../../icons/AtomsLineActive10";
import { AtomsLineActive } from "../AtomsLineActive";
import { AtomsStepActive } from "../AtomsStepActive";
import { AtomsStepName } from "../AtomsStepName";
import "./style.css";

export const StateActiveWrapper = ({
  state,
  position,
  className,
  frameClassName,
  atomsLineActiveAtomsLineActive = "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-53.svg",
  atomsLineActiveAtomsLineActiveClassName,
  atomsStepActiveDivClassName,
  atomsLineActive10StyleOverrideClassName,
  atomsStepNameDivClassName,
  atomsLineActive10StyleOverrideClassNameOverride,
  atomsStepActiveText = "1",
  atomsStepNameState = "active",
  atomsStepNameText = "Step 1",
  atomsLineActiveImg = "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-53.svg",
  atomsLineActiveAtomsLineActiveClassNameOverride,
  divClassName,
  text = "1",
}) => {
  return (
    <div className={`state-active-wrapper ${className}`}>
      <div className={`frame-3 ${frameClassName}`}>
        {position === "first" && state === "inactive" && (
          <img
            className="atoms-line-inactive"
            alt="Atoms line inactive"
            src="https://c.animaapp.com/S5qOUeiW/img/atoms-line-inactive.svg"
          />
        )}

        {["last", "middle"].includes(position) && (
          <AtomsLineActive10
            className={atomsLineActive10StyleOverrideClassNameOverride}
            color={state === "inactive" ? "#D4D4D4" : "#738DED"}
          />
        )}

        {(position === "last" ||
          (position === "middle" && state === "active") ||
          (position === "middle" && state === "inactive")) && (
          <AtomsStepActive
            className={`${["active-to-inactive", "inactive"].includes(state) && "class-5"}`}
            divClassName={atomsStepActiveDivClassName}
            text={atomsStepActiveText}
          />
        )}

        {(position === "last" || (position === "first" && state === "active")) && (
          <AtomsLineActive
            atomsLineActive={position === "first" ? atomsLineActiveAtomsLineActive : atomsLineActiveImg}
            className={
              position === "first"
                ? atomsLineActiveAtomsLineActiveClassName
                : atomsLineActiveAtomsLineActiveClassNameOverride
            }
          />
        )}

        {["first", "middle"].includes(position) &&
          (position === "first" || state === "active-to-inactive") &&
          (position === "middle" || state === "inactive") &&
          ["inactive", "active-to-inactive"].includes(state) && (
            <div className="atoms-step-inactive">
              <div className={`element-2 ${divClassName}`}>{text}</div>
            </div>
          )}

        {(position === "middle" || (position === "first" && state === "inactive")) && (
          <AtomsLineActive10
            className={atomsLineActive10StyleOverrideClassName}
            color={state === "active" ? "#738DED" : "#D4D4D4"}
          />
        )}

        {state === "active" && position === "first" && (
          <>
            <AtomsStepActive divClassName={atomsStepActiveDivClassName} text={atomsStepActiveText} />
            <AtomsLineActive10 className={atomsLineActive10StyleOverrideClassName} color="#738DED" />
          </>
        )}
      </div>
      <AtomsStepName
        className="atoms-step-name-instance"
        divClassName={atomsStepNameDivClassName}
        state={atomsStepNameState}
        text={atomsStepNameText}
      />
    </div>
  );
};

StateActiveWrapper.propTypes = {
  state: PropTypes.oneOf(["inactive", "active", "active-to-inactive"]),
  position: PropTypes.oneOf(["middle", "first", "last"]),
  atomsLineActiveAtomsLineActive: PropTypes.string,
  atomsStepActiveText: PropTypes.string,
  atomsStepNameState: PropTypes.string,
  atomsStepNameText: PropTypes.string,
  atomsLineActiveImg: PropTypes.string,
  text: PropTypes.string,
};
