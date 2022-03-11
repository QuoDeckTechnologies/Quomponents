import { ChromePicker } from "react-color";
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
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
        withColor={null}
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
      let chromeOnChange = jest.fn()
      component.setProps({
        onChange:chromeOnChange 
      })
      component.find(ChromePicker).simulate('change')
      expect(chromeOnChange).toBeCalled()
    });


});
