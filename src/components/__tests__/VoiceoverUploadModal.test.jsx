//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import VoiceoverUploadModal from "../VoiceoverUploadModal/VoiceoverUploadModal.react";

describe("VoiceoverUploadModal", () => {
  // -------------------------------------
  // Run common tests
  // -------------------------------------
  const args = {
    target: VoiceoverUploadModal,
    required: {
      isOpen: true,
      onClick: () => console.log("Button Testing"),
    },
    translations: {
      tgt: "voiceoveruploadmodal",
      lang: { valid: "hi", invalid: "xx" },
      dictionary: JSON.stringify({
        hi: {
          voiceoveruploadmodal: {
            header: "तस्वीर अपलोड करें",
            buttons: ["फाइलें चुनें", "रद्द करें", "स्वीकार"],
          },
        },
      }),
    },
  };

  hasValid("defaults", args);
  hasValid("animations", args);
  hasValid("translations", args);
  hasValid("toggles", args);
  // -------------------------------------
  // Run component specific tests
  // -------------------------------------
  const dictionary = JSON.stringify({
    hi: {
      voiceoveruploadmodal: {
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
  const pauseFor = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <VoiceoverUploadModal
        isOpen={true}
        withAnimation={null}
        withTranslation={null}
        isDisabled={false}
        isHidden={false}
        onClick={() => {}}
        onClose={() => {}}
      />
    );
  });

  it("should render correctly without throwing error when clicked close icon", () => {
    component.find("ArcMenu").simulate("click");
    expect(component.exists()).toBe(true);
  });

  it("should render correctly without throwing error when clicked on upload button", () => {
    component.find("Button").at(0).simulate("click");
    component.find("Button").at(1).simulate("click");
    component.find("Button").at(2).simulate("click");
    expect(component.exists()).toBe(true);
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

  it("should render correctly when component mounts", async () => {
    let wrapper = mount(<VoiceoverUploadModal onClick={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly when single mp3 file is uploaded", async () => {
    const file = new File(parts, "name_file.mp3", {
      size: 643810,
      type: ".mp3",
      webkitRelativePath: "",
    });
    component
      .find(".qui-voiceover-upload-field")
      .simulate("change", { target: { files: [file] } });
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });

  it("should render correctly when multiple mp3 file is uploaded", async () => {
    const file = new File(parts, "name_file.mp3", {
      size: 643810,
      type: ".mp3",
      webkitRelativePath: "",
    });
    component
      .find(".qui-voiceover-upload-field")
      .simulate("click", { target: { value: "" } });
    component
      .find(".qui-voiceover-upload-field")
      .simulate("change", { target: { files: [file, file] } });
    await pauseFor(100);
    expect(component.exists()).toBe(true);
  });
});
