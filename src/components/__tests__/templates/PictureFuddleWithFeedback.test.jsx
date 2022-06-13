//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import Components
// -------------------------------------
import PictureFuddleWithFeedback from "../../Templates/PictureFuddleWithFeedback/PictureFuddleWithFeedback.react";
import Button from "../../Buttons/Button/Button.react";

describe("PictureFuddleWithFeedback", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        en: {
            templateActions: {
                checkAnswer: 'Check Answer',
                submitAnswer: 'Submit Answer',
                thanks: 'Thanks for your response',
                go: 'Go',
            }
        },
        hi: {
            templateActions: {
                checkAnswer: 'अपना उत्तर जाँच लें',
                submitAnswer: 'अपना जवाब सबमिट करें',
                thanks: 'आपके उत्तर के लिए धन्यवाद',
                go: 'आगे बढ़ें',
            }
        }
    });
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <PictureFuddleWithFeedback
                data={{
                    title: "This is Title",
                    subtitle: "This is Subtitle",
                    image: {
                        id: 'header-image',
                        extention: ""
                    },
                    backgroundImage: {
                        id: 'background-image',
                        extention: ""
                    },
                    question: "Question",
                    answer: "Answer",
                    purpose: "quiz",
                    filter: "None"
                }}
                imageLibrary={[{
                    id: 'background-image',
                    image: "test-image1.png"
                }, {
                    id: 'header-image',
                    image: "test-image2.png"
                }]}
                slideId={0}
                asVariant="primary"
                withColor={null}
                withTranslation={null}
                isHidden={false}
                isDisabled={false}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            questionColor: "#000000",
            slideHeaderTextColor: "#ffffff",
            slideHeaderAccentColor: "#AD2929",
            slideHeaderBackgroundColor: "#AD292980",
            inputFieldTextColor: "#000000",
            inputFieldAccentColor: "#AD2929",
            inputFieldBackgroundColor: "#AD292980",
            buttonTextColor: "#000000",
            buttonBackgroundColor: "#AD2929",
            buttonHoverBackgroundColor: "#000000",
            buttonHoverTextColor: "#AD292980",
            backgroundColor: "#fff"
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

    it("should render translation of Check Answer with withTranslation prop and when passed purpose as quiz", () => {
        component.setProps({
            data: {
                purpose: "quiz"
            },
            withTranslation: {
                lang: "hi",
                tgt: "templateActions",
                dictionary: dictionary,
            },
        });
        expect(component.find(Button).props().content).toBe("अपना उत्तर जाँच लें");
    });

    it("should render submitAnswer translation with withTranslation prop and when passed nothing in the purpose props", () => {
        component.setProps({
            data: {
                purpose: ""
            },
            withTranslation: {
                lang: "hi",
                tgt: "templateActions",
                dictionary: dictionary,
            },
        });
        expect(component.find(Button).props().content).toBe("अपना जवाब सबमिट करें");
    });

    it("should render correctly if translation object is not returned", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "",
                dictionary: dictionary,
            }
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

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed answer props as null", () => {
        component.setProps({ answer: null })
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

    it("should render correctly when passed image prop as null", () => {
        let data = {
            title: "This is Title",
            subtitle: "This is Subtitle",
            question: "Question",
            purpose: "quiz",
        }
        component.setProps({ data: data })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly with withColor prop when hovered on Button", () => {
        const component = renderer.create(
            <Button
                withColor={{
                    buttonTextColor: "ff0023",
                    buttonBackgroundColor: "ff0ff0",
                    buttonHoverBackgroundColor: "ffff00",
                    buttonHoverTextColor: "ff00ff",
                }}
                onClick={jest.fn()}
            />
        );
        const tree = component.toJSON();
        act(() => {
            tree.props.onMouseEnter();
        });
    });

    it("should render correctly when passed backgroundImage prop as null and backgroundColor is passed", () => {
        let data = {
            title: "This is Title",
            subtitle: "This is Subtitle",
            question: "Question",
            purpose: "quiz",
        }
        let colors = {
            backgroundColor: "#fff",
        }
        component.setProps({ data: data, withColor: colors })
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed backgroundImage prop", () => {
        let data = {
            title: "This is Title",
            subtitle: "This is Subtitle",
            backgroundImage: {
                id: 'background-image',
                extention: ""
            },
            question: "Question",
            purpose: "quiz",
        }
        let imageLibrary = [{
            id: "background-image",
            image: 'test-image'
        }]

        component.setProps({ data: data, imageLibrary: imageLibrary })
        expect(component.exists()).toBe(true);
    });

    it('should simulate the submit button', () => {
        const button = shallow((<PictureFuddleWithFeedback trackInteraction={jest.fn()} />));
        button.find('Button').simulate('click');
        expect(component.exists()).toBe(true);
    });

    it('should simulate the input field', () => {
        component.find('InputField').simulate('click');
        expect(component.exists()).toBe(true);
    });
});