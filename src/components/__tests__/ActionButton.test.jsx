//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Components
// -------------------------------------
import ActionButton from "../Buttons/ActionButton/ActionButton.react";

describe("ActionButton", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, content;
    content = {
        title: "BUY",
        subTitle: "Rs. 75",
        image: "https://media.glassdoor.com/sqll/1666177/quodeck-squarelogo-1519202233122.png"
    }
    const dictionary = JSON.stringify({
        hi: {
            ActionButton: {
                title: "ख़रीदे",
                subTitle: "रु. ७५",
            }
        },
    });

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <ActionButton
                content={content}
                isEllipse={true}
                asVariant="primary"
                asSize="normal"
                asPadded="normal"
                asFloated="inline"
                asAligned="center"
                withColor={null}
                withIcon={null}
                withLabe={null}
                withAnimation={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
                onClick={() => { console.log("Testing ActionButton") }}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render button when image not passed", () => {
        component.setProps({
            content: {
                title: "BUY",
                subTitle: "Rs. 75",
                image: ""
            },
            asVariant: "secondary"
        })
        let button = component.find("div").at(2)
        expect(button.props().className).toBe("qui-btn variant-secondary action-button")
    });

    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "ActionButton",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly if translation object is not returned",
        () => {
            component.setProps({
                withTranslation: {
                    lang: "hi",
                    tgt: "",
                    dictionary: dictionary,
                }
            });
            expect(component.exists()).toBe(true);
        });

    it("should render responsive-text button correctly when passed length of button more", () => {
        component.setProps({
            content: {
                title: "BUYBUTTON",
                subTitle: "Rs. 105",
                image: ""
            },
        })
    });

    it("should render component without ellipse when isEllipse is passed as false", () => {
        component.setProps({
            isEllipse: false
        });
        let container = component.find("div").at(1)
        expect(container.props().className).toBe("action-button-container-with-no-ellipse")
    })


    it("should render component with ellipse when isEllipse is passed as true", () => {
        component.setProps({
            isEllipse: true
        });
        let container = component.find("div").at(1)
        expect(container.props().className).toBe("action-button-container")
    })
});