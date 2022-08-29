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
        {
          content: "Default Button",
          asEmphasis: "contained",
          isCircular: false,
          asFloated: "none",
          asPadded: "normal",
          asAligned: "center",
          withAnimation: {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
          },
          isDisabled: false,
          isLoading: false,
          isHidden: false,
          isFluid: false,
          onClick: () => {},
        },
      ],
    },
  };

  hasValid("defaults", args);

  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ButtonBank
        content={[
          {
            content: "Default Button",
            asEmphasis: "contained",
            isCircular: false,
            asFloated: "none",
            asPadded: "normal",
            asAligned: "center",
            withAnimation: {
              animation: "zoom",
              duration: 0.5,
              delay: 0,
            },
            isDisabled: false,
            isLoading: false,
            isHidden: false,
            isFluid: false,
            onClick: () => {},
          },
        ]}
        isHorizontal={false}
      />
    );
  });

  it("should render correctly when isHorizontal props is true", () => {
    component.setProps({
      isHorizontal: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error", () => {
    component.find("Button").at(0).simulate("click");
    expect(component.exists()).toBe(true);
  });
});
