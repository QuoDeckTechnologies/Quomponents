//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow, mount, render } from 'enzyme';

//--------------------------------------
// Import Components
// -------------------------------------
import QuoCarousel from '../Carousel/QuoCarousel/QuoCarousel.react';
import HCard from '../HCard/HCard.react';

describe('QuoCarousel', () => {
    let component;
    let mockFn = jest.fn();

    const dictionary = JSON.stringify({
        // en: {
        //     button: {
        //         text: "Skip",
        //     },
        // },
        hi: {
            button: { text: "स्किप" },
        },
    });

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
                withTranslation={{
                    lang: "en",
                    tgt: "button",
                    dictionary: dictionary,
                }}
                isHidden={false}
                isDisabled={false}
                centerPadding={"10"}
                onRightNavigation={mockFn}
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

    it("should render correctly when withTranslation props is passed", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "button",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
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
});