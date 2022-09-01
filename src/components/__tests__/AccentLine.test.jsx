//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import AccentLine from "../AccentLine/AccentLine.react";

describe("AccentLine", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = { target: AccentLine, required: {} };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("sizes", args);
  hasValid("padding", args);
  hasValid("positions", args);

  hasValid("colors", args);
  hasValid("animations", args);

  hasValid("fluid", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <AccentLine
        asVariant="warning"
        asPadded="normal"
        asSize="normal"
        asFloated="none"
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isFluid={false}
      />
    );
  });
});
