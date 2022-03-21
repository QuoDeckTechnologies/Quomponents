//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow } from 'enzyme';

//--------------------------------------
// Import Components
// -------------------------------------
import SquareWrapperCarousel from '../Carousel/SquareWrapperCarousel/SquareWrapperCarousel.react'

describe('SquareWrapperCarousel', () => {
    let component, content;

    content = [{
        image: "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
        tag: "new",
        header: "Component",
        content: "subtitle",
        selected: true,
        props: {
            asVariant: "primary",
        }
    }]
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <SquareWrapperCarousel
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
        const wrapper = shallow(<SquareWrapperCarousel onClick={() => console.log("Testing SlickPrev")} />);
        wrapper.find(".qui-square-wrapper-slick-prev").simulate('click');
    });
    it('should render and handle click event slickNext on next arrow', () => {
        const wrapper = shallow(<SquareWrapperCarousel onClick={() => console.log("Testing SlickNext")} />);
        wrapper.find(".qui-square-wrapper-slick-next").simulate('click');
    });
})