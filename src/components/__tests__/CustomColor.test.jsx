import { ChromePicker } from "react-color";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow ,mount} from "enzyme";
import { fireEvent } from "@testing-library/react";
//--------------------------------------
// Import Components
// -------------------------------------
import CustomColor from "../CustomColor/CustomColor.react";

describe("CustomColor", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      customColor: { title: "पृष्ठ रंग" },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <CustomColor
        content={{
          title: "",
          color: "",
        }}
        // Quommon props
        //=======================================
        asSize="normal"
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => console.log("CustomColor Testing")}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly with translation",
    () => {
      component.setProps({
        withTranslation: {
          lang: "hi",
          tgt: "customColor",
          dictionary: dictionary,
        }
      });
      expect(component.exists()).toBe(true);
    });
  it("should render correctly if translation object is not returned",
    () => {
      component.setProps({
        withTranslation: {
          lang: "hi",
          tgt: "",
          dictionary: dictionary,
        }
      });
      expect(component.exists()).toBe(true);
    });
  it("should open ChromePicker",
    () => {
      expect(component.find(ChromePicker).exists()).toBe(false)
      component.find("button").simulate('click')
      expect(component.find(ChromePicker).exists()).toBe(true)
    });
  it("should test onChange function",
    () => {
      let hex = "#ff0000"
      expect(component.find(ChromePicker).exists()).toBe(false)
      component.find("button").simulate('click')
      let comp = component.find(ChromePicker)
      comp.simulate('change', hex)
    });
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
  it("should render correctly when passed withAnimation props", () => {
    let animation = {
      animation: "zoom",
      duration: 0.5,
      delay: 0,
    }
    component.setProps({ withAnimation: animation })
    expect(component.exists()).toBe(true);
  })
  it("should render correctly when passed withTranslation props", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "",
        dictionary: dictionary,
      }
    })
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
  it('should close the opened SearchBar when clicked outside', () => {
    component.find("button").simulate('click')
    fireEvent.click(document.body)
  });
  it('should close the opened SearchBar when clicked outside', () => {
      let searchBar = component.find(".qui-custom-color-button");
      searchBar.simulate('click');
      fireEvent.click(document.body)
  });

});
