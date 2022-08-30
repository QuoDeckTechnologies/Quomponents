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
import AmplayfierDateBlock from "../AmplayfierDateBlock/AmplayfierDateBlock.react";

describe("AmplayfierDateBlock", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: AmplayfierDateBlock,
  };
  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("colors", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <AmplayfierDateBlock date={null} asVariant="primary" withColor={null} />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed withColor props", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#ffffff",
        textColor: "#ffffff",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date is provided in date props", () => {
    component.setProps({
      date: "2021-05-10T12:55:18.154Z",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in date props", () => {
    component.setProps({
      date: "2022-05-01",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in date props", () => {
    component.setProps({
      date: "2022-05-02",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in date props", () => {
    component.setProps({
      date: "2022-05-03",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in date props", () => {
    component.setProps({
      date: "2022-05-05",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in date props", () => {
    component.setProps({
      date: "2022-05-31",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when invalid date is provided in date props", () => {
    component.setProps({
      date: "xyz",
    });
    expect(component.exists()).toBe(true);
  });
});
