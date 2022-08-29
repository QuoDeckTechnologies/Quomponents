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
import NavBar from "../NavBar/NavBar/NavBar.react";

describe("NavBar", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: NavBar,
    required: {
      title: "earn",
      shortLogo: "",
      fullLogo: "",
      iconLink: {
        icon: "fas fa-angle-left",
        link: "https://www.google.com/",
      },
      onClick: () => {},
      onSearch: () => {},
      onMenuClick: () => {},
      onAppMenuClick: () => {},
    },
    translations: {
      tgt: "navBar",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          navBar: {
            title: "कमाये",
            content: "कॅटलॉग",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <NavBar
        title="Earn"
        shortLogo="shortLogo.png"
        fullLogo="fullLogo.png"
        iconLink={{
          icon: "fas fa-angle-left",
          link: "https://www.google.com/",
        }}
        isCircular={false}
        isSearch={true}
        isMenuBar={true}
        isBackButton={true}
        onClick={() => {}}
        onSearch={() => {}}
        onMenuClick={() => {}}
        onAppMenuClick={() => {}}
      />
    );
  });

  it("should render correctly when isMenuBar props is false", () => {
    component.setProps({
      isMenuBar: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when shortLogo props is undefined", () => {
    component.setProps({
      shortLogo: undefined,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when title props is undefined", () => {
    component.setProps({
      title: undefined,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when isSearch props is false", () => {
    component.setProps({
      isSearch: false,
    });
    expect(component.exists()).toBe(true);
  });
});
