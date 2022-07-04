//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import EnrollmentRuleRow from "../EnrollmentRuleRow/EnrollmentRuleRow.react";

describe("EnrollmentRuleRow", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <EnrollmentRuleRow
        enrollmentRule={{
          company: "",
          zone: "",
          branch: "",
          department: "",
          date_of_joining: "",
        }}
        allRules={[
          { _id: "", criteria: { company: "Quodeck", zone: "East" } },
          { _id: "", criteria: { branch: "Maharashtra", department: "IT" } },
          {
            _id: "",
            criteria: { zone: "West", date_of_joining: "2-03-2022" },
          },
          {
            _id: "",
            criteria: {
              company: "Microsoft",
              zone: "West",
              branch: "California",
              department: "IT",
              date_of_joining: "2-03-2022",
            },
          },
        ]}
        withColor={{
          backgroundColor: "",
          accentColor: "",
          textColor: "#b60d17",
        }}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isDisabled={false}
        isHidden={false}
        onRunRule={() => {}}
        onRemoveRule={() => {}}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when clicked on icons", () => {
    component.find(".fas").at(0).simulate("click");
    component.find(".fas").at(1).simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when props are changed", () => {
    component.setProps({
      enrollmentRule: {
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
      enrollmentRule: null,
    });
  });
});
