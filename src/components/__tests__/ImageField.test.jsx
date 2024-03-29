//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import ImageField from "../ImageField/ImageField.react";

describe("ImageField", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: ImageField,
    required: {
      onClick: () => { },
    },
    translations: {
      tgt: "ImageField",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          title: "अपलोड",
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);
  hasValid("fluid", args);
  hasValid("hidden", args);
  hasValid("disabled", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------

  let component;
  const parts = [
    new Blob(["construct a file..."], {}),
    "blob",
    new Uint16Array([33]),
  ];
  const file = new File(parts, "name_file.txt", {
    size: 643810,
    type: "image/jpeg",
    webkitRelativePath: "",
  });
  const pauseFor = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <ImageField
        content={{
          title: "Upload",
          icon: "fas fa-user",
          actionButton: true,
        }}
        isMultiple={false}
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onClick={() => { }}
      />
    );
  });

  it("should render correctly when passed isFluid props is true", () => {
    component.setProps({
      isFluid: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isFluid props is false", () => {
    component.setProps({
      isFluid: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when upload button is clicked", () => {
    component.find(".qui-optional-image-field-button").at(0).simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when file is uploaded", async () => {
    component.setProps({
      isMultiple: true,
    });
    component
      .find(".qui-image-upload-field")
      .simulate("change", { target: { files: [file, file, file] } });
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when file is uploaded and removed", async () => {
    component
      .find(".qui-image-upload-field")
      .simulate("change", { target: { files: [file] } });
    component.find(".qui-optional-image-field-action-icon").simulate("click");
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props as false", () => {
    component.setProps({ isHidden: false })
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props as true", () => {
    component.setProps({ isHidden: true })
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props as false", () => {
    component.setProps({ isDisabled: false })
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props as true", () => {
    component.setProps({ isDisabled: true })
    expect(component.exists()).toBe(true);
  });
});
