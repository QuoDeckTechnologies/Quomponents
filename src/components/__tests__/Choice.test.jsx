//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Choice from "../Buttons/Choice/Choice.react";

describe("Choice", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component, content, choice1, choice2;
  content = {
    Choice1: "Primary Button",
    Choice2: "Secondary Button"
  }
  const dictionary = JSON.stringify({
    hi: {
      Choice: {
        Choice1: "प्राथमिक बटन",
        Choice2: "माध्यमिक बटन"
      }
    },
  });
  let colors = {
    backgroundColor: "red",
    accentColor: "blue",
    color: "green",
  }
  choice1 = jest.fn();
  choice2 = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Choice
        withColor={colors}
        content={content}
        asEmphasis="contained"
        asSize="normal"
        asFloated="inline"
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        isFluid={false}
        isOr={true}
        onClick={() => console.log("Choice Testing")}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should call choice1 function", () => {
    component.setProps({ onClick: choice1 })
    let choicebtn = component.find("div").at(2)
    choicebtn.simulate('click')
    expect(choice1).toBeCalledTimes(1);
  });

  it("should call choice2 function", () => {
    component.setProps({ onClick: choice2 })
    let choicebtn = component.find("div").at(4)
    choicebtn.simulate('click')
    expect(choice2).toBeCalledTimes(1);
  });

  it("should render correctly with withTranslation prop", () => {
    expect(component.find("div").at(2).text()).toBe("Primary Button");
    expect(component.find("div").at(4).text()).toBe("Secondary Button");
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "Choice",
        dictionary: dictionary,
      },
    });
    expect(component.find("div").at(2).text()).toBe("प्राथमिक बटन");
    expect(component.find("div").at(4).text()).toBe("माध्यमिक बटन");
  });

  it("should render correctly when passed text in asEmphasis props", () => {

    let style = {
      background: 'transparent',
      boxShadow: 'none',
      border: 'none'
    }
    component.setProps({
      withColor: style,
      asEmphasis: "text"
    });
    component.update();
    expect(component.find("div").at(2).props().style).toStrictEqual(style);
    expect(component.find("div").at(4).props().style).toStrictEqual(style);
  });

  it("should render correctly when passed outlined in asEmphasis props", () => {
    let style = {
      background: 'transparent',
      boxShadow: 'none',
      backgroundColor: 'red'
    }
    component.setProps({
      withColor: style,
      asEmphasis: "outlined"
    });
    component.update();

    expect(component.find("div").at(2).props().style.borderColor).toStrictEqual("red");
    expect(component.find("div").at(4).props().style.borderColor).toStrictEqual("red");
  });

  it("should enable/ disable the OR div when passed props", () => {
    expect(component.find("div").at(3).exists()).toBe(true)
    component.setProps({
      isOr: false
    })
    expect(component.find("div").at(3).exists()).toBe(true)
  })
});
