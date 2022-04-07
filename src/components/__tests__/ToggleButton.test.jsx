//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Components
// -------------------------------------
import ToggleButton from "../ToggleButton/ToggleButton.react";

describe("ToggleButton", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component,
      onChange = jest.fn();

  const dictionary = JSON.stringify({
    hi: {
      ToggleButton: { label: "सक्रिय" },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ToggleButton
        label="Active"
        asSize="normal"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        isActive={false}
        onClick={() => console.log("ToggleButton Testing")}
        onChange={onChange}
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
          lang: "en",
          tgt: "button:",
          dictionary: dictionary,
        },
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
});
