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
import NavBar from "../NavBar/NavBar/NavBar.react";

describe("NavBar", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let component, ShortLogo;
    const dictionary = JSON.stringify({
        hi: {
            navbar: {
                title: "कमाये",
            },
        },
    });

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <NavBar
                content={{
                    title: "earn",
                    logoimg: ShortLogo,
                    iconlink: [{
                        icon: "fas fa-angle-left",
                        link: "https://www.google.com/",
                    }],
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
                onClick={() => console.log("NavBar testing")}
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
                tgt: "earncard",
                dictionary: dictionary,
            },
        });
        expect(component.exists()).toBe(true);
    });

});
