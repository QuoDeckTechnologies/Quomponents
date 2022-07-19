import React, { useState } from "react";
import RadioButtonGroup from "../components/RadioButtonGroup/RadioButtonGroup.react";
import RadioButton from "../components/RadioButton/RadioButton.react";

export default {
  title: "Design System/RadioButtonGroup",
  component: RadioButtonGroup,
  parameters: {
    componentSubtitle:
      "Displays a basic radio button group for general-purpose use",
    a11y: { disable: true },
  },
};

const defaultProps = {
  targetName: "target-one",
  label: "Default Radio",
  asSize: "normal",
  asFloated: "none",
  asPadded: "fitted",
  asAligned: "left",
  withColor: {
    backgroundColor: "",
    textColor: "#303030",
    accentColor: "#FFBF00",
    hoverBackgroundColor: "",
    hoverTextColor: "",
  },
  withAnimation: {
    animation: "zoom",
    duration: 0.5,
    delay: 0,
  },
  isHidden: false,
  isDisabled: false,
};
// -------------------------------------------------------------
// Default
// -------------------------------------------------------------
const Template = () => {
  const [value, setValue] = useState("");
  return (
    <RadioButtonGroup value={value}>
      <RadioButton
        {...defaultProps}
        targetName="target-one"
        label="Option One"
        onClick={(value, checked) => setValue(value)}
      />
      <RadioButton
        {...defaultProps}
        targetName="target-two"
        label="Option two"
        onClick={(value, checked) => setValue(value)}
      />
      <RadioButton
        {...defaultProps}
        targetName="target-three"
        label="Option three"
        onClick={(value, checked) => setValue(value)}
      />
    </RadioButtonGroup>
  );
};
export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: `<RadioButtonGroup {...${JSON.stringify(Default.args, null, 2)}}/>`,
    },
  },
};
