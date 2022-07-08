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
import CaptionedBulletList from "../../Templates/CaptionedBulletList/CaptionedBulletList.react";

describe("CaptionedBulletList", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: CaptionedBulletList,
    required: {
      data: {
        title: "This is Title",
        subtitle: "This is Subtitle",
        image: {
          id: "header-image",
          extention: "",
        },
        caption: "caption",
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
        bullets: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Quisque sed turpis vel lectus suscipit auctor",
          "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
        ],
      },
      onClick: () => console.log("Button Testing"),
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <CaptionedBulletList
        data={{
          title: "This is Title",
          subtitle: "This is Subtitle",
          image: {
            id: "header-image",
            extention: "",
          },
          caption: "caption",
          backgroundImage: {
            id: "background-image",
            extention: "",
          },
          bullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Quisque sed turpis vel lectus suscipit auctor",
            "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
          ],
        }}
        imageLibrary={[
          {
            id: "background-image",
            image: "test-1.png",
          },
          {
            id: "header-image",
            image: "test-2.png",
          },
        ]}
        slideId={0}
        asVariant="primary"
        withColor={{
          slideHeaderTextColor: "",
          slideHeaderAccentColor: "",
          slideHeaderBackgroundColor: "",
          textBlockBackgroundColor: "",
          textBlockTextColor: "",
          bulletBlockTextColor: "",
          bulletBlockBackgroundColor: "",
          backgroundColor: "",
        }}
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
  it("should render correctly when passed withColor props", () => {
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
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed data as null", () => {
    component.setProps({ data: {} });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed image prop as null", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
      caption: "caption",
      bullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Quisque sed turpis vel lectus suscipit auctor",
        "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
      ],
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed backgroundImage prop as null and backgroundColor is passed", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
      caption: "caption",
      bullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Quisque sed turpis vel lectus suscipit auctor",
        "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
      ],
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
});
