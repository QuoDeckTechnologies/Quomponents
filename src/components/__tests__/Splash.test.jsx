//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Splash from "../Templates/Splash/Splash.react";

describe("Splash", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Splash
        data={{
          splash: "test title",
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

  it("should render correctly without throwing error when title is not defined", () => {
    component.setProps({
      data: {
        splash: null,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when presenter image is provided", () => {
    component.setProps({
      data: {
        splash: null,
        presenter: "presenter_image",
      },
      isPresenter: true,
    });
    expect(component.exists()).toBe(true);
  });
});
