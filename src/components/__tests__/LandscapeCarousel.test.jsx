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
    let slickPrev = jest.fn();
    let slickNext = jest.fn();
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

    it('should pass Conditional True ', () => {
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
    test('should render and handle click event correctly when previousSibling exists', () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { slickPrev } });
        const wrapper = shallow(<LandscapeCarousel onClick={() => console.log("Testing SlickPrev")} />);
        wrapper.find(".qui-slick-prev").simulate('click');
    });
    test('should render and handle click event correctly when previousSibling exists', () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { slickNext } });
        const wrapper = shallow(<LandscapeCarousel onClick={() => console.log("Testing SlickPrev")} />);
        wrapper.find(".qui-slick-next").simulate('click');
    });

})