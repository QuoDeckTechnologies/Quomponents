//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Title from "../../Templates/Title/Title.react";

describe("Title", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Title
        data={{
          title: "test title",
          subtitle: "test subtitle",
          icon: "test-icon",
          image: "test_image",
        }}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
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

  it("should render correctly without throwing error when icon is provided with presenter image", () => {
    component.setProps({
      data: {
        title: "test title",
        icon: "test-icon",
        presenter: "presenter_image",
      },
    });
    expect(component.exists()).toBe(true);
  });
});
