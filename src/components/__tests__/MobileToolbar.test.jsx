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
    let component;

    let handleSelect = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <MobileToolbar
                lable={"Edit"}
                content={[]}
                asEmphasis="editing"
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

    it("should call handleSelect when click", () => {
        component = shallow(<MobileToolbar
            content={[
                {
                    link: "https://quodeck.com/",
                    icon: "fa fa-share",
                    label: "Certificate",
                    format: "caption",
                    isActive: false,
                },
            ]}
            onClick={() => { handleSelect }} />);
        component.find(IconLink).simulate("click");
        expect(component.exists()).toBe(true);
    });

    it('should pass conditional true when the slide is selected {true} from the props ', () => {
        component.setProps({
            content:
                [{
                    link: "https://www.youtube.com/",
                    icon: "fa fa-share",
                    label: "ok",
                    format: "label",
                    isActive: true,
                    props: { 
                        asVariant: "primary",
                        asEmphasis: "text"
                     }
                }],
            asEmphasis: "default",
        })
        expect(component.find(".qui-iconlink-toolbar").at(0).props().children.props.className).toBe("fa");
        expect(component.exists()).toBe(true);
    });
});


