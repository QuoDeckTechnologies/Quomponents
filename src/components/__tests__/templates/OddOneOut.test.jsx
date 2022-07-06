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
import OddOneOut from "../../Templates/OddOneOut/OddOneOut.react";
import SlideHeader from "../../SlideHeader/SlideHeader.react";
import ButtonBank from "../../ButtonBank/ButtonBank.react";

describe("OddOneOut", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: OddOneOut,
    required: {
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        backgroundImage: { id: "", extention: "" },
        options: [
          {
            correct: "checked",
            text: "<< List item 1. Replace with your own text >>",
          },
          {
            correct: "",
            text: "<< List item 2. Replace with your own text >>",
          },
          {
            correct: "",
            text: "<< List item 3. Replace with your own text >>",
          },
          {
            correct: "",
            text: "<< List item 4. Replace with your own text >>",
          },
        ],
      },
      onClick: jest.fn(),
    },
  };

  hasValid("defaults", args);
  hasValid("animations", args);
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
    options: [
      {
        correct: "checked",
        text: "<< List item 1. Replace with your own text >>",
      },
      { correct: "", text: "<< List item 2. Replace with your own text >>" },
      { correct: "", text: "<< List item 3. Replace with your own text >>" },
      { correct: "", text: "<< List item 4. Replace with your own text >>" },
    ],
  };

  let colors = {
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    buttonBackgroundColor: "",
    buttonTextColor: "",
    buttonHoverBackgroundColor: "",
    buttonHoverTextColor: "",
    backgroundColor: "#AD292",
  };

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OddOneOut
        data={data}
        slideId={1}
        asEmphasis="contained"
        withColor={colors}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onClick={jest.fn()}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asEmphasis prop as text", () => {
    let colors = {
      slideHeaderTextColor: "#ffffff",
      slideHeaderAccentColor: "#AD2929",
      slideHeaderBackgroundColor: "#AD292980",
      buttonBackgroundColor: "",
      buttonTextColor: "",
      buttonHoverBackgroundColor: "",
      buttonHoverTextColor: "",
      backgroundColor: "#AD292",
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
      buttonBackgroundColor: "",
      buttonTextColor: "",
      buttonHoverBackgroundColor: "",
      buttonHoverTextColor: "",
      backgroundColor: "#AD292",
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
      buttonBackgroundColor: "",
      buttonTextColor: "",
      buttonHoverBackgroundColor: "",
      buttonHoverTextColor: "",
      backgroundColor: "#AD292",
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
    expect(component.find(".qui-slide-odd-one-out-image").props().src).toBe(
      "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
    );
  });

  it("should render default backgroundcolor if we doesn't pass background color", () => {
    component.setProps({
      data: {
        backgroundImage: { id: "", extention: "" },
        OddOneOut: [
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
      component.find(".qui-slide-odd-one-out-card").props().style
        .backgroundColor
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
      component.find(".qui-slide-odd-one-out-card").props().style
        .backgroundColor
    ).toBe("#000");
  });

  it("should return the index of selected option", () => {
    component.setProps({
      data: {
        options: [
          { correct: "checked", text: "Item 1" },
          { correct: "", text: "Item 2" },
          { correct: "", text: "Item 3" },
          { correct: "", text: "Item 4" },
        ],
      },
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
