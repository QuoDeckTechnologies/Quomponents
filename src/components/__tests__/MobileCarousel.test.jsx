//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import MobileCarousel from '../Carousel/MobileCarousel/MobileCarousel.react'

describe('MobileCarousel', () => {
    let component, content;
    content = [{
        image: {
            id: "image",
            extention: "",
        },
        name: "Component",
        description: "subtitle",
        buttonText: "Check",
    }]
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <MobileCarousel
                content={content}
                imageLibrary={[{
                    id: "image",
                    image: "https://i.pinimg.com/564x/db/02/f4/db02f4f5fbd5cddc306153bea2315e9b.jpg",
                }]}
                onClick={() => console.log("Tesing Carousel")}
            />
        );
    });
    it("should render correctly without throwing error",
        () => {
            expect(component.exists()).toBe(true);
        });
})