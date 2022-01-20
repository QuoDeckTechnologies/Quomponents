//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer'
//--------------------------------------
// Import Components
// -------------------------------------
import Upload from "../Buttons/Upload/Upload.react";

describe("Upload", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  let component;

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
        onClick={() => {}}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  it("should render correctly if file type doesn't match", () => {
    const { container } = render(<Upload onClick={() => {}} />);
    const inputElement = container.querySelector("input");
    fireEvent.change(inputElement, { target: { files: [{ type: "" }] } });
  });
  it("should render correctly when file is uploaded", () => {
    const { container } = render(<Upload onClick={() => {}} />);
    const inputElement = container.querySelector("input");
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
    
    fireEvent.change(inputElement, { target: { files: [file] } });
  });
});
