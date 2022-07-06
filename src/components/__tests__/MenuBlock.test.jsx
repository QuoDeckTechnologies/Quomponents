import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import MenuBlock from "../AppMenu/MenuBlock/MenuBlock.react";

describe("MenuBlock", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: MenuBlock,
    required: {
      onClick: () => { },
    },
    translations: {
      tgt: "menuBlock",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          menuBlock: {
            content: "सूची",
          },
        },
      })
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("sizes", args);
  hasValid("positions", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("toggles", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
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

  it("should render correctly when passed withColor", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#ffffff",
        accentColor: "#ffffff",
        textColor: "#ffffff",
      },
    });
    expect(component.exists()).toBe(true);
  });


  it("should render correctly when passed isCircular props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when wihtLabel props is provided", () => {
    component.setProps({
      withLabel: {
        format: "caption",
        content: "This is lable",
        textColor: "red",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when withLabel props match with position", () => {
    component.setProps({
      withLabel: {
        format: "label",
        content: "This is lable",
        textColor: "red",
      },
    });
    expect(component.exists()).toBe(true);
  });
});
