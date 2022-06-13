import React from 'react';
//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';
//--------------------------------------
// Import Components
// -------------------------------------
import Feedback from "../../Templates/Feedback/Feedback.react"

describe("Feedback", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        hi: {
            feedback: {
                thankyou: "धन्यवाद",
                correct: "सही",
                incorrect: "गलत",
                button:"जारी रखें",
            }
        },
    });
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Feedback
                data={{
                    feedback: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit euismod nisl vitae interdum. Mauris ac vestibulum nisl."],
                    selectedIndex: 0,
                    backgroundImage: { id: "background-image", extention: "" }
                }}
                imageLibrary={[]}
                asVariant="warning"
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
            tgt: "feedback",
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
    it("should render correctly when data pass as empty object", () => {
        let data = {
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    });
});
