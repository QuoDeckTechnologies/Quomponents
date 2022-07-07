import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import QuestionBankSection from "../RibbonMenu/toolsMenu/sections/QuestionBankSection.react";
import IconLink from "../Buttons/IconLink/IconLink.react";

describe("QuestionBankSection", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: QuestionBankSection,
    translations: {
      tgt: "questionBankSection",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        en: {
          questionBankSection: {
            questionBank: "Question Bank",
          },
        },
        hi: {
          questionBankSection: {
            questionBank: "प्रश्न बैंक",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("positions", args);

  hasValid("translations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);

  // -------------------------------------
  // Run component specific tests
  // -------------------------------------

  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <QuestionBankSection
        asFloated="left"
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={jest.fn()}
      />
    );
  });

  it("should simulate question bank button", () => {
    component.find(IconLink).simulate("click");
    expect(component.exists()).toBe(true);
  });
});
