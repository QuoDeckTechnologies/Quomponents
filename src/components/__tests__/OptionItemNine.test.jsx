//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemNine from "../OptionItem/OptionItemNine/OptionItemNine.react";

describe("Option Item Two", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  let onClick = jest.fn();
  let onShortFieldOneInput = jest.fn();
  let onShortFieldTwoInput = jest.fn();
  let onInput = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemNine
        content={{
          shortFieldOne: {
            targetName: "ShortFieldOne",
            value: "0",
          },
          shortFieldTwo: {
            targetName: "ShortFieldTwo",
            value: "0",
          },
          message: {
            targetName: "Target Name",
            value: "",
            placeholder: "Message for Quiz Result",
            maxLength: 300,
          },
        }}
        withColor={null}
        withAnimation={null}
        isDisabled={false}
        isHidden={false}
        onClick={onClick}
        onShortFieldOneInput={onShortFieldOneInput}
        onShortFieldTwoInput={onShortFieldTwoInput}
        onInput={onInput}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withColor prop is passed", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#8c9ea3",
        accentColor: "#597387",
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

  it("should render correctly without throwing error when clicked on inputfield", () => {
    component.find("InputField").at(0).simulate("click");
    component.find("InputField").at(1).simulate("click");
    component.find("InputField").at(2).simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });

  it("should render correctly when shortFieldOne targetName is not specified", () => {
    component.setProps({
      content: {
        shortFieldOne: {
          value: "optionItem",
          placeholder: "placeholder",
          maxLength: 300,
        },
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when shortFieldTwo targetName is not specified", () => {
    component.setProps({
      content: {
        shortFieldTwo: {
          value: "optionItem",
          placeholder: "placeholder",
          maxLength: 300,
        },
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when message targetName is not specified", () => {
    component.setProps({
      content: {
        message: {
          value: "optionItem",
          placeholder: "placeholder",
          maxLength: 300,
        },
      },
    });
    expect(component.exists()).toBe(true);
  });
});
