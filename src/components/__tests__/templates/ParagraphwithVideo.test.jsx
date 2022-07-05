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
import ParagraphwithVideo from "../../Templates/ParagraphwithVideo/ParagraphwithVideo.react";

describe("ParagraphwithVideo", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------

  const args = {
    target: ParagraphwithVideo,
    required: {
      data: {
        paragraph: "test paragraph",
        video: "test video",
        backgroundImage: {},
      },
    },
  };

  hasValid("animations", args);
  hasValid("toggles", args);

  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ParagraphwithVideo
        data={{
          paragraph: "test paragraph",
          video: "test video",
          backgroundImage: {},
        }}
        imageLibrary={null}
        slideId={0}
        withColor={null}
        withAnimation={null}
        isHidden={false}
      />
    );
  });

  it("should render correctly without throwing error when data is empty", () => {
    component.setProps({
      data: {},
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when background image is provided", () => {
    component.setProps({
      data: {
        paragraph: "test paragraph",
        video: "test-icon",
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
      },
      imageLibrary: [{ id: "background-image", image: "background.png" }],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#ffffff",
      textBlockTextColor: "#ffffff",
      textBlockAccentColor: "#AD2929",
      textBlockBackgroundColor: "#AD292980",
    };
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withAnimation props", () => {
    let animation = {
      animation: "zoom",
      duration: 0.5,
      delay: 0,
    };
    component.setProps({ withAnimation: animation });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true });
    expect(component.exists()).toBe(true);
  });
});
