//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount, shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
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
    let handleSubmit = jest.fn()
    component = mount(
      <MultiSelect
        asEmphasis="contained"
        isCircular={false}
        asVariant="primary"
        asSize="normal"
        asFloated="none"
        withColor={null}
        withLabel={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => console.log(" Multiselect Testing")}
        onclick={handleSubmit}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly onClick for Check true", () => {
    component.find(".qui-btn").at(0).simulate('click');
  });
  it('Test click event on handleSubmit funtion of Button', () => {
    const handleSubmit = jest.fn();
    const button = shallow((<MultiSelect onClick={handleSubmit}>Ok!</MultiSelect>));
    button.find('input').at(0).simulate('click');
    expect(handleSubmit.mock.calls.length).toEqual(1);
  });
  it("should render correctly when passed asEmphasis prop as text", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    }
    component.setProps({ asEmphasis: "text" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed asEmphasis prop as contained", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    }
    component.setProps({ asEmphasis: "contained" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })

  it("should render correctly when passed asEmphasis prop as outlined", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    }
    component.setProps({ asEmphasis: "outlined" })
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as primary", () => {
    component.setProps({ asVariant: "primary" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as secondary", () => {
    component.setProps({ asVariant: "secondary" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as warning", () => {
    component.setProps({ asVariant: "warning" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as error", () => {
    component.setProps({ asVariant: "error" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asVariant prop as success", () => {
    component.setProps({ asVariant: "success" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asFloated prop as left", () => {
    component.setProps({ asFloated: "left" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asFloated prop as right", () => {
    component.setProps({ asFloated: "right" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asFloated prop as inline", () => {
    component.setProps({ asFloated: "inline" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asFloated prop as none", () => {
    component.setProps({ asFloated: "none" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed withColor props", () => {
    let colors = {
      backgroundColor: "#fff",
      accentColor: "#FF0000",
      textColor: "#00FFFF",
      hoverBackgroundColor: "#0000FF",
      hoverTextColor: "	#00008B",
    }
    component.setProps({ withColor: colors })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed withAnimation props", () => {
    let animation = {
      animation: "zoom",
      duration: 0.5,
      delay: 0,
    }
    component.setProps({ withAnimation: animation })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly with isCircular set content", () => {
    component.setProps({
      isCircular: true,
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with isCircular set and empty content", () => {
    component.setProps({
      isCircular: true,
    });
  });
});
