//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./../common";

//--------------------------------------
// Import Components
// -------------------------------------
import MCQwithFeedback from "../../Templates/MCQwithFeedback/MCQwithFeedback.react";

describe("MCQ with Feedback", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: MCQwithFeedback,
    required: {
      data: {
        title: "test title",
        subtitle: "test subtitle",
        icon: "test-icon",
        backgroundImage: {},
        options: [
          { correct: "", text: "button name" },
          { correct: "", text: "button name" },
          { correct: "", text: "button name" },
        ],
      },
      onClick: () => {},
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("positions", args);
  hasValid("animations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <MCQwithFeedback
        data={{
          title: "test title",
          subtitle: "test subtitle",
          icon: "test-icon",
          backgroundImage: {},
          options: [
            { correct: "", text: "button name" },
            { correct: "", text: "button name" },
            { correct: "", text: "button name" },
          ],
        }}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error when image is not defined", () => {
    component.setProps({
      data: {
        title: "test title",
        subtitle: "test subtitle",
        icon: "test-icon",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when background image is null", () => {
    component.setProps({
      data: {
        subtitle: "subtitle",
        backgroundImage: null,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when background image is provided with title and subtitle null ", () => {
    component.setProps({
      data: {
        backgroundImage: {},
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on a button", () => {
    component
      .find("ButtonBank")
      .at(0)
      .simulate("click", { target: { innerText: "button name" } });
    expect(component.exists()).toBe(true);
  });
});
