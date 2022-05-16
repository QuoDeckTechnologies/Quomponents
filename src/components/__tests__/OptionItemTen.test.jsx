//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemTen from "../OptionItem/OptionItemTen/OptionItemTen.react";

describe("Option Item Ten", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  const pauseFor = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemTen
        content={{
          targetName: "target",
          value: "",
          placeholder: "Option A",
          headerName: "header",
          headerValue: "",
          headerPlaceholder: "Header for Option A",
          messageName: "message",
          messageValue: "",
          messagePlaceholder: "Message for Option A",
          maxLength: 300,
        }}
        withColor={{
          backgroundColor: "",
          accentColor: "",
          textColor: "",
        }}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isDisabled={false}
        isHidden={false}
        onInput={() => {}}
        onHeader={() => {}}
        onMessage={() => {}}
        onUpload={() => {}}
        onClose={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withColor prop is passed", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#8c9ea3",
        accentColor: "#597387",
        textColor: "#bac2c8",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when withAnimation prop is passed", () => {
    component.setProps({
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isDisabled prop is true", () => {
    component.setProps({
      isDisabled: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isDisabled prop is false", () => {
    component.setProps({
      isDisabled: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isHidden prop is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when isHidden prop is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error", () => {
    let component = mount(
      <OptionItemTen
        content={{
          targetName: "target",
          value: "",
          placeholder: "Option A",
          headerName: "header",
          headerValue: "",
          headerPlaceholder: "Header for Option A",
          messageName: "message",
          messageValue: "",
          messagePlaceholder: "Message for Option A",
          maxLength: 300,
        }}
        onInput={() => {}}
        onHeader={() => {}}
        onMessage={() => {}}
        onUpload={() => {}}
        onClose={() => {}}
      />
    );
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when wriiten in input field", () => {
    component.find("InputField").at(0).simulate("click");
    component.find("InputField").at(1).simulate("click");
    component.find("InputField").at(2).simulate("click");
  });
  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
  });

  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
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

  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when file is uploaded", async () => {
    component.find("OptionalImageField").simulate("click", {});
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });
});
