//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemEight from "../OptionItem/OptionItemEight/OptionItemEight.react";

describe("Option Item Eight", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  const dictionary = JSON.stringify({
    hi: {
      optionItemEight: {
        placeholder: "यह विकल्प ए है",
        buttonText: "रेखांकित बटन",
      },
    },
  });

  let onClick = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemEight
        content={{
          targetName: "name",
          value: "optionItem",
          placeholder: "placeholder",
          maxLength: 300,
          buttonText: "Button Text",
        }}
        withColor={{
          backgroundColor: "",
          accentColor: "",
          textColor: "",
        }}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        withTranslation={{
          lang: "en",
          tgt: "optionitemeight",
          dictionary: dictionary,
        }}
        isDisabled={false}
        isHidden={false}
        onInput={() => {}}
        onClick={onClick}
        onSubmit={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withColor prop is passed", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#fff",
        accentColor: "#FF0000",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withAnimation prop is passed", () => {
    component.setProps({
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withTranslation prop is passed", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "optionItemEight",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isDisabled prop is true", () => {
    component.setProps({
      isDisabled: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isDisabled prop is false", () => {
    component.setProps({
      isDisabled: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isHidden prop is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isHidden prop is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when wriiten in input field", () => {
    component.find("InputField").simulate("click");
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });

  it("should render correctly when targetName is not specified", () => {
    component.setProps({
      content: {
        value: "optionItem",
        placeholder: "placeholder",
        maxLength: 300,
      },
    });
    expect(component.exists()).toBe(true);
  });
});
