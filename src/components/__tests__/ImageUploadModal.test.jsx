//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from "enzyme";
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

  beforeEach(() => {
    jest.resetAllMocks();
    component = shallow(
      <ImageUploadModal
        content={{
          header: "Upload Image",
          buttons: ["choose file", "cancel", "save"],
        }}
        isOpen={true}
        asVariant="primary"
        asSize="normal"
        withColor={null}
        withAnimation={null}
        withTranslation={null}
        isDisabled={false}
        isHidden={false}
        onSave={() => {}}
      />
    );
  });
  it("should render correctly without throwing error", () => {
    expect(component.exists()).toBe(true);
  });
  // it("should render correctly without throwing error", () => {
  //   component = mount(
  //     <ImageUploadModal
  //       content={{ header: "Upload image" }}
  //       isOpen={true}
  //       asVariant="primary"
  //       asSize="normal"
  //       withColor={null}
  //       withAnimation={null}
  //       withTranslation={{
  //         lang: "en",
  //         tgt: "imageuploadmodal",
  //         dictionary: dictionary,
  //       }}
  //       isDisabled={false}
  //       isHidden={false}
  //       onClick={() => {}}
  //     />
  //   );
  // });
  it("should render correctly without throwing when file is uploaded", () => {
    component
      .find(".qui-image-upload-field")
      .simulate("change", { target: { files: "xyz" } });
    component.find("Button").at(2).simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when slider is operated", () => {
    component.find("Slider").simulate("change", 20);
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when clicked close icon", () => {
    component.find("ArcMenu").simulate("click");
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when window is resized", () => {
    global.innerWidth = 200;
    global.dispatchEvent(new Event("resize"));
    expect(component.exists()).toBe(true);
  });
  it("should render correctly without throwing error when window is resized to larger viewport", () => {
    global.innerWidth = 1200;
    global.dispatchEvent(new Event("resize"));
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
});