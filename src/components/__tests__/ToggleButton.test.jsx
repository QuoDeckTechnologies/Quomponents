//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Components
// -------------------------------------
import ToggleButton from "../ToggleButton/ToggleButton.react";

describe("ToggleButton", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component,
    onChange = jest.fn();

  const dictionary = JSON.stringify({
    hi: {
      label: "सक्रिय",
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ToggleButton
        label="Active"
        asSize="normal"
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
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with isActive false",
    () => {
      component.setProps({
        isActive: false
      });
      expect(component.exists()).toBe(true);
    });
  it("should render correctly if translation object is not returned",
    () => {
      component.setProps({
        withTranslation: {
          lang: "hi",
          tgt: "label",
          dictionary: dictionary,
        }
      });
      expect(component.exists()).toBe(true);
    });
  it("should render correctly if translation object is not returned",
    () => {
      component.setProps({
        withTranslation: {
          lang: "hi",
          tgt: "",
          dictionary: dictionary,
        }
      });
      expect(component.exists()).toBe(true);
    });
  it("should render correctly  with onChange function",
    () => {
      let toggleSwitch = component.find("div").at(0).children().at(0)
      toggleSwitch.simulate('change', { target: { checked: true } })
    });
});
