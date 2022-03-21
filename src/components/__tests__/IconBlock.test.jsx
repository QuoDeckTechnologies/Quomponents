//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import IconBlock from "../IconBlock/IconBlock.react";

describe("IconBlock", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <IconBlock
        asEmphasis="contained"
        asSize="normal"
        asPadded="normal"
        asFloated="inline"
        withColor={null}
        withIcon={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => console.log("IconBlock Testing")}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asEmphasis prop as text", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    }
    component.setProps({ asEmphasis: "text" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asEmphasis prop as contained", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    }
    component.setProps({ asEmphasis: "contained" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asEmphasis prop as outlined", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    }
    component.setProps({ asEmphasis: "outlined" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed asSize prop as tiny", () => {
    component.setProps({ asSize: "tiny" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asSize prop as small", () => {
    component.setProps({ asSize: "small" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asSize prop as normal", () => {
    component.setProps({ asSize: "normal" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asSize prop as big", () => {
    component.setProps({ asSize: "big" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asSize prop as huge", () => {
    component.setProps({ asSize: "huge" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asSize prop as massive", () => {
    component.setProps({ asSize: "massive" })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed asPadded prop as fitted", () => {
    component.setProps({ asPadded: "fitted" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asPadded prop as commpact", () => {
    component.setProps({ asPadded: "compact" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asPadded prop as normal", () => {
    component.setProps({ asPadded: "normal" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asPadded prop as relaxed", () => {
    component.setProps({ asPadded: "relaxed" })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed asAligned prop as left", () => {
    component.setProps({ asAligned: "left" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asAligned prop as right", () => {
    component.setProps({ asAligned: "right" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asAligned prop as center", () => {
    component.setProps({ asAligned: "center" })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed asFloated prop as left", () => {
    component.setProps({ asFloated: "left" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asFloated prop as right", () => {
    component.setProps({ asFloated: "right" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asFloated prop as inline", () => {
    component.setProps({ asFloated: "inline" })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    }
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed withAnimation props", () => {
    let animation = {
      animation: "zoom",
      duration: 0.5,
      delay: 0,
    }
    component.setProps({ withAnimation: animation })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed emphasis prop as text", () => {
    component.setProps({ asEmphasis: "text" })
    component.setProps({ withColor: { backgroundColor: "#000", accentColor: "#fff" } })

    component.setProps({ withIcon: { icon: "fas fa-book" } })
    expect(component.find("i").at(0).props().style.color).toBe("#fff")
  })

  it("should render component with correct styling of disabled icon even if we pass the background and icon color in the Outlined Emphasis Icon", () => {
    component.setProps({ isDisabled: true })
    component.setProps({ asEmphasis: "outlined" })
    component.setProps({ withColor: { backgroundColor: "#000" } })
    component.setProps({ withIcon: { icon: "fas fa-book", color: "#fff" } })

    expect(component.find("div").at(1).props().style.borderColor).toBe("#cccccc")
    expect(component.find("i").at(0).props().style.color).toBe("#cccccc")
  })
  it("should render component with correct styling of disabled icon even if we pass the background and icon color in the Text Emphasis Icon", () => {
    component.setProps({ isDisabled: true })
    component.setProps({ asEmphasis: "text" })
    component.setProps({ withColor: { backgroundColor: "#000" } })
    component.setProps({ withIcon: { icon: "fas fa-book", color: "#fff" } })

    expect(component.find("div").at(1).props().style.background).toBe("transparent")
    expect(component.find("i").at(0).props().style.color).toBe("#666666")
  })
  it("should render component with correct styling of disabled icon even if we pass the background and icon color in the Contained Emphasis Icon", () => {
    component.setProps({ isDisabled: true })
    component.setProps({ asEmphasis: "contained" })
    component.setProps({ withColor: { backgroundColor: "#000" } })
    component.setProps({ withIcon: { icon: "fas fa-book", color: "#fff" } })

    expect(component.find("div").at(1).props().style.background).toBe("#cccccc")
    expect(component.find("i").at(0).props().style.color).toBe("#666666")
  })
});
