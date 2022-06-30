//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import RibbonDesignMenu from "../RibbonMenu/designMenu/RibbonDesignMenu.react";

describe("RibbonDesignMenu", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    en: {
      ribbonDesignMenu: {
        overlayBackground: "Overlay Background",
        slideBackground: "Slide Background",
        setBackground: "Set",
        removeBackground: "Remove",
        settings: "Settings",
        pageColor: "Page Color",
        primaryColor: "Primary Color",
        accentColor: "Accent Color",
        secondaryColor: "Secondary Color",
      },
    },
    hi: {
      ribbonDesignMenu: {
        overlayBackground: "उपरिशायी पृष्ठभूमि",
        slideBackground: "स्लाइड पृष्ठभूमि",
        setBackground: "सेट",
        removeBackground: "निकाले",
        settings: "समायोजन",
        pageColor: "पृष्ठ रंग",
        primaryColor: "प्राथमिक रंग",
        accentColor: "स्वरोंका रंग",
        secondaryColor: "द्वितीयक रंग",
      },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <RibbonDesignMenu
        asFloated="left"
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={jest.fn()}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated prop as left", () => {
    component.setProps({ asFloated: "left" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated prop as right", () => {
    component.setProps({ asFloated: "right" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated prop as inline", () => {
    component.setProps({ asFloated: "inline" });
    expect(component.exists()).toBe(true);
  });

  it("should render translation of component in hindi", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "ribbonDesignMenu",
        dictionary: dictionary,
      },
    });
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
});
