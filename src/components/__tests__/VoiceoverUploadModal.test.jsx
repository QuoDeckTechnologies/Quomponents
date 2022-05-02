//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
//--------------------------------------
// Import Components
// -------------------------------------
import VoiceoverUploadModal from "../VoiceoverUploadModal/VoiceoverUploadModal.react";

describe("VoiceoverUploadModal", () => {
  // -------------------------------------
  // Setup definitions for the test suite
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
//   const file = new File(parts, "name_file.txt", {
//     size: 643810,
//     type: "image/jpeg",
//     webkitRelativePath: "",
//   });
//   const pauseFor = (milliseconds) =>
//     new Promise((resolve) => setTimeout(resolve, milliseconds));
  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <VoiceoverUploadModal
        content={{
          header: "Upload Image",
          buttons: ["choose file", "cancel", "save"],
        }}
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

  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
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

  it("should render correctly without throwing error with translation", () => {
    component.setProps({
      withTranslation: {
        lang: "hi",
        tgt: "voiceoveruploadmodal",
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

//   it("should render correctly when jpeg or jpg file is uploaded and saved", async () => {
//     const file = new File(parts, "name_file.jpeg", {
//       size: 643810,
//       type: "image/jpeg",
//       webkitRelativePath: "",
//     });
//     component
//       .find(".qui-image-upload-field")
//       .simulate("change", { target: { files: [file] } });
//     await pauseFor(100);
//     component.find("Button").at(2).simulate("click");
//     expect(component.exists()).toBe(true);
//   });
});
