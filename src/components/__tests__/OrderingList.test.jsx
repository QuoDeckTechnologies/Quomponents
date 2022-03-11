//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import OrderingList from "../OrderingList/OrderingList/OrderingList.react";

describe("OrderingList", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <OrderingList
        content={{
          title: ["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"],
        }}
        asVariant="primary"
        asSize="normal"
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => console.log("OrderingList testing")}
      />
    );
  });

  it("should render correctly if isHidden toggled as true", () => {
    component.setProps({ isHidden: true });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly if isDisabled toggled as true", () => {
    component.setProps({ isDisabled: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on button", () => {
    component.find(".qui-ordering-btn").at(0).simulate("click");
    component.find(".qui-ordering-btn").at(1).simulate("click");
    component.find(".qui-ordering-btn").at(2).simulate("click");
    component.find(".qui-ordering-btn").at(3).simulate("click");
    component.find(".qui-ordering-btn").at(4).simulate("click");
    component.find(".qui-ordering-btn").at(5).simulate("click");
  });
});
