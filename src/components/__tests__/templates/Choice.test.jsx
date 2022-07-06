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
import Choice from "../../Templates/Choice/Choice.react";
import SlideHeader from "../../SlideHeader/SlideHeader.react";

describe("Choice", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Choice,
    required: {
      data: {
        title: "Neque porro quisquam est qui dolorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        imageLibrary: [
          {
            id: "header-image",
            image:
              "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
          },
        ],
        choice: [
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
      onClick: () => console.log("Button Testing"),
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
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    imageLibrary: [
      {
        id: "header-image",
        image:
          "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg",
      },
    ],
    choice: [
      {
        correct: "checked",
        text: "Item1",
      },
      {
        correct: "",
        text: "Item2",
      },
    ],
  };

  let colors = {
    questionColor: "#000000",
    answerColor: "#000000",
    slideHeaderTextColor: "#ffffff",
    slideHeaderAccentColor: "#AD2929",
    slideHeaderBackgroundColor: "#AD292980",
    backgroundColor: "#fff",
  };

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Choice
        data={data}
        slideId={1}
        asEmphasis="contained"
        withColor={colors}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => console.log("Choice Testing")}
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
      primaryBackgroundColor: "#000066",
      secondaryBackgroundColor: "#003366",
      accentColor: "",
      primaryTextColor: "#ffffff",
      secondaryTextColor: "#ffffff",
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
      primaryBackgroundColor: "#000066",
      secondaryBackgroundColor: "#003366",
      accentColor: "",
      primaryTextColor: "#ffffff",
      secondaryTextColor: "#ffffff",
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
      primaryBackgroundColor: "#000066",
      secondaryBackgroundColor: "#003366",
      accentColor: "",
      primaryTextColor: "#ffffff",
      secondaryTextColor: "#ffffff",
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
        choice: [
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
    expect(component.find(".qui-slide-choice-image").props().src).toBe(
      "https://us.123rf.com/450wm/microone/microone1909/microone190900839/130722932-chaos-in-workplace-sleepy-lazy-unorganized-employees-in-office-bad-organization-control-business-cor.jpg"
    );
  });

  it("should render default backgroundcolor if we doesn't pass background color", () => {
    component.setProps({
      data: {
        backgroundImage: { id: "", extention: "" },
        choice: [
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
      component.find(".qui-slide-choice-card").props().style.backgroundColor
    ).toBe("#ffffff");
  });

  it("should render backgroundImage if we pass background image id", () => {
    component.setProps({
      data: {
        backgroundImage: { id: "background-image", extention: "" },
        choice: [
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
  });

  it("should render backgroundcolor if we pass background color", () => {
    component.setProps({
      data: {
        choice: [
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
        backgroundColor: "#000",
      },
    });
    expect(
      component.find(".qui-slide-choice-card").props().style.backgroundColor
    ).toBe("#000");
  });
});
