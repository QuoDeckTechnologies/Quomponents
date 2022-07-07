//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";

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
      onClick: () => console.log("Button Testing"),
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
        onClick={() => console.log("Button Testing")}
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
  it("should render correctly with asEmphasis `outlined`", () => {
    component.setProps({
      asEmphasis: "outlined",
      isDisabled: true,
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
    const component = renderer.create(
      <Button content="content" onClick={() => console.log("testing")} />
    );
    const tree = component.toJSON();
    act(() => {
      tree.props.onMouseEnter();
      tree.props.onMouseLeave();
    });
  });

  it("should render correctly with withColor prop when hovered", () => {
    const component = renderer.create(
      <Button
        content="test"
        withColor={{
          backgroundColor: "#ffc900",
          textColor: "#666666",
          hoverBackgroundColor: "#666666",
          hoverTextColor: "#ffc900",
        }}
        onClick={() => console.log("testing")}
      />
    );
    const tree = component.toJSON();
    act(() => {
      tree.props.onMouseEnter();
    });
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
  it("should render translation  with withTranslation prop puprpose passed as quiz", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: dictionary,
      },
    });
  });
  it("should render translation  with withTranslation prop puprpose passed as quiz", () => {
    component.setProps({
      withTranslation: {
        lang: "",
        tgt: "button",
        dictionary: dictionary,
      },
    });
  });
  it("should render correctly with content", () => {
    component.setProps({
      content: "",
      children: "Children",
    });
    expect(component.exists()).toBe(true);
  });
});
