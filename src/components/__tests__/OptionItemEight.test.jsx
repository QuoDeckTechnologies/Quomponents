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
import OptionItemEight from "../OptionItem/OptionItemEight/OptionItemEight.react";

describe("Option Item Eight", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: OptionItemEight,
    required: {
      onInput: () => { },
      onClick: () => { },
      onSubmit: () => { },
    },
    translations: {
      tgt: "optionItemEight",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          optionItemEight: {
            placeholder: "यह विकल्प ए है",
            buttonText: "रेखांकित बटन",
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
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemEight
        content={{
          targetName: "name",
          value: "optionItem",
          placeholder: "placeholder",
          maxLength: 300,
          buttonText: "Button Text",
        }}
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isDisabled={false}
        isHidden={false}
        onInput={() => { }}
        onClick={() => { }}
        onSubmit={() => { }}
      />
    );
  });

  it("should render correctly without throwing error when wriiten in input field", () => {
    component.find("InputField").simulate("submit");
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });
});
