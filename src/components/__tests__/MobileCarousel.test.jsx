//--------------------------------------
// Import from NPM
// -------------------------------------
import React from 'react';
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import MobileCarousel from '../Carousel/MobileCarousel/MobileCarousel.react'
const dictionary = JSON.stringify({
    hi: {
        mobileCarousel: {
            buttonText: "देखें",
        },
    },
});
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
                withTranslation={null}
                onClick={() => console.log("Tesing Carousel")}
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

    it("should render correctly when passed asEmphasis prop as text", () => {
        let colors = {
            backgroundColor: "#00ff00",
            accentColor: "#00ff11",
            accentBackgroundColor: "#00ffds",
            textColor: "#DDff00",
            buttonBackgroundColor: "#DDDD00",
            buttonTextColor: "#DDffDD",
        }
        component.setProps({ asEmphasis: "text" })
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })


    it("should render correctly when passed asEmphasis prop as contained", () => {
        let colors = {
            backgroundColor: "#00ff00",
            accentColor: "#00ff11",
            accentBackgroundColor: "#00ffds",
            textColor: "#DDff00",
            buttonBackgroundColor: "#DDDD00",
            buttonTextColor: "#DDffDD",
        }
        component.setProps({ asEmphasis: "contained" })
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asEmphasis prop as outlined", () => {
        let colors = {
            backgroundColor: "#00ff00",
            accentColor: "#00ff11",
            accentBackgroundColor: "#00ffds",
            textColor: "#DDff00",
            buttonBackgroundColor: "#DDDD00",
            buttonTextColor: "#DDffDD",
        }
        component.setProps({ asEmphasis: "outlined" })
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#00ff00",
            accentColor: "#00ff11",
            accentBackgroundColor: "#00ffds",
            textColor: "#DDff00",
            buttonBackgroundColor: "#DDDD00",
            buttonTextColor: "#DDffDD",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })
});