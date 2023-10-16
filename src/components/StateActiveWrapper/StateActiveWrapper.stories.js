import { StateActiveWrapper } from ".";

export default {
  title: "Components/StateActiveWrapper",
  component: StateActiveWrapper,
  argTypes: {
    state: {
      options: ["inactive", "active", "active-to-inactive"],
      control: { type: "select" },
    },
    position: {
      options: ["middle", "first", "last"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "inactive",
    position: "middle",
    className: {},
    frameClassName: {},
    atomsLineActiveAtomsLineActive: "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-53.svg",
    atomsLineActiveAtomsLineActiveClassName: {},
    atomsStepActiveDivClassName: {},
    atomsLineActive10StyleOverrideClassName: {},
    atomsStepNameDivClassName: {},
    atomsLineActive10StyleOverrideClassNameOverride: {},
    atomsStepActiveText: "1",
    atomsStepNameState: "active",
    atomsStepNameText: "Step 1",
    atomsLineActiveImg: "https://c.animaapp.com/S5qOUeiW/img/atoms-line-active-53.svg",
    atomsLineActiveAtomsLineActiveClassNameOverride: {},
    divClassName: {},
    text: "1",
  },
};
