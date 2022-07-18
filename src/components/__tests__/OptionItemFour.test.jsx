//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemFour from "../OptionItem/OptionItemFour/OptionItemFour.react";

describe("Option Item Four", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: OptionItemFour,
    required: {
      onInput: () => {},
      onClick: () => {},
      onSelect: () => {},
    },
    translations: {
      tgt: "optionItemFour",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          optionItemFour: {
            placeholder: "विकल्प आइटम पांच",
            correct: "सही",
            incorrect: "ग़लत",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("colors", args);
  hasValid("translations", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------

  let component;

  const dictionary = JSON.stringify({
    hi: {
      optionItemFour: {
        placeholder: "विकल्प आइटम पांच",
        correct: "सही",
        incorrect: "ग़लत",
      },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemFour
        targetName="name"
        value=""
        placeholder="placeholder"
        checked={false}
        maxLength={300}
        onInput={() => {}}
        onSelect={() => {}}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    let component = mount(
      <OptionItemFour
        targetName="name"
        value=""
        placeholder="placeholder"
        checked={false}
        onInput={() => {}}
        onSelect={() => {}}
        onClick={() => {}}
      />
    );
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when wriiten in input field", () => {
    component.find("InputField").simulate("submit");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withTranslation prop is passed and check box is toggled", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "optionItemFour",
        dictionary: dictionary,
      },
    });
    component.find("CheckBox").simulate("click", { checked: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when checkbox is used", () => {
    component.find("CheckBox").simulate("click", { checked: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when targetName is not specified", () => {
    component.setProps({
      value: "",
      placeholder: "placeholder",
      checked: false,
    });
    expect(component.exists()).toBe(true);
  });
});
