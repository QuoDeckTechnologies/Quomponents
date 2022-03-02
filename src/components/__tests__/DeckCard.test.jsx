//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow, mount, render } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import DeckCard from "../DeckCard/DeckCard.react";

describe("DeckCard", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        hi: {
            loading: "बस एक मिनट...",
            ribbon: {
                new: "नया",
                restricted: "प्रतिबंधित",
                premium: "अधिमूल्य",
                free: "नि: शुल्क",
            },
            DeckCard: {
                title: "बातचीत का खेल",
                description:
                    "बातचीत कौशल की अपनी समझ को बेहतर बनाने के लिए इस गेम को खेलें",
            },
        },
    });

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <DeckCard
                content={{
                    title: "The Negotiation Game",
                    description:
                        "Play this game to improve your understanding of negotiation skills",

                    image: "static/media/Image.62bfb45a.png",
                    icon: "fas fa-gamepad",
                    tag: "restricted",
                    topics: [
                        {
                            name: "Name One",
                            checked: true,
                        },
                    ],
                }}
                asVariant="primary"
                asSize="normal"
                withColor={{
                    backgroundColor: "",
                    accentColor: "",
                    textColor: "#b60d17",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                withTranslation={{
                    lang: "hi",
                    tgt: "DeckCard",
                    dictionary: dictionary,
                }}
                isDisabled={false}
                isHidden={false}
                onClick={() => console.log("EanrCard testing")}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "DeckCard",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withTranslation prop", () => {
        component.setProps({
            withTranslation: {
                lang: "hi",
                tgt: "",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with withColor prop",
        () => {
            const component = renderer.create(<DeckCard
                content={{
                    title: "The Negotiation Game",
                    description:
                        "Play this game to improve your understanding of negotiation skills",

                    image: "static/media/Image.62bfb45a.png",
                    icon: "fas fa-gamepad",
                    tag: "restricted",
                    topics: [
                        {
                            name: "Name One",
                            checked: true,
                        },
                    ],
                }}
                withColor={{
                    backgroundColor: "",
                    accentColor: "",
                    textColor: "#b60d17",
                }}
                onClick={() => console.log('testing')}
            />)
        });

});
