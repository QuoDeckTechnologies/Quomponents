//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount, shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import OptionalImageField from "../OptionalImageField/OptionalImageField.react";

describe("OptionalImageField", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: OptionalImageField,
    required: {
      onUpload: () => {},
    },
  };

  hasValid("defaults", args);
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
      <OptionalImageField
        title="Upload"
        icon="fas fa-user"
        actionButton={true}
        multiple={false}
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onUpload={() => {}}
      />
    );
  });
  it("should render correctly when upload button is clicked", () => {
    component.find(".qui-optional-image-field-button").at(0).simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when file is uploaded", async () => {
    component.setProps({
      multiple: true,
    });
    component
      .find(".qui-image-upload-field")
      .simulate("change", { target: { files: [file, file] } });
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when file is uploaded and removed", async () => {
    let wrapper = shallow(
      <OptionalImageField
        title="Upload"
        icon="fas fa-user"
        actionButton={true}
        multiple={false}
        withColor={null}
        withAnimation={null}
        isHidden={false}
        isDisabled={false}
        onUpload={() => {}}
      />
    );
    wrapper
      .find(".qui-image-upload-field")
      .simulate("change", { target: { files: [file] } });
    wrapper.find(".qui-optional-image-field-action-icon").simulate("click");
    await pauseFor(100);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly when title is not provided as props", async () => {
    component.setProps({
      title: null,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when hovered", () => {
    component
      .find(".qui-optional-image-field-button")
      .at(0)
      .simulate("mouseenter");
    component
      .find(".qui-optional-image-field-button")
      .at(0)
      .simulate("mouseleave");
    expect(component.exists()).toBe(true);
  });
});
