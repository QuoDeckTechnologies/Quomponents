import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import MenuBlock from "../AppMenu/MenuBlock/MenuBlock.react";

describe("MenuBlock", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      menuBlock: {
        content: "सूची",
      },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <MenuBlock
        asEmphasis="contained"
        asVariant="primary"
        asSize="normal"
        asFloated="none"
        withColor={null}
        withIcon={null}
        withLabel={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => console.log("MenuBlock testing")}
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

  it("should render correctly when passed withTranslation", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "menuBlock",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#ffffff",
        textColor: "#ffffff",
      },
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

  it("should render correctly when passed isDisabled props is false", () => {
    component.setProps({
      isDisabled: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is true", () => {
    component.setProps({
      isDisabled: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if translation object is not returned", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when wihtLabel props is provided", () => {
    component.setProps({
      withLabel: {
        content: "This is lable",
        textColor: "red",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when wihtLabel props match with position", () => {
    component.setProps({
      withLabel: {
        content: "This is lable",
        textColor: "red",
      },
    });
    expect(component.exists()).toBe(true);
  });
});
