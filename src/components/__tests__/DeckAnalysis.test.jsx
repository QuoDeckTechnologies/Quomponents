//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import renderer, { act } from "react-test-renderer";
//--------------------------------------
// Import from Config
// -------------------------------------

//--------------------------------------
// Import Components
// -------------------------------------
import DeckAnalysis from "../DeckAnalysisBlock/DeckAnalysis.react";

describe("DeckAnalysis", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, slideImage;
    const dictionary = JSON.stringify({
        hi: {
            deckanalysis: {
                title: "स्लाइड्स",
                description: "डेक में 10 से 40 स्लाइड होनी चाहिए",
            },
        },
    });

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <DeckAnalysis
                content={{
                    title: "SLIDES",
                    description:
                        "Deck Should have 10 to 40 slides",
                    icon: "fas fa-ellipsis-h",
                    image: slideImage,
                    digit: "18",
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
                isDisabled={false}
                isHidden={false}
                onClick={() => console.log("DeckAnalysis testing")}
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
                tgt: "deckanalysis",
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
    it("should render correctly when clicked", () => {
        let component = renderer.create(<DeckAnalysis onClick={() => { }} />);
        let tree = component.toJSON();
        act(() => {
            tree.props.onClick();
        });
    });
});
