//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemTwo from "../OptionItem/OptionItemTwo/OptionItemTwo.react";

describe("Option Item Two", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemTwo
        content={{
          targetName: "name",
          value: "",
          placeholder: "placeholder",
          checked: false,
          maxLength: 300,
        }}
        onInput={() => {}}
        onSelect={() => {}}
        onClose={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error", () => {
    let component = mount(
      <OptionItemTwo
        content={{
          targetName: "name",
          value: "",
          placeholder: "placeholder",
          checked: false,
        }}
        onInput={() => {}}
        onSelect={() => {}}
        onClose={() => {}}
      />
    );
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when wriiten in input field", () => {
    component.find("InputField").simulate("click");
  });

  it("should render correctly without throwing error when radio button is used", () => {
    component
      .find(".qui-option-item-radio")
      .simulate("change", { target: { checked: true } });
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });
});
