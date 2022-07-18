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
import TitlewithVideo from "../../Templates/TitlewithVideo/TitlewithVideo.react";

describe("TitlewithVideo", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: TitlewithVideo,
    required: {
      content: "Testing Button",
      onClick: () => console.log("Button Testing"),
    },
    translations: {
      tgt: "button",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          loading: "बस एक मिनट...",
          button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("colors", args);

  hasValid("animations", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <TitlewithVideo
        data={{
          title: "test title",
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
        title: "test title",
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
});
