//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemTwo from "../OptionItem/OptionItemTwo/OptionItemTwo.react";

describe("Option Item Two", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  const dictionary = JSON.stringify({
    hi: {
      optionItemTwo: {
        placeholder: "यह विकल्प ए है",
        correct: "सही",
        incorrect: "ग़लत",
      },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemTwo
        content={{
          targetName: "name",
          value: "",
          image: {},
          placeholder: "placeholder",
          checked: false,
          maxLength: 300,
        }}
        withColor={{
          backgroundColor: "",
          accentColor: "",
          textColor: "",
        }}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isDisabled={false}
        isHidden={false}
        onInput={() => { }}
        onSelect={() => { }}
        onClick={() => { }}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withColor prop is passed", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#8c9ea3",
        accentColor: "#597387",
        textColor: "#bac2c8",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withAnimation prop is passed", () => {
    component.setProps({
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withTranslation prop is passed", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "optionItemTwo",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isDisabled prop is true", () => {
    component.setProps({
      isDisabled: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isDisabled prop is false", () => {
    component.setProps({
      isDisabled: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isHidden prop is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isHidden prop is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error", () => {
    let component = mount(
      <OptionItemTwo
        content={{
          targetName: "name",
          value: "",
          placeholder: "placeholder",
          checked: false,
        }}
        onInput={() => { }}
        onSelect={() => { }}
        onUpload={() => { }}
        onClick={() => { }}
      />
    );
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withTranslation prop is passed and radio button is used", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "optionItemTwo",
        dictionary: dictionary,
      },
    });
    component
      .find(".qui-option-item-radio")
      .simulate("change", { target: { checked: true } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when wriiten in input field", () => {
    component.find("InputField").simulate("click");
  });

  it("should render correctly without throwing error when radio button is used", () => {
    component
      .find(".qui-option-item-radio")
      .simulate("change", { target: { checked: true } });
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });

  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
    };
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withAnimation props", () => {
    let animation = {
      animation: "zoom",
      duration: 0.5,
      delay: 0,
    };
    component.setProps({ withAnimation: animation });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when targetName is not specified", () => {
    component.setProps({
      content: {
        value: "optionItem",
        placeholder: "placeholder",
        maxLength: 300,
      },
    });
    expect(component.exists()).toBe(true);
  });
});
