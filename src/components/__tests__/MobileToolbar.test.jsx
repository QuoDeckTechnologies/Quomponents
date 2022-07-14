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
            content: [
                {
                    icon: "fa fa-share",
                    label: "Certificate",
                    format: "caption",
                    link: "https://quodeck.com/",
                },
            ],
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
    let component;

    let handleSelect = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <MobileToolbar
                lable={"Edit"}
                content={[
                    {
                        icon: "fa fa-share",
                        label: "Certificate",
                        format: "caption",
                        isActive: false,
                        link: "https://quodeck.com/",
                    },
                ]}
                asEmphasis="editing"
                asVariant="primary"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isDisabled={false}
                isHidden={false}
                isCircular={false}
                onClick={() => { }} />
        );
    });

    it("should call handleSelect when click", () => {
        component = shallow(<MobileToolbar
            content={[
                {
                    icon: "fa fa-share",
                    label: "Certificate",
                    format: "caption",
                    isActive: true,
                    link: "https://quodeck.com/",
                },
            ]}
            onClick={() => { handleSelect }} />);
        component.find(IconLink).simulate("click");
        expect(component.exists()).toBe(true);
    });
});


