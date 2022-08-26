//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow, mount } from 'enzyme';
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import SquareWrapperCarousel from '../Carousel/SquareWrapperCarousel/SquareWrapperCarousel.react'
import BannerCard from '../Carousel/BannerCard/BannerCard.react'

describe('SquareWrapperCarousel', () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: SquareWrapperCarousel,
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
    // -------------------------------------
    // Run component specific tests
    // -------------------------------------
    let component, content;
    content = [{
        image: "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
        tag: "new",
        header: "Component",
        content: "subtitle",
        selected: true,
        props: {
            asVariant: "primary",
            withColor: {
                backgroundColor: "#ffffff",
                textColor: "",
            }
        },
    }]
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SquareWrapperCarousel
                content={content}
                withTranslation={null}
                onClick={() => { }}
            />
        );
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
        const wrapper = shallow(<SquareWrapperCarousel onClick={() => { }} />);
        wrapper.find(".qui-square-wrapper-slick-prev").simulate('click');
    });
    
    it('should render and handle click event slickNext on next arrow', () => {
        const wrapper = shallow(<SquareWrapperCarousel onClick={() => { }} />);
        wrapper.find(".qui-square-wrapper-slick-next").simulate('click');
    });

    it('should render and handle click event slickNext on next arrow with mount', () => {
        const wrapper = mount(<SquareWrapperCarousel
            content={[
                {
                    image:
                        "https://i.pinimg.com/564x/a7/97/60/a79760adad76cba1c147450ec25b6225.jpg",
                    header: "Balloon Burst",
                    content: "new",
                    tag: "new",
                    selected: true,
                },
                {
                    id: "second-slide",
                    image:
                        "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
                    tag: "premium",
                    selected: false,
                    header: "Cityscape",
                    content: "new",
                },
                {
                    id: "third-slide",
                    image:
                        "https://i.pinimg.com/564x/7e/bd/95/7ebd9590368fb4bef3bfd7292f0523bd.jpg",
                    tag: "restricted",
                    selected: false,
                    header: "GhostBuster",
                    content: "new",
                },
            ]}
            onClick={() => { }} />);
        wrapper.find(BannerCard).at(1).simulate("click", {
            image:
                "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            tag: "premium",
            selected: false,
            header: "Cityscape",
            content: "new",
        });
    });
})