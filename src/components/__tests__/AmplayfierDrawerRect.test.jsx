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
import AmplayfierDrawerRect from "../AmplayfierDrawerRect/AmplayfierDrawerRect.react";
import Button from "../Buttons/Button/Button.react";

describe("AmplayfierDrawerRect", () => {

  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: AmplayfierDrawerRect,
    required: {
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("sizes", args);
  hasValid("positions", args);
  hasValid("padding", args);
  hasValid("alignment", args);

  hasValid("colors", args);
  hasValid("animations", args);

  hasValid("hidden", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <AmplayfierDrawerRect
        content={null}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed withColor props", () => {
    component.setProps({
      withColor: {
        backgroundColor: "",
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed withColor props", () => {
    component.setProps({
      withColor: {
        backgroundColor: "",
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when JSX is passed in content props", () => {
    component.setProps({
      content: <h1>Testing JSX</h1>,
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when component is passed in content props", () => {
    component.setProps({
      content: <Button content={"Testing Button"} onClick={() => { }} />,
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed isCircular props is true", () => {
    component.setProps({
      isCircular: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isCircular props is false", () => {
    component.setProps({
      isCircular: false,
    });
    expect(component.exists()).toBe(true);
  });
});
