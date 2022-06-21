//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Segment from "../Segment/Segment.react";
import Button from "../Buttons/Button/Button.react";

describe("Segment", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Segment
        content={null}
        isCircular={false}
        asPadded="normal"
        asFloated="none"
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
      ></Segment>
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor props", () => {
    component.setProps({
      withColor: {
        backgroundColor: "",
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

  it("should render correctly when passed isCircular props is true", () => {
    component.setProps({
      isCircular: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isCircular props is false", () => {
    component.setProps({
      isCircular: false,
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

  it("should render correctly when passed isDisabled props is false", () => {
    component.setProps({
      isDisabled: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is true", () => {
    component.setProps({
      isDisabled: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is none", () => {
    component.setProps({
      asFloated: "none",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is left", () => {
    component.setProps({
      asFloated: "left",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is right", () => {
    component.setProps({
      asFloated: "right",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is inline", () => {
    component.setProps({
      asFloated: "inline",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asPadded props is fitted", () => {
    component.setProps({
      asPadded: "fitted",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asPadded props is compact", () => {
    component.setProps({
      asPadded: "compact",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asPadded props is normal", () => {
    component.setProps({
      asPadded: "normal",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asPadded props is relaxed", () => {
    component.setProps({
      asPadded: "relaxed",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor props", () => {
    component.setProps({
      withColor: {
        backgroundColor: "",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when children is given props", () => {
    let wrapper = shallow(
      <Segment
        content={null}
        isCircular={false}
        asPadded="normal"
        asFloated="none"
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
      >
        <Button onClick={() => {}} />
      </Segment>
    );
    expect(wrapper.exists()).toBe(true);
  });
});