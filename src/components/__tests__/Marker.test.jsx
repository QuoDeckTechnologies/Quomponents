//--------------------------------------
// Import from NPM
// -------------------------------------
import { shallow } from 'enzyme';

//--------------------------------------
// Import Components
// -------------------------------------
import Marker from '../Marker/Marker.react'
describe("Marker", () => {
    let component;
    beforeEach(() => {
        jest.resetAllMocks();
        component = shallow(
            <Marker
                content={{
                    inset: 1,
                    wrapper: "carnival"
                }}
                status="current"
                withAnimation={null}
                isDisabled={false}
                isHidden={false}
                onClick={() => { }}
            />
        );
    });
    it("should render correctly without throwing error", () => {
        expect(component.exists()).toBe(true);
    });
    it("should render correctly when passed status prop as complete", () => {
        component.setProps({ status: "complete" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed status prop as incomplete", () => {
        component.setProps({ status: "incomplete" })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly if pass imgae src", () => {
        let content = {
            wrapper: "carnival",
            customMarker: true,
        };
        let status = "current";
        component.setProps({ content: content, status: status });
        expect(component.find(".qui-marker-img").props().src).toBe('assets/courses/carnival/current.png');
    });
    it("should render correctly if pass imgae src", () => {
        let content = {
            wrapper: "carnival",
            customMarker: false,
        };
        let status = "current";
        component.setProps({ content: content, status: status });
        expect(component.find(".qui-marker-img").props().src).toBe('assets/images/configurable/wrapperIcons/current.png');
    });
    it("should render correctly when passed status prop as incomplete", () => {
        component.setProps({ status: "incomplete" })
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
    it("should render correctly when passed isDisabled props as false", () => {
        component.setProps({ isDisabled: false })
        expect(component.exists()).toBe(true);
    })
    it("should render correctly when passed isDisabled props as true", () => {
        component.setProps({ isDisabled: true })
        expect(component.exists()).toBe(true);
    })
});


