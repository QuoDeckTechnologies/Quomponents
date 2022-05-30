//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import ArcMenu from "../ArcMenu/ArcMenu.react";

describe("ArcMenu", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  const dictionary = JSON.stringify({
    hi: {
      arcmenu: {
        menuContent: [
          {
            header: "सीखें",
            list: [
              "अपलोड scorm",
              "अपलोड pdf",
              "वीडियो लिंक जोड़ें",
              "qdf डेक बनाएं",
            ],
          },
          {
            header: "मूल्यांकन",
            list: ["सर्वेक्षण बनाएं", "प्रश्नोत्तरी बनाएँ", "एक खेल जोड़ें"],
          },
          {
            header: "पुरस्कृत",
            list: ["प्रमाण पत्र दो", "एक बैज दें", "इनाम दो"],
          },
        ],
      },
    },
  });

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
        menuType="close"
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

  it("should render correctly when passed withTranslation", () => {
    component.setProps({
      menuType: "menu",
      withTranslation: {
        lang: "hi",
        tgt: "arcmenu",
        dictionary: dictionary,
      },
    });
    component.find(".qui-arc-menu-button").simulate("click");
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
      menuType: "menu",
    });
    component.find(".qui-arc-menu-button").simulate("click");
    component.find(".qui-arc-menu-backdrop").at(0).simulate("click");
  });

  it("should render correctly with add menuType and add arcIcon", () => {
    component.setProps({
      arcIcon: "add",
      menuType: "add",
    });
    component.find(".qui-arc-menu-button").simulate("click");
  });

  it("should render correctly with close menuType and close arcIcon", () => {
    component.setProps({
      arcIcon: "close",
      menuType: "close",
    });
    component.find(".qui-arc-menu-button").simulate("click");
  });

  it("should render correctly when clicked on close button", () => {
    component.find(".qui-arc-menu-close-button").simulate("click");
  });

  it("should render correctly when clicked on NuggetBlock", () => {
    component.setProps({
      menuType: "nugget-menu",
    });
    component.find(".qui-arc-menu-button").simulate("click");
    component.find("NuggetBlock").at(0).simulate("click");
  });

  it("should render correctly when clicked on menu list items", () => {
    component.setProps({
      menuType: "menu",
    });
    component.find(".qui-arc-menu-list-item").at(0).simulate("mousedown");
  });

  it("should render correctly when menuType is menu and position is bottom-right", () => {
    component.setProps({
      menuType: "menu",
      position: "bottom-right",
    });
  });
});
