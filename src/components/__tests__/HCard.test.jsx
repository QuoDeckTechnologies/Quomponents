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
      onClick: () => {},
    },
    translations: {
      tgt: "hCard",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          hCard: {
            buttonText: "प्रयत्न करें",
            name: "बेलून बस्ट",
            description:
              "सितारों को इकट्ठा करने के लिए उन गुब्बारों को पॉप करें और इसे करने के लिए अधिक समय प्राप्त करने के लिए सवालों के जवाब दें।",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("positions", args);
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
      <HCard
        showButton={false}
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
        onClick={() => {}}
      />
    );
  });

  it("should render correctly when passed content props", () => {
    component.setProps({
      id: "",
      name: "BALLOON BURST",
      description:
        "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
      buttonText: null,
      checked: true,
      image: { id: "background-image", extention: "" },
      showButton: true,
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
      id: "",
      name: "BALLOON BURST",
      description:
        "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
      buttonText: "try game",
      checked: true,
      showButton: true,
      image: null,
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

  it("should render correctly when clicked on card when showButton is true", () => {
    component.setProps({
      showButton: true,
    });
    component.find(".qui-h-card-container").simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when clicked on card with larger window", () => {
    component.setProps({
      showButton: true,
    });
    component.find("Button").simulate("click");
    expect(component.exists()).toBe(true);
  });
});
