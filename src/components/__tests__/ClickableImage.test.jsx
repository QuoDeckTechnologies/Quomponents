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
    component = mount(<ClickableImage onClick={() => { }} isCircular={false} isActive={false} withColor={null}
    />);
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
    component.setProps({
      isActive: true,
      withColor: {
        borderColor: "#ff0000"
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with isCircular set", () => {
    component.setProps({
      isCircular: true,
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed withColor props", () => {
    let colors = {
      borderColor: "#ff0000"
    }
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
});
