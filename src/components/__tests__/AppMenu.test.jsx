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
import AppMenu from "../AppMenu/AppMenu/AppMenu.react";

describe("AppMenu", () => {

  const args = {
    target: AppMenu,
    required: {
      onClick: () => console.log("AppMenu Testing"),
    },
    translations: {
      tgt: "appMenu",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          appMenu: {
            content: "सूची",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("sizes", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      appMenu: {
        content: "सूची",
      },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <AppMenu
        label="AppMenu"
        withColor={null}
        withUser={""}
        onClick={() => { }}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed withColor", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#ffffff",
        accentColor: "#ffffff",
        textColor: "#ffffff",
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing an error", () => {
    component.setProps({ icon: true });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing an error if color props is passed", () => {
    component.setProps({ color: "primary" });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing an error withLabel props is passed", () => {
    component.setProps({
      withLabel: {
        content: "Catalog",
        textColor: "#000000",
      },
    });
    expect(component.exists()).toBe(true);
  });
});
