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
import IconListCaptions from "../../Templates/IconListCaptions/IconListCaptions.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";

describe("IconListCaptions", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: IconListCaptions,
    required: {
      data: {
        title: "title",
        subtitle: "subtitle",
        cards: [],
      },
      onClick: () => {},
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
      <IconListCaptions
        data={{
          title: "title",
          subtitle: "subtitle",
          cards: [],
        }}
        slideId={0}
        withAnimation={null}
        withColor={null}
        isHidden={false}
        isDisabled={false}
        onClick={(e) => {
          console.log(e);
        }}
      />
    );
  });
  it("should render with click on 0th Clickable Image", () => {
    component.setProps({
      data: {
        cards: [
          {
            text: "This is text",
            image: {
              id: "image",
              extention: "",
            },
          },
        ],
      },
      withcolor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#ad292980",
        textBlockTextColor: "#fff",
        iconlistTrackColor: "#ff0000",
        backgroundColor: "#fff",
      },
      imageLibrary: [
        {
          id: "image",
          image: "test.png",
        },
      ],
    });
    component.find(ClickableImage).simulate("click", 0);
  });
  it("should render with click on active index class", () => {
    component.setProps({
      data: {
        cards: [
          {
            text: "This is text",
            image: {
              id: "image",
              extention: "",
            },
          },
          {
            text: "This is text",
            image: {
              id: "image",
              extention: "",
            },
          },
        ],
      },
      withcolor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#ad292980",
        textBlockTextColor: "#fff",
        iconlistTrackColor: "#ff0000",
        backgroundColor: "#fff",
      },
      imageLibrary: [
        {
          id: "image",
          image: "test.png",
        },
        {
          id: "image",
          image: "test.png",
        },
      ],
    });
    component.find(ClickableImage).at(0).simulate("click", 0);
  });
  it("should render with click on Clickable Image with borderColor", () => {
    component.setProps({
      data: {
        cards: [
          {
            text: "This is text",
            image: {
              id: "image",
              extention: "",
            },
          },
        ],
      },
      withcolor: {
        slideHeaderTextColor: "#FFFFFF",
        slideHeaderAccentColor: "#AD2929",
        slideHeaderBackgroundColor: "#ad292980",
        textBlockBackgroundColor: "#ad292980",
        textBlockTextColor: "#fff",
        iconlistTrackColor: "#ff0000",
        backgroundColor: "#fff",
      },
      imageLibrary: [
        {
          id: "image",
          image: "test.png",
        },
      ],
    });
    component.find(ClickableImage).simulate("click");
  });
  it("should render with click on Clickable  image id is null", () => {
    component.setProps({
      data: {
        cards: [
          {
            text: "This is text",
            image: {
              extention: "",
            },
          },
        ],
      },
      imageLibrary: [
        {
          image: "",
        },
      ],
    });
    component.find(ClickableImage).simulate("click");
  });
  it("should render correctly when passed withColor props", () => {
    component.setProps({
      data: {
        title: "title",
        subtitle: "subtitle",
        backgroundImage: {
          id: "background",
          extention: "",
        },
      },
      imageLibrary: [
        {
          image: "test.png",
          id: "background",
        },
      ],
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed image props", () => {
    component.setProps({
      data: {
        title: "title",
        subtitle: "subtitle",
        image: {
          id: "image",
          extention: "",
        },
      },
      imageLibrary: [
        {
          image: "test.png",
          id: "image",
        },
      ],
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed backgroundImage prop as null and backgroundColor is passed", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
    };
    let colors = {
      slideHeaderTextColor: "#FFFFFF",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#ad292980",
      textBlockBackgroundColor: "#ad292980",
      textBlockTextColor: "#fff",
      iconlistTrackColor: "#ff0000",
      backgroundColor: "#fff",
    };
    component.setProps({ data: data, withColor: colors });
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
});
