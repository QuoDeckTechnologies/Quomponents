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
import SquareCarousel from '../Carousel/SquareCarousel/SquareCarousel.react'

describe('SquareCarousel', () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: SquareCarousel,
        required: {
            content: [],
            onClick: () => { },
        },
        translations: {
            tgt: "bannerCard",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    bannerCard: { header: "", content: "" },
                    ribbon: {
                        new: "नया",
                        restricted: "प्रतिबंधित",
                        premium: "अधिमूल्य",
                        free: "नि: शुल्क"
                    }
                },
            }),
        },
    };

    hasValid("defaults", args);

    hasValid("animations", args);
    hasValid("translations", args);
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------

    let component, content;
    content = [{
        image: "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
        tag: "new",
        header: "Component",
        content: "subtitle",
        props: null
    }]
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SquareCarousel
                content={content}
                onClick={() => console.log("Tesing Carousel")}
            />
        );
    });
})