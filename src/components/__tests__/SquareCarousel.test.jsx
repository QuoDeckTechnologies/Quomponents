//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from 'enzyme';

//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import SquareCarousel from '../Carousel/SquareCarousel/SquareCarousel.react'

describe('SquareCarousel', () => {

    const dictionary = JSON.stringify({
        hi: {
            loading: "बस एक मिनट...",
            content: [
                { header: "बात कक्ष", content: "प्रतियोगिता खेलें और फ्लिपकार्ट वाउचर अर्जित करने के लिए जीतें।" },
                { header: "बातची कक्ष", content: "प्रतियोगिता खेलें और फ्लिपकार्ट वाउचर अर्जित करने के लिए जीतें।" },
                { header: "बातचीत कक्ष", content: "प्रतियोगिता खेलें और फ्लिपकार्ट वाउचर अर्जित करने के लिए जीतें।" },
            ],
            ribbon: {
                new: "नया",
                restricted: "प्रतिबंधित",
                premium: "अधिमूल्य",
                free: "नि: शुल्क"
            },
        },
    });
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SquareCarousel
                content={null}
                withAnimation={null}
                withTranslation={null}
            />
        );
    });

    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });

})