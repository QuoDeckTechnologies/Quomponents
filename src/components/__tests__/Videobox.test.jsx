//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from "enzyme";
import ReactPlayer from "react-player";

//--------------------------------------
// Import Components
// -------------------------------------
import Videobox from "../Videobox/Videobox.react";

describe("Videobox", () => {
    // -------------------------------------
    // Setup definitions for the test suite
    // -------------------------------------
    let onPlay = jest.fn();
    let onPause = jest.fn();
    let onEnded = jest.fn();
    let onReady = jest.fn();
    let onError = jest.fn();
    let component;

    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Videobox
                content={{
                    url: "https://www.youtube.com/watch?v=Bwx5nqvSTZ0",
                }}
                withAnimation={{
                    animation: "zoom",
                    duration: 0.5,
                    delay: 0,
                }}
                isDisabled={false}
                isHidden={false}
                onEnded={onEnded}
                onPlay={onPlay}
                onPause={onPause}
                onReady={onReady}
                onError={onError}
            />
        );
    });

    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should rednder correctly when call onReady", () => {
        component = shallow(<Videobox
            onReady={onReady}
        />);
        component.find(ReactPlayer).simulate("ready");
    });
    it("should rednder correctly when call onError", () => {
        component = shallow(<Videobox
            onError={onError}
        />);
        component.find(ReactPlayer).simulate("error");
    });
    it("should rednder correctly when call onPlay", () => {
        component = shallow(<Videobox
            onPlay={onPlay}
        />);
        component.find(".react-player").simulate("play");
    });
    it("should rednder correctly when call onPause", () => {
        component = shallow(<Videobox
            onPause={onPause}
        />);
        component.find(ReactPlayer).simulate("pause");
    });
    it("should rednder correctly when call onEnded", () => {
        component = shallow(<Videobox
            onEnded={onEnded}
        />);
        component.find(".react-player").simulate("ended");
    });
    it("should render correctly when passed isHidden props as false", () => {
        component.setProps({ isHidden: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isHidden props as true", () => {
        component.setProps({ isHidden: true })
        expect(component.exists()).toBe(true);
    })

    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    })
});