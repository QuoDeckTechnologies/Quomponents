//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import Upload from "../Buttons/Upload/Upload.react";

describe("Upload", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: Upload,
    required: {
      asEmphasis: "contained",
      onClick: () => { },
    },
  };

  // hasValid("defaults", args);
  // hasValid("variants", args);
  // hasValid("sizes", args);
  // hasValid("positions", args);
  // hasValid("padding", args);
  // hasValid("alignment", args);
  // hasValid("colors", args);
  // hasValid("labels", args);
  // hasValid("animations", args);
  // hasValid("icons", args);
  // hasValid("translations", args);
  // hasValid("disabled", args);
  // hasValid("hidden", args);
  // hasValid("fluid", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  let component;

  const pauseFor = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

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

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <Upload
        asEmphasis="contained"
        isCircular={false}
        withFile={null}
        isMultiple={false}
        asVariant="primary"
        asSize="normal"
        asPadded="normal"
        asFloated="none"
        asAligned="center"
        withColor={null}
        withIcon={null}
        withLabel={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        isFluid={false}
        isLoading={false}
        onClick={() => { }}
      />
    );
  });

  it("should render correctly when isLoading is true", () => {
    component.setProps({
      isLoading: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when isLoading is false", () => {
    component.setProps({
      isLoading: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asAligned is center", () => {
    component.setProps({
      backgroundColor: "#ffffff",
      accentColor: "#ffffff",
      textColor: "#ffffff",
      hoverBackgroundColor: "#ffffff",
      hoverTextColor: "#ffffff",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly if file type doesn't match", () => {
    const { container } = render(<Upload onClick={() => { }} />);
    const inputElement = container.querySelector("input");
    fireEvent.change(inputElement, { target: { files: [{ type: "" }] } });
  });

  it("should render correctly when clicked in button", () => {
    let wrapper = mount(
      <Upload
        asEmphasis="contained"
        isCircular={false}
        withFile={null}
        isMultiple={false}
        asVariant="primary"
        asSize="normal"
        asPadded="normal"
        asFloated="none"
        asAligned="center"
        withColor={null}
        withIcon={null}
        withLabel={null}
        withAnimation={null}
        withTranslation={null}
        isHidden={false}
        isDisabled={false}
        isFluid={false}
        isLoading={false}
        onClick={() => { }}
      />
    );
    wrapper.find(".qui-btn").at(0).simulate("click");
    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly when file is uploaded", async () => {
    const { container } = render(<Upload onClick={() => { }} />);
    const inputElement = container.querySelector("input");
    fireEvent.change(inputElement, { target: { files: [file] } });
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when multiple files are uploaded", async () => {
    const { container } = render(
      <Upload isMultiple={true} onClick={() => { }} />
    );
    const inputElement = container.querySelector("input");
    fireEvent.change(inputElement, { target: { files: [file, file, file] } });
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });
});
