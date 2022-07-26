//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./../common";
//--------------------------------------
// Import Components
// -------------------------------------
import MultipleSelect from "../../Templates/MultipleSelect/MultipleSelect.react";
import SlideHeader from "../../SlideHeader/SlideHeader.react";

describe("MultipleSelect", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: MultipleSelect,
    required: {
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        backgroundImage: { id: "", extention: "" },
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        multiselect: [
          {
            name: "Item 1",
            isSelected: false,
          },
          {
            name: "Item 2",
            isSelected: false,
          },
          {
            name: "Item 3",
            isSelected: false,
          },
          {
            name: "Item 4",
            isSelected: false,
          },
        ],
      },
      onClick: () => {},
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

  hasValid("animations", args);
  hasValid("translations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component, data;
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
  data = {
    title: "Neque porro quisquam est qui dolorem",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    backgroundImage: { id: "", extention: "" },
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    multiselect: [
      {
        name: "Item 1",
        isSelected: false,
      },
      {
        name: "Item 2",
        isSelected: false,
      },
      {
        name: "Item 3",
        isSelected: false,
      },
      {
        name: "Item 4",
        isSelected: false,
      },
    ],
  };

  let colors = {
    questionColor: "#000000",
    answerColor: "#000000",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    backgroundColor: "#fff",
  };

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <MultipleSelect
        data={data}
        slideId={1}
        asEmphasis="contained"
        withColor={colors}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => console.log("MultipleSelect Testing")}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  
  it("should render correctly when passed asEmphasis prop as text", () => {
    let colors = {
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      buttonBackgroundColor: "#AD2929",
      buttonTextColor: "#ffffff",
      buttonHoverBackgroundColor: "#AD292980",
      buttonHoverTextColor: "#AD2929",
    };
    component.setProps({ asEmphasis: "text" });
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asEmphasis prop as contained", () => {
    let colors = {
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      buttonBackgroundColor: "#AD2929",
      buttonTextColor: "#ffffff",
      buttonHoverBackgroundColor: "#AD292980",
      buttonHoverTextColor: "#AD2929",
    };
    component.setProps({ asEmphasis: "contained" });
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asEmphasis prop as outlined", () => {
    let colors = {
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      buttonBackgroundColor: "#AD2929",
      buttonTextColor: "#ffffff",
      buttonHoverBackgroundColor: "#AD292980",
      buttonHoverTextColor: "#AD2929",
    };
    component.setProps({ asEmphasis: "outlined" });
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });

  it("should render title and subtitle when we doesn't pass image", () => {
    component.setProps({
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
      },
    });
    expect(component.find(SlideHeader).props().content.title).toBe(
      "Neque porro quisquam est qui dolorem"
    );
    expect(component.find(SlideHeader).props().content.subTitle).toBe(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem"
    );
  });

  it("should render image instead of title and sutitle", () => {
    component.setProps({
      data: {
        image: { id: "header-image", extension: "" },
      },
      imageLibrary: [
        {
          id: "header-image",
          image:
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        },
      ],
    });
    expect(component.find(".qui-slide-multiple-select-image").props().src).toBe(
      "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
    );
  });

  it("should render default backgroundcolor if we doesn't pass background color", () => {
    component.setProps({
      data: {
        backgroundImage: { id: "", extention: "" },
        MultipleSelect: [
          {
            correct: "checked",
            text: "Item1",
          },
          {
            correct: "",
            text: "Item2",
          },
        ],
      },
      withColor: {
        backgroundColor: "",
      },
    });
    expect(
      component.find(".qui-slide-multiple-select-card").props().style
        .backgroundColor
    ).toBe("#ffffff");
  });

  it("should render backgroundImage if we pass background image id", () => {
    component.setProps({
      data: {
        backgroundImage: { id: "background-image", extention: "" },
      },
      withColor: {
        backgroundColor: "",
      },
    });
  });

  it("should render backgroundcolor if we pass background color", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#000",
      },
    });
    expect(
      component.find(".qui-slide-multiple-select-card").props().style
        .backgroundColor
    ).toBe("#000");
  });

  it("should return the index of selected option", () => {
    component.setProps({
      multiselect: [
        {
          name: "Item 1",
          isSelected: false,
        },
        {
          name: "Item 2",
          isSelected: false,
        },
        {
          name: "Item 3",
          isSelected: false,
        },
        {
          name: "Item 4",
          isSelected: false,
        },
      ],
    });
    let onClick = jest.fn();
    component.setProps({ onClick: onClick });
    component
      .find(".qui-slide-multiple-select-container")
      .children()
      .simulate("click", 3);
    expect(onClick).toBeCalledWith(3);
    component
      .find(".qui-slide-multiple-select-container")
      .children()
      .simulate("click", 1);
    expect(onClick).toBeCalledWith(1);
  });

  it("should render submit answer text in the submit button", () => {
    let data = {
      purpose: "",
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });

  it("should render check answer text in the submit button", () => {
    let data = {
      purpose: "quiz",
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
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
    expect(component.exists()).toBe(true);
  });
});
