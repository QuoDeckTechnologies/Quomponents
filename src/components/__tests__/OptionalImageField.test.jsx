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

  it("should render correctly when content prop is null", () => {
    component.setProps({
      content: null,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when using withColor prop", () => {
    component.setProps({
      withColor: {
        backgroundColor: "red",
        accentColor: "red",
        textColor: "red",
      },
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
});
