//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import LearnerTableRow from "../LearnerTableRow/LearnerTableRow.react";

describe("EarnCard", () => {
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
        asPadded="normal"
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
