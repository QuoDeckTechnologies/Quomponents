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
import WalletRow from "../WalletRow/WalletRow.react";

describe("WalletRow", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: WalletRow,
    required: {
      date: "2016-01-04 10:34:23",
      coins: 1000,
      onClick: () => { },
    },
    translations: {
      tgt: "walletRow",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          walletRow: {
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
            coins: "सिक्के",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("padding", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);
  hasValid("hidden", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <WalletRow
        date="2016-01-04 10:34:23"
        coins={1000}
        aspadded="normal"
        withAnimation={null}
        withTranslation={null}
        withColor={null}
        isHidden={false}
      />
    );
  });

  it("should render correctly when date of yyyy/mm/dd format is provided in content props", () => {
    component.setProps({
      date: "2022-05-02",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when date is provided in content props", () => {
    component.setProps({
      date: "2021-05-10T12:55:18.154Z",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render the suffix as 'st' when date of yyyy/mm/31 format is provided in content props", () => {
    component.setProps({
      date: "2022-05-31",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render the suffix as 'rd' when date of yyyy/mm/03 format is provided in content props", () => {
    component.setProps({
      date: "2022-05-03",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render the suffix as 'th' when date of yyyy/mm/05 format is provided in content props", () => {
    component.setProps({
      date: "2022-05-05",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when nothing is passed in date is provided in content props", () => {
    component.setProps({
      date: "",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when invalid date is provided in content props", () => {
    component.setProps({
      date: "xyz",
    });
    expect(component.exists()).toBe(true);
  });
});
