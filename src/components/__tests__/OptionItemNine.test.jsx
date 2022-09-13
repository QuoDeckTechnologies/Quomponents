//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Component
// -------------------------------------
import RangedListItem from "../OptionItem/RangedListItem/RangedListItem.react";

describe("Option Item Nine", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: RangedListItem,
    required: {
      onClick: () => { },
      onShortFieldOneInput: () => { },
      onShortFieldTwoInput: () => { },
      onInput: () => { },
    },
    translations: {
      tgt: "RangedListItem",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          RangedListItem: {
            placeholder: "प्रश्नोत्तरी परिणाम के लिए संदेश",
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
  // Run component specific tests
  // -------------------------------------

  let component;

  let onClick = jest.fn();
  let onShortFieldOneInput = jest.fn();
  let onShortFieldTwoInput = jest.fn();
  let onInput = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <RangedListItem
        content={{
          shortFieldOne: {
            targetName: "ShortFieldOne",
            value: "0",
          },
          shortFieldTwo: {
            targetName: "ShortFieldTwo",
            value: "0",
          },
          message: {
            targetName: "Target Name",
            value: "",
            placeholder: "Message for Quiz Result",
            maxLength: 300,
          },
        }}
        withColor={null}
        withAnimation={null}
        isDisabled={false}
        isHidden={false}
        onClick={onClick}
        onShortFieldOneInput={onShortFieldOneInput}
        onShortFieldTwoInput={onShortFieldTwoInput}
        onInput={onInput}
      />
    );
  });

  it("should render correctly without throwing error when clicked on inputfield", () => {
    component.find("InputField").at(0).simulate("submit");
    component.find("InputField").at(1).simulate("submit");
    component.find("InputField").at(2).simulate("submit");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });

  it("should render correctly when shortFieldOne targetName is not specified", () => {
    component.setProps({
      content: {
        shortFieldOne: {
          value: "optionItem",
          placeholder: "placeholder",
          maxLength: 300,
        },
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when shortFieldTwo targetName is not specified", () => {
    component.setProps({
      content: {
        shortFieldTwo: {
          value: "optionItem",
          placeholder: "placeholder",
          maxLength: 300,
        },
      },
    });
    expect(component.exists()).toBe(true);
  });
});
