//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import InlineEditWithRemoveButton from "../OptionItem/InlineEditWithRemoveButton/InlineEditWithRemoveButton.react";

describe("Inline Edit With Remove Button", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <InlineEditWithRemoveButton
        content={{ targetName: "name", value: "", placeholder: "placeholder" }}
        onInput={() => {}}
        onClose={() => {}}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error", () => {
    component.find("InputField").simulate("click");
  });
  it("should render correctly without throwing error", () => {
    component.find(".fa-times").simulate("click", { target: { id: "name" } });
  });
});
