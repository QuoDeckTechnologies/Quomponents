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
import RewardUploader from "../RewardUploader/RewardUploader.react";

describe("RewardUploader", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: RewardUploader,
        required: {
            isOpen: true,
            onSubmit: () => { },
        },
        translations: {
            tgt: "rewardUploadModal",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    title: "एक इनाम बनाएँ",
                    hititle: "पुरस्कार विवरण",
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
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <RewardUploader
                title="Create a Reward"
                image="image"
                rewardName="rewardName"
                rewardHeader="rewardHeader"
                rewardContent="rewardContent"
                isOpen={true}
                isEditable={true}
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                onChange={() => { }}
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

    it("should render correctly when passed isEditable props is false", () => {
        component.setProps({
            isEditable: false,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isEditable props is true", () => {
        component.setProps({
            isEditable: true,
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed title,rewardName,rewardHeader,rewardContent & image props is empty", () => {
        component.setProps({
            title: "",
            image: "",
            rewardName: "",
            rewardHeader: "",
            rewardContent: "",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on close icon", () => {
        component.find("i").at(0).simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when value change on AvatarAdjustor", () => {
        component.find("AvatarAdjustor").at(0).simulate("change");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when click on cancel button on AvatarAdjustor", () => {
        component.find("AvatarAdjustor").at(0).props().handleClose()
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on buttons", () => {
        let onSubmit = jest.fn();
        component.setProps({
            onSubmit: onSubmit,
        });
        component.find("Button").at(0).simulate("click");
        component.find("Button").at(1).simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when isEditable is true and Save button is enable", () => {
        component.setProps({
            isEditable: true,
        });
        component.find("Button").at(0).simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when isEditable is false and cancel button is enable", () => {
        component.setProps({
            isEditable: false,
        });
        component.find("Button").at(0).simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on save button", () => {
        let onSubmit = jest.fn();
        component.setProps({
            onSubmit: onSubmit,
            isEditable: true,
        });
        component.find("Button").at(0).simulate("click", {
            Image: "image",
            Name: "rewardName",
            Header: "rewardHeader",
            Content: "rewardContent",
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when text get change on input tag", () => {
        component.find('Input').at(0).simulate('change', { target: { value: 'text' } })
        component.find('Input').at(1).simulate('change', { target: { value: 'text' } })
        component.find('Input').at(2).simulate('change', { target: { value: 'text' } })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when clicked on input", () => {
        component.find("input").at(0).simulate("click");
        component.find("input").at(1).simulate("click");
        component.find("input").at(2).simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("should render correctly without throwing error when component mounts", () => {
        component = mount(
            <RewardUploader
                title="Create a Reward"
                image="image"
                rewardName="rewardName"
                rewardHeader="rewardHeader"
                rewardContent="rewardContent"
                isOpen={true}
                isEditable={true}
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                onChange={() => { }}
            />
        );
        expect(component.exists()).toBe(true);
    });
});
