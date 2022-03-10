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
    primaryBackgroundColor: "red",
    secondaryBackgroundColor: "green",
    accentColor: "blue",
    primaryTextColor: "green",
    secondaryTextColor: "grey",
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
        isChoice={true}
        onClick={() => console.log("Choice Testing")}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should call choice1 function on click of primary button", () => {
    component.setProps({ onClick: choice1 })
    let choicebtn = component.find("div").at(2)
    choicebtn.simulate('click')
    expect(choice1).toBeCalledWith("choice 1");
  });

  it("should call choice2 function on click of secondary button", () => {
    component.setProps({ onClick: choice2 })
    let choicebtn = component.find("div").at(4)
    choicebtn.simulate('click')
    expect(choice2).toBeCalledWith("choice 2");
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

  it("should render correctly when passed withTranslation Props", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "",
        dictionary: dictionary,
      },
    });
    expect(component.find("div").at(4).text().placeholder).toBe(undefined);
  });

  it("should render correctly when passed text in asEmphasis props", () => {
    let style={
      background: "transparent",
      border: "none",
      boxShadow: "none",
      color: "green",
    }
    component.setProps({
      withColor: colors,
      asEmphasis: "text"
    });
    expect(component.find("div").at(2).props().style).toStrictEqual(style);
    expect(component.find("div").at(4).props().style).toStrictEqual(style);
  });

  it("should render correctly when passed outlined in asEmphasis props", () => {
    let style1 = {
      background: "transparent",
      borderColor: "red",
      boxShadow: "none",
      color: "green",
    }
    let style2 = {
      background: "transparent",
      borderColor: "green",
      boxShadow: "none",
      color: "green",
    }
    component.setProps({
      withColor: colors,
      asEmphasis: "outlined"
    });
    expect(component.find("div").at(2).props().style).toStrictEqual(style1);
    expect(component.find("div").at(4).props().style).toStrictEqual(style2);
  });

  it("should enable/ disable the OR div when passed props", () => {
    expect(component.find("div").at(3).exists()).toBe(true)
    component.setProps({
      isChoice: false
    })
    expect(component.find("div").at(3).exists()).toBe(true)
  })
});
