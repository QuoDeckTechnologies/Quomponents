//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Components
// -------------------------------------
import Button from "../Buttons/Button/Button.react";

describe("Button", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      loading: "बस एक मिनट...",
      button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Button
        asEmphasis="contained"
        isCircular={false}
        asVariant="primary"
        asSize="normal"
        asPadded="normal"
        asFloated="none"
        asAligned="center"
        withColor={null}
        withIcon={null}
        withLabel={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        isFluid={false}
        isLoading={false}
        onClick={() => console.log("Button Testing")}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with isCircular set and empty content", () => {
    component.setProps({
      isCircular: true,
      content: "Content",
      withIcon: {
        icon: "fas",
      },
    });
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
  it("should render correctly with isLoading set", () => {
    component.setProps({
      isLoading: true,
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
  it("should render correctly with withTranslation prop", () => {
    component.setProps({
      content: "Content",
      withTranslation: {
        lang: "hi",
        tgt: "button",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with withTranslation and withLabel prop", () => {
    component.setProps({
      withLabel: {
        format: "caption",
        content: "Content",
        textColor: "black",
      },
      withTranslation: {
        lang: "hi",
        tgt: "",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with withIcon prop", () => {
    component.setProps({
      withIcon: {
        icon: "fas fa-desktop",
        position: "left",
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
    const component = renderer.create(
      <Button onClick={() => console.log("testing")} />
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
});
