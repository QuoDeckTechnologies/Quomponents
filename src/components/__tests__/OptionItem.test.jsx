//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import OptionItem from "../OptionItem/OptionItem.react";

describe("OptionItem", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <OptionItem
        content={{

        }}
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
      content: {

      },
    });
  });
});
