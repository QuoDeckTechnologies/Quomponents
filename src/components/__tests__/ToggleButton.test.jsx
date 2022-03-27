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
  let component;
  const dictionary = JSON.stringify({
    hi: {
      loading: "बस एक मिनट...",
      button: { text: "बटन", label: "इसे बार-बार न दबाएं..." },
    },
  });
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ToggleButton
        asVariant="primary"
        asSize="normal"
        asPadded="normal"
        asFloated="none"
        asAligned="center"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => console.log("ToggleButton Testing")}
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

  it("should render correctly onClick toggled", () => {
    component.find("input").at(0).simulate('click');
  });
});
