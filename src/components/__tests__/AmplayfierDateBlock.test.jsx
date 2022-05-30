//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import AmplayfierDateBlock from "../AmplayfierDateBlock/AmplayfierDateBlock.react";

describe("AmplayfierDateBlock", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  const dictionary = JSON.stringify({
    hi: {
      amplayfierdateblock: {
        months: {
          Jan: "जनवरी",
          Feb: "फ़रवरी",
          Mar: "मार्च",
          Apr: "अप्रैल",
          May: "मई",
          Jun: "जून",
          Jul: "जुलाई",
          Aug: "अगस्त",
          Sep: "सितम्बर",
          Oct: "अक्टूबर",
          Nov: "नवम्बर",
          Dec: "दिसम्बर",
        },
      },
    },
  });

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <AmplayfierDateBlock
        content={null}
        asSize="normal"
        asFloated="none"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isFluid={false}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when translation is used", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "amplayfierdateblock",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withAnimation props", () => {
    component.setProps({
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor props", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#ffffff",
        textColor: "#ffffff",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is none", () => {
    component.setProps({
      asFloated: "none",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is left", () => {
    component.setProps({
      asFloated: "left",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is right", () => {
    component.setProps({
      asFloated: "right",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is inline", () => {
    component.setProps({
      asFloated: "inline",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date is provided in content props", () => {
    component.setProps({
      content: "2021-05-10T12:55:18.154Z",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
    component.setProps({
      content: "2022-05-01",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
    component.setProps({
      content: "2022-05-02",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
    component.setProps({
      content: "2022-05-03",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
    component.setProps({
      content: "2022-05-05",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
    component.setProps({
      content: "2022-05-31",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when invalid date is provided in content props", () => {
    component.setProps({
      content: "xyz",
    });
    expect(component.exists()).toBe(true);
  });
});
