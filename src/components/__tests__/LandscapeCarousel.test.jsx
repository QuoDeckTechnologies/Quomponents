//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import LandscapeCarousel from '../Carousel/LandscapeCarousel/LandscapeCarousel.react'

describe('LandscapeCarousel', () => {
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
        selected: true,
    }]
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <LandscapeCarousel
                content={content}
                onClick={() => console.log("Tesing Carousel")}
            />
        );
    });
    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });

    it('should pass conditional true when the slide is selected {true} from the props ', () => {
        component.setProps({
            content: [{
                image: "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
                tag: "new",
                header: "Component",
                content: "subtitle",
                selected: true,
            }, {
                image: "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
                tag: "new",
                header: "Component",
                content: "subtitle",
                selected: false,
            }]
        })
    });
    it('should render and handle click event slickPrev on previous arrows', () => {
        const wrapper = shallow(<LandscapeCarousel onClick={() => console.log("Testing SlickPrev")} />);
        wrapper.find(".qui-landscape-slick-prev").simulate('click');
    });
    it('should render and handle click event slickNext on next arrow', () => {
        const wrapper = shallow(<LandscapeCarousel onClick={() => console.log("Testing SlickNext")} />);
        wrapper.find(".qui-landscape-slick-next").simulate('click');
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