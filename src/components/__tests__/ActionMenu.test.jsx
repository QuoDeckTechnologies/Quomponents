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
        },
        {
          title: "Edit Deck",
          icon: "fas fa-edit",
        },
        {
          title: "Move Deck Up",
          icon: "fas fa-angle-up",
        },
        {
          title: "Move Deck Down",
          icon: "fas fa-angle-down",
        },
        {
          title: "Move to Topic",
          icon: "fas fa-square",
        },
        {
          title: "Unpublish Deck",
          icon: "fas fa-eye-slash",
        },
        {
          title: "Delete Deck",
          icon: "fas fa-trash",
        },
      ],
      onClick: () => { },
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
            ]
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("positions", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
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
        ]
      },
    },
  });
  let handelevent = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ActionMenu
        content={[
          {
            title: "Open Deck",
            icon: "fas fa-book-open",
            func: () => { },
          },
          {
            title: "Edit Deck",
            icon: "fas fa-edit",
            func: () => { },
          },
          {
            title: "Move Deck Up",
            icon: "fas fa-chevron-up",
            func: () => { },
          },
          {
            title: "Move Deck Down",
            icon: "fas fa-chevron-down",
            func: () => { },
          },
          {
            title: "Move to Topic",
            icon: "fas fa-retweet",
            func: () => { },
          },
          {
            title: "Unpublish Deck",
            icon: "fas fa-eye-slash",
            func: () => { },
          },
          {
            title: "Delete Deck",
            icon: "fas fa-trash-alt",
            func: () => { },
          },
        ]}
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isDisabled={false}
        isHidden={false}
        onClick={() => { }}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    };
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly if content are not specified", () => {
    component.setProps({
      content: [],
    });
    expect(component.exists()).toBe(true);
  });
  it("should call handelevent when click", () => {
    component.find(".qui-actionmenu-items").at(0).simulate("mousedown");
    component.find(".qui-actionmenu-items").at(1).simulate("mousedown");
    component.find(".qui-actionmenu-items").at(2).simulate("mousedown");
    component.find(".qui-actionmenu-items").at(3).simulate("mousedown");
    component.find(".qui-actionmenu-items").at(4).simulate("mousedown");
    component.find(".qui-actionmenu-items").at(5).simulate("mousedown");
    component.find(".qui-actionmenu-items").at(6).simulate("mousedown");
  });
});
