//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Components
// -------------------------------------
import Anagram from "../Templates/Anagram/Anagram.react";
import Button from "../Buttons/Button/Button.react";

describe("Anagram", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Anagram
        data={{
          title: "This is Title",
          subtitle: "This is Subtitle",
          image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
          backgroundImage: "",
          question: "Question",
          answer: "Answer",
          purpose: "quiz",
        }}
        slideId={0}
        asVariant="primary"
        withColor={null}
        isHidden={false}
        isDisabled={false}
        onClick={(e) => {
          console.log(e);
        }}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with empty content", () => {
    component.setProps({
      content: {},
    });
    expect(component.exists()).toBe(true);
  });
  it('Test click event on handleSubmit function of Button', () => {
    const handleSubmit = jest.fn();
    const button = shallow((<Anagram onClick={handleSubmit} />));
    button.find('Button').simulate('click');
    expect(handleSubmit.mock.calls.length).toEqual(1);
  });
  it('Test click event on InputField', () => {
    component.find('InputField').simulate('click')
  });
  it("should render correctly when passed withColor props", () => {
    let colors = {
      captionColor: "#ff0000",
      labelColor: "#000000",
      slideHeaderTextColor: "ff0000",
      slideHeaderAccentColor: "23ff00",
      slideHeaderBackgroundColor: "00ff00",
      inputFieldTextColor: "ff0000",
      inputFieldAccentColor: "23ff00",
      inputFieldBackgroundColor: "00ff00",
      buttonTextColor: "ff0023",
      buttonBackgroundColor: "ff0ff0",
      buttonHoverBackgroundColor: "ffff00",
      buttonHoverTextColor: "ff00ff",
      backgroundColor: "",
    }
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed withAnimation props", () => {
    let animation = {
      animation: "zoom",
      duration: 0.5,
      delay: 0,
    }
    component.setProps({ withAnimation: animation })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed answer props as null", () => {
    component.setProps({ answer: null })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as primary", () => {
    component.setProps({ asVariant: "primary" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as secondary", () => {
    component.setProps({ asVariant: "secondary" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as warning", () => {
    component.setProps({ asVariant: "warning" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as error", () => {
    component.setProps({ asVariant: "error" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as success", () => {
    component.setProps({ asVariant: "success" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed image prop as null", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
      image: "",
      question: "Question",
      answer: "Answer",
      purpose: "quiz",
    }
    component.setProps({ data: data })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly with withColor prop when hovered on Button", () => {
    const component = renderer.create(
      <Button
        withColor={{
          buttonTextColor: "ff0023",
          buttonBackgroundColor: "ff0ff0",
          buttonHoverBackgroundColor: "ffff00",
          buttonHoverTextColor: "ff00ff",
        }}
        onClick={() => console.log("testing")}
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
      image: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      backgroundImage: "",
      question: "Question",
      answer: "Answer",
      purpose: "quiz",
    }
    let colors = {
      slideHeaderTextColor: "#FFFFFF",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#ad292980",
      textBlockBackgroundColor: "#2d92a4",
      textBlockTextColor: "#fff",
      bulletBlockTextColor: "#ffffff",
      bulletBlockBackgroundColor: "#ad292980",
      backgroundColor: "#fff"
    }
    component.setProps({ data: data, withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed backgroundImage prop", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
      image: "",
      backgroundImage: "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      question: "Question",
      answer: "Answer",
      purpose: "quiz",
    }
    let colors = {
      slideHeaderTextColor: "#FFFFFF",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#ad292980",
      textBlockBackgroundColor: "#2d92a4",
      textBlockTextColor: "#fff",
      bulletBlockTextColor: "#ffffff",
      bulletBlockBackgroundColor: "#ad292980",
      backgroundColor: "#fff"
    }
    component.setProps({ data: data, withColor: colors })
    expect(component.exists()).toBe(true);
  })
});
