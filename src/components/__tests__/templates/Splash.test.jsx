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
import Splash from "../../Templates/Splash/Splash.react";

describe("Splash", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Splash,
    required: {
      data: {
        splash: "test title",
      },
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("sizes", args);
  hasValid("positions", args);
  hasValid("alignment", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("toggles", args);
  // -------------------------------------
  // Run component specific tests
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

  it("should render correctly without throwing error when presenter view is selected", () => {
    component.setProps({
      data: {
        presenter: { id: "test_id" },
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when background image is provided", () => {
    component.setProps({
      data: {
        backgroundImage: {},
      },
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
});
