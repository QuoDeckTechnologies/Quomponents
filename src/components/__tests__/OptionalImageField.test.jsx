//--------------------------------------
// Import from NPM
// -------------------------------------
import { mount } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import OptionalImageField from "../OptionalImageField/OptionalImageField.react";

describe("EnrollmentRuleRow", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;
  beforeEach(() => {
    jest.resetAllMocks();
    component = mount(
      <OptionalImageField
        content={{
          text: "Upload",
          icon: "fas fa-user",
          actionButton: true,
        }}
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
  it("should render correctly when file is uploaded", () => {
    component
      .find(".qui-image-upload-field")
      .simulate("change", { target: { files: ["dummy file.png"] } });
    expect(component.exists()).toBe(true);
  });
  it("should render correctly when file is uploaded and removed", () => {
    component
      .find(".qui-image-upload-field")
      .simulate("change", { target: { files: ["dummy file.png"] } });
    component.find(".qui-optional-image-field-action-icon").simulate("click");
    expect(component.exists()).toBe(true);
  });
});
