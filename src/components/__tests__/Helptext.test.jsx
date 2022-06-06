//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import HelpText from "../HelpText/HelpText.react";

describe("HelpText", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  const dictionary = JSON.stringify({
    hi: {
      helptext: { content: "आपके शिक्षार्थी यही देखते हैं" },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <HelpText
        content=""
        asSize="normal"
        asPadded="normal"
        withColor={null}
        withTranslation={null}
        isHidden={false}
      />
    );
  });

  it("should render correctly without throwing error", () => {
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

  it("should render correctly when passed isCircular props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asSize prop as tiny", () => {
    component.setProps({ asSize: "tiny" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asSize prop as small", () => {
    component.setProps({ asSize: "small" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asSize prop as normal", () => {
    component.setProps({ asSize: "normal" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asSize prop as big", () => {
    component.setProps({ asSize: "big" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asSize prop as huge", () => {
    component.setProps({ asSize: "huge" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asSize prop as massive", () => {
    component.setProps({ asSize: "massive" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asPadded prop as massive", () => {
    component.setProps({ asPadded: "fitted" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asPadded prop as massive", () => {
    component.setProps({ asPadded: "compact" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asPadded prop as massive", () => {
    component.setProps({ asPadded: "normal" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asPadded prop as massive", () => {
    component.setProps({ asPadded: "relaxed" });
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

  it("should render correctly without throwing error when withTranslation prop is passed", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "helptext",
        dictionary: dictionary,
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
