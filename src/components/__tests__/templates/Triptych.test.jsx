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
import Triptych from "../../Templates/Triptych/Triptych.react";
import ClickableImage from "../../ClickableImage/ClickableImage.react";
import SlideHeader from "../../SlideHeader/SlideHeader.react";

describe("Triptych", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Triptych,
    required: {
      data: {
        title: "This is Title",
        subtitle: "This is Subtitle",
        image: {
          extention: "",
          id: "header-image",
        },
        backgroundImage: {
          extention: "",
          id: "background-image",
        },
        triptych: [
          {
            image: {
              extention: "",
              id: "image-1",
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
      layout: "side by side split",
      slideId: 0,
      onClick: () => { },
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("colors", args);
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
      <Triptych
        data={{
          title: "This is Title",
          subtitle: "This is Subtitle",
          image: {
            extention: "",
            id: "header-image",
          },
          backgroundImage: {
            extention: "",
            id: "background-image",
          },
          triptych: [
            {
              image: {
                extention: "",
                id: "image-1",
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
        layout="side by side split"
        slideId={0}
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => {
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
  it("Test click event on first ClickableImage when passed presenter prop", () => {
    component.setProps({
      data: {
        backgroundImage: {
          extention: "",
          id: "background-image",
        },
      },
      imageLibrary: [{ id: "background-image", image: "test.png" }],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when presenter id is given in imageLibrary array", () => {
    component.setProps({
      data: {
        title: "test title",
        presenter: {
          extention: "",
          id: "test",
        },
        backgroundImage: {
          extention: "",
          id: "background-image",
        },
      },
      imageLibrary: [
        { id: "test", image: "test.png" },
        { id: "background-image", image: "test2.png" },
      ],
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when triptych Images id is given in imageLibrary array", () => {
    component.setProps({
      data: {
        title: "test title",
        triptych: [
          {
            image: {
              extention: "",
              id: "image-1",
            },
            image: {
              extention: "",
              id: "image-2",
            },
          },
        ],
      },
      imageLibrary: [
        { id: "image-1", image: "test.png" },
        { id: "image-2", image: "test2.png" },
      ],
    });
    component.find(ClickableImage).simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when presenter is passed and triptych Images id is given in imageLibrary array", () => {
    component.setProps({
      data: {
        presenter: {
          extention: "",
          id: "presenter-image",
        },
        triptych: [
          {
            image: {
              extention: "",
              id: "image-1",
            },
            image: {
              extention: "",
              id: "image-2",
            },
          },
        ],
      },
      imageLibrary: [
        { id: "presenter-image", image: "test0.png" },
        { id: "image-1", image: "test.png" },
        { id: "image-2", image: "test2.png" },
      ],
    });
    component.find(ClickableImage).simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed layout props with presenter", () => {
    component.setProps({
      data: {
        presenter: {
          extention: "",
          id: "presenter-image",
        },
        triptych: [
          {
            image: {
              extention: "",
              id: "image-1",
            },
            image: {
              extention: "",
              id: "image-2",
            },
          },
        ],
      },
      imageLibrary: [
        { id: "presenter-image", image: "test0.png" },
        { id: "image-1", image: "test.png" },
        { id: "image-2", image: "test2.png" },
      ],
      layout: "side by side split",
    });
    component.find(".qui-triptych-clickable-images-split");
  });
  it("should render correctly when passed layout props with presenter", () => {
    component.setProps({
      data: {
        presenter: {
          extention: "",
          id: "presenter-image",
        },
        triptych: [
          {
            image: {
              extention: "",
              id: "image-1",
            },
            image: {
              extention: "",
              id: "image-2",
            },
          },
        ],
      },
      imageLibrary: [
        { id: "presenter-image", image: "test0.png" },
        { id: "image-1", image: "test.png" },
        { id: "image-2", image: "test2.png" },
      ],
      layout: "side by side full",
    });
    component.find(".qui-triptych-clickable-images-full");
  });
  it("should render correctly when passed layout props without presenter", () => {
    component.setProps({
      data: {
        triptych: [
          {
            image: {
              extention: "",
              id: "image-1",
            },
            image: {
              extention: "",
              id: "image-2",
            },
          },
        ],
      },
      imageLibrary: [
        { id: "image-1", image: "test.png" },
        { id: "image-2", image: "test2.png" },
      ],
      layout: "side by side full",
    });
    component.find(".qui-triptych-clickable-images-full");
  });
  it("should render correctly when passed layout props without presenter", () => {
    component.setProps({
      data: {
        triptych: [
          {
            image: {
              extention: "",
              id: "image-1",
            },
            image: {
              extention: "",
              id: "image-2",
            },
          },
        ],
      },
      imageLibrary: [
        { id: "image-1", image: "test.png" },
        { id: "image-2", image: "test2.png" },
      ],
      layout: "side by side split",
    });
    component.find(".qui-triptych-clickable-images-split");
  });
  it("should render slideHeader component instead of  header image", () => {
    expect(component.find(SlideHeader).exists()).toBe(false);
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
    };
    component.setProps({ data: data });
    expect(component.find(SlideHeader).exists()).toBe(true);
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
