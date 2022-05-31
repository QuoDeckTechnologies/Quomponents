//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import AppMenu from "../AppMenu/AppMenu/AppMenu.react";

describe("AppMenu", () => {
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
        asVariant="primary"
        asSize="normal"
        asFloated="inline"
        withColor={null}
        withIcon={null}
        isHidden={false}
        isDisabled={false}
        withUser={""}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withAnimation props", () => {
    component.setProps({
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withTranslation", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "appMenu",
        dictionary: dictionary,
      },
    });
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

  it("should render correctly when passed isHidden props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isCircular props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is false", () => {
    component.setProps({
      isDisabled: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is true", () => {
    component.setProps({
      isDisabled: true,
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

  it("should render correctly without throwing an error if AsSize props is passed", () => {
    component.setProps({ asSize: "huge" });
    expect(component.exists()).toBe(true);
  });
});
