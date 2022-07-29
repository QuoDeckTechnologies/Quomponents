//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import Button from "../Buttons/Button/Button.react";

describe("Button", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Button,
    required: {
      content: "",
      onClick: () => { },
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
  hasValid("labels", args);
  hasValid("animations", args);
  hasValid("icons", args);
  hasValid("translations", args);
  hasValid("fluid", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  hasValid("loading", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  const dictionary = JSON.stringify({
    hi: {
      loading: "बस एक मिनट...",
      button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
    },
  });

  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Button
        content="Testing Button"
        onClick={() => { }}
      />
    );
  });

  it("should render correctly with isCircular", () => {
    component.setProps({
      isCircular: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with isCircular and empty content", () => {
    component.setProps({
      isCircular: true,
      content: "",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with asEmphasis", () => {
    component.setProps({
      asEmphasis: "outlined",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with isDisable True and withColor null", () => {
    component.find(".qui-button").simulate("mouseenter");
    component.setProps({
      asEmphasis: "outlined",
      isDisabled: true,
      withColor: null
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with asEmphasis `outlined` and mouse hovered", () => {
    component.find(".qui-button").simulate("mouseenter");
    component.setProps({
      asEmphasis: "outlined",
      isDisabled: false,
      withColor: {
        backgroundColor: "#ffc900",
        textColor: "#666666",
        hoverBackgroundColor: "#666666",
        hoverTextColor: "#ffc900",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with asEmphasis `outlined`", () => {
    component.setProps({
      asEmphasis: "outlined",
      withColor: {
        backgroundColor: "#ffc900",
        textColor: "#666666",
        hoverBackgroundColor: "#666666",
        hoverTextColor: "#ffc900",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when hovered", () => {
    component.find(".qui-button").simulate("mouseenter");
    component.find(".qui-button").simulate("mouseleave");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with withColor prop when hovered", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#ffc900",
        textColor: "#666666",
        hoverBackgroundColor: "#666666",
        hoverTextColor: "#ffc900",
      },
    });
    component.find(".qui-button").simulate("mouseenter");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with isCircular set and empty content", () => {
    component.setProps({
      isCircular: true,
      content: "",
      withIcon: {
        icon: "fas",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render translation  with withTranslation prop", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with content", () => {
    component.setProps({
      content: "",
      children: "Children",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when component mounts", () => {
    component = mount(
      <Button
        content="Testing Button"
        onClick={() => { }}
      />
    );
  });

});
