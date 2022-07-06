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
import Image from "../../Templates/Image/Image.react";

describe("Image", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Image,
    required: {
      data: {
        title: "Lorem ipsum dolor sit amet",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        image: { id: "header-image", extention: "" },
        backgroundImage: { id: "background-image", extention: "" },
        cards: [
          {
            image: { id: "iconlist-image-1", extention: "" },
            text: "Neque porro quisquam est qui dolorem",
          },
        ],
      },
      onClick: () => {},
    },
  };

  hasValid("defaults", args);
  hasValid("animations", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Image
        data={{
          title: "This is Title",
          subtitle: "This is Subtitle",
          backgroundImage: {
            extention: "",
            id: "background-image",
          },
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
        }}
        slideId={0}
        withColor={null}
        withAnimation={null}
        isHidden={false}
      />
    );
  });

  it("should render correctly when passed withColor props", () => {
    let colors = {
      background: "#ffffff",
      text: "#ffffff",
      slideHeaderTextColor: "#FFFFFF",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#ad292980",
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

  it("should render correctly when passed asVariant prop as primary", () => {
    component.setProps({ asVariant: "primary" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant prop as secondary", () => {
    component.setProps({ asVariant: "secondary" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant prop as warning", () => {
    component.setProps({ asVariant: "warning" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant prop as error", () => {
    component.setProps({ asVariant: "error" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asVariant prop as success", () => {
    component.setProps({ asVariant: "success" });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing when presenter and background image is provided", () => {
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
          image:
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        },
        {
          id: "background-image",
          image:
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        },
      ],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing when presenter image provided", () => {
    component.setProps({
      data: {
        presenter: {
          id: "presenter-image",
          extention: "",
        },
      },
      imageLibrary: [
        {
          id: "presenter-image",
          image:
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        },
      ],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing when image is provided", () => {
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
          image:
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        },
      ],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing when image is null", () => {
    component.setProps({
      data: {
        image: null,
      },
    });
    expect(component.exists()).toBe(true);
  });
});
