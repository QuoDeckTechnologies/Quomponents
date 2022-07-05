//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Component
// -------------------------------------
import ButtonBank from "../ButtonBank/ButtonBank.react";

describe("ButtonBank", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------

  const args = {
    target: ButtonBank,
    required: {
      content: [
        "Primary Button",
      ],
      onClick: () => {},
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
  hasValid("toggles", args);

  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ButtonBank
        content={[
          "Primary Button",
          "Primary Button",
          "Primary Button",
          "Primary Button",
        ]}
        isCircular={false}
        asVariant="primary"
        asSize="normal"
        asFloated="none"
        withColor={null}
        withLabel={null}
        withAnimation={null}
        isHidden={null}
        isDisabled={false}
        onClick={() => {}}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error", () => {
    component.find("Button").at(0).simulate("click");
  });
});
