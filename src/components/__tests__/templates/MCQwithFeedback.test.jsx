//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import MCQwithFeedback from "../../Templates/MCQwithFeedback/MCQwithFeedback.react";

describe("MCQ with Feedback", () => {
  // -------------------------------------
  // Setup definitions for the test suite
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
          backgroundImage: "test_image",
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

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
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

  it("should render correctly without throwing error when clicked on a button", () => {
    component
      .find("ButtonBank")
      .at(0)
      .simulate("click", { target: { innerText: "button name" } });
    expect(component.exists()).toBe(true);
  });
});
