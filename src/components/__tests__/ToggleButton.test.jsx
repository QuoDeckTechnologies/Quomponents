//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
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
      ToggleButton: { label: "सक्रिय" },
    },
  });
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
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly if translation object is not returned",
    () => {
      component.setProps({
        withTranslation: {
          lang: "hi",
          tgt: "ToggleButton",
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
  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
    }
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed withAnimation props", () => {
    let animation = {
      animation: "zoom",
      duration: 0.5,
      delay: 0,
    }
    component.setProps({ withAnimation: animation })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when label is passed", () => {
    component.setProps({ label: "Not Active"})
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when label is null", () => {
    component.setProps({ label: ""})
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true })
    expect(component.exists()).toBe(true);
  })
});
