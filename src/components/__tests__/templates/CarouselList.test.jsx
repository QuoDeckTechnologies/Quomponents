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
import CarouselList from "../../Templates/CarouselList/CarouselList.react";
import SlideHeader from "../../SlideHeader/SlideHeader.react";

describe("CarouselList", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: CarouselList,
    required: {
      data: {
        title: "This is Title",
        subtitle: "This is Subtitle",
        image: {
          id: "header-image",
          extention: "",
        },
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
        carouselContent: [],
      },
      onClick: () => {},
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
      <CarouselList
        data={{
          title: "This is Title",
          subtitle: "This is Subtitle",
          image: {
            id: "header-image",
            extention: "",
          },
          backgroundImage: {
            id: "background-image",
            extention: "",
          },
          carouselContent: [],
        }}
        imageLibrary={[
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
            id: "presenter-image",
            image:
              "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
          },
        ]}
        slideId={0}
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
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with empty content", () => {
    component.setProps({
      data: {},
    });
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
  it("should render when passed presenter prop but backgound image is not passed", () => {
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
          image: "test-1.png",
        },
      ],
    });
  });
  it("should render when presenter prop not passed", () => {
    component.setProps({
      data: {
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
      },
      imageLibrary: [
        {
          id: "background-image",
          image: "test-2.png",
        },
      ],
    });
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
  it("should render slideHeader component instead of  header image", () => {
    expect(component.find(SlideHeader).exists()).toBe(false);
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
      headerImage: "",
    };
    component.setProps({ data: data });
    expect(component.find(SlideHeader).exists()).toBe(true);
  });
  it("should render correctly when passed withColor props", () => {
    let colors = {
      slideHeaderTextColor: "",
      slideHeaderAccentColor: "",
      slideHeaderBackgroundColor: "",
      textBlockTextColor: "",
      textBlockBackgroundColor: "",
      backgroundColor: "",
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
  it("should render correctly when passed data as null", () => {
    component.setProps({ data: {} });
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
  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true });
    expect(component.exists()).toBe(true);
  });
});
