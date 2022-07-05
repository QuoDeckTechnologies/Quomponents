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
import HCard from "../HCard/HCard.react";

describe("HCard", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: HCard,
    required: {
      onClick: () => { },
    },
    translations: {
      tgt: "hCard",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          hCard: {
            buttonText: "प्रयत्न करें",
          },
        },
      })
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("positions", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("toggles", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  const dictionary = JSON.stringify({
    hi: {
      hCard: {
        buttonText: "प्रयत्न करें",
      },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <HCard
        isButton={false}
        imageLibrary={[]}
        asEmphasis="contained"
        isCircular={false}
        asVariant="primary"
        asFloated="none"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => { }}
      />
    );
  });
  it("should render correctly when passed isCircular props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isCircular props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#ffffff",
        buttonBackgroundColor: "#ffffff",
        textColor: "#ffffff",
        buttonTextColor: "#ffffff",
        accentColor: "#ffffff",
        accentBackgroundColor: "#ffffff",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed content props", () => {
    component.setProps({
      content: {
        id: "",
        name: "BALLOON BURST",
        description:
          "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
        buttonText: null,
        checked: true,
        image: { id: "background-image", extention: "" },
      },
      isButton: true,
      imageLibrary: [
        {
          id: "background-image",
          image:
            "https://images.unsplash.com/photo-1653844124305-6606b561dee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
      ],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when image key is not provided in content props", () => {
    component.setProps({
      content: {
        id: "",
        name: "BALLOON BURST",
        description:
          "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
        buttonText: "try game",
        checked: true,
      },
      isButton: true,
      imageLibrary: [
        {
          id: "background-image",
          image:
            "https://images.unsplash.com/photo-1653844124305-6606b561dee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
      ],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when clicked on card", () => {
    component.find(".qui-h-card-container").simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when clicked on card when isButton is true", () => {
    component.setProps({
      isButton: true,
    });
    component.find(".qui-h-card-container").simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when clicked on card with larger window", () => {
    component.setProps({
      isButton: true,
    });
    component.find("Button").simulate("click");
    expect(component.exists()).toBe(true);
  });
});
