//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import SquareCarousel from '../Carousel/SquareCarousel/SquareCarousel.react'

describe('SquareCarousel', () => {
    let component, content;
    const dictionary = JSON.stringify({
        hi: {
            bannerCard: { header: "", content: "" },
            ribbon: {
                new: "नया",
                restricted: "प्रतिबंधित",
                premium: "अधिमूल्य",
                free: "नि: शुल्क"
            }
        },
    });
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
    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
    it("should render translation  with withTranslation prop with no purpose passed ", () => {
        component.setProps({
            data: {
                purpose: "",
            },
            withTranslation: {
                lang: "hi",
                tgt: "bannerCard",
                dictionary: dictionary,
            },
        });
    });
})