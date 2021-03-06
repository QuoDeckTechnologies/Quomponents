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
import RankingOptions from "../../Templates/RankingOptions/RankingOptions.react";
import Button from "../../Buttons/Button/Button.react";
import OrderingList from "../../OrderingList/OrderingList/OrderingList.react";
import SlideHeader from "../../SlideHeader/SlideHeader.react";

describe("RankingOptions", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: RankingOptions,
    required: {
      data: {
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
        question: "Question",
        purpose: "quiz",
        bullets: ["Item 1", "Item 2", "Item 3"],
      },
      imageLibrary: [
        {
          id: "background-image",
          image: "test-image1.png",
        },
        {
          id: "header-image",
          image: "test-image2.png",
        },
      ],
      slideId: 0,
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
  hasValid("animations", args);
  hasValid("variants", args);

  hasValid("translations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component, bullets;
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
  bullets = ["Item 1", "Item 2", "Item 3"];

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <RankingOptions
        data={{
          backgroundImage: {
            id: "background-image",
            extention: "",
          },
          question: "Question",
          purpose: "quiz",
          bullets: bullets,
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
        isHidden={false}
        isDisabled={false}
      />
    );
  });

  it("should render correctly when passed withColor props", () => {
    let colors = {
      questionColor: "#000000",
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      buttonTextColor: "#000000",
      buttonBackgroundColor: "#ffffff",
      buttonHoverBackgroundColor: "#AD292980",
      buttonHoverTextColor: "#000000",
      backgroundColor: "#fff",
    };
    component.setProps({ withColor: colors });
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
        content="submit"
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
      slideHeaderTextColor: "#FFFFFF",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#ad292980",
      textBlockBackgroundColor: "#2d92a4",
      textBlockTextColor: "#fff",
      bulletBlockTextColor: "#ffffff",
      bulletBlockBackgroundColor: "#ad292980",
      backgroundColor: "#fff",
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

  it("should render image instead of title and sutitle", () => {
    component.setProps({
      data: {
        title: "",
        subtitle: "",
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
    expect(component.find(".qui-ranking-options-image").props().src).toBe(
      "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
    );
  });

  it("should render title and subtitle instead of image", () => {
    component.setProps({
      data: {
        title: "This is Title",
        subtitle: "This is Subtitle",
      },
    });
    expect(component.find(SlideHeader).exists()).toBe(true);
  });

  it("should pass the arranged array and return the arranged items with the function, when we click on submit button", () => {
    let trackInteraction = jest.fn();
    component.setProps({ trackInteraction: trackInteraction });
    component
      .find(OrderingList)
      .simulate("click", ["Item 2", "Item 3", "Item 1"]);
    expect(trackInteraction).toBeCalledWith(["Item 2", "Item 3", "Item 1"]);
  });

  it("should render submit answer text in hindi", () => {
    component.setProps({
      data: { purpose: "quiz" },
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
      data: { purpose: "quiz" },
      withTranslation: {
        lang: "hi",
        tgt: "templateActions",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });
});
