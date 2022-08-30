import React from "react";
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
import TodayMenuBtn from "../TodayMenuBtn/TodayMenuBtn.react";

describe("TodayMenuBtn", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: TodayMenuBtn,
    required: {
      onClick: () => {},
    },
  };

  hasValid("defaults", args);

  hasValid("variants", args);
  hasValid("positions", args);
  hasValid("padding", args);

  hasValid("colors", args);
  hasValid("icons", args);

  hasValid("disabled", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component, onClick;

  onClick = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <TodayMenuBtn
        content=""
        asVariant="primary"
        asFloated="inline"
        asPadded="normal"
        withIcon={null}
        withColor={null}
        isDisabled={false}
        isHidden={false}
        onClick={onClick}
      />
    );
  });
});
