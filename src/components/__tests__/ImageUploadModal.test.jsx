//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";

//--------------------------------------
// Import Components
// -------------------------------------
import ImageUploadModal from "../ImageUploadModal/ImageUploadModal.react";

describe("ImageUploadModal", () => {

  // -------------------------------------
  // Run common tests
  // -------------------------------------

  const args = {
    target: ImageUploadModal,
    required: {
      isOpen: true,
      onClick: () => { },
    },
    translations: {
      tgt: "butimageuploadmodalton",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          imageuploadmodal: {
            header: "तस्वीर अपलोड करें",
            buttons: ["फाइलें चुनें", "रद्द करें", "स्वीकार"],
          },
        },
      })
    },
  };

  hasValid("defaults", args);

  hasValid("colors", args);
  hasValid("animations", args);
  hasValid("translations", args);

  hasValid("toggles", args);

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
    component = shallow(
      <ImageUploadModal
        content={{
          header: "Upload Image",
          buttons: ["choose file", "cancel", "save"],
        }}
        isOpen={true}
        withColor={null}
        onClick={() => { }}
        onClose={() => { }}
      />
    );
  });

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when component mounts", () => {
    component = mount(
      <ImageUploadModal
        content={{ header: "Upload image" }}
        isOpen={true}
        withColor={null}
        onClick={() => { }}
        onClose={() => { }}
      />
    );
  });

  it("should render correctly without throwing error when component unmounts", () => {
    const { unmount } = render(
      <ImageUploadModal
        content={{ header: "Upload image" }}
        isOpen={true}
        withColor={null}
        onClick={() => { }}
        onClose={() => { }}
      />
    );
    unmount();
  });

  it("should render correctly without throwing when file is uploaded", () => {
    const parts = [
      new Blob(["construct a file..."], {}),
      "blob",
      new Uint16Array([33]),
    ];
    const file = new File(parts, "name_file.jpeg", {
      size: 643810,
      type: "image/jpeg",
      webkitRelativePath: "",
    });
    component
      .find(".qui-image-upload-field")
      .simulate("change", { target: { files: [file] } });
    component
      .find(".qui-image-upload-field")
      .simulate("click", { target: { value: "" } });
    component.find("Button").at(2).simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when slider is operated", () => {
    component.find("Slider").simulate("click", 20);
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked close icon", () => {
    component.find("ArcMenu").simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when window is resized", () => {
    global.innerWidth = 200;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
  });

  it("should render correctly without throwing error when window is resized to larger viewport", () => {
    global.innerWidth = 1200;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
  });

  it("should render correctly without throwing error when clicked on upload button", () => {
    component.find("Button").at(0).simulate("click");
    component.find("Button").at(1).simulate("click");
    component.find("Button").at(2).simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when jpeg or jpg file is uploaded and saved", async () => {
    const file = new File(parts, "name_file.jpeg", {
      size: 643810,
      type: "image/jpeg",
      webkitRelativePath: "",
    });
    component
      .find(".qui-image-upload-field")
      .simulate("change", { target: { files: [file] } });
    await pauseFor(100);
    component.find("Button").at(2).simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when gif file is uploaded and saved", async () => {
    const file = new File(parts, "name_file.jpeg", {
      size: 643810,
      type: "image/gif",
      webkitRelativePath: "",
    });
    component
      .find(".qui-image-upload-field")
      .simulate("change", { target: { files: [file] } });
    await pauseFor(100);
    component.find("Button").at(2).simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when png file is uploaded and saved", async () => {
    const file = new File(parts, "name_file.jpeg", {
      size: 643810,
      type: "image/png",
      webkitRelativePath: "",
    });
    component
      .find(".qui-image-upload-field")
      .simulate("change", { target: { files: [file] } });
    await pauseFor(100);
    component.find("Button").at(2).simulate("click");
    expect(component.exists()).toBe(true);
  });
});
