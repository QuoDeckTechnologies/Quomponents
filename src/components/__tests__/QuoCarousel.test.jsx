//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import QuoCarousel from '../Carousel/QuoCarousel/QuoCarousel.react'
import HCard from '../HCard/HCard.react'
describe('QuoCarousel', () => {
    let component, content;
    content = [<HCard onClick={() => { }} content={{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    }}
        imageLibrary={[
            {
                id: "image-1",
                image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            }]} />,
    <HCard onClick={() => { }} content={{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    }}
        imageLibrary={[
            {
                id: "image-1",
                image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            }]} />,
    <HCard onClick={() => { }} content={{
        image: {
            id: "image-1",
            extention: "",
        },
        name: "Sales Readiness",
        description: "Understand how to prepare yourself for that sale",
        buttonText: "Check",
    }}
        imageLibrary={[
            {
                id: "image-1",
                image: "https://i.pinimg.com/564x/63/b7/c5/63b7c5e64164a4baca57c64aaea33dea.jpg",
            }]}
    />]
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
    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    });
});