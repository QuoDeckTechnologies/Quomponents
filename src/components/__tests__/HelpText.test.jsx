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
import HelpText from "../HelpText/HelpText.react";

describe("HelpText", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: HelpText,
    required: {

    },
    translations: {
      tgt: "helpText",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          helpText: { content: "आपके शिक्षार्थी यही देखते हैं" },
        },
      })
    },
  };

  hasValid("defaults", args);

  hasValid("sizes", args);
  hasValid("padding", args);

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
      <HelpText
        content=""
        withColor={null}
        withTranslation={null}
        isHidden={false}
      />
    );
  });

  it("should render correctly without throwing error", () => {
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
        backgroundColor: "#ffffff",
        accentColor: "#fffffff",
        textColor: "#ffffff",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when content is provided", () => {
    component.setProps({
      content: "This is what your learners see",
    });
    expect(component.exists()).toBe(true);
  });
});
