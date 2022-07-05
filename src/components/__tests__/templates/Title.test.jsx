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
import Title from "../../Templates/Title/Title.react";

describe("Title", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  const args = {
    target: Title,
    required: {
      data: {
        title: "test title",
        subtitle: "test subtitle",
        icon: "test-icon",
        image: {},
      },
    },
  };

  hasValid("defaults", args);
  hasValid("variants", args);
  hasValid("sizes", args);
  hasValid("positions", args);
  hasValid("padding", args);
  hasValid("alignment", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("toggles", args);

  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Title
        data={{
          title: "test title",
          subtitle: "test subtitle",
          icon: "test-icon",
          image: {},
        }}
      />
    );
  });

  it("should render correctly without throwing error when image is not defined", () => {
    component.setProps({
      data: {
        title: "test title",
        subtitle: "test subtitle",
        icon: "test-icon",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when data is null", () => {
    component.setProps({
      data: null,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when icon is provided with presenter object", () => {
    component.setProps({
      data: {
        title: "test title",
        icon: "test-icon",
        presenter: {
          extention: "",
          id: "default43",
        },
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when presenter id is given in imageLibrary array", () => {
    component.setProps({
      data: {
        title: "test title",
        icon: "test-icon",
        presenter: {
          extention: "",
          id: "test",
        },
      },
      imageLibrary: [{ id: "test", image: "test.png" }],
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when background image is provided", () => {
    component.setProps({
      data: {
        title: "test title",
        icon: "test-icon",
        backgroundImage: {
          id: "background-image",
          extention: "",
        },
      },
      imageLibrary: [{ id: "background-image", image: "test.png" }],
    });
    expect(component.exists()).toBe(true);
  });
});
