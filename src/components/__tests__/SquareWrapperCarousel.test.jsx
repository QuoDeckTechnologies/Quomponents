//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow } from 'enzyme';

//--------------------------------------
// Import Components
// -------------------------------------
import SquareWrapperCarousel from '../Carousel/SquareWrapperCarousel/SquareWrapperCarousel.react'
jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    const mUseRef = jest.fn();
    return {
        ...originReact,
        useRef: mUseRef,
    };
});
describe('SquareWrapperCarousel', () => {
    let component, content;
    let slickPrev = jest.fn();
    let slickNext = jest.fn();
    let colors = {
        backgroundColor: "red",
        accentColor: "green",
        textColor: "blue",
    }
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
    test('should render and handle click slickPrev', () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { slickPrev } });
        const wrapper = shallow(<SquareWrapperCarousel onClick={() => console.log("Testing SlickPrev")} />);
        wrapper.find(".qui-slick-prev").simulate('click');
    });
    test('should render and handle click SlickNext', () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { slickNext } });
        const wrapper = shallow(<SquareWrapperCarousel onClick={() => console.log("Testing SlickNext")} />);
        wrapper.find(".qui-slick-next").simulate('click');
    });
})