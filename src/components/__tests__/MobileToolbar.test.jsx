//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import MobileToolbar from '../MobileToolbar/MobileToolbar.react'
import IconLink from '../Buttons/IconLink/IconLink.react'

describe("MobileToolbar", () => {

    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: MobileToolbar,
        required: {
            content: [],
            onClick: () => { }
        },
        translations: {
            tgt: "mobileToolbar",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    mobileToolbar: {
                        title: "संपादन मोड",
                        content: [
                            { label: "पाठ्यक्रम" },
                            { label: "नगेट्स" },
                            { label: "परीक्षण" },
                            { label: "प्रतियोगिता" },
                            { label: "संदेश" },
                        ]
                    },
                },
            })
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    const dictionary = JSON.stringify({
        hi: {
            mobileToolbar: {
                title: "संपादन मोड",
                content: [
                    { label: "पाठ्यक्रम" },
                    { label: "नगेट्स" },
                    { label: "परीक्षण" },
                    { label: "प्रतियोगिता" },
                    { label: "संदेश" },
                ]
            },
        },
    });
    let component;
    let handleSelect = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <MobileToolbar
                title="Edit"
                content={[{
                    link: "https://quodeck.com/",
                    icon: "fa fa-share",
                    label: "Certificate",
                    format: "label",
                    isActive: false
                }
                ]}
                asEmphasis="default"
                asVariant="primary"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isDisabled={false}
                isHidden={false}
                isCircular={false}
                onClick={() => { handleSelect }} />
        );
    });

    it("should render correctly when click ArcMenu", () => {
        component = shallow(<MobileToolbar
            title="Edit"
            asEmphasis="editing"
            onClick={() => { }} />);
        component.find("ArcMenu").simulate("click");
        expect(component.exists()).toBe(true);
    });

    it("shouldrender correctly when call handleSelect when click", () => {
        component = shallow(<MobileToolbar
            content={[
                {
                    link: "https://quodeck.com/",
                    icon: "fa fa-share",
                    label: "Certificate",
                    format: "label",
                    isActive: false,
                },
            ]}
            asEmphasis="default"
            onClick={() => { handleSelect }} />);
        component.find(IconLink).at(0).props().onClick({
            link: "https://quodeck.com/",
            icon: "fa fa-share",
            label: "Certificate",
            format: "label",
            isActive: true,
        });
        component.find(IconLink).simulate("click");
        expect(component.exists()).toBe(true);
    });
    it('should render correctly when pass withtranslation props ', () => {
        let iconLabel = {
            label: "Certificate",
        }
        component.setProps({
            withLabel: { content: iconLabel, format: "label" },
            withTranslation: {
                lang: "hi",
                tgt: "mobileToolbar",
                dictionary: dictionary,
            },
        })
        expect(component.exists()).toBe(true);
    });
});


