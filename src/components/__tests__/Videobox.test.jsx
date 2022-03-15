//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";

//--------------------------------------
// Import Components
// -------------------------------------
import Videobox from "../Videobox/Videobox.react";

describe("Videobox", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
   let onClick = jest.fn();
    let component, DefaultImg;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Videobox
                content={{
                    url: "https://vimeo.com/682661192",
                    image: DefaultImg
                }}
                asSize="normal"
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isDisabled={false}
                isHidden={false}
                onClick ={onClick}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly with empty props which are not required", () => {
        component.setProps({
            content:{},
            withAnimation: {},
            isHidden: null
        });
        expect(component.exists()).toBe(true);
    });
});