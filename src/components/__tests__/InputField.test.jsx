//--------------------------------------
// Import from NPM
// -------------------------------------
import React from "react";
import { mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import InputField from "../InputField/InputField.react";

describe("InputField", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: InputField,
    required: {
      value: "Please input your text here",
      name: "",
      onSubmit: () => {},
    },
    translations: {
      tgt: "inputField",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          inputField: {
            label: "इनपुट नाम",
            placeholder: "विकल्प",
          },
        },
        en: {
          inputField: {
            label: "Input Name",
            placeholder: "Options",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  let onChange = jest.fn();
  let onBlur = jest.fn();
  let onSubmit = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <InputField
        label="Input Name"
        value="Please input your text here"
        placeholder="Options"
        maxLength={30}
        type="text"
        isMultiline={true}
        name=""
        asEmphasis="filled"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onChange={onChange}
        onBlur={onBlur}
        onSubmit={onSubmit}
      />
    );
  });

  it("it should render the class of character limit the input is under limit correctly when passed asEmphasis prop as charLimited", () => {
    component.setProps({
      label: "Input new Name",
      value: "text here",
      placeholder: "Options",
      maxLength: 0,
      type: "text",
      isMultiline: true,
      asEmphasis: "charLimited",
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render the class of character limit the input is under limit correctly when passed asEmphasis prop as listInput", () => {
    component.setProps({
      label: "Input new Name",
      value: "text here",
      placeholder: "Options",
      maxLength: 0,
      type: "text",
      isMultiline: false,
      asEmphasis: "listInput",
    });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly when passed asEmphasis prop as filled", () => {
    component.setProps({ asEmphasis: "filled" });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly when passed asEmphasis prop as charLimited", () => {
    component.setProps({ asEmphasis: "charLimited", maxLength: 0 });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly when passed asEmphasis prop as listInput", () => {
    component.setProps({ asEmphasis: "listInput", maxLength: 0 });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly when passed asEmphasis prop as listInput", () => {
    component.setProps({ asEmphasis: "listInput", maxLength: 1 });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly when passed asEmphasis prop as charLimited", () => {
    component.setProps({ asEmphasis: "charLimited", maxLength: 1 });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly when passed asEmphasis prop as filled", () => {
    component.setProps({ maxLength: 1 });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly when passed asEmphasis prop as charLimited", () => {
    component.setProps({ asEmphasis: "charLimited" });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly when passed asEmphasis prop as listInput", () => {
    component.setProps({ asEmphasis: "listInput" });
    expect(component.exists()).toBe(true);
  });

  it("it should render correctly when passed asEmphasis prop as shortField", () => {
    component.setProps({ asEmphasis: "shortField" });
    expect(component.exists()).toBe(true);
  });

  it("it should trigger the escape event when textarea contain some value", () => {
    let InputField = component.find("textarea").at(0);
    InputField.simulate("change", {
      target: { value: "Please input your text here" },
    });
    component.find("textarea").at(0).simulate("change", { key: "Enter" });
    expect(component.exists()).toBe(true);
  });

  it("it should trigger the escape event when textarea contain empty value", () => {
    let InputField = component.find("textarea").at(0);
    InputField.simulate("change", { target: { value: "" } });
    component.find("textarea").at(0).simulate("change", { key: "Escape" });
    expect(component.exists()).toBe(true);
  });

  it("it should pass the value to the InputField", () => {
    component
      .find("textarea")
      .at(0)
      .simulate("change", { target: { value: "Please input your text here" } });
    expect(component.find("textarea").at(0).props().value).toEqual(
      "Please input your text here"
    );
  });

  it("it should render correct props when blur on InputField", () => {
    component
      .find("textarea")
      .at(0)
      .simulate("blur", { style: { backgroundColor: "#666666" } });
    expect(component.exists()).toBe(true);
  });

  it("it should render correct props when focus on InputField", () => {
    component
      .find("textarea")
      .at(0)
      .simulate("focus", { style: { accentColor: "#ffbf00" } });
    expect(component.exists()).toBe(true);
  });
});
