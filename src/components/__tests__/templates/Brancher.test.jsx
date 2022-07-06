//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./../common";
//--------------------------------------
// Import Components
// -------------------------------------
import Brancher from "../../Templates/Brancher/Brancher.react";

describe("Brancher", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Brancher,
    required: {
      content: "Testing Button",
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
  hasValid("animations", args);
  hasValid("toggles", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Brancher
        data={{
          title: "test title",
          subtitle: "test subtitle",
          backgroundImage: {},
          brancher: [
            { slideLInk: 1, text: "button name" },
            { slideLInk: 1, text: "button name" },
            { slideLInk: 1, text: "button name" },
          ],
        }}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withAnimation props", () => {
    component.setProps({
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is left", () => {
    component.setProps({
      asFloated: "left",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is right", () => {
    component.setProps({
      asFloated: "right",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is inline", () => {
    component.setProps({
      asFloated: "inline",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is none", () => {
    component.setProps({
      asFloated: "none",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isCircular props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isCircular props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#fffcf2",
        textColor: "#403d39",
        slideHeaderBackgroundColor: "#ccc5b9",
        slideHeaderAccentColor: "#eb5e28",
        slideHeaderTextColor: "#ffffff",
        buttonBackgroundColor: "#403d39",
        buttonTextColor: "#ffffff",
        buttonHoverBackgroundColor: "#eb5e28",
        buttonHoverTextColor: "",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when image is not defined", () => {
    component.setProps({
      data: {
        title: "test title",
        subtitle: "test subtitle",
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

  it("should render correctly without throwing error when background image is provided with title and subtitle null", () => {
    component.setProps({
      data: {
        backgroundImage: {},
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when brancher array is not provided", () => {
    component.setProps({
      data: {
        brancher: null,
      },
    });
    component
      .find("ButtonBank")
      .at(0)
      .simulate("click", { target: { innerText: "button name" } });
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
