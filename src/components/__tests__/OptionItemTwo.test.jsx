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
import OptionItemTwo from "../OptionItem/OptionItemTwo/OptionItemTwo.react";

describe("Option Item Two", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: OptionItemTwo,
    required: {
      onInput: () => {},
      onSelect: () => {},
      onClick: () => {},
    },
    translations: {
      tgt: "optionItemTwo",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          optionItemTwo: {
            placeholder: "यह विकल्प ए है",
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
        targetName="name"
        value="value"
        placeholder="placeholder"
        checked={false}
        maxLength={300}
        withColor={null}
        withAnimation={null}
        isDisabled={false}
        isHidden={false}
        onInput={() => {}}
        onSelect={() => {}}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    let component = mount(
      <OptionItemTwo
        targetName="name"
        value=""
        placeholder="placeholder"
        checked={false}
        onInput={() => {}}
        onSelect={() => {}}
        onUpload={() => {}}
        onClick={() => {}}
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
    component.find("InputField").simulate("submit");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when radio button is used", () => {
    component
      .find(".qui-option-item-radio")
      .simulate("change", { target: { checked: true } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
    expect(component.exists()).toBe(true);
  });
});
