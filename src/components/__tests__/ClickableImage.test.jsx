//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import ClickableImage from "../ClickableImage/ClickableImage.react";

describe("EnrollmentRuleRow", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(<ClickableImage onClick={() => {}} />);
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when image is provided", () => {
    component.setProps({
      content: {
        image: "xyz.jpeg",
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when clicked on image", () => {
    component.find(".qui-clicked-on-image").simulate("click");
    expect(component.exists()).toBe(true);
  });
});
