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
import VoiceoverSection from "../RibbonMenu/toolsMenu/sections/VoiceoverSection.react";

describe("VoiceoverSection", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: VoiceoverSection,
    required: {
      onClick: () => {},
    },
    translations: {
      tgt: "voiceoverSection",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          voiceoverSection: {
            voiceover: "पार्श्व स्वर",
            upload: "अपलोड",
            copySlidesToScript: "स्लाइड को स्क्रिप्ट में कॉपी करें",
            downloadScript: "स्क्रिप्ट डाउनलोड करें",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("translations", args);
  hasValid("toggles", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    en: {
      voiceoverSection: {
        upload: "Upload",
        copySlidesToScript: "Copy Slides to Script",
        downloadScript: "Download Script",
      },
    },
    hi: {
      voiceoverSection: {
        voiceover: "पार्श्व स्वर",
        upload: "अपलोड",
        copySlidesToScript: "स्लाइड को स्क्रिप्ट में कॉपी करें",
        downloadScript: "स्क्रिप्ट डाउनलोड करें",
      },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <VoiceoverSection
        asFloated="left"
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={jest.fn()}
      />
    );
  });

  it("should render translation of component in hindi", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "voiceoverSection",
        dictionary: dictionary,
      },
    });
    expect(component.find(".qui-ribbon-menu-label-file").text()).toBe(
      "पार्श्व स्वर"
    );
    expect(component.find(".qui-ribbon-menu-label").text()).toBe("अपलोड");
    expect(component.find(".qui-ribbon-menu-tool-label").at(0).text()).toBe(
      "स्लाइड को स्क्रिप्ट में कॉपी करें"
    );
    expect(component.find(".qui-ribbon-menu-tool-label").at(1).text()).toBe(
      "स्क्रिप्ट डाउनलोड करें"
    );
  });

  it("should enable navigation by clicking on Icon", () => {
    let backArrow = component.find("IconLink").at(0);
    backArrow.simulate("click");
  });

  it("should enable navigation by clicking on text", () => {
    let backArrow = component.find(".qui-ribbon-menu-tool-label").at(0);
    backArrow.simulate("click");
  });

  it("should enable slide list by clicking on Icon", () => {
    let nextArrow = component.find("IconLink").at(1);
    nextArrow.simulate("click");
  });

  it("should enable slide list by clicking on text", () => {
    let nextArrow = component.find(".qui-ribbon-menu-tool-label").at(1);
    nextArrow.simulate("click");
  });
});
