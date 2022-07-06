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
import RibbonHtmlMenu from "../RibbonMenu/htmlMenu/RibbonHtmlMenu.react";

describe("RibbonHtmlMenu", () => {
  // -------------------------------------
    // Run common tests
    // -------------------------------------
    
    const args = {
      target: RibbonHtmlMenu,
      translations: {
          tgt: "ribbonHtmlMenu",
          lang: { valid: "hi", invalid: "xx" },
          dictionary: JSON.stringify({
            en: {
              ribbonHtmlMenu: {
                saveExit: "Save & Exit",
                upload: "Upload",
                download: "Download",
                save: "Save",
                file: "File",
              },
            },
            hi: {
              ribbonHtmlMenu: {
                saveExit: "सेहेजे & बाहर निकले",
                upload: "अपलोड",
                download: "डाउनलोड",
                save: "सहेजें",
                file: "फ़ाइल",
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
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <RibbonHtmlMenu
        asFloated="left"
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={jest.fn()}
      />
    );
  });
});
