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
import BackgroundImage from "../../Templates/BackgroundImage/BackgroundImage.react";

describe("BackgroundImage", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: BackgroundImage,
    required: {
      content: "Testing Button",
      onClick: () => console.log("Button Testing"),
    },
  };

  hasValid("defaults", args);
  hasValid("animations", args);
  hasValid("toggles", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <BackgroundImage
        data={{
          paragraph: "",
          background: { id: "", extention: "" },
          position: "",
        }}
        imageLibrary={null}
        slideId={0}
        withColor={null}
        withAnimation={null}
        isHidden={false}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when background is not provided", () => {
    component.setProps({
      data: {
        paragraph: "test paragraph",
        position: "top-left",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when data is null", () => {
    component.setProps({
      data: {
        paragraph: "",
        background: { id: "", extention: "" },
        position: "",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when background image is provided", () => {
    component.setProps({
      data: {
        paragraph: "test paragraph",
        background: {
          id: "background-image",
          extention: "",
        },
        position: "top-left",
      },
      imageLibrary: [{ id: "background-image", image: "test.png" }],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#F3E5F5",
        textBlockTextColor: "#454545",
        textBlockBackgroundColor: "#FFFF",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withAnimation props", () => {
    component.setProps({
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });
});
