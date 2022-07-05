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
      onUnenrollLearner: () => { },
      onSendMessage: () => { }
    },
  };

  hasValid("defaults", args);

  hasValid("colors", args);
  hasValid("animations", args);

  hasValid("toggles", args);
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
            _id: "",
            username: "sysadmin",
            first_name: "System",
            last_name: "Administrator",
          },
        ]}
        withColor={null}
        withAnimation={null}
        isDisabled={false}
        isHidden={false}
        onUnenrollLearner={() => { }}
        onSendMessage={() => { }}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when clicked on checkbox", () => {
    component.find(".qui-learner-checkbox").simulate("click");
  });
  it("should render correctly without throwing error when clicked on icons", () => {
    component.find(".far").at(1).simulate("click");
    component.find(".fas").simulate("click");
  });
});
