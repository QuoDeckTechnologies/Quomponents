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
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <CustomColor
        
    content={
        title= "ColorPicker",
        color = "red"
    }
    // Quommon props
    //=======================================
    asSize="normal"
    withColor= {null}
    withAnimation={null}
    withTranslation= {null}
    isHidden= {false}
    isDisabled= {false}
        onClick={() => console.log("CustomColor Testing")}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

});
