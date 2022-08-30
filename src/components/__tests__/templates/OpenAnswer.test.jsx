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
import OpenAnswer from "../../Templates/OpenAnswer/OpenAnswer.react";
import Button from "../../Buttons/Button/Button.react";

describe("OpenAnswer", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: OpenAnswer,
    required: {
      data: {
        title: "This is Title",
        subtitle: "This is Subtitle",
        question: "This is question",
      },
      onClick: () => {},
    },
    translations: {
      tgt: "openAnswer",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        openAnswer: {
          button: "उत्तर सबमिट करें",
          label: "इनपुट नाम",
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
    hi: {
      openAnswer: {
        button: "उत्तर सबमिट करें",
        label: "इनपुट नाम",
      },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OpenAnswer
        data={{
          title: "This is Title",
          subtitle: "This is Subtitle",
          question: "This is question",
        }}
        slideId={0}
        asVariant="primary"
        isHidden={false}
        isDisabled={false}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly with empty content", () => {
    component.setProps({
      data: {},
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed withColor props", () => {
    let colors = {
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      questionBackgroundColor: "#a0979700",
      questionTextColor: "#000000",
      inputFieldTextColor: "",
      inputFieldAccentColor: "",
      inputFieldBackgroundColor: "",
      buttonTextColor: "",
      buttonBackgroundColor: "",
      buttonHoverBackgroundColor: "",
      buttonHoverTextColor: "",
      backgroundColor: "#fff",
    };
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed withTranslation", () => {
    component.setProps({
      menuType: "menu",
      withTranslation: {
        lang: "hi",
        tgt: "openAnswer",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed image prop as null", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed backgroundImage ", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
      backgroundImage: {
        id: "background-image",
        extention: "",
      },
    };
    let imageLibrary = [
      {
        id: "background-image",
        image: "test.png",
      },
    ];
    component.setProps({ data: data, imageLibrary: imageLibrary });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed backgroundImage null and color passed ", () => {
    let data = {
      backgroundImage: null,
    };
    let color = {
      backgroundColor: "#fff",
    };
    component.setProps({ data: data, withColor: color });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed backgroundImage as null and backgroundColor is passed", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
    };
    let colors = {
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      questionBackgroundColor: "#a0979700",
      questionTextColor: "#000000",
      inputFieldTextColor: "",
      inputFieldAccentColor: "",
      inputFieldBackgroundColor: "",
      buttonTextColor: "",
      buttonBackgroundColor: "",
      buttonHoverBackgroundColor: "",
      buttonHoverTextColor: "",
      backgroundColor: "#fff",
    };
    component.setProps({ data: data, withColor: colors });
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
        onClick={() => {}}
      />
    );
    const tree = component.toJSON();
    act(() => {
      tree.props.onMouseEnter();
    });
  });
  it("Test click event on handleSubmit function of Button", () => {
    const handleSubmit = jest.fn();
    const button = shallow(<OpenAnswer onClick={handleSubmit} />);
    button.find("Button").simulate("click");
    expect(handleSubmit.mock.calls.length).toEqual(1);
  });
  it("Test click event on InputField", () => {
    component.find("InputField").simulate("submit");
  });
});
