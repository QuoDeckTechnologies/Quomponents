//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount, shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import MultiSelect from "../MultiSelect/MultiSelect.react";

describe("MultiSelect", () => {

  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: MultiSelect,
    required: {
      content: [
        {
          name: "Primary",
          isSelected: true,
        },
      ],
      onClick: () => console.log("Button Testing"),
    },
    translations: {
      tgt: "templateActions",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
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
      })
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("positions", args);
  hasValid("padding", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("hidden", args);
  hasValid("disabled", args);

  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component, content;
  content = [
    {
      name: "Primary",
      isSelected: true,
    },
  ];
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
  })
  beforeEach(() => {
    jest.resetAllMocks();
    let handleSubmit = jest.fn();
    component = mount(
      <MultiSelect
        content={content}
        asEmphasis="contained"
        withColor={null}
        withAnimation={null}
        onClick={handleSubmit}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly onClick for Check true", () => {
    component.find(".qui-btn").at(1).simulate("click");
  });
  it("Test click event on handleSubmit funtion of Button", () => {
    const handleSubmit = jest.fn();
    const button = shallow(
      <MultiSelect
        onClick={handleSubmit}
        content={[{ name: "primary", isSelected: true }]}
      />
    );
    button.find("Button").at(1).simulate("click");
    expect(handleSubmit.mock.calls.length).toEqual(1);
  });
  it("should render correctly when passed asEmphasis prop as text", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    };
    component.setProps({ asEmphasis: "text" });
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed asEmphasis prop as contained", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    };
    component.setProps({ asEmphasis: "contained" });
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed asEmphasis prop as outlined", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    };
    component.setProps({ asEmphasis: "outlined" });
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    };
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });
  it("should render with onclick toggleChecked", () => {
    let btn = component.find(".qui-multi-select-checkbox").at(0);
    btn.simulate("click");
  });
  it("should render submit answer text in the submit button", () => {
    component.setProps({ purpose: "" });
    expect(component.find("button").at(1).text()).toBe("Submit Answer");
  });
  it("should render check answer text in the submit button", () => {
    component.setProps({ purpose: "quiz" });
    expect(component.find("button").at(1).text()).toBe("Check Answer");
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
    expect(component.find("button").at(1).text()).toBe("अपना जवाब सबमिट करें");
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
    expect(component.find("button").at(1).text()).toBe("अपना उत्तर जाँच लें");
  });
});
