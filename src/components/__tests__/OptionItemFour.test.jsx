//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemFour from "../OptionItem/OptionItemFour/OptionItemFour.react";

describe("Option Item Two", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemFour
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
      <OptionItemFour
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

  it("should render correctly without throwing error when checkbox is used", () => {
    component.find("CheckBox").simulate("click", { checked: true });
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });
});
