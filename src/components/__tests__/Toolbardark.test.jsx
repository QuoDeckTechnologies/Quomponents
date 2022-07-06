import { shallow } from 'enzyme';
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import ToolbarDark from '../Buttons/ToolbarDark/ToolbarDark.react'
describe("ToolbarDark", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: ToolbarDark,
        required: {
            content: [],
            onClick: () => { },
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("sizes", args);
    hasValid("padding", args);
    hasValid("alignment", args);

    hasValid("colors", args);
    hasValid("animations", args);

    hasValid("toggles", args);

    // -------------------------------------
    // Run component specific tests
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        hi: {
            toolbarDark: {
                content: [
                    { label: "प्रमाणपत्र" },
                    { label: "बटुआ" },
                    { label: "पुरस्कार" },
                    { label: "रिपोर्ट" },
                ]
            },
        },
    });
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ToolbarDark
                content={[
                    {
                        icon: "fa fa-share",
                        label: "Certificate",
                        format: "caption",
                        link: "https://quodeck.com/",
                    },
                ]}

                asEmphasis="text"
                asVariant="primary"
                asSize="normal"
                asPadded="normal"
                asAligned="center"

                withColor={null}
                withAnimation={null}
                withTranslation={null}

                isDisabled={false}
                isHidden={false}
                isFluid={false}
                isCircular={true}
                onClick={() => { }} />
        );
    });
    it("should render correctly with translation",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "hi",
                    tgt: "toolbarDark",
                    dictionary: dictionary,
                },
            });
            expect(component.exists()).toBe(true);
        });
});

