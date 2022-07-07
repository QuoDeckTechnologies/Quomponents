//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";

//--------------------------------------
// Import Components
// -------------------------------------
import DeckAnalysis from "../DeckAnalysisBlock/DeckAnalysisBlock.react";

describe("DeckAnalysis", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component;
    const dictionary = JSON.stringify({
        hi: {
            deckanalysis: {
                header: "स्लाइड्स",
                fheader: "स्लाइड्स",
                message: "डेक में 10 से 40 स्लाइड होनी चाहिए",
                checkSlide: "स्लाइड चेक करें :",
            },
        },
    });

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

    it("should render correctly when passed asVariant prop as primary", () => {
        component.setProps({ asVariant: "primary" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asVariant prop as secondary", () => {
        component.setProps({ asVariant: "secondary" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asVariant prop as warning", () => {
        component.setProps({ asVariant: "warning" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asVariant prop as error", () => {
        component.setProps({ asVariant: "error" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed asVariant prop as success", () => {
        component.setProps({ asVariant: "success" })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed withColor props", () => {
        let colors = {
            backgroundColor: "#fff",
            accentColor: "#FF0000",
            textColor: "#00FFFF",
        }
        component.setProps({ withColor: colors })
        expect(component.exists()).toBe(true);
    })

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

    it("should render correctly when passed withAnimation props", () => {
        let animation = {
            animation: "zoom",
            duration: 0.5,
            delay: 0,
        }
        component.setProps({ withAnimation: animation })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })
});