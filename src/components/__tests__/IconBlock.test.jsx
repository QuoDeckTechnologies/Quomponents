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
import IconBlock from "../IconBlock/IconBlock.react";

describe("IconBlock", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: IconBlock,
    required: {
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("sizes", args);
  hasValid("positions", args);
  hasValid("padding", args);
  hasValid("alignment", args);

  hasValid("colors", args);
  hasValid("icons", args);
  hasValid("animations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <IconBlock
        asEmphasis="contained"
        asVariant="primary"
        asSize="normal"
        asPadded="normal"
        asFloated="inline"
        withColor={null}
        withIcon={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => { }}
      />
    );
  });

  it("should render correctly when passed asEmphasis prop as text", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
    }
    component.setProps({ asEmphasis: "text" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asEmphasis prop as contained", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
    }
    component.setProps({ asEmphasis: "contained" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asEmphasis prop as outlined", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
    }
    component.setProps({ asEmphasis: "outlined" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
    }
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed emphasis prop as text", () => {
    component.setProps({ asEmphasis: "text" })
    component.setProps({ withColor: { backgroundColor: "#000", accentColor: "#fff" } })

    component.setProps({ withIcon: { icon: "fas fa-book" } })
    expect(component.find("i").props().style.color).toBe("#fff")
  })

  it("should render component with correct styling of disabled icon even if we pass the background and icon color in the Outlined Emphasis Icon", () => {
    component.setProps({ isDisabled: true })
    component.setProps({ asEmphasis: "outlined" })
    component.setProps({ withColor: { backgroundColor: "#000" } })
    component.setProps({ withIcon: { icon: "fas fa-book", color: "#fff" } })

    expect(component.find("div").props().style.borderColor).toBe("#cccccc")
    expect(component.find("i").props().style.color).toBe("#cccccc")
  })
  it("should render component with correct styling of disabled icon even if we pass the background and icon color in the Text Emphasis Icon", () => {
    component.setProps({ isDisabled: true })
    component.setProps({ asEmphasis: "text" })
    component.setProps({ withColor: { backgroundColor: "#000" } })
    component.setProps({ withIcon: { icon: "fas fa-book", color: "#fff" } })

    expect(component.find("div").props().style.background).toBe("transparent")
    expect(component.find("i").props().style.color).toBe("#666666")
  })
  it("should render component with correct styling of disabled icon even if we pass the background and icon color in the Contained Emphasis Icon", () => {
    component.setProps({ isDisabled: true })
    component.setProps({ asEmphasis: "contained" })
    component.setProps({ withColor: { backgroundColor: "#000" } })
    component.setProps({ withIcon: { icon: "fas fa-book", color: "#fff" } })

    expect(component.find("div").props().style.background).toBe("#cccccc")
    expect(component.find("i").props().style.color).toBe("#666666")
  })
});
