import { shallow, mount, render } from "enzyme";

const sharedSpecs = (args) => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<args.target {...args.required} />);
    });

    describe("Valid Translations", () => {
        it("should render correctly when translations is a blank object", () => {
            let translation = {};
            component.setProps({ withTranslation: translation });
            expect(component.exists()).toBe(true);
        });
        it("should render correctly when translations are fully defined", () => {
            let translation = {
                lang: args.translations.lang.valid,
                tgt: args.translations.tgt,
                dictionary: args.translations.dictionary,
            };
            component.setProps({ withTranslation: translation });
            expect(component.exists()).toBe(true);
        });
        it("should render defaults when translation language is invalid", () => {
            let translation = {
                lang: args.translations.lang.invalid,
                tgt: args.translations.tgt,
                dictionary: args.translations.dictionary,
            };
            component.setProps({ withTranslation: translation });
            expect(component.exists()).toBe(true);
        });
        it("should render defaults when translation tgt is invalid", () => {
            let translation = {
                lang: args.translations.lang.invalid,
                tgt: "invalid-tgt",
                dictionary: args.translations.dictionary,
            };
            component.setProps({ withTranslation: translation });
            expect(component.exists()).toBe(true);
        });
        it("should render defaults when translation dictionary is empty or invalid", () => {
            let translation = {
                lang: args.translations.lang.valid,
                tgt: args.translations.tgt,
                dictionary: "",
            };
            component.setProps({ withTranslation: translation });
            expect(component.exists()).toBe(true);
        });
    });
};

module.exports = sharedSpecs;
