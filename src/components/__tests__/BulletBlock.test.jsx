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
import BulletBlock from "../BulletBlock/BulletBlock.react";

describe("BulletBlock", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: BulletBlock,
    required: {},
  };

  hasValid("defaults", args);

  hasValid("sizes", args);
  hasValid("positions", args);
  hasValid("padding", args);
  hasValid("alignment", args);

  hasValid("colors", args);

  hasValid("hidden", args);
  hasValid("fluid", args);
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <BulletBlock
        content={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "Quisque sed turpis vel lectus suscipit auctor",
          "Ut venenatis odio vestibulum, dictum augue ac, consequat dolor.",
        ]}
        asVariant="primary"
        asSize="normal"
        withColor={null}
        withAnimation={null}
        isHidden={false}
      />
    );
  });
});
