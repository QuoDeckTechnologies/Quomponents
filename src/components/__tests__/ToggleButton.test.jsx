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
import ToggleButton from "../ToggleButton/ToggleButton.react";

describe("ToggleButton", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: ToggleButton,
    required: {
      onClick: () => { },
    },
    translations: {
      tgt: "toggleButton",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          toggleButton: { label: "सक्रिय" },
        },
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("positions", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("disabled", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  const dictionary = JSON.stringify({
    hi: {
      toggleButton: { label: "सक्रिय" },
    },
  });

  let component,
    onChange = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ToggleButton
        label="Active"
        asFloated="inline"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => console.log("ToggleButton Testing")}
        onChange={onChange}
      />
    );
  });
  
  it("should render correctly  with onChange function", () => {
    let toggleSwitch = component.find("div").at(0).children().at(0);
    toggleSwitch.simulate("change", { target: { checked: true } });
  });

  it("should render correctly when label is passed", () => {
    component.setProps({ label: "Not Active" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when label is null", () => {
    component.setProps({ label: "" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with translation",
  () => {
      component.setProps({
          withTranslation: {
              lang: "hi",
              tgt: "toggleButton",
              dictionary: dictionary,
          },
      });
      expect(component.exists()).toBe(true);
  });
});
