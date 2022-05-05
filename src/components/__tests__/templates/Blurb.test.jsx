//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Blurb from "../Templates/Blurb/Blurb.react";

describe("Blurb", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Blurb
        data={{
          Blurb: "test Blurb",
          subBlurb: "test subBlurb",
          icon: "test-icon",
        }}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when presenter view is selected", () => {
    component.setProps({
      isPresenter: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when Blurb is not defined", () => {
    component.setProps({
      data: {
        Blurb: null,
        image: "test image",
      },
    });
    expect(component.exists()).toBe(true);
  });
});