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
        menuContent={[
          {
            header: "learning",
            list: [
              "upload scorm",
              "upload pdf",
              "add video link",
              "create qdf deck",
            ],
          },
          {
            header: "evaluating",
            list: ["create survey", "create quiz", "add a game"],
          },
          {
            header: "rewarding",
            list: ["give a certificate", "give a badge", "give a reward"],
          },
        ]}
        nuggetContent={[
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
        ]}
        type="close"
        arcIcon="menu"
        position="top-right"
        asVariant="primary"
        asSize="normal"
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

  it("should render correctly with add type and add arcIcon", () => {
    component.setProps({
      arcIcon: "add",
      type: "add",
    });
    component.find(".qui-arc-menu-button").simulate("click");
  });

  it("should render correctly with close type and close arcIcon", () => {
    component.setProps({
      arcIcon: "close",
      type: "close",
    });
    component.find(".qui-arc-menu-button").simulate("click");
  });

  it("should render correctly when clicked on close button", () => {
    component.find(".qui-arc-menu-close-button").simulate("click");
  });

  it("should render correctly when clicked on NuggetBlock", () => {
    component.setProps({
      type: "nugget-menu",
    });
    component.find(".qui-arc-menu-button").simulate("click");
    component.find("NuggetBlock").at(0).simulate("click");
  });

  it("should render correctly when clicked on menu list items", () => {
    component.setProps({
      type: "menu",
    });
    component.find(".qui-arc-menu-list-item").at(0).simulate("mousedown");
  });

  it("should render correctly when type is menu and position is bottom-right", () => {
    component.setProps({
      type: "menu",
      position: "bottom-right",
    });
  });
});
