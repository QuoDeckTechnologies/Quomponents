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
import ImageGallery from "../../Templates/ImageGallery/ImageGallery.react";

describe("ImageGallery", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: ImageGallery,
    required: {
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        image: {
          id: "header-image",
          extention: "",
        },
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
        cards: [
          {
            image: { id: "text-image-1", extention: "" },
            text: "one porro quisquam est qui dolorem",
          },
          {
            image: { id: "text-image-1", extention: "" },
            text: "one porro quisquam est qui dolorem",
          },
          {
            image: { id: "text-image-1", extention: "" },
            text: "one porro quisquam est qui dolorem",
          },
        ],
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
  let onClick = jest.fn();
  let prevSlide = jest.fn();
  let nextSlide = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ImageGallery
        data={{
          title: "Neque porro quisquam est qui dolorem",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
          image: {
            id: "header-image",
            extention: "",
          },
          backgroundImage: {
            id: "background-image",
            extention: "",
          },
          cards: [
            {
              image: { id: "text-image-1", extention: "" },
              text: "one porro quisquam est qui dolorem",
            },
            {
              image: { id: "text-image-1", extention: "" },
              text: "one porro quisquam est qui dolorem",
            },
            {
              image: { id: "text-image-1", extention: "" },
              text: "one porro quisquam est qui dolorem",
            },
          ],
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
            id: "text-image-1",
            image:
              "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
          },
        ]}
        slideId={0}
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onClick={onClick}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    );
  });

  it("should render correctly when title & subtitle is empty in data props passed", () => {
    let data = {
      title: "",
      subtitle: "",
      cards: [],
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });

  it("should render slideHeader component instead of  header image", () => {
    let data = {
      title: "This is Title",
      subtitle: "This is Subtitle",
      backgroundImage: {
        id: "background-image",
        extention: "",
      },
      cards: [
        {
          image: { id: "text-image-1", extention: "" },
          text: "one porro quisquam est qui dolorem",
        },
      ],
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on prev vector icon", () => {
    component.find(".qui-image-gallery-prev").simulate("click");
    component.find(".qui-image-gallery-next").simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on next vector icon", () => {
    component.find(".qui-image-gallery-next").simulate("click");
    component.find(".qui-image-gallery-prev").simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#f5efef",
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      textBlockTextColor: "#454545",
      textBlockBackgroundColor: "#FFFF",
    };
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });
});
