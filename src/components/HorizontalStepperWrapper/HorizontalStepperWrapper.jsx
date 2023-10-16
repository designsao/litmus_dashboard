/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AtomsHorizontal } from "../AtomsHorizontal";
import { HorizontalStepper } from "../HorizontalStepper";
import "./style.css";

export const HorizontalStepperWrapper = ({
  className,
  atomsHorizontalText = "Your Tax Return",
  horizontalStepperStateActiveWrapperAtomsLineActiveAtomsLineActive = "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-11.svg",
  horizontalStepperStateActiveWrapperAtomsLineActiveImg = "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-11.svg",
}) => {
  return (
    <div className={`horizontal-stepper-wrapper ${className}`}>
      <AtomsHorizontal
        className="atoms-horizontal-stepper-timeline-title"
        divClassName="atoms-horizontal-stepper-timeline-title-instance"
        text={atomsHorizontalText}
      />
      <HorizontalStepper
        className="horizontal-stepper-steps"
        count="three"
        stateActiveWrapperAtomsLineActiveAtomsLineActive={
          horizontalStepperStateActiveWrapperAtomsLineActiveAtomsLineActive
        }
        stateActiveWrapperAtomsLineActiveImg={horizontalStepperStateActiveWrapperAtomsLineActiveImg}
        stateActiveWrapperAtomsStepActiveDivClassName="horizontal-stepper-instance"
        stateActiveWrapperAtomsStepActiveDivClassName1="horizontal-stepper-instance"
        stateActiveWrapperAtomsStepActiveDivClassNameOverride="horizontal-stepper-instance"
        stateActiveWrapperAtomsStepNameDivClassName="horizontal-stepper-steps-instance"
        stateActiveWrapperAtomsStepNameDivClassName1="horizontal-stepper-2"
        stateActiveWrapperAtomsStepNameDivClassNameOverride="design-component-instance-node"
      />
    </div>
  );
};

HorizontalStepperWrapper.propTypes = {
  atomsHorizontalText: PropTypes.string,
  horizontalStepperStateActiveWrapperAtomsLineActiveAtomsLineActive: PropTypes.string,
  horizontalStepperStateActiveWrapperAtomsLineActiveImg: PropTypes.string,
};
