//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import BackgroundImage from "../Templates/BackgroundImage/BackgroundImage.react";

describe("BackgroundImage", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <BackgroundImage
        data={{
          BackgroundImage: "test BackgroundImage",
          subBackgroundImage: "test subBackgroundImage",
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

  it("should render correctly without throwing error when BackgroundImage is not defined", () => {
    component.setProps({
      data: {
        BackgroundImage: null,
        image: "test image",
      },
    });
    expect(component.exists()).toBe(true);
  });
});