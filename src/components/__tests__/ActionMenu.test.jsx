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
        let colors={{
          backgroundColor: "red",
          accentColor: "green",
          textColor: "blue",
        }}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => console.log("testing")}

      />
    );
  });

  it("should render correctly without throwing error", () => {
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
          backgroundColor: "red",
          accentColor: "blue",
          textColor: "#b60d17",
        }}
        onClick={() => console.log('testing')}
      />)
    });
});
