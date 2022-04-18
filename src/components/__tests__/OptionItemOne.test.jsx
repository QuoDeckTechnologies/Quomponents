//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemOne from "../OptionItem/OptionItemOne/OptionItemOne.react";

describe("Option Item One", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemOne
        content={{ targetName: "name", value: "", placeholder: "placeholder" }}
        onInput={() => {}}
        onClose={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when written in input field", () => {
    component.find("InputField").simulate("click");
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });
});
