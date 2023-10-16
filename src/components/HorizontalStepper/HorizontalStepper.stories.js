import { HorizontalStepper } from ".";

export default {
  title: "Components/HorizontalStepper",
  component: HorizontalStepper,
  argTypes: {
    count: {
      options: ["five", "three", "six", "four"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    count: "five",
    className: {},
    stateActiveWrapperAtomsLineActiveAtomsLineActive: "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-11.svg",
    stateActiveWrapperAtomsStepActiveDivClassName: {},
    stateActiveWrapperAtomsStepNameDivClassName: {},
    stateActiveWrapperAtomsStepActiveDivClassNameOverride: {},
    stateActiveWrapperAtomsStepNameDivClassNameOverride: {},
    stateActiveWrapperAtomsStepActiveDivClassName1: {},
    stateActiveWrapperAtomsLineActiveImg: "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-11.svg",
    stateActiveWrapperAtomsStepNameDivClassName1: {},
  },
};
