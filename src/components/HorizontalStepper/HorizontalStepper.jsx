/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StateActiveWrapper } from "../StateActiveWrapper";
import "./style.css";

export const HorizontalStepper = ({
  count,
  className,
  stateActiveWrapperAtomsLineActiveAtomsLineActive = "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-11.svg",
  stateActiveWrapperAtomsStepActiveDivClassName,
  stateActiveWrapperAtomsStepNameDivClassName,
  stateActiveWrapperAtomsStepActiveDivClassNameOverride,
  stateActiveWrapperAtomsStepNameDivClassNameOverride,
  stateActiveWrapperAtomsStepActiveDivClassName1,
  stateActiveWrapperAtomsLineActiveImg = "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-11.svg",
  stateActiveWrapperAtomsStepNameDivClassName1,
}) => {
  return (
    <div className={`horizontal-stepper ${className}`}>
      {count === "three" && (
        <>
          <StateActiveWrapper
            atomsLineActive10StyleOverrideClassName="atoms-horizontal-2"
            atomsLineActiveAtomsLineActive={stateActiveWrapperAtomsLineActiveAtomsLineActive}
            atomsLineActiveAtomsLineActiveClassName="atoms-horizontal-stepper-instance"
            atomsStepActiveDivClassName={stateActiveWrapperAtomsStepActiveDivClassName}
            atomsStepActiveText="1"
            atomsStepNameDivClassName={stateActiveWrapperAtomsStepNameDivClassName}
            atomsStepNameState="active"
            atomsStepNameText="Step 1"
            className="atoms-horizontal-stepper"
            frameClassName="atoms-horizontal-instance"
            position="first"
            state="active"
          />
          <StateActiveWrapper
            atomsLineActive10StyleOverrideClassName="atoms-horizontal-2"
            atomsLineActive10StyleOverrideClassNameOverride="atoms-horizontal-2"
            atomsStepActiveDivClassName={stateActiveWrapperAtomsStepActiveDivClassNameOverride}
            atomsStepActiveText="2"
            atomsStepNameDivClassName={stateActiveWrapperAtomsStepNameDivClassNameOverride}
            atomsStepNameState="current"
            atomsStepNameText="Step 2"
            className="atoms-horizontal-stepper"
            frameClassName="atoms-horizontal-instance"
            position="middle"
            state="active"
          />
          <StateActiveWrapper
            atomsLineActive10StyleOverrideClassNameOverride="atoms-horizontal-2"
            atomsLineActiveAtomsLineActiveClassNameOverride="atoms-horizontal-stepper-instance"
            atomsLineActiveImg={stateActiveWrapperAtomsLineActiveImg}
            atomsStepActiveDivClassName={stateActiveWrapperAtomsStepActiveDivClassName1}
            atomsStepActiveText="3"
            atomsStepNameDivClassName={stateActiveWrapperAtomsStepNameDivClassName1}
            atomsStepNameState="inactive"
            atomsStepNameText="Step 3"
            className="atoms-horizontal-stepper"
            frameClassName="atoms-horizontal-instance"
            position="last"
            state="active-to-inactive"
          />
        </>
      )}

      {["five", "four", "six"].includes(count) && (
        <>
          <StateActiveWrapper
            atomsLineActive10StyleOverrideClassName="atoms-horizontal-2"
            atomsLineActiveAtomsLineActive={
              count === "five"
                ? "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-29.svg"
                : count === "six"
                ? "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-41.svg"
                : "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-19.svg"
            }
            atomsLineActiveAtomsLineActiveClassName="atoms-horizontal-stepper-instance"
            atomsStepActiveText="1"
            atomsStepNameState="active"
            atomsStepNameText="Step 1"
            className="atoms-horizontal-stepper"
            frameClassName="atoms-horizontal-instance"
            position="first"
            state="active"
          />
          <StateActiveWrapper
            atomsLineActive10StyleOverrideClassName="atoms-horizontal-2"
            atomsLineActive10StyleOverrideClassNameOverride="atoms-horizontal-2"
            atomsStepActiveDivClassName="atoms-horizontal-3"
            atomsStepActiveText="2"
            atomsStepNameState="current"
            atomsStepNameText="Step 2"
            className="atoms-horizontal-stepper"
            frameClassName="atoms-horizontal-instance"
            position="middle"
            state="active"
          />
          <StateActiveWrapper
            atomsLineActive10StyleOverrideClassName="atoms-horizontal-2"
            atomsLineActive10StyleOverrideClassNameOverride="atoms-horizontal-2"
            atomsStepNameState="inactive"
            atomsStepNameText="Step 3"
            className="atoms-horizontal-stepper"
            divClassName="atoms-horizontal-3"
            frameClassName="atoms-horizontal-instance"
            position="middle"
            state="active-to-inactive"
            text="3"
          />
        </>
      )}

      {["five", "six"].includes(count) && (
        <StateActiveWrapper
          atomsLineActive10StyleOverrideClassName="atoms-horizontal-2"
          atomsLineActive10StyleOverrideClassNameOverride="atoms-horizontal-2"
          atomsStepActiveDivClassName="atoms-horizontal-3"
          atomsStepActiveText="4"
          atomsStepNameState="inactive"
          atomsStepNameText="Step 4"
          className="atoms-horizontal-stepper"
          frameClassName="atoms-horizontal-instance"
          position="middle"
          state="inactive"
        />
      )}

      {["five", "four"].includes(count) && (
        <StateActiveWrapper
          atomsLineActive10StyleOverrideClassNameOverride="atoms-horizontal-2"
          atomsLineActiveAtomsLineActiveClassNameOverride="atoms-horizontal-stepper-instance"
          atomsLineActiveImg={
            count === "four"
              ? "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-19.svg"
              : "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-29.svg"
          }
          atomsStepActiveDivClassName="atoms-horizontal-3"
          atomsStepActiveText={count === "four" ? "4" : "5"}
          atomsStepNameState="inactive"
          atomsStepNameText={count === "four" ? "Step 4" : "Step 5"}
          className="atoms-horizontal-stepper"
          frameClassName="atoms-horizontal-instance"
          position="last"
          state="inactive"
        />
      )}

      {count === "six" && (
        <>
          <StateActiveWrapper
            atomsLineActive10StyleOverrideClassName="atoms-horizontal-2"
            atomsLineActive10StyleOverrideClassNameOverride="atoms-horizontal-2"
            atomsStepActiveDivClassName="atoms-horizontal-3"
            atomsStepActiveText="5"
            atomsStepNameState="inactive"
            atomsStepNameText="Step 5"
            className="atoms-horizontal-stepper"
            frameClassName="atoms-horizontal-instance"
            position="middle"
            state="inactive"
          />
          <StateActiveWrapper
            atomsLineActive10StyleOverrideClassNameOverride="atoms-horizontal-2"
            atomsLineActiveAtomsLineActiveClassNameOverride="atoms-horizontal-stepper-instance"
            atomsLineActiveImg="https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-41.svg"
            atomsStepActiveDivClassName="atoms-horizontal-3"
            atomsStepActiveText="6"
            atomsStepNameState="inactive"
            atomsStepNameText="Step 6"
            className="atoms-horizontal-stepper"
            frameClassName="atoms-horizontal-instance"
            position="last"
            state="inactive"
          />
        </>
      )}
    </div>
  );
};

HorizontalStepper.propTypes = {
  count: PropTypes.oneOf(["five", "three", "six", "four"]),
  stateActiveWrapperAtomsLineActiveAtomsLineActive: PropTypes.string,
  stateActiveWrapperAtomsLineActiveImg: PropTypes.string,
};
