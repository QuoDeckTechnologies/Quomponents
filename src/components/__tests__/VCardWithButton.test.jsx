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
import VCardWithButton from "../VCardWithButton/VCardWithButton.react";

describe("VCardWithButton", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: VCardWithButton,
    required: {
      id: "default-id",
      name: "BALLOON BURST",
      description:
        "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
      buttonText: "try game",
      checked: true,
      image: { id: "background-image", extention: "" },
      onClick: () => {},
    },
    translations: {
      tgt: "vCardWithButton",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          vCardWithButton: {
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
  hasValid("colors", args);
  hasValid("positions", args);
  hasValid("animations", args);
  hasValid("translations", args);
  hasValid("disabled", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <VCardWithButton
        imageLibrary={[]}
        asEmphasis="contained"
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
      content: {
        id: "default-id",
        name: "BALLOON BURST",
        description:
          "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
        buttonText: "try game",
        checked: true,
        image: { id: "background-image", extention: "" },
      },
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
        id: "default-id",
        name: "BALLOON BURST",
        description:
          "Pop those balloons to collect stars and answer questions to gain more time to do it in.",
        buttonText: "try game",
        checked: true,
      },
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

  it("should render correctly when clicked on card with larger window", () => {
    component.find("Button").simulate("click");
    expect(component.exists()).toBe(true);
  });
});
