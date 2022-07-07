//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import FlipConfirm from "../Buttons/FlipConfirm/FlipConfirm.react";

describe("FlipConfirm", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: FlipConfirm,
    required: {
      content: "Testing Button",
      onClick: () => console.log("Button Testing"),
    },
    translations: {
      tgt: "flipconfirm",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        en: {
          loading: "Please wait...",
          flipconfirm: {
            text: "Button",
            label: "Do not press this repeatedly...",
            header: "Are you sure you want to do that?",
            yes: "Yes",
            no: "No",
          },
        },
        hi: {
          loading: "बस एक मिनट...",
          flipconfirm: {
            text: "बटन",
            label: "इसे बार-बार न दबाएं...",
            header: "क्या वाकई आपकी इसे करने की इच्छा है?",
            yes: "हां",
            no: "नहीं",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("sizes", args);
  hasValid("positions", args);
  hasValid("padding", args);
  hasValid("alignment", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("disabled", args);
  hasValid("hidden", args);
  hasValid("loading", args);
  hasValid("fluid", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <FlipConfirm
        asEmphasis="contained"
        isCircular={false}
        asVariant="primary"
        asSize="normal"
        asPadded="normal"
        asFloated="none"
        asAligned="center"
        withConfirmation={null}
        withColor={null}
        withIcon={null}
        withLabel={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        isFluid={false}
        isLoading={false}
        onClick={() => console.log("")}
      />
    );
  });
  it("Click testing", () => {
    let wrapper = shallow(<FlipConfirm onClick={() => console.log("")} />);
    wrapper
      .find("Button")
      .at(0)
      .simulate("click", { clientX: 100, clientY: 100 });
    wrapper
      .find("Button")
      .at(1)
      .simulate("click", { clientX: 100, clientY: 100 });
    wrapper
      .find("Button")
      .at(2)
      .simulate("click", { clientX: 100, clientY: 100 });
    // wrapper.find('input').at(0).simulate('change', { target: { name: 'width', value: 50 } });
  });

  it("Funtion testing", () => {
    const { container } = render(<FlipConfirm onClick={() => {}} />);
    const inputElement = container.querySelector(".qui-btn");
    fireEvent.change(inputElement, { clientX: 100, clientY: 100 });
  });
});
