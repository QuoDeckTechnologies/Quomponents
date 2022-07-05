//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./../common";
//--------------------------------------
// Import Components
// -------------------------------------
import LinkwithSlide from "../../Templates/LinkwithSlide/LinkwithSlide.react";

describe("LinkWithSlide", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: LinkwithSlide,
    required: {
      data: {
        title: "test title",
        subtitle: "test subtitle",
        paragraph: "test paragraph",
      },
      onClick: () => {},
    },
    translations: {
      tgt: "linkwithslide",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          linkwithslide: { button: "जाएँ" },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("positions", args);
  hasValid("animations", args);
  hasValid("translations", args);
  hasValid("toggles", args);
  // -------------------------------------
  // Run component specific tests
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
