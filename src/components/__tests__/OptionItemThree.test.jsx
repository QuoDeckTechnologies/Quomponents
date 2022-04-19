//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemThree from "../OptionItem/OptionItemThree/OptionItemThree.react";

describe("Option Item Two", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  
  const pauseFor = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemThree
        content={{
          targetName: "name",
          image: {},
          checked: false,
        }}
        onUpload={() => {}}
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
      <OptionItemThree
        content={{
            targetName: "name",
            image: {},
            checked: false,
          }}
        onUpload={() => {}}
        onSelect={() => {}}
        onClose={() => {}}
      />
    );
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when radio button is used", () => {
    component
      .find(".qui-option-item-three-radio")
      .simulate("change", { target: { checked: true } });
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });

  it("should render correctly when file is uploaded", async () => {
    component
      .find("OptionalImageField")
      .simulate("click", {});
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });
});
