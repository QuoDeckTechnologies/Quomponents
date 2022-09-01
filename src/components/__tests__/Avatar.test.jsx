import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";

//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import Avatar from "../AppMenu/Avatar/Avatar.react";

describe("Avatar", () => {
  const args = {
    target: Avatar,
    required: {
      content: "Testing Button",
      onClick: () => {},
    },
    translations: {
      tgt: "button",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          loading: "बस एक मिनट...",
          button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
        },
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("sizes", args);
  hasValid("positions", args);
  hasValid("padding", args);
  hasValid("alignment", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(<Avatar withColor={null} onClick={() => {}} />);
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if user image link is passed to the prop", () => {
    component.setProps({
      withIcon: {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if withColor set to any color prop", () => {
    component.setProps({ withColor: { backgroundColor: "purple" } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if withColor set to any color prop", () => {
    component.setProps({ withColor: { textColor: "red" } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if withIcon set to any other icon from font-awesome", () => {
    component.setProps({ withIcon: { icon: "fas fa-home" } });
    component.update();
    expect(component.exists()).toBe(true);
  });
});
