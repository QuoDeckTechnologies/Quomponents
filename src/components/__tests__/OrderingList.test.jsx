//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
import { render } from "@testing-library/react";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import OrderingList from "../OrderingList/OrderingList/OrderingList.react";

describe("OrderingList", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: OrderingList,
    required: {
      onClick: () => {},
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("positions", args);

  hasValid("hidden", args);
  hasValid("disabled", args);

  // -------------------------------------
  // Run component specific tests
  // -------------------------------------

  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <OrderingList
        content={["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"]}
        purpose="quiz"
        onClick={() => {}}
      />
    );
  });
  it("should render correctly without throwing error when clicked on Submit button", () => {
    component.setProps({
      purpose: "quiz",
    });
  });
  it("should render correctly without throwing error when component unmounts", () => {
    const { unmount } = render(
      <OrderingList
        content={["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"]}
        onClick={() => {}}
      />
    );
    unmount();
  });

  it("should render correctly without throwing error when clicked on button", () => {
    component.find(".qui-ordering-btn").at(0).simulate("click");
    component.find(".qui-ordering-btn").at(1).simulate("click");
    component.find(".qui-ordering-btn").at(2).simulate("click");
    component.find(".qui-ordering-btn").at(3).simulate("click");
    component.find(".qui-ordering-btn").at(4).simulate("click");
    component.find(".qui-ordering-btn").at(5).simulate("click");
  });
  it("should render correctly without throwing error when clicked on Submit button", () => {
    component.find(".qui-btn").at(0).simulate("click");
    component.find(".qui-btn").at(1).simulate("click");
    component.find(".qui-btn").at(2).simulate("click");
    component.find(".qui-btn").at(3).simulate("click");
    component.find(".qui-btn").at(4).simulate("click");
    component.find(".qui-btn").at(5).simulate("click");
    component.find(".qui-btn").at(6).simulate("click");
    component.find(".qui-btn").at(7).simulate("click");
  });
});
