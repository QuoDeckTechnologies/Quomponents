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
import Popuplist from "../../Templates/Popuplist/Popuplist.react";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import ButtonBank from "../../ButtonBank/ButtonBank.react";

describe("Popuplist", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Popuplist,
    required: {
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        backgroundImage: { id: "", extention: "" },
        popupitems: [
          {
            option: "Item 1",
            image: {
              id: "image-1",
              extension: ".png",
            },
            caption: " Please put in a caption",
          },
          {
            option: "Item 2",
            image: {
              id: "image-2",
              extension: ".png",
            },
            caption: " Please put in a caption",
          },
          {
            option: "Item 3",
            image: {
              id: "image-3",
              extension: ".png",
            },
            caption: " Please put in a caption",
          },
          {
            option: "Item 4",
            image: {
              id: "image-4",
              extension: ".png",
            },
            caption: " Please put in a caption",
          },
        ],
      },
      slideId: 1,
      onClick: () => {},
    },
  };

  hasValid("defaults", args);
  hasValid("animations", args);
  hasValid("variants", args);

  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component, data;
  data = {
    title: "Neque porro quisquam est qui dolorem",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
    backgroundImage: { id: "", extention: "" },
    popupitems: [
      {
        option: "Item 1",
        image: {
          id: "image-1",
          extension: ".png",
        },
        caption: " Please put in a caption",
      },
      {
        option: "Item 2",
        image: {
          id: "image-2",
          extension: ".png",
        },
        caption: " Please put in a caption",
      },
      {
        option: "Item 3",
        image: {
          id: "image-3",
          extension: ".png",
        },
        caption: " Please put in a caption",
      },
      {
        option: "Item 4",
        image: {
          id: "image-4",
          extension: ".png",
        },
        caption: " Please put in a caption",
      },
    ],
  };

  let colors = {
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    backgroundColor: "#fff",
  };

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Popuplist
        data={data}
        slideId={1}
        asEmphasis="contained"
        withColor={colors}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => console.log("Popuplist Testing")}
      />
    );
  });

  it("should render correctly when passed asEmphasis prop as text", () => {
    let colors = {
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      buttonBackgroundColor: "#AD2929",
      buttonTextColor: "#ffffff",
      buttonHoverBackgroundColor: "#AD292980",
      buttonHoverTextColor: "#AD2929",
    };
    component.setProps({ asEmphasis: "text" });
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asEmphasis prop as contained", () => {
    let colors = {
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      buttonBackgroundColor: "#AD2929",
      buttonTextColor: "#ffffff",
      buttonHoverBackgroundColor: "#AD292980",
      buttonHoverTextColor: "#AD2929",
    };
    component.setProps({ asEmphasis: "contained" });
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asEmphasis prop as outlined", () => {
    let colors = {
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      buttonBackgroundColor: "#AD2929",
      buttonTextColor: "#ffffff",
      buttonHoverBackgroundColor: "#AD292980",
      buttonHoverTextColor: "#AD2929",
    };
    component.setProps({ asEmphasis: "outlined" });
    component.setProps({ withColor: colors });
    expect(component.exists()).toBe(true);
  });

  it("should render title and subtitle when we doesn't pass image", () => {
    component.setProps({
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
      },
    });
    expect(component.find(SlideHeader).props().content.title).toBe(
      "Neque porro quisquam est qui dolorem"
    );
    expect(component.find(SlideHeader).props().content.subTitle).toBe(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem"
    );
  });

  it("should render image instead of title and sutitle", () => {
    component.setProps({
      data: {
        image: { id: "header-image", extension: "" },
      },
      imageLibrary: [
        {
          id: "header-image",
          image:
            "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
        },
      ],
    });
    expect(component.find(".qui-slide-popup-list-image").props().src).toBe(
      "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
    );
  });

  it("should render default backgroundcolor if we doesn't pass background color", () => {
    component.setProps({
      data: {
        backgroundImage: { id: "", extention: "" },
        Popuplist: [
          {
            correct: "checked",
            text: "Item1",
          },
          {
            correct: "",
            text: "Item2",
          },
        ],
      },
      withColor: {
        backgroundColor: "",
      },
    });
    expect(
      component.find(".qui-slide-popup-list-card").props().style.backgroundColor
    ).toBe("#ffffff");
  });

  it("should render backgroundImage if we pass background image id", () => {
    component.setProps({
      data: {
        backgroundImage: { id: "background-image", extention: "" },
      },
      withColor: {
        backgroundColor: "",
      },
    });
  });

  it("should render backgroundcolor if we pass background color", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#000",
      },
    });
    expect(
      component.find(".qui-slide-popup-list-card").props().style.backgroundColor
    ).toBe("#000");
  });

  it("should return the index of selected option", () => {
    component.setProps({
      popupitems: [
        {
          option: "Item 1",
          image: {
            id: "image-1",
            extension: ".png",
          },
          caption: " Please put in a caption",
        },
        {
          option: "Item 2",
          image: {
            id: "image-2",
            extension: ".png",
          },
          caption: " Please put in a caption",
        },
        {
          option: "Item 3",
          image: {
            id: "image-3",
            extension: ".png",
          },
          caption: " Please put in a caption",
        },
        {
          option: "Item 4",
          image: {
            id: "image-4",
            extension: ".png",
          },
          caption: " Please put in a caption",
        },
      ],
    });
    let onClick = jest.fn();
    component.setProps({ onClick: onClick });
    component
      .find(ButtonBank)
      .simulate("click", { target: { innerText: "Item 4" } });
    expect(onClick).toBeCalledWith(3);
    component
      .find(ButtonBank)
      .simulate("click", { target: { innerText: "Item 2" } });
    expect(onClick).toBeCalledWith(1);
  });
});
