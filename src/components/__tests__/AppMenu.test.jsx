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
      onClick: () => {},
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
        avatar="https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg"
        label="AppMenu"
        withColor={null}
        withIcon={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing an error", () => {
    component.setProps({ icon: true });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing an error withLabel props is passed", () => {
    component.setProps({
      withLabel: {
        content: "Catalog",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing an error withIcon props is passed", () => {
    component.setProps({
      withIcon: {
        icon: "fas fa-user",
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed isCircular props is false", () => {
    component.setProps({
      isCircular: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isCircular props is true", () => {
    component.setProps({
      isCircular: true,
    });
    expect(component.exists()).toBe(true);
  });
});
