//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import Segment from "../Segment/Segment.react";
import Button from "../Buttons/Button/Button.react";

describe("Segment", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: Segment,
  };

  hasValid("defaults", args);

  hasValid("positions", args);
  hasValid("padding", args);

  hasValid("animations", args);

  hasValid("disabled", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
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
      <Button content="ok" onClick={() => { }} />
    </Segment>
  );
  expect(wrapper.exists()).toBe(true);
});
