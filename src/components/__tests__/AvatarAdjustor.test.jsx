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
import AvatarAdjustor from "../AvatarAdjustor/AvatarAdjustor.react";

describe("AvatarAdjustor", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: AvatarAdjustor,
        required: {
            isOpen: true,
            onChange: () => { },
            handleClose: () => { },
        },
        translations: {
            tgt: "avatarAdjustor",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    title: "तस्विर अपलोड करना",
                    buttons: {
                        chooseFile: "फाइलें चुनें",
                        cancel: "रद्द करें",
                        save: "स्वीकार",
                    }
                },
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);
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
        component = shallow(
            <AvatarAdjustor
                title="Upload Image"
                image="image.png"
                isOpen={true}
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                onChange={() => { }}
                handleClose={() => { }}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isOpen props is false", () => {
        component.setProps({
            isOpen: false,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isOpen props is true", () => {
        component.setProps({
            isOpen: true,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed title & image props is empty", () => {
        component.setProps({
            title: "",
            image: "",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed title & image props have value", () => {
        component.setProps({
            title: "Upload Image",
            image: "image.png"
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on close icon", () => {
        component.find("i").at(0).simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on input", () => {
        component.find("input").at(0).simulate("click", { target: { value: "" } });
        expect(component.exists()).toBe(true);
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
        component.find("input").at(0).simulate("change", { target: { files: [file] } });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on upload button", () => {
        component.find("Button").at(0).simulate("click");
        component.find("Button").at(1).simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when slider is operated", () => {
        component.find("Slider").simulate("change", 20);
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when gif file is uploaded and saved", async () => {
        const file = new File(parts, "name_file.jpeg", {
            size: 643810,
            type: "image/gif",
            webkitRelativePath: "",
        });
        component.find("input").simulate("change", { target: { files: [file] } });
        await pauseFor(100);
        component.find("Button").at(1).simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when jpeg or jpg file is uploaded and saved", async () => {
        const file = new File(parts, "name_file.jpeg", {
            size: 643810,
            type: "image/jpeg",
            webkitRelativePath: "",
        });
        component.find("input").simulate("change", { target: { files: [file] } });
        await pauseFor(100);
        component.find("Button").at(1).simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when png file is uploaded and saved", async () => {
        const file = new File(parts, "name_file.jpeg", {
            size: 643810,
            type: "image/png",
            webkitRelativePath: "",
        });
        component.find("input").simulate("change", { target: { files: [file] } });
        await pauseFor(100);
        component.find("Button").at(1).simulate("click");
        expect(component.exists()).toBe(true);
    });

    // it("should render correctly without throwing error when component mounts", () => {
    //     component = mount(
    //         <AvatarAdjustor
    //             title="Upload image"
    //             image="image.png"
    //             isOpen={true}
    //             withColor={null}
    //             withAnimation={null}
    //             withTranslation={null}
    //             onChange={jest.fn()}
    //             handleClose={jest.fn()}
    //         />
    //     );
    // });
});
