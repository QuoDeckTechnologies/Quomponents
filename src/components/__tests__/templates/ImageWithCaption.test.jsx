import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import ImageWithCaption from "../../Templates/ImageWithCaption/ImageWithCaption.react"

describe("ImageWithCaption", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    const dictionary = JSON.stringify({
        hi: {
          imagewithcaption: { button: "जारी रखें" },
        },
    });
    
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ImageWithCaption
                data={{
                    title: "Neque porro quisquam est qui dolorem",
                    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
                    image: { id: "header-image", extention: "" },
                    backgroundImage: { id: "background-image", extention: "" },
                }}
                imageLibrary={[]}
                slideId={0}
                asVariant="warning"
                asFloated="left"
                withColor={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                onClick={(e) => {
                    console.log(e);
                }}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when title and subtitle is not defined in data prop", () => {
        let data = {
            title: "",
            subtitle: "",
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when image is not defined in data prop", () => {
        let data = {
            title: "Neque porro quisquam est qui dolorem",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur ipsum sem",
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as primary", () => {
        component.setProps({ asVariant: "primary" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as secondary", () => {
        component.setProps({ asVariant: "secondary" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as warning", () => {
        component.setProps({ asVariant: "warning" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as error", () => {
        component.setProps({ asVariant: "error" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#ffffff",
            slideHeaderTextColor: "#ffffff",
            slideHeaderBackgroundColor: "#ad292980",
            slideHeaderAccentColor: "#AD2929",
            iconListItemTextColor: "#ffffff",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when translation is used", () => {
        component.setProps({
          withTranslation: {
            lang: "hi",
            tgt: "imagewithcaption",
            dictionary: dictionary,
          },
        });
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    });
});
