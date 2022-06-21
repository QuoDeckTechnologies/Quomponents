//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import QuoCarousel from '../Carousel/QuoCarousel/QuoCarousel.react'
describe('QuoCarousel', () => {
    let component, content;
    content = [{
        image: {
            id: "image",
            extention: "",
        },
        name: "Component",
        description: "subtitle",
        buttonText: "Check",
    }, {
        image: {
            id: "image",
            extention: "",
        },
        name: "Component",
        description: "subtitle",
        buttonText: "Check",
    }, {
        image: {
            id: "image",
            extention: "",
        },
        name: "Component",
        description: "subtitle",
        buttonText: "Check",
    },]
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <QuoCarousel
                content={content}
            />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    });
    it('should render and handle click event slickPrev on previous arrows', () => {
        const wrapper = shallow(<QuoCarousel arrows={true}
        />);
        wrapper.find(".qui-carousel-slick-prev").simulate('click');
    });
    it('should render and handle click event slickNext', () => {
        const wrapper = shallow(<QuoCarousel arrows={true} />);
        wrapper.find(".qui-carousel-slick-next").simulate('click');
    });
});