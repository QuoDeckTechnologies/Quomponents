//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import RibbonToolsMenu from "../RibbonMenu/toolsMenu/RibbonToolsMenu.react";

describe("RibbonToolsMenu", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    en: {
      ribbonToolsMenu: {
        questionBank: "Question Bank",
        upload: "Upload",
        copySlidesToScript: "Copy Slides to Script",
        downloadScript: "Download Script",
        settings: "Settings",
        enableNavigation: "Enable Navigation",
        enableSlideList: "Enable Slide List",
        enableVoiceovers: "Enable Voiceovers",
        analysis: "Analysis",
      },
    },
    hi: {
      ribbonToolsMenu: {
        questionBank: "प्रश्न बैंक",
        voiceover: "पार्श्व स्वर",
        upload: "अपलोड",
        copySlidesToScript: "स्लाइड को स्क्रिप्ट में कॉपी करें",
        downloadScript: "स्क्रिप्ट डाउनलोड करें",
        settings: "समायोजन",
        enableNavigation: "पथ प्रदर्शन सक्षम करें",
        enableSlideList: "स्लाइड सूची सक्षम करें",
        enableVoiceovers: "वॉयस ओवर सक्षम करें",
        analysis: "विश्लेषण",
      },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <RibbonToolsMenu withTranslation={null} onClick={jest.fn()} />
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

  it("should render submitAnswer translation of component in hindi", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "ribbonToolsMenu",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if translation object is not returned", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "",
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
