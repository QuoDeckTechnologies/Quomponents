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
import PictureSingleSelect from "../../Templates/PictureSingleSelect/PictureSingleSelect.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";

describe("PictureSingleSelect", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------

  const args = {
    target: PictureSingleSelect,
    required: {
      data: {
        title: "This is Title",
        subtitle: "This is Subtitle",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit? ",
        backgroundImage: {
          extention: "",
          id: "background-image",
        },
        imageOpts: [
          {
            text: "<< List item 1. Replace with your own text >>",
            image: {
              id: "HyLQNLtdp",
              extension: ".jpeg",
            },
          },
        ],
        imageLibrary: [
          {
            id: "header-image",
            image:
              "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
          },
          {
            id: "background-image",
            image:
              "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
          },
          {
            id: "image-1",
            image:
              "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
          },
        ],
        caption: "caption",
      },
      slideId: 0,
      onClick: () => {},
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("sizes", args);
  hasValid("positions", args);
  hasValid("padding", args);
  hasValid("animations", args);
  hasValid("toggles", args);

  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <PictureSingleSelect
        data={{
          title: "This is Title",
          subtitle: "This is Subtitle",
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit? ",
          backgroundImage: {
            extention: "",
            id: "background-image",
          },
          imageOpts: [
            {
              text: "<< List item 1. Replace with your own text >>",
              image: {
                id: "HyLQNLtdp",
                extension: ".jpeg",
              },
            },
          ],
          imageLibrary: [
            {
              id: "header-image",
              image:
                "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            },
            {
              id: "background-image",
              image:
                "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            },
            {
              id: "image-1",
              image:
                "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
            },
          ],
          caption: "caption",
        }}
        slideId={0}
        asVariant="primary"
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onClick={(e) => {
          console.log(e);
        }}
      />
    );
  });
  it("should render correctly with empty content", () => {
    component.setProps({
      data: {},
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with image prop is passed", () => {
    component.setProps({
      data: {
        image: {
          extention: "",
          id: "header-image",
        },
      },
      imageLibrary: [
        {
          id: "header-image",
          image: "test.png",
        },
      ],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if click on PictureSingleSelect", () => {
    component.setProps({
      data: {
        imageOpts: [
          {
            text: "<< List item 1. Replace with your own text >>",
            image: {
              id: "HyLQNLtdp",
              extension: ".jpeg",
            },
          },
          {
            text: "<< List item 2. Replace with your own text >>",
            image: {
              id: "SKjOfKwWN",
              extension: ".jpeg",
            },
          },
          {
            text: "<< List item 3. Replace with your own text >>",
            image: {
              id: "h4EX9FXyK",
              extension: ".jpeg",
            },
          },
          {
            text: "<< List item 4. Replace with your own text >>",
            image: {
              id: "qsZ-6w6lh",
              extension: ".jpeg",
            },
          },
        ],
      },
      imageLibrary: [
        {
          image:
            "https://i.pinimg.com/564x/02/58/79/025879fc48f8d5a2a30e37ad1a847c11.jpg",
          id: "HyLQNLtdp",
        },
        {
          image:
            "https://i.pinimg.com/564x/64/57/dc/6457dc8f063f284fe17e519dc28b5437.jpg",
          id: "SKjOfKwWN",
        },
        {
          image:
            "https://i.pinimg.com/564x/9a/db/19/9adb19d50115e570142a7937a00550ae.jpg",
          id: "h4EX9FXyK",
        },
        {
          image:
            "https://i.pinimg.com/564x/09/03/8c/09038c92e5e2422e369816d50b16cd3f.jpg",
          id: "qsZ-6w6lh",
        },
      ],
    });
    component.find(ClickableImage).at(0).simulate("click");
  });
  it("should render correctly when passed withColor props", () => {
    let colors = {
      slideHeaderTextColor: "#FFFFFF",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#ad292980",
      textBlockBackgroundColor: "#2d92a4",
      textBlockTextColor: "#fff",
    };
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed data as null", () => {
    component.setProps({ data: {} });
    expect(component.exists()).toBe(true);
  });
});
