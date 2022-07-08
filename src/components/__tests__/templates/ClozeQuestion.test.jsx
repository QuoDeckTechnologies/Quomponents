//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./../common";
//--------------------------------------
// Import Components
// -------------------------------------
import ClozeQuestion from "../../Templates/ClozeQuestion/ClozeQuestion.react";
import Button from "../../Buttons/Button/Button.react";

describe("ClozeQuestion", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Button,
    required: {
      data: {
        title: "This is Title",
        subtitle: "This is Subtitle",
        image: {
          id: "header-image",
          extention: "",
        },
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
        question: "Question",
        answer: "Answer",
        purpose: "quiz",
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
    component = shallow(
      <ClozeQuestion
        data={{
          title: "This is Title",
          subtitle: "This is Subtitle",
          image: {
            id: "header-image",
            extention: "",
          },
          backgroundImage: {
            id: "background-image",
            extention: "",
          },
          question: "Question",
          answer: "Answer",
          purpose: "quiz",
        }}
        imageLibrary={[
          {
            id: "background-image",
            image: "test-image1.png",
          },
          {
            id: "header-image",
            image: "test-image2.png",
          },
        ]}
        slideId={0}
        asVariant="primary"
        withColor={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor props", () => {
    let colors = {
      questionColor: "#000000",
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      inputFieldTextColor: "#000000",
      inputFieldAccentColor: "#AD292980",
      inputFieldBackgroundColor: "",
      buttonTextColor: "#AD292980",
      buttonBackgroundColor: "#000000",
      buttonHoverBackgroundColor: "#AD292980",
      buttonHoverTextColor: "#000000",
      backgroundColor: "#fff",
    };
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });

  it("should render translation of Check Answer with withTranslation prop and when passed purpose as quiz", () => {
    component.setProps({
      data: {
        purpose: "quiz",
      },
      withTranslation: {
        lang: "hi",
        tgt: "templateActions",
        dictionary: dictionary,
      },
    });
    expect(component.find(Button).props().content).toBe("अपना उत्तर जाँच लें");
  });

  it("should render submitAnswer translation with withTranslation prop and when passed nothing in the purpose props", () => {
    component.setProps({
      data: {
        purpose: "",
      },
      withTranslation: {
        lang: "hi",
        tgt: "templateActions",
        dictionary: dictionary,
      },
    });
    expect(component.find(Button).props().content).toBe("अपना जवाब सबमिट करें");
  });

  it("should render correctly if translation object is not returned", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if translation object and data is null", () => {
    component.setProps({
      data: {
        purpose: "",
      },
      withTranslation: {
        lang: "mr",
        tgt: "templateActions",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if translation object is not defined", () => {
    component.setProps({
      data: {
        purpose: "quiz",
      },
      withTranslation: {
        lang: "mr",
        tgt: "templateActions",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed image prop as null", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
      question: "Question",
      purpose: "quiz",
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with withColor prop when hovered on Button", () => {
    const component = renderer.create(
      <Button
        content="content"
        withColor={{
          buttonTextColor: "ff0023",
          buttonBackgroundColor: "ff0ff0",
          buttonHoverBackgroundColor: "ffff00",
          buttonHoverTextColor: "ff00ff",
        }}
        onClick={jest.fn()}
      />
    );
    const tree = component.toJSON();
    act(() => {
      tree.props.onMouseEnter();
    });
  });

  it("should render correctly when passed backgroundImage prop as null and backgroundColor is passed", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
      question: "Question",
      purpose: "quiz",
    };
    let colors = {
      questionColor: "#000000",
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      inputFieldTextColor: "#ffffff",
      inputFieldAccentColor: "#AD292980",
      inputFieldBackgroundColor: "#ffffff",
      buttonTextColor: "#AD292980",
      buttonBackgroundColor: "#AD29298",
      buttonHoverBackgroundColor: "#AD2929",
      buttonHoverTextColor: "#000000",
      backgroundColor: "#ffffff",
    };
    component.setProps({ data: data, withColor: colors });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed backgroundImage prop", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
      backgroundImage: {
        id: "background-image",
        extention: "",
      },
      question: "Question",
      purpose: "quiz",
    };
    let imageLibrary = [
      {
        id: "background-image",
        image: "test-image",
      },
    ];
    component.setProps({ data: data, imageLibrary: imageLibrary });
    expect(component.exists()).toBe(true);
  });

  it("should simulate the submit button", () => {
    const button = shallow(
      <ClozeQuestion
        data={{
          title: "This is Title",
          subtitle: "This is Subtitle",
          backgroundImage: {
            id: "background-image",
            extention: "",
          },
          question: "Question",
          purpose: "quiz",
        }}
        trackInteraction={jest.fn()}
      />
    );
    button.find("Button").simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should simulate the input field", () => {
    component.find("InputField").simulate("submit");
    expect(component.exists()).toBe(true);
  });
});
