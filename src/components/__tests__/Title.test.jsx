//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import Title from "../Templates/Title/Title.react";

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
        }}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when component mounts", () => {
    let component = mount(<Title onClick={() => {}} />);
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
        title: null,
        image: "test image",
      },
    });
    expect(component.exists()).toBe(true);
  });
});
