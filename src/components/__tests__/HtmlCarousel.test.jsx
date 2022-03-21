//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import HtmlCarousel from '../Carousel/HtmlCarousel/HtmlCarousel.react'

describe('HtmlCarousel', () => {
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
            <HtmlCarousel
                content={content}
                onClick={() => console.log("Tesing Carousel")}
            />
        );
    });
    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
    it('should render and handle click event slickPrev on previous arrows', () => {
        const wrapper = shallow(<HtmlCarousel onClick={() => console.log("Testing SlickPrev")} />);
        wrapper.find(".qui-html-slick-prev").simulate('click');
    });
    it('should render and handle click event slickNext', () => {
        const wrapper = shallow(<HtmlCarousel onClick={() => console.log("Testing SlickNext")} />);
        wrapper.find(".qui-html-slick-next").simulate('click');
    });
})