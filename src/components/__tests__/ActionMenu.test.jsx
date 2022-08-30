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
import ActionMenu from "../ActionMenu/ActionMenu.react";

describe("ActionMenu", () => {
  const args = {
    target: ActionMenu,
    required: {
      content: [
        {
          title: "Open Deck",
          icon: "fas fa-book-open",
          popover: "Deck",
          onClick: () => {},
        },
      ],
      onClick: () => {},
    },
    translations: {
      tgt: "actionMenu",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          actionMenu: {
            content: [
              { title: "डेक खोलो" },
              { title: "डेक संपादित करें" },
              { title: "डेक ऊपर ले जाएँ" },
              { title: "डेक नीचे ले जाएँ" },
              { title: "विषय पर जाएं" },
              { title: "डेक को अप्रकाशित करें" },
              { title: "डेक हटाएं" },
            ],
          },
        },
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("padding", args);
  hasValid("alignment", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("hidden", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ActionMenu
        content={[
          {
            title: "Open Deck",
            icon: "fas fa-book-open",
            popover: "deck",
            onClick: () => {},
          },
        ]}
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
      />
    );
  });
  it("should call handelevent when click", () => {
    component.find(".qui-action-menu-items").simulate("mousedown");
    expect(component.exists()).toBe(true);
  });
});
