//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
import { render } from "@testing-library/react";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import OrderingList from "../OrderingList/OrderingList/OrderingList.react";

describe("OrderingList", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: OrderingList,
    required: {
      onClick: () => { },
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("sizes", args);
  hasValid("positions", args);

  hasValid("animations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);

  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  const dictionary = JSON.stringify({
    en: {
      templateActions: {
        checkAnswer: 'Check Answer',
        submitAnswer: 'Submit Answer',
        thanks: 'Thanks for your response',
        go: 'Go',
      }
    },
    hi: {
      templateActions: {
        checkAnswer: 'अपना उत्तर जाँच लें',
        submitAnswer: 'अपना जवाब सबमिट करें',
        thanks: 'आपके उत्तर के लिए धन्यवाद',
        go: 'आगे बढ़ें',
      }
    }
  });
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <OrderingList
        content={["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"]}
        asVariant="primary"
        asSize="normal"
        asFloated="none"
        withAnimation={null}
        withTranslation={null}
        isDisabled={false}
        isHidden={false}
        onClick={() => { }}
      />
    );
  });
  it("should render correctly without throwing error when component unmounts", () => {
    const { unmount } = render(
      <OrderingList
        content={["PRIMARY BUTTON", "SECONDARY BUTTON", "THIRD BUTTON"]}
        asVariant="primary"
        asSize="normal"
        asFloated="none"
        withAnimation={null}
        withTranslation={null}
        isDisabled={false}
        isHidden={false}
        onClick={() => { }}
      />
    );
    unmount();
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
    component.find('.qui-btn').at(0).simulate("click");
    component.find('.qui-btn').at(1).simulate("click");
    component.find('.qui-btn').at(2).simulate("click");
    component.find('.qui-btn').at(3).simulate("click");
    component.find('.qui-btn').at(4).simulate("click");
    component.find('.qui-btn').at(5).simulate("click");
    component.find('.qui-btn').at(6).simulate("click");
    component.find('.qui-btn').at(7).simulate("click");
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
    expect(component.find("Button").text()).toBe("अपना जवाब सबमिट करें");
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
    expect(component.find("Button").text()).toBe("अपना उत्तर जाँच लें");
  });
  it("should render check answer text in hindi", () => {
    component.find("Button").simulate("click");
  });

});
