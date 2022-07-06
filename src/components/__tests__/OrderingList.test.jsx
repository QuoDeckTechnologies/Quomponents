//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import OrderingList from "../OrderingList/OrderingList/OrderingList.react";
import Button from "../Buttons/Button/Button.react";

describe("OrderingList", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Button,
    required: {
      content: "Testing Button",
      onClick: () => console.log("Button Testing"),
    },
    translations: {
      tgt: "templateActions",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          templateActions: {
            checkAnswer: "अपना उत्तर जाँच लें",
            submitAnswer: "अपना जवाब सबमिट करें",
            thanks: "आपके उत्तर के लिए धन्यवाद",
            go: "आगे बढ़ें",
          },
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
    en: {
      templateActions: {
        checkAnswer: "Check Answer",
        submitAnswer: "Submit Answer",
        thanks: "Thanks for your response",
        go: "Go",
      },
    },
    hi: {
      templateActions: {
        checkAnswer: "अपना उत्तर जाँच लें",
        submitAnswer: "अपना जवाब सबमिट करें",
        thanks: "आपके उत्तर के लिए धन्यवाद",
        go: "आगे बढ़ें",
      },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <OrderingList
        content={["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"]}
        asVariant="primary"
        asSize="normal"
        asFloated="none"
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={jest.fn()}
      />
    );
  });

  it("should render correctly without throwing error when clicked on button", () => {
    component.find(".qui-ordering-btn").at(0).simulate("click");
    component.find(".qui-ordering-btn").at(1).simulate("click");
    component.find(".qui-ordering-btn").at(2).simulate("click");
    component.find(".qui-ordering-btn").at(3).simulate("click");
    component.find(".qui-ordering-btn").at(4).simulate("click");
    component.find(".qui-ordering-btn").at(5).simulate("click");
  });
  it("should render correctly without throwing error when clicked on Submit button", () => {
    component.find(".qui-btn").at(0).simulate("click");
    component.find(".qui-btn").at(1).simulate("click");
    component.find(".qui-btn").at(2).simulate("click");
  });

  it("should render submit answer text in hindi", () => {
    component.setProps({
      purpose: "",
      withTranslation: {
        lang: "hi",
        tgt: "templateActions",
        dictionary: dictionary,
      },
    });
    expect(component.find(Button).text()).toBe("अपना जवाब सबमिट करें");
  });

  it("should render correctly if translation is not defined", () => {
    component.setProps({
      withTranslation: {
        lang: "mr",
        tgt: "templateActions",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render check answer text in hindi", () => {
    component.setProps({
      purpose: "quiz",
      withTranslation: {
        lang: "hi",
        tgt: "templateActions",
        dictionary: dictionary,
      },
    });
    expect(component.find(Button).text()).toBe("अपना उत्तर जाँच लें");
  });

  it("should render check answer text in hindi", () => {
    component.find("Button").simulate("click");
  });
});
