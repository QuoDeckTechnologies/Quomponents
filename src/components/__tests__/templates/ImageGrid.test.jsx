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
import ImageGrid from "../../Templates/ImageGrid/ImageGrid.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";

describe("ImageGrid", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: ImageGrid,
    required: {
      data: {
        title: "This is Title",
        subtitle: "This is Subtitle",
        backgroundImage: {
          extention: "",
          id: "background-image",
        },
        grid: [
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
      onClick: () => { },
    },
  };

  hasValid("defaults", args);
  hasValid("animations", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ImageGrid
        data={{
          title: "This is Title",
          subtitle: "This is Subtitle",
          backgroundImage: {
            extention: "",
            id: "background-image",
          },
          grid: [
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
        onClick={(e) => { }}
      />
    );
  });
  it("should render correctly with empty content", () => {
    component.setProps({
      data: {},
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with presenter is passed", () => {
    component.setProps({
      data: {
        presenter: {
          id: "presenter",
          extention: "",
        },
      },
      imageLibrary: [
        {
          id: "presenter",
          image: "test.png",
        },
      ],
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
  it("should render correctly with presenter is passed and click on ImageGrid", () => {
    component.setProps({
      data: {
        presenter: {
          id: "presenter-image",
          extention: "",
        },
        backgroundImage: {
          id: "background-image",
          extention: "",
        },

        grid: [
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
          id: "background-image",
          image: "test1.png",
        },
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
        {
          id: "presenter-image",
          image: "test2.png",
        },
      ],
    });
    component.find(ClickableImage).at(1).simulate("click");
  });
  it("should render correctly with presenter is null and click on ImageGrid", () => {
    component.setProps({
      data: {
        grid: [
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
  it("should render when passed presenter prop", () => {
    component.setProps({
      data: {
        presenter: {
          id: "presenter-image",
          extention: "",
        },
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
      },
      imageLibrary: [
        {
          id: "presenter-image",
          image: "test-1.png",
        },
        {
          id: "background-image",
          image: "test-2.png",
        },
      ],
    });
  });
});
