//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
//--------------------------------------
// Import Components
// -------------------------------------
import Upload from "../Buttons/Upload/Upload.react";

describe("Upload", () => {
  // -------------------------------------
  // Setup definitions for the test suite
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

  it("should render correctly when passed asFloated props is left", () => {
    component.setProps({
      asFloated: "left",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is right", () => {
    component.setProps({
      asFloated: "right",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is inline", () => {
    component.setProps({
      asFloated: "inline",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed asFloated props is none", () => {
    component.setProps({
      asFloated: "none",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isHidden props is false", () => {
    component.setProps({
      isHidden: false,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when passed isCircular props is true", () => {
    component.setProps({
      isHidden: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asSize is tiny", () => {
    component.setProps({
      asSize: "tiny",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asSize is normal", () => {
    component.setProps({
      asSize: "normal",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asSize is huge", () => {
    component.setProps({
      asSize: "huge",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asPadded is fitted", () => {
    component.setProps({
      asPadded: "fitted",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asPadded is compact", () => {
    component.setProps({
      asPadded: "compact",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asPadded is normal", () => {
    component.setProps({
      asPadded: "normal",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asPadded is relaxed", () => {
    component.setProps({
      asPadded: "relaxed",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asFloated is left", () => {
    component.setProps({
      asFloated: "left",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asFloated is right", () => {
    component.setProps({
      asFloated: "right",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asFloated is none", () => {
    component.setProps({
      asFloated: "none",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asFloated is inline", () => {
    component.setProps({
      asFloated: "inline",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asAligned is left", () => {
    component.setProps({
      asAligned: "left",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asAligned is right", () => {
    component.setProps({
      asAligned: "right",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when asAligned is center", () => {
    component.setProps({
      asAligned: "center",
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when isFliud is true", () => {
    component.setProps({
      isFliud: true,
    });
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when isFliud is false", () => {
    component.setProps({
      isFliud: false,
    });
    expect(component.exists()).toBe(true);
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
    const { container } = render(<Upload onClick={() => {}} />);
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
        onClick={() => {}}
      />
    );
    wrapper.find(".qui-btn").at(0).simulate("click");
    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly when file is uploaded", async () => {
    const { container } = render(<Upload onClick={() => {}} />);
    const inputElement = container.querySelector("input");
    fireEvent.change(inputElement, { target: { files: [file] } });
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when multiple files are uploaded", async () => {
    const { container } = render(
      <Upload isMultiple={true} onClick={() => {}} />
    );
    const inputElement = container.querySelector("input");
    fireEvent.change(inputElement, { target: { files: [file, file, file] } });
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });
});
