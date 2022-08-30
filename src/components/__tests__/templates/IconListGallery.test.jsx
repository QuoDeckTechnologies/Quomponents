import React from "react";
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
import IconListGallery from "../../Templates/IconListGallery/IconListGallery.react";

describe("IconListGallery", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: IconListGallery,
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
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  let onClick = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <IconListGallery
        data={{
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
        }}
        imageLibrary={[
          {
            id: "header-image",
            image:
              "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
          },
          {
            id: "iconlist-image-1",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
          },
          {
            id: "background-image",
            image:
              "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
          },
        ]}
        slideId={0}
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onClick={onClick}
      />
    );
  });

  it("should render correctly when title and subtitle is not defined in data prop", () => {
    let data = {
      title: "",
      subtitle: "",
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when image is not defined in data prop", () => {
    let data = {
      title: "Neque porro quisquam est qui dolorem",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    };
    component.setProps({ data: data });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on ClickableImage", () => {
    component.find("ClickableImage").simulate("click");
    expect(component.exists()).toBe(true);
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
    });
    component
      .find(".qui-icon-list-gallery-clickable-images-container")
      .simulate("click");
  });

  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#ffffff",
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#C98787",
      textBlockTextColor: "#454545",
      textBlockBackgroundColor: "#FFFF",
      iconListActiveItemColor: "#AD2929",
    };
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });
});
