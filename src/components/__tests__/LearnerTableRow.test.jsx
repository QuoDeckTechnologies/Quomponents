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
import LearnerTableRow from "../LearnerTableRow/LearnerTableRow.react";

describe("LearnerTableRow", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: LearnerTableRow,
    required: {
      content: [
        {
          _id: "",
          username: "sysadmin",
          first_name: "System",
          last_name: "Administrator",
        },
      ],
      onUnenrollLearner: () => {},
      onSendMessage: () => {},
    },
  };

  hasValid("defaults", args);
  hasValid("animations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <LearnerTableRow
        content={[
          {
            _id: "first",
            username: "sysadmin",
            first_name: "System",
            last_name: "Administrator",
          },
          {
            _id: "second",
            username: "sysadmin",
            first_name: "System",
            last_name: "Administrator",
          },
        ]}
        asPadded="normal"
        withColor={null}
        withAnimation={null}
        isDisabled={false}
        isHidden={false}
        onUnenrollLearner={() => {}}
        onSendMessage={() => {}}
      />
    );
  });
  it("should render correctly without throwing error when clicked on checkbox", () => {
    component.find(".qui-learner-checkbox").at(0).simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when clicked on icons", () => {
    component.find(".far").at(1).simulate("click");
    component.find(".fas").at(1).simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when clicked on checkbox and clicked on send message button", () => {
    component.find(".qui-learner-checkbox").at(0).simulate("click");
    component.find(".far").at(0).simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when clicked on checkbox and clicked on unenroll button", () => {
    component.find(".qui-learner-checkbox").at(0).simulate("click");
    component.find(".fas").at(1).simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when clicked on checkbox twice", () => {
    component.find(".qui-learner-checkbox").at(0).simulate("click");
    component.find(".qui-learner-checkbox").at(0).simulate("click");
    expect(component.exists()).toBe(true);
  });
});
