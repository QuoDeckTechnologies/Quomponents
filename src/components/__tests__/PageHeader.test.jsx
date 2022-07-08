//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount } from 'enzyme';
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import PageHeader from '../PageHeader/PageHeader.react'

describe("PageHeader", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: PageHeader,
        required: {
            content: "Header",
        },
        translations: {
            tgt: "pageheader",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    pageheader: { text: "शीर्षणी" },
                },
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("sizes", args);
    hasValid("positions", args);
    hasValid("padding", args);
    hasValid("alignment", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);

    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(<PageHeader
            content="HEADER"
            asVariant="primary"
            asSize="normal"
            asPadded="normal"
            asFloated="none"
            asAligned="center"
            withColor={null}
            withAnimation={null}
            isHidden={false}
        />);
    })
});