//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
//--------------------------------------
// Import Components
// -------------------------------------
import ImageUploadModal from "../ImageUploadModal/ImageUploadModal.react";

describe("ImageUploadModal", () => {
  // -------------------------------------
  // Setup definitions for the test suite
  // -------------------------------------
  const dictionary = JSON.stringify({
    hi: {
      imageuploadmodal: {
        header: "तस्वीर अपलोड करें",
        buttons: ["फाइलें चुनें", "रद्द करें", "स्वीकार"],
      },
    },
  });
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
        image={null}
        isOpen={true}
        asVariant="primary"
        asSize="normal"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isDisabled={false}
        isHidden={false}
        onClick={() => {}}
        onClose={() => {}}
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
        asVariant="primary"
        asSize="normal"
        withColor={null}
        withAnimation={null}
        withTranslation={{
          lang: "en",
          tgt: "imageuploadmodal",
          dictionary: dictionary,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => {}}
        onClose={() => {}}
      />
    );
  });

  it("should render correctly without throwing error when component unmounts", () => {
    const { unmount } = render(
      <ImageUploadModal
        content={{ header: "Upload image" }}
        isOpen={true}
        asVariant="primary"
        asSize="normal"
        withColor={null}
        withAnimation={null}
        withTranslation={{
          lang: "en",
          tgt: "imageuploadmodal",
          dictionary: dictionary,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => {}}
        onClose={() => {}}
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

  it("should render correctly without throwing error with translation", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "imageuploadmodal",
        dictionary: dictionary,
      },
    });
  });

  it("should render correctly without throwing error with translation when target is not provided", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "",
        dictionary: dictionary,
      },
    });
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
    component.setProps({
      aspectRatio: 0,
    });
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

  it("should render correctly when image is provided in props and saved", () => {
    let wrapper = shallow(
      <ImageUploadModal
        content={{ header: "Upload image" }}
        image="test.png"
        isOpen={true}
        asVariant="primary"
        asSize="normal"
        withColor={null}
        withAnimation={null}
        withTranslation={{
          lang: "en",
          tgt: "imageuploadmodal",
          dictionary: dictionary,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => {}}
        onClose={() => {}}
      />
    );
    wrapper.find("Button").at(2).simulate("click");
    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly without throwing error when aspect ratio is zero or null", () => {
    let wrapper = shallow(
      <ImageUploadModal
        content={{ header: "Upload image" }}
        image="test.png"
        aspectRatio={0}
        isOpen={true}
        asVariant="primary"
        asSize="normal"
        withColor={null}
        withAnimation={null}
        withTranslation={{
          lang: "en",
          tgt: "imageuploadmodal",
          dictionary: dictionary,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => {}}
        onClose={() => {}}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly without throwing error when image is not provided", () => {
    let wrapper = shallow(
      <ImageUploadModal
        content={{ header: "Upload image" }}
        aspectRatio={0}
        isOpen={true}
        asVariant="primary"
        asSize="normal"
        withColor={null}
        withAnimation={null}
        withTranslation={{
          lang: "en",
          tgt: "imageuploadmodal",
          dictionary: dictionary,
        }}
        isDisabled={false}
        isHidden={false}
        onClick={() => {}}
        onClose={() => {}}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
