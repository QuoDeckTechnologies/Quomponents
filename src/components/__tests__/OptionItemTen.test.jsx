//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Component
// -------------------------------------
import OptionItemTen from "../OptionItem/OptionItemTen/OptionItemTen.react";

describe("Option Item Ten", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: OptionItemTen,
    required: {
      onInput: () => {},
      onHeader: () => {},
      onMessage: () => {},
      onUpload: () => {},
      onClick: () => {},
    },
    translations: {
      tgt: "optionItemTen",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          optionItemTen: {
            placeholder: "विकल्प ए",
            headerPlaceholder: "विकल्प ए के लिए हैडर",
            messagePlaceholder: "विकल्प ए के लिए संदेश",
            uploadButton: "अपलोड",
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("colors", args);
  hasValid("translations", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;

  const pauseFor = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <OptionItemTen
        option={{
          targetName: "target",
          value: "",
          placeholder: "Option A",
        }}
        header={{
          targetName: "header",
          value: "",
          placeholder: "Header for Option A",
          maxLength: 300,
        }}
        message={{
          targetName: "message",
          value: "",
          placeholder: "Message for Option A",
          maxLength: 300,
        }}
        withColor={{
          backgroundColor: "",
          accentColor: "",
          textColor: "",
        }}
        withAnimation={{
          animation: "zoom",
          duration: 0.5,
          delay: 0,
        }}
        isDisabled={false}
        isHidden={false}
        onInput={() => {}}
        onHeader={() => {}}
        onMessage={() => {}}
        onUpload={() => {}}
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    let component = mount(
      <OptionItemTen
        option={{
          targetName: "target",
          value: "",
          placeholder: "Option A",
        }}
        header={{
          targetName: "header",
          value: "",
          placeholder: "Header for Option A",
          maxLength: 300,
        }}
        message={{
          targetName: "message",
          value: "",
          placeholder: "Message for Option A",
          maxLength: 300,
        }}
        onInput={() => {}}
        onHeader={() => {}}
        onMessage={() => {}}
        onUpload={() => {}}
        onClick={() => {}}
      />
    );
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when wriiten in input field", () => {
    component.find("InputField").at(0).simulate("submit");
    component.find("InputField").at(1).simulate("submit");
    component.find("InputField").at(2).simulate("submit");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on close icon", () => {
    component
      .find(".fa-times")
      .simulate("click", { target: { dataset: { id: "name" } } });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when file is uploaded", async () => {
    component.find("OptionalImageField").simulate("upload", {});
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });
});
