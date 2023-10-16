import { AtomsStepName } from ".";

export default {
  title: "Components/AtomsStepName",
  component: AtomsStepName,
  argTypes: {
    state: {
      options: ["current", "inactive", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "current",
    className: {},
    divClassName: {},
    text: "Step 1",
  },
};
