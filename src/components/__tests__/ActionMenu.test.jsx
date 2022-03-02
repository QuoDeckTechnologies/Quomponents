//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import ActionMenu from "../ActionMenu/ActionMenu.react";

describe("ActionMenu", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      ActionMenu: [
        { title: "खुला डेक" },
        { title: "डेक संपादित करें" },
        { title: "डेक ऊपर ले जाएँ" },
        { title: "डेक नीचे ले जाएँ" },
        { title: "विषय पर जाएं" },
        { title: "अप्रकाशित डेक" },
        { title: "डेक हटाएं" },
      ]
    }
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ActionMenu
        content={[
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
        ]}
        asVariant="primary"
        withColor={{
          backgroundColor: "",
          accentColor: "",
          textColor: "#b60d17",
        }}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        withTranslation={{
          lang: "hi",
          tgt: "ActionMenu",
          dictionary: dictionary,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => console.log("EanrCard testing")}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with withTranslation prop", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "ActionMenu",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without tgt", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly if content are not specified", () => {
    component.setProps({
      content: [],
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with empty props which are not required", () => {
    component.setProps({
      content: [],
      withColor: {},
      withAnimation: {},
      isDisabled: null,
      isHidden: null
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with withColor prop",
    () => {
      const component = renderer.create(<ActionMenu
        withColor={{
          backgroundColor: "",
          accentColor: "",
          textColor: "#b60d17",
        }}
        onClick={() => console.log('testing')}
      />)
    });
});
