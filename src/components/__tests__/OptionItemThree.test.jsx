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

  it("should render correctly without throwing error when withColor prop is passed", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#8c9ea3",
        accentColor: "#597387",
        textColor: "#bac2c8",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withAnimation prop is passed", () => {
    component.setProps({
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isDisabled prop is true", () => {
    component.setProps({
      isDisabled: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isDisabled prop is false", () => {
    component.setProps({
      isDisabled: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isHidden prop is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isHidden prop is true", () => {
    component.setProps({
      isHidden: true,
    });
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
    component.find("OptionalImageField").simulate("click", {});
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });
});
