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
import AmplayfierDateBlock from "../AmplayfierDateBlock/AmplayfierDateBlock.react";

describe("AmplayfierDateBlock", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: AmplayfierDateBlock,
    required: {
    },
    translations: {
      tgt: "amplayfierdateblock",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          amplayfierdateblock: {
            months: {
              Jan: "जनवरी",
              Feb: "फ़रवरी",
              Mar: "मार्च",
              Apr: "अप्रैल",
              May: "मई",
              Jun: "जून",
              Jul: "जुलाई",
              Aug: "अगस्त",
              Sep: "सितम्बर",
              Oct: "अक्टूबर",
              Nov: "नवम्बर",
              Dec: "दिसम्बर",
            },
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

  hasValid("toggles", args);

  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <AmplayfierDateBlock
        content={null}
        withColor={null}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when passed withColor props", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#ffffff",
        textColor: "#ffffff",
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date is provided in content props", () => {
    component.setProps({
      content: "2021-05-10T12:55:18.154Z",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
    component.setProps({
      content: "2022-05-01",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
    component.setProps({
      content: "2022-05-02",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
    component.setProps({
      content: "2022-05-03",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
    component.setProps({
      content: "2022-05-05",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
    component.setProps({
      content: "2022-05-31",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when invalid date is provided in content props", () => {
    component.setProps({
      content: "xyz",
    });
    expect(component.exists()).toBe(true);
  });
});
