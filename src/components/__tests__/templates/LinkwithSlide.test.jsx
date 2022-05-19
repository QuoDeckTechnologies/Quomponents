//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import LinkwithSlide from "../../Templates/LinkwithSlide/LinkwithSlide.react";

describe("LinkWithSlide", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  const dictionary = JSON.stringify({
    hi: {
      linkwithslide: { button: "जाएँ" },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <LinkwithSlide
        data={{
          title: "test title",
          subtitle: "test subtitle",
          paragraph: "test paragraph",
        }}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when translation is used", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "linkwithslide",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant props as primary", () => {
    component.setProps({
      asVariant: "primary",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant props as secondary", () => {
    component.setProps({
      asVariant: "secondary",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant props as warning", () => {
    component.setProps({
      asVariant: "warning",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant props as success", () => {
    component.setProps({
      asVariant: "success",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant props as error", () => {
    component.setProps({
      asVariant: "error",
    });
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

  it("should render correctly when passed isHidden props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is none", () => {
    component.setProps({
      asFloated: "none",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is left", () => {
    component.setProps({
      asFloated: "left",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is right", () => {
    component.setProps({
      asFloated: "right",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is inline", () => {
    component.setProps({
      asFloated: "inline",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor props", () => {
    component.setProps({
      withColor: {
        backgroundColor: "",
        textColor: "#ffffff",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        slideHeaderTextColor: "#ffffff",
        buttonBackgroundColor: "",
        buttonTextColor: "",
        buttonHoverBackgroundColor: "",
        buttonHoverTextColor: "",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when image is not defined", () => {
    component.setProps({
      data: {
        title: "test title",
        subtitle: "test subtitle",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when data is null", () => {
    component.setProps({
      data: null,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when icon is provided with presenter object", () => {
    component.setProps({
      data: {
        title: "test title",
        presenter: {
          extention: "",
          id: "default43",
        },
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when presenter id is given in imageLibrary array", () => {
    component.setProps({
      data: {
        title: "test title",
        presenter: {
          extention: "",
          id: "test",
        },
      },
      imageLibrary: [{ id: "test", image: "test.png" }],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when background image is provided", () => {
    component.setProps({
      data: {
        title: "test title",
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
      },
      imageLibrary: [{ id: "background-image", image: "test.png" }],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on the button", () => {
    component.setProps({
      data: {
        gotoSlide: 3,
      },
    });
    component.find(".qui-link-with-slide-button").children().simulate("click");
    expect(component.exists()).toBe(true);
  });
});
