import React from "react";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./../common";
//--------------------------------------
// Import Components
// -------------------------------------
import CaptionedVideo from "../../Templates/CaptionedVideo/CaptionedVideo.react";

describe("CaptionedVideo", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: CaptionedVideo,
    required: {
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subTitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: {
          extention: "",
          id: "header-image",
        },
        backgroundImage: {
          extention: "",
          id: "background-image",
        },
        video: "https://www.youtube.com/watch?v=NpEaa2P7qZI",
        caption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        presenter: {},
      },
      onClick: () => console.log("Button Testing"),
    },
  };

  hasValid("defaults", args);
  hasValid("animations", args);
  hasValid("toggles", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <CaptionedVideo
        data={{
          title: "Neque porro quisquam est qui dolorem",
          subTitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
          image: {
            extention: "",
            id: "header-image",
          },
          backgroundImage: {
            extention: "",
            id: "background-image",
          },
          video: "https://www.youtube.com/watch?v=NpEaa2P7qZI",
          caption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
          presenter: {},
        }}
        imageLibrary={null}
        slideId={0}
        withColor={null}
        withAnimation={null}
        isHidden={false}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed data props", () => {
    let data = {
      title: "Neque porro quisquam est qui dolorem",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
      image: {},
      backgroundImage: {},
      video: "https://www.youtube.com/watch?v=NpEaa2P7qZI",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when empty data props passed", () => {
    let data = {};
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });

  it("should render slideHeader component instead of  header image", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when presenter id is given in imageLibrary array", () => {
    component.setProps({
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subTitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: {
          extention: "",
          id: "header-image",
        },
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
        video: "https://www.youtube.com/watch?v=NpEaa2P7qZI",
        caption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.",
        presenter: {
          id: "presenter-image",
          extention: "",
        },
      },
      imageLibrary: [
        { id: "presenter-image", image: "presenter.png" },
        { id: "background-image", image: "backgroundImage.png" },
      ],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when presenter is passed in given imageLibrary array", () => {
    component.setProps({
      data: {
        presenter: {
          extention: "",
          id: "presenter-image",
        },
      },
      imageLibrary: [
        { id: "presenter-image", image: "test0.png" },
        { id: "image-1", image: "test.png" },
        { id: "image-2", image: "test2.png" },
      ],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#E8E8E8",
      slideHeaderTextColor: "#ffffff",
      slideHeaderBackgroundColor: "#ad292980",
      slideHeaderAccentColor: "#AD2929",
      textBockTextColor: "#ffffff",
      textBockBackgroundColor: "#ad292980",
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
