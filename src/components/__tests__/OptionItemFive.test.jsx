//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemFive from "../OptionItem/OptionItemFive/OptionItemFive.react";

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
      <OptionItemFive
        content={{
          targetName: "name",
          value: "",
          placeholder: "placeholder",
          image: {},
        }}
        onInput={() => {}}
        onUpload={() => {}}
        onClose={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error", () => {
    let component = mount(
      <OptionItemFive
        content={{
          targetName: "name",
          value: "",
          placeholder: "placeholder",
          image: {},
        }}
        onInput={() => {}}
        onUpload={() => {}}
        onClose={() => {}}
      />
    );
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when wriiten in input field", () => {
    component.find("InputField").simulate("click");
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
