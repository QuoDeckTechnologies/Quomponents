//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import EnrollmentRuleRow from "../EnrollmentRuleRow/EnrollmentRuleRow.react";

describe("EnrollmentRuleRow", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: EnrollmentRuleRow,
    required: {

        criteria: {
          company: "Quodeck",
          zone: "East",
          branch: "",
          department: "IT",
          date_of_joining: "",
        },

      onRemoveRule: () => {},
      onRunRule: () => {},
    },
  };

  hasValid("defaults", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <EnrollmentRuleRow
        criteria={{
          company: "Quodeck",
          zone: "East",
          branch: "",
          department: "IT",
          date_of_joining: "",
        }}
        onRunRule={() => {}}
        onRemoveRule={() => {}}
      />
    );
  });
  it("should render correctly without throwing error when clicked on icons", () => {
    component.find(".fas").at(0).simulate("click");
    component.find(".fas").at(1).simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when props are changed", () => {
    component.setProps({
      criteria: {
        company: "",
        zone: "west",
        branch: "",
        department: "",
        date_of_joining: "",
      },
    });
  });
  it("should render correctly when `enrollmentRule` key is null", () => {
    component.setProps({
      criteria: null,
    });
  });
});
