//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import ArcMenu from "../ArcMenu/ArcMenu.react";

describe("ArcMenu", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ArcMenu
        content={[
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
        ]}
        arcIcon="fas fa-caret-down"
        type="close"
        position="top-right"
        asVariant="primary"
        asSize="normal"
        withColor={{
          backgroundColor: "#ffcc00",
          accentColor: "red",
          textColor: "#808080",
        }}
        isCloseButton={false}
        isDisabled={false}
        isHidden={false}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly whith top-left position", () => {
    component.setProps({
      position: "top-left",
    });
  });
  it("should render correctly with bottom-left position", () => {
    component.setProps({
      position: "bottom-left",
    });
  });
  it("should render correctly with bottom-right position", () => {
    component.setProps({
      position: "bottom-right",
    });
  });
  it("should render correctly when position not specified", () => {
    component.setProps({
      position: null,
    });
  });
  it("should render correctly when modal is operated", () => {
    component.setProps({
      type: "menu",
    });
    component.find(".qui-arc-menu-button").simulate("click");
    component.find(".qui-arc-menu-backdrop").at(0).simulate("click");
  });
  it("should render correctly with add type and empty arcIcon", () => {
    component.setProps({
      arcIcon:'',
      type: "add",
    });
  });
  it("should render correctly with add type and empty arcIcon", () => {
    component.setProps({
      arcIcon:'',
      type: "close",
    });
  });
  it("should render correctly when clicked on close button", () => {
    component.find(".qui-arc-menu-close-button").simulate("click");
  });
  it("should render correctly when clicked on NuggetBlock", () => {
    component.setProps({
      type: "menu",
    });
    component.find(".qui-arc-menu-button").simulate("click");
    component.find("NuggetBlock").at(0).simulate("click");
  });
  it("should render correctly when withColor props is null", () => {
    component.setProps({
      withColor: null,
    });
  });
  it("should render correctly when arcIcon props is null", () => {
    component.setProps({
      arcIcon: null,
      type: "menu",
      position: "bottom-right",
    });
  });
});
