//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import MultiSelect from "../MultiSelect/MultiSelect.react";

describe("MultiSelct", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <MultiSelect
      content= "Primary"
      asEmphasis= "contained"
      isCircular= {false}
      asVariant= "primary"
      asSize= "normal"
      asFloated= "none"
      withColor= {null}
      withLabel= {null}
      withAnimation= {null}
      isHidden= {false}
      isDisabled= {false}
        onClick={() => console.log(" Multiselect Testing")}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly with isCircular set ", () => {
    component.setProps({
      isCircular: true,
      content: "Content",
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with isCircular set and empty content", () => {
    component.setProps({
      isCircular: true,
      content: "",
      withIcon: {
        icon: "fas",
      },
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with content", () => {
    component.setProps({
      content: "Primary",
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with asEmphasis `outlined`", () => {
    component.setProps({
      asEmphasis: "outlined",
      withColor: {
        backgroundColor: "#ffc900",
        textColor: "#666666",
        hoverBackgroundColor: "#666666",
        hoverTextColor: "#ffc900",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly onClick", () => {
    component.find(".qui-multi-select-checkbox").simulate('click');
  });
  it("should render correctly onClick Toggled on Button", () => {
    component.find(".qui-btn").at(0).simulate('click');
  });
});
