//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow } from 'enzyme';
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import QuoCarousel from '../Carousel/QuoCarousel/QuoCarousel.react';
import HCard from '../HCard/HCard.react';
import Slider from "react-slick";


describe('QuoCarousel', () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------

    const args = {
        target: QuoCarousel,
        required: {
            content: [
                <HCard
                    onClick={() => { }}
                    content={{
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
                />,
                <HCard
                    onClick={() => { }}
                    content={{
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
                <HCard
                    onClick={() => { }}
                    content={{
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
                />
            ],
        },
        translations: {
            tgt: "button",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    button: { text: "स्किप" },
                },
            })
        },
    };

    hasValid("defaults", args);

    hasValid("colors", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    let component;
    let mockFn = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <QuoCarousel
                content={[
                    <HCard
                        onClick={() => { }}
                        content={{
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
                    />,
                    <HCard
                        onClick={() => { }}
                        content={{
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
                    <HCard
                        onClick={() => { }}
                        content={{
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
                    />
                ]}
                arrows={true}
                autoPlay={false}
                dots={false}
                infinite={true}
                slidesToShow={1}
                initialSlide={1}
                asNavFor=""
                addSkipToEnd={true}
                adaptiveHeight={false}
                withColor={{
                    backgroundColor: "",
                }}
                centerPadding={"10"}
                onRightNavigation={mockFn}
            />
        );
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

    it("should render correctly when withColor props is passed", () => {
        component.setProps({
            withColor: {
                backgroundColor: "#000000"
            }
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when arrows props is false", () => {
        component.setProps({
            arrows: false
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when click on Button", () => {
        component.setProps({
            addSkipToEnd: true
        });
        component.find('Button').simulate('click')
    });

    it('should render when onRightNavigation is not passed', () => {
        component.setProps({
            onRightNavigation: null
        })
        component.find(Slider).props().beforeChange("", 1)
    });

    it('should render when onRightNavigation is passed', () => {
        component.setProps({
            onRightNavigation: jest.fn()
        })
        component.find(Slider).props().beforeChange("", 1)
    });

    it('should render and handle click event slickNext', () => {
        component.find(".qui-carousel-slick-next").simulate('click');
        component.setProps({
            arrows: true,
            infinite: false,
            onRightNavigation: jest.fn()
        });
        component.find(Slider).props().beforeChange("", 1)
    });
    it('should render when infinite is true', () => {
        component.setProps({
            content: [
                <HCard
                    onClick={() => { }}
                    content={{
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
                />
            ],
            arrows: true,
            infinite: true,
            onRightNavigation: jest.fn()
        });
        component.find(Slider).props().beforeChange("", 1)
    });
    it('should render infinite is false ', () => {
        component.setProps({
            content: [
                <HCard
                    onClick={() => { }}
                    content={{
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
                />
            ],
            arrows: true,
            infinite: false,
            onRightNavigation: jest.fn()
        });
        component.find(Slider).props().beforeChange("", 1)
    });
    it('should render  when onRightNavigation is null', () => {
        component.setProps({
            content: [
                <HCard
                    onClick={() => { }}
                    content={{
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
                />
            ],
            arrows: true,
            infinite: false,
            onRightNavigation: null
        });
        component.find(Slider).props().beforeChange("", 1)
    });
});