//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
//--------------------------------------
// Import Common Tests
// -------------------------------------
import { hasValid } from "./common";
//--------------------------------------
// Import Components
// -------------------------------------
import DeckAnalysis from "../DeckAnalysisBlock/DeckAnalysisBlock.react";

describe("DeckAnalysis", () => {
    // -------------------------------------
    // Run common tests
    // -------------------------------------
    const args = {
        target: DeckAnalysis,
        required: {
            content: {
                header: "SLIDES",
                fheader: "SLIDES",
                message:
                    "Deck Should have 10 to 40 slides",
                icon: "fas fa-ellipsis-h",
                slideCount: 18,
                status: true,
            },
            onClick: () => {},
        },
        translations: {
            tgt: "deckanalysis",
            lang: { valid: "hi", invalid: "xx" },
            dictionary: JSON.stringify({
                hi: {
                    deckanalysis: {
                        header: "स्लाइड्स",
                        message: "डेक में 10 से 40 स्लाइड होनी चाहिए",
                    },
                },
            })
        },
    };

    hasValid("defaults", args);

    hasValid("variants", args);
    hasValid("positions", args);

    hasValid("colors", args);
    hasValid("animations", args);
    hasValid("translations", args);

    hasValid("hidden", args);
    hasValid("disabled", args);
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <DeckAnalysis
                header="SLIDES"
                fheader="SLIDES"
                message="Deck Should have 10 to 40 slides"
                icon="fas fa-ellipsis-h"
                slideCount={18}
                status={true}
                asVariant="primary"
                let colors={{
                    textColor: "#b60d17",
                    accentColor: "",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isHidden={false}
            />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render correctly when passed withColor props", () => {
        component.setProps({
            header: "SLIDES",
            fheader: "SLIDES",
            message:
                "Deck Should have 10 to 40 slides",
            icon: "fas fa-ellipsis-h",
            slideCount: 18,
            status: false,
        });
    });

    it("should render correctly when passed withColor props", () => {
        let colors = {
            accentColor: "#FF0000",
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            accentColor: "#FF0000",
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })
});
