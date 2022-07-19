//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import RadioButtonGroup from "../RadioButtonGroup/RadioButtonGroup.react";
import RadioButton from "../RadioButton/RadioButton.react";

describe("RadioButtonGroup", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: RadioButtonGroup,
    required: {
      onClick: () => {},
    },
  };

  hasValid("defaults", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
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
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <RadioButtonGroup value="target-one">
        <RadioButton
          {...defaultProps}
          targetName="target-one"
          label="Option One"
          onClick={() => {}}
        />
        <RadioButton
          {...defaultProps}
          targetName="target-two"
          label="Option two"
          onClick={() => {}}
        />
        <RadioButton
          {...defaultProps}
          targetName="target-three"
          label="Option three"
          onClick={() => {}}
        />
      </RadioButtonGroup>
    );
  });
});
