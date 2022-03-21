//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import ActionMenu from "../ActionMenu/ActionMenu.react";

describe("ActionMenu", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  let handelevent = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ActionMenu
        content={[
          {
            title: "Open Deck",
            icon: "fas fa-book-open",
          },
          {
            title: "Edit Deck",
            icon: "fas fa-edit",
          },
          {
            title: "Move Deck Up",
            icon: "fas fa-angle-up",
          },
          {
            title: "Move Deck Down",
            icon: "fas fa-angle-down",
          },
          {
            title: "Move to Topic",
            icon: "fas fa-square",
          },
          {
            title: "Unpublish Deck",
            icon: "fas fa-eye-slash",
          },
          {
            title: "Delete Deck",
            icon: "fas fa-trash",
          },
        ]}
        asVariant="primary"
        let colors={{
          backgroundColor: "red",
          accentColor: "green",
          textColor: "blue",
        }}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => console.log("testing")}

      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
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

  it("should render correctly when passed asSize prop as tiny", () => {
    component.setProps({ asSize: "tiny" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asSize prop as small", () => {
    component.setProps({ asSize: "small" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asSize prop as normal", () => {
    component.setProps({ asSize: "normal" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asSize prop as big", () => {
    component.setProps({ asSize: "big" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asSize prop as huge", () => {
    component.setProps({ asSize: "huge" })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed asSize prop as massive", () => {
    component.setProps({ asSize: "massive" })
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

  it("should render correctly if content are not specified", () => {
    component.setProps({
      content: [],
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with empty props which are not required", () => {
    component.setProps({
      content: [],
      withColor: {},
      withAnimation: {},
      isDisabled: null,
      isHidden: null
    });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with withColor prop",
    () => {
      const component = renderer.create(<ActionMenu
        withColor={{
          backgroundColor: "red",
          accentColor: "blue",
          textColor: "#b60d17",
        }}
        onClick={() => console.log('testing')}
      />)
    });
  it("should call handelevent when click", () => {
    component = shallow(<ActionMenu
      content={[
        {
          title: "Open Deck",
          icon: "fas fa-book-open",
        },
        {
          title: "Edit Deck",
          icon: "fas fa-edit",
        },
        {
          title: "Move Deck Up",
          icon: "fas fa-angle-up",
        },
        {
          title: "Move Deck Down",
          icon: "fas fa-angle-down",
        },
        {
          title: "Move to Topic",
          icon: "fas fa-square",
        },
        {
          title: "Unpublish Deck",
          icon: "fas fa-eye-slash",
        },
        {
          title: "Delete Deck",
          icon: "fas fa-trash",
        },
      ]}
      onClick={handelevent} />);
    component.find(".qui-actionmenu-items").at(0).simulate("click");
    component.find(".qui-actionmenu-items").at(1).simulate("click");
    component.find(".qui-actionmenu-items").at(2).simulate("click");
    component.find(".qui-actionmenu-items").at(3).simulate("click");
    component.find(".qui-actionmenu-items").at(4).simulate("click");
    component.find(".qui-actionmenu-items").at(5).simulate("click");
    component.find(".qui-actionmenu-items").at(6).simulate("click");
  });
});
