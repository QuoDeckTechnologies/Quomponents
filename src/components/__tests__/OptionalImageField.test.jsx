//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import OptionalImageField from "../OptionalImageField/OptionalImageField.react";

describe("OptionalImageField", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  const dictionary = JSON.stringify({
    hi: {
      optionalImageField: {
        title: "अपलोड",
      },
    },
  });
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
      <OptionalImageField
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
        onClick={() => {}}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withAnimation props", () => {
    component.setProps({
      withAnimation: {
        animation: "zoom",
        duration: 0.5,
        delay: 0,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withTranslation props", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "optionalImageField",
        dictionary: dictionary,
      },
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed withColor", () => {
    component.setProps({
      withColor: {
        backgroundColor: "#ffffff",
        accentColor: "#ffffff",
        textColor: "#ffffff",
      },
    });
    expect(component.exists()).toBe(true);
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

  it("should render correctly when passed isHidden props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is true", () => {
    component.setProps({
      isDisabled: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isDisabled props is false", () => {
    component.setProps({
      isDisabled: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when content prop is null", () => {
    component.setProps({
      content: null,
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
